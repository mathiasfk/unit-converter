// Conversor de Medidas Não Convencionais
class UnitConverter {
    constructor() {
        this.currentDimension = 'comprimento';
        this.initializeElements();
        this.bindEvents();
        this.loadDimension('comprimento');
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
            this.updateUnitInfo();
        });

        this.toUnitSelect.addEventListener('change', () => {
            this.performConversion();
            this.updateUnitInfo();
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
        this.valueInput.value = '';
        
        // Atualizar informações
        this.updateUnitInfo();
    }

    createUnitOption(unitKey, unit) {
        const option = document.createElement('option');
        option.value = unitKey;
        option.textContent = `${unit.emoji} ${unit.name}`;
        return option;
    }

    setDefaultSelections(dimension) {
        // Definir seleções padrão interessantes para cada dimensão
        const defaults = {
            comprimento: { from: 'campos_futebol', to: 'elefantes' },
            peso: { from: 'carros', to: 'elefantes_peso' },
            altura: { from: 'torres_eiffel', to: 'pessoas_altura' }
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
        if (number >= 1000000) {
            return (number / 1000000).toFixed(2) + 'M';
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
        const fromUnit = conversion.fromUnit;
        const toUnit = conversion.toUnit;
        const result = conversion.value;

        const infoHtml = `
            <div class="conversion-info">
                <h4>💡 Conversão Realizada</h4>
                <p><strong>${inputValue} ${fromUnit.name}</strong> equivale a <strong>${this.formatNumber(result)} ${toUnit.name}</strong></p>
                <div class="unit-details">
                    <div class="unit-detail">
                        <span class="unit-emoji">${fromUnit.emoji}</span>
                        <span class="unit-description">${fromUnit.description}</span>
                    </div>
                    <div class="unit-detail">
                        <span class="unit-emoji">${toUnit.emoji}</span>
                        <span class="unit-description">${toUnit.description}</span>
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
        if (conversion.value > 1000) {
            funFacts.push(`Isso é muita coisa! São mais de ${Math.floor(conversion.value / 1000)} milhares de ${conversion.toUnit.name.toLowerCase()}!`);
        }

        if (conversion.value < 0.001) {
            funFacts.push(`Que pequeno! Menos de um milésimo de ${conversion.toUnit.name.toLowerCase()}!`);
        }

        // Comparações específicas interessantes
        if (this.currentDimension === 'comprimento') {
            if (toUnitKey === 'campos_futebol' && conversion.value >= 1) {
                funFacts.push(`🏟️ Isso daria para fazer ${Math.floor(conversion.value)} campo${conversion.value > 1 ? 's' : ''} de futebol!`);
            }
            if (fromUnitKey === 'elefantes' && inputValue >= 10) {
                funFacts.push(`🐘 Uma fila de ${inputValue} elefantes seria impressionante!`);
            }
        }

        if (this.currentDimension === 'peso') {
            if (toUnitKey === 'elefantes_peso' && conversion.value >= 1) {
                funFacts.push(`🐘 Isso pesa tanto quanto ${Math.floor(conversion.value)} elefante${conversion.value > 1 ? 's' : ''}!`);
            }
            if (fromUnitKey === 'baleias_peso' && inputValue >= 1) {
                funFacts.push(`🐋 Uma baleia azul é realmente gigantesca!`);
            }
        }

        if (this.currentDimension === 'altura') {
            if (toUnitKey === 'pessoas_altura' && conversion.value >= 100) {
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

        if (fromUnit && toUnit) {
            const infoHtml = `
                <div class="units-info">
                    <h4>Informações das Unidades</h4>
                    <div class="unit-info-grid">
                        <div class="unit-info-item">
                            <span class="unit-emoji">${fromUnit.emoji}</span>
                            <div>
                                <strong>${fromUnit.name}</strong>
                                <p>${fromUnit.description}</p>
                            </div>
                        </div>
                        <div class="conversion-divider"></div>
                        <div class="unit-info-item">
                            <span class="unit-emoji">${toUnit.emoji}</span>
                            <div>
                                <strong>${toUnit.name}</strong>
                                <p>${toUnit.description}</p>
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
        
        examples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'example-item';
            exampleDiv.textContent = example;
        this.examplesList.appendChild(exampleDiv);
        });
    }

    swapUnits() {
        // Guardar valores atuais
        const fromValue = this.fromUnitSelect.value;
        const toValue = this.toUnitSelect.value;
        const currentResult = this.resultDisplay.value;
        const currentInput = this.valueInput.value;

        // Inverter as unidades
        this.fromUnitSelect.value = toValue;
        this.toUnitSelect.value = fromValue;

        // Se houver um resultado válido, usá-lo como novo valor de entrada
        if (currentResult && currentResult !== '' && !isNaN(parseFloat(currentResult))) {
            this.valueInput.value = parseFloat(currentResult).toString();
        }

        // Atualizar informações e realizar nova conversão
        this.updateUnitInfo();
        this.performConversion();
    }
}

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new UnitConverter();
});

// Função para adicionar novas unidades facilmente (para extensibilidade)
function addCustomUnit(dimension, unitKey, unitData) {
    if (UNITS_DATA[dimension] && UNITS_DATA[dimension].units) {
        UNITS_DATA[dimension].units[unitKey] = unitData;
        console.log(`Nova unidade adicionada: ${unitData.name} na dimensão ${dimension}`);
    } else {
        console.error(`Dimensão ${dimension} não existe`);
    }
}

// Exemplo de uso da função de extensibilidade:
// addCustomUnit('comprimento', 'cachorros', {
//     name: 'Cachorros',
//     emoji: '🐕',
//     factor: 0.6, // 60cm
//     description: 'Um cachorro médio mede cerca de 60 centímetros'
// });