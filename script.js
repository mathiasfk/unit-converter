// Conversor de Medidas Não Convencionais
class UnitConverter {
    constructor() {
        this.currentDimension = 'length';
        this.currentLanguage = 'pt'; // Padrão para português
        this.initializeElements();
        this.bindEvents();
        this.loadDimension('length');
    }

    initializeElements() {
        // Elementos da interface
        this.dimensionButtons = document.querySelectorAll('.dimension-btn');
        this.valueInput = document.getElementById('value-input');
        this.fromUnitSelect = document.getElementById('from-unit');
        this.toUnitSelect = document.getElementById('to-unit');
        this.resultDisplay = document.getElementById('result-display');
        this.swapUnitsButton = document.getElementById('swap-units-btn');
        this.infoDisplay = document.getElementById('info-display');
        this.examplesList = document.getElementById('examples-list');
    }

    bindEvents() {
        // Event listeners para botões de dimensão
        this.dimensionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const dimension = e.target.dataset.dimension;
                this.switchDimension(dimension);
            });
        });

        // Conversão automática quando valores mudam
        this.valueInput.addEventListener('input', () => {
            this.performConversion();
        });

        this.fromUnitSelect.addEventListener('change', () => {
            this.performConversion();
        });

        this.toUnitSelect.addEventListener('change', () => {
            this.performConversion();
        });

        // Event listener para inversão de unidades
        this.swapUnitsButton.addEventListener('click', () => {
            this.swapUnits();
        });

    }

    switchDimension(dimension) {
        // Atualizar botão ativo
        this.dimensionButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.dimension === dimension) {
                btn.classList.add('active');
            }
        });

        this.currentDimension = dimension;
        this.loadDimension(dimension);
    }

    loadDimension(dimension) {
        const units = getUnitsForDimension(dimension);
        
        // Limpar selects
        this.fromUnitSelect.innerHTML = '';
        this.toUnitSelect.innerHTML = '';
        
        // Adicionar opções aos selects
        Object.keys(units).forEach(unitKey => {
            const unit = units[unitKey];
            const option1 = this.createUnitOption(unitKey, unit);
            const option2 = this.createUnitOption(unitKey, unit);
            
            this.fromUnitSelect.appendChild(option1);
            this.toUnitSelect.appendChild(option2);
        });

        // Definir valores padrão interessantes
        this.setDefaultSelections(dimension);
        
        // Carregar exemplos
        this.loadExamples(dimension);
        
        // Limpar resultado
        this.resultDisplay.value = '';
        this.valueInput.value = 1;
        
        // Atualizar informações
        this.performConversion();
    }

    createUnitOption(unitKey, unit) {
        // Usar tradução se disponível
        const translation = getUnitTranslation(this.currentDimension, unitKey);
        const name = translation?.name || unit.name;
        const option = document.createElement('option');
        option.value = unitKey;
        option.textContent = `${unit.emoji} ${name}`;
        return option;
    }

    setDefaultSelections(dimension) {
        // Definir seleções padrão interessantes para cada dimensão
        const defaults = {
            length: { from: 'football_fields', to: 'elephants' },
            weight: { from: 'cars', to: 'elephants' },
            height: { from: 'eiffel_towers', to: 'people' }
        };

        const defaultPair = defaults[dimension];
        if (defaultPair) {
            this.fromUnitSelect.value = defaultPair.from;
            this.toUnitSelect.value = defaultPair.to;
        }
    }

    performConversion() {
        const value = parseFloat(this.valueInput.value);
        const fromUnit = this.fromUnitSelect.value;
        const toUnit = this.toUnitSelect.value;

        if (!value || !fromUnit || !toUnit || value <= 0) {
            this.resultDisplay.value = '';
            // Mostrar informações das unidades quando não há valor
            this.updateUnitInfo();
            return;
        }

        const result = this.convert(value, fromUnit, toUnit, this.currentDimension);
        this.displayResult(result, value, fromUnit, toUnit);
    }

    convert(value, fromUnit, toUnit, dimension) {
        const fromUnitData = getUnitInfo(dimension, fromUnit);
        const toUnitData = getUnitInfo(dimension, toUnit);

        if (!fromUnitData || !toUnitData) {
            return null;
        }

        // Converter para unidade base
        const baseValue = value * fromUnitData.factor;
        
        // Converter da unidade base para a unidade de destino
        const result = baseValue / toUnitData.factor;

        return {
            value: result,
            fromUnit: fromUnitData,
            toUnit: toUnitData
        };
    }

    displayResult(conversion, inputValue, fromUnitKey, toUnitKey) {
        if (!conversion) {
            this.resultDisplay.value = 'Erro na conversão';
            return;
        }

        const formattedResult = this.formatNumber(conversion.value);
        this.resultDisplay.value = formattedResult;

        // Atualizar informações na tela
        this.updateConversionInfo(inputValue, conversion, fromUnitKey, toUnitKey);
    }

    formatNumber(number) {
        // Formatar números para exibição
        if (number >= 1_000_000_000) {
            return (number / 1_000_000_000).toFixed(2) + 'B';
        } else if (number >= 1_000_000) {
            return (number / 1_000_000).toFixed(2) + 'M';
        } else if (number >= 1000) {
            return (number / 1000).toFixed(2) + 'k';
        } else if (number >= 1) {
            return number.toFixed(2);
        } else if (number >= 0.01) {
            return number.toFixed(3);
        } else {
            return number.toExponential(2);
        }
    }

    updateConversionInfo(inputValue, conversion, fromUnitKey, toUnitKey) {
        // Usar tradução se disponível
        const fromTranslation = getUnitTranslation(this.currentDimension, fromUnitKey);
        const toTranslation = getUnitTranslation(this.currentDimension, toUnitKey);
        const fromName = fromTranslation?.name || "";
        const fromDescription = fromTranslation?.description || "";
        const toName = toTranslation?.name || "";
        const toDescription = toTranslation?.description || "";
        const result = conversion.value;

        const infoHtml = `
            <div class="conversion-info">
                <p><strong>${inputValue} ${fromName}</strong> equivale a <strong>${this.formatNumber(result)} ${toName}</strong></p>
                <div class="unit-details">
                    <div class="unit-detail">
                        <span class="unit-emoji">${conversion.fromUnit.emoji}</span>
                        <span class="unit-description">${fromDescription}</span>
                    </div>
                    <div class="unit-detail">
                        <span class="unit-emoji">${conversion.toUnit.emoji}</span>
                        <span class="unit-description">${toDescription}</span>
                    </div>
                </div>
                ${this.generateFunFacts(inputValue, conversion, fromUnitKey, toUnitKey)}
            </div>
        `;

        this.infoDisplay.innerHTML = infoHtml;
    }

    generateFunFacts(inputValue, conversion, fromUnitKey, toUnitKey) {
        const funFacts = [];

        // Gerar fatos curiosos baseados na conversão
        if (conversion.value > 1_000_000_000_000_000) {
            funFacts.push(`Impressionante! São mais de ${Math.floor(conversion.value / 1_000_000_000_000_000)} quadrilhões de ${conversion.toUnit.name.toLowerCase()}!`);
        }
        
        if (conversion.value > 1_000_000_000_000) {
            funFacts.push(`Uau! São mais de ${Math.floor(conversion.value / 1_000_000_000_000)} trilhões de ${conversion.toUnit.name.toLowerCase()}!`);
        }
        
        if (conversion.value > 1_000_000_000) {
            funFacts.push(`Impressionante! São mais de ${Math.floor(conversion.value / 1_000_000_000)} bilhões de ${conversion.toUnit.name.toLowerCase()}!`);
        }

        if (conversion.value > 1_000_000) {
            funFacts.push(`Isso é muita coisa! São mais de ${Math.floor(conversion.value / 1_000_000)} milhões de ${conversion.toUnit.name.toLowerCase()}!`);
        }

        if (conversion.value > 1000) {
            funFacts.push(`Isso é bastante! São mais de ${Math.floor(conversion.value / 1000)} milhares de ${conversion.toUnit.name.toLowerCase()}!`);
        }

        if (conversion.value < 0.001) {
            funFacts.push(`Que pequeno! Menos de um milésimo de ${conversion.toUnit.name.toLowerCase()}!`);
        }

        // Comparações específicas interessantes
        if (this.currentDimension === 'length') {
            if (toUnitKey === 'football_fields' && conversion.value >= 1) {
                funFacts.push(`🏟️ Isso daria para fazer ${Math.floor(conversion.value)} campo${conversion.value > 1 ? 's' : ''} de futebol!`);
            }
            if (fromUnitKey === 'elephants' && inputValue >= 10) {
                funFacts.push(`🐘 Uma fila de ${inputValue} elefantes seria impressionante!`);
            }
        }

        if (this.currentDimension === 'weight') {
            if (toUnitKey === 'elephants' && conversion.value >= 1) {
                funFacts.push(`🐘 Isso pesa tanto quanto ${Math.floor(conversion.value)} elefante${conversion.value > 1 ? 's' : ''}!`);
            }
            if (fromUnitKey === 'blue_whales' && inputValue >= 1) {
                funFacts.push(`🐋 Uma baleia azul é realmente gigantesca!`);
            }
        }

        if (this.currentDimension === 'height') {
            if (toUnitKey === 'people' && conversion.value >= 100) {
                funFacts.push(`🧍 Seria como empilhar ${Math.floor(conversion.value)} pessoas!`);
            }
        }

        if (funFacts.length === 0) {
            return '';
        }

        return `
            <div class="fun-facts">
                <h5>🎉 Fato Curioso:</h5>
                <p>${funFacts[0]}</p>
            </div>
        `;
    }

    updateUnitInfo() {
        if (!this.fromUnitSelect.value || !this.toUnitSelect.value) {
            return;
        }

        const fromUnit = getUnitInfo(this.currentDimension, this.fromUnitSelect.value);
        const toUnit = getUnitInfo(this.currentDimension, this.toUnitSelect.value);
        const fromTranslation = TRANSLATIONS?.units?.[this.currentDimension]?.[this.fromUnitSelect.value];
        const toTranslation = TRANSLATIONS?.units?.[this.currentDimension]?.[this.toUnitSelect.value];
        const fromName = fromTranslation?.name || fromUnit.name;
        const fromDescription = fromTranslation?.description || fromUnit.description;
        const toName = toTranslation?.name || toUnit.name;
        const toDescription = toTranslation?.description || toUnit.description;

        if (fromUnit && toUnit) {
            const infoHtml = `
                <div class="units-info">
                    <h4>Informações das Unidades</h4>
                    <div class="unit-info-grid">
                        <div class="unit-info-item">
                            <span class="unit-emoji">${fromUnit.emoji}</span>
                            <div>
                                <strong>${fromName}</strong>
                                <p>${fromDescription}</p>
                            </div>
                        </div>
                        <div class="conversion-divider"></div>
                        <div class="unit-info-item">
                            <span class="unit-emoji">${toUnit.emoji}</span>
                            <div>
                                <strong>${toName}</strong>
                                <p>${toDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            this.infoDisplay.innerHTML = infoHtml;
        }
    }

    loadExamples(dimension) {
        const examples = getExamplesForDimension(dimension);
        
        this.examplesList.innerHTML = '';
        
        // Selecionar 3 exemplos aleatórios
        const randomExamples = this.getRandomExamples(examples, 3);
        
        randomExamples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'example-item';
            exampleDiv.textContent = example;
            this.examplesList.appendChild(exampleDiv);
        });
    }

    getRandomExamples(examples, count) {
        // Se temos menos exemplos que o solicitado, retorna todos
        if (examples.length <= count) {
            return [...examples];
        }
        
        // Criar uma cópia do array e embaralhar
        const shuffled = [...examples].sort(() => Math.random() - 0.5);
        
        // Retornar apenas a quantidade solicitada
        return shuffled.slice(0, count);
    }

    swapUnits() {
        // Guardar valores atuais das unidades
        const fromValue = this.fromUnitSelect.value;
        const toValue = this.toUnitSelect.value;
        
        // Inverter apenas as unidades (manter o valor de entrada fixo)
        this.fromUnitSelect.value = toValue;
        this.toUnitSelect.value = fromValue;

        // Realizar nova conversão com o valor atual mantido
        this.performConversion();
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new UnitConverter();
});