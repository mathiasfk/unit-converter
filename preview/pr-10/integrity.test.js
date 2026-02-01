const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const repoRoot = path.resolve(__dirname);

const REQUIRED_DIMENSIONS = ['length', 'weight', 'height'];
const REQUIRED_FACT_KEYS = [
  'quadrillion',
  'trillion',
  'billion',
  'million',
  'thousand',
  'lessThanThousandth',
  'football_fields',
  'elephants_row',
  'elephants_weight',
  'blue_whale',
  'people_stack',
];

const REQUIRED_IDS = [
  'value-input',
  'from-unit',
  'to-unit',
  'result-display',
  'swap-units-btn',
  'info-display',
  'examples-list',
  'conversion-info-template',
  'units-info-template',
  'fun-facts-template',
  'example-item-template',
];

const LANGUAGE_FILES = [
  { lang: 'pt', filePath: path.join(repoRoot, 'pt', 'translations.js') },
  { lang: 'en', filePath: path.join(repoRoot, 'en', 'translations.js') },
  { lang: 'es', filePath: path.join(repoRoot, 'es', 'translations.js') },
  { lang: 'fr', filePath: path.join(repoRoot, 'fr', 'translations.js') },
  { lang: 'de', filePath: path.join(repoRoot, 'de', 'translations.js') },
];

const HTML_PAGES = [
  { lang: 'pt-BR', filePath: path.join(repoRoot, 'index.html') },
  { lang: 'en', filePath: path.join(repoRoot, 'en', 'index.html') },
  { lang: 'es', filePath: path.join(repoRoot, 'es', 'index.html') },
  { lang: 'fr', filePath: path.join(repoRoot, 'fr', 'index.html') },
  { lang: 'de', filePath: path.join(repoRoot, 'de', 'index.html') },
];

function loadExport(filePath, exportName) {
  const code = fs.readFileSync(filePath, 'utf8');
  const context = { console };
  vm.createContext(context);
  const wrapped = `${code}\n;globalThis.__exported = typeof ${exportName} !== 'undefined' ? ${exportName} : undefined;`;
  vm.runInContext(wrapped, context, { filename: filePath });
  return context.__exported;
}

function assertNonEmptyString(value, label) {
  assert.equal(typeof value, 'string', `${label} should be a string`);
  assert.ok(value.trim().length > 0, `${label} should be non-empty`);
}

function assertScriptReference(content, fileName, pagePath) {
  const pattern = new RegExp(`<script[^>]+src=["'][^"']*${fileName}["']`, 'i');
  assert.ok(
    pattern.test(content),
    `${pagePath} should include ${fileName} script tag`
  );
}

function assertStylesheetReference(content, fileName, pagePath) {
  const pattern = new RegExp(`<link[^>]+href=["'][^"']*${fileName}["']`, 'i');
  assert.ok(
    pattern.test(content),
    `${pagePath} should include ${fileName} stylesheet link`
  );
}

const unitsData = loadExport(path.join(repoRoot, 'units-data.js'), 'UNITS_DATA');

test('UNITS_DATA has expected structure and values', () => {
  assert.ok(unitsData && typeof unitsData === 'object', 'UNITS_DATA should be an object');
  const dimensions = Object.keys(unitsData).sort();
  assert.deepEqual(dimensions, [...REQUIRED_DIMENSIONS].sort());

  for (const dimension of REQUIRED_DIMENSIONS) {
    const dimensionData = unitsData[dimension];
    assert.ok(dimensionData, `Missing data for dimension ${dimension}`);
    assertNonEmptyString(dimensionData.baseUnit, `${dimension}.baseUnit`);
    const units = dimensionData.units;
    assert.ok(units && typeof units === 'object', `${dimension}.units should be an object`);

    const unitEntries = Object.entries(units);
    assert.ok(unitEntries.length > 0, `${dimension} should have at least one unit`);

    const hasBaseFactor = unitEntries.some(([, unit]) => unit?.factor === 1);
    assert.ok(hasBaseFactor, `${dimension} should include a factor of 1`);

    for (const [unitKey, unitData] of unitEntries) {
      assert.ok(unitData, `Missing unit data for ${dimension}.${unitKey}`);
      assertNonEmptyString(unitData.emoji, `${dimension}.${unitKey}.emoji`);
      assert.equal(
        Number.isFinite(unitData.factor),
        true,
        `${dimension}.${unitKey}.factor should be a finite number`
      );
      assert.ok(
        unitData.factor > 0,
        `${dimension}.${unitKey}.factor should be positive`
      );
    }
  }
});

test('Translations cover all units and examples', () => {
  for (const { lang, filePath } of LANGUAGE_FILES) {
    assert.ok(fs.existsSync(filePath), `Missing translations file for ${lang}`);
    const translations = loadExport(filePath, 'TRANSLATIONS');
    assert.ok(translations && typeof translations === 'object', `${lang} translations missing`);

    for (const dimension of REQUIRED_DIMENSIONS) {
      const units = unitsData[dimension].units;
      const translationUnits = translations.units?.[dimension];
      assert.ok(translationUnits, `${lang} missing units for ${dimension}`);

      for (const unitKey of Object.keys(units)) {
        const translation = translationUnits[unitKey];
        assert.ok(translation, `${lang} missing translation for ${dimension}.${unitKey}`);
        assertNonEmptyString(translation.name, `${lang} ${dimension}.${unitKey}.name`);
        assertNonEmptyString(
          translation.description,
          `${lang} ${dimension}.${unitKey}.description`
        );
      }

      const examples = translations.examples?.[dimension];
      assert.ok(Array.isArray(examples), `${lang} examples for ${dimension} should be array`);
      assert.ok(examples.length > 0, `${lang} examples for ${dimension} should not be empty`);
    }

    const funFacts = translations.funFacts;
    assert.ok(funFacts && typeof funFacts === 'object', `${lang} funFacts should be object`);
    for (const key of REQUIRED_FACT_KEYS) {
      assert.ok(funFacts[key], `${lang} funFacts missing ${key}`);
      assertNonEmptyString(funFacts[key], `${lang} funFacts.${key}`);
    }
  }
});

test('HTML pages include required elements and assets', () => {
  for (const { lang, filePath } of HTML_PAGES) {
    assert.ok(fs.existsSync(filePath), `Missing HTML page ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');

    const langMatch = content.match(/<html[^>]*lang=["']([^"']+)["']/i);
    assert.ok(langMatch, `${filePath} should declare html lang`);
    assert.equal(langMatch[1], lang, `${filePath} should have lang="${lang}"`);

    for (const id of REQUIRED_IDS) {
      assert.ok(content.includes(`id="${id}"`), `${filePath} should include id="${id}"`);
    }

    assert.ok(
      content.includes('data-dimension="length"'),
      `${filePath} should include length dimension button`
    );
    assert.ok(
      content.includes('data-dimension="weight"'),
      `${filePath} should include weight dimension button`
    );
    assert.ok(
      content.includes('data-dimension="height"'),
      `${filePath} should include height dimension button`
    );

    assertStylesheetReference(content, 'styles.css', filePath);
    assertScriptReference(content, 'units-data.js', filePath);
    assertScriptReference(content, 'script.js', filePath);
    assertScriptReference(content, 'translations.js', filePath);
  }
});
