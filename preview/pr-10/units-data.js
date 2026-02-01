// Dados das unidades não convencionais
// Todas as unidades são convertidas para a unidade base (metros para comprimento, quilos para peso)

const UNITS_DATA = {
    length: {
        baseUnit: 'metros',
        symbol: '📏',
        units: {
            // Unidades convencionais (para referência)
            meters: {
                emoji: '📐',
                factor: 1,
            },
            centimeters: {
                emoji: '📏',
                factor: 0.01,
            },
            kilometers: {
                emoji: '🛣️',
                factor: 1000,
            },
            miles: {
                emoji: '🛤️',
                factor: 1609.34,
            },
            inches: {
                emoji: '📏',
                factor: 0.0254,
            },
            feet: {
                emoji: '🦶',
                factor: 0.3048,
            },
            yards: {
                emoji: '🎯',
                factor: 0.9144,
            },

            // Referências humanas
            people: {
                emoji: '🧍',
                factor: 1.75, // altura média
            },
            pace: {
                emoji: '👣',
                factor: 0.75, // passada média
            },
            lightyears: {
                emoji: '🌌',
                factor: 9.461e+15, // distância que a luz percorre em um ano
            },
            
            // Unidades não convencionais
            elephants: {
                emoji: '🐘',
                factor: 6.5, // comprimento médio de um elefante adulto
            },
            giraffes: {
                emoji: '🦒',
                factor: 5.5, // altura de uma girafa
            },
            blue_whales: {
                emoji: '🐋',
                factor: 25, // comprimento de uma baleia azul
            },
            ants: {
                emoji: '🐜',
                factor: 0.005, // 5mm
            },
            football_fields: {
                emoji: '⚽',
                factor: 105, // comprimento oficial de um campo de futebol
            },
            bus: {
                emoji: '🚌',
                factor: 12, // comprimento de um ônibus urbano
            },
            iphones: {
                emoji: '📱',
                factor: 0.146, // iPhone 14 Pro
            },
            pizzas: {
                emoji: '🍕',
                factor: 0.35, // pizza grande
            },
            boeing_747: {
                emoji: '✈️',
                factor: 70.6, // comprimento de um Boeing 747
            },
            horses: {
                emoji: '🐎',
                factor: 2.4, // comprimento médio de um cavalo
            },
            blue_sharks: {
                emoji: '🦈',
                factor: 3.8, // comprimento de um tubarão azul
            },
            banana: {
                emoji: '🍌',
                factor: 0.18, // comprimento de uma banana
            },
            bacteria: {
                emoji: '🦠',
                factor: 0.000002, // 2 micrometros
            }
        }
    },

    weight: {
        baseUnit: 'quilogramas',
        symbol: '⚖️',
        units: {
            // Unidades convencionais
            kilograms: {
                emoji: '⚖️',
                factor: 1,
            },
            grams: {
                emoji: '⚖️',
                factor: 0.001,
            },
            tons: {
                emoji: '🏋️',
                factor: 1000,
            },
            pounds: {
                emoji: '🏋️',
                factor: 0.453592,
            },
            ounces: {
                emoji: '📦',
                factor: 0.0283495,
            },

            // Referências humanas
            babies: {
                emoji: '👶',
                factor: 3.5, // peso médio de um bebê
            },
            people: {
                emoji: '🧑',
                factor: 70, // peso médio de uma pessoa
            },
            
            // Unidades não convencionais
            elephants: {
                emoji: '🐘',
                factor: 6000, // peso médio de um elefante
            },
            mammoths: {
                emoji: '🦣',
                factor: 6400, // peso médio de um mamute
            },
            blue_whales: {
                emoji: '🐋',
                factor: 150000, // peso de uma baleia azul
            },
            horses: {
                emoji: '🐎',
                factor: 500, // peso médio de um cavalo
            },
            cats: {
                emoji: '🐱',
                factor: 4.5, // peso médio de um gato
            },
            cars: {
                emoji: '🚗',
                factor: 1500, // peso médio de um carro
            },
            smartphones: {
                emoji: '📱',
                factor: 0.2, // peso de um smartphone
            },
            rice_bags: {
                emoji: '🍚',
                factor: 5, // saco de 5kg
            },
            
            // Comida
            hamburgers: {
                emoji: '🍔',
                factor: 0.25, // hambúrguer médio
            },
            watermelons: {
                emoji: '🍉',
                factor: 3, // melancia média
            },
            feathers: {
                emoji: '🪶',
                factor: 0.000625, // peso de uma pena pequena
            },
            kilogram_feathers: {
                emoji: '🪶',
                factor: 1, // 1 quilo é 1 quilo
            },
            kilogram_lead: {
                emoji: '🟨',
                factor: 1, // 1 quilo é 1 quilo
            }
        }
    },

    height: {
        baseUnit: 'metros',
        symbol: '📐',
        units: {
            // Unidades convencionais
            meters: {
                emoji: '📐',
                factor: 1,
            },
            centimeters: {
                emoji: '📏',
                factor: 0.01,
            },

            // Referências humanas
            people: {
                emoji: '🧍',
                factor: 1.75, // altura média
            },
            children: {
                emoji: '🧒',
                factor: 1.2, // altura média de uma criança
            },
            
            // Unidades não convencionais
            eiffel_towers: {
                emoji: '🇫🇷',
                factor: 324, // altura da Torre Eiffel
            },
            statues_liberty: {
                emoji: '🗽',
                factor: 93, // altura da Estátua da Liberdade
            },
            christ_redeemers: {
                emoji: '🇧🇷',
                factor: 38, // altura do Cristo Redentor
            },
            building_floors: {
                emoji: '🏢',
                factor: 3, // altura média de um andar
            },
            giraffes: {
                emoji: '🦒',
                factor: 5.5, // altura de uma girafa
            },
            t_rexes: {
                emoji: '🦖',
                factor: 4, // altura de um T-Rex
            },
            brachiosauruses: {
                emoji: '🦕',
                factor: 16, // altura de um braquiossauro
            },
            light_poles: {
                emoji: '🚥',
                factor: 8, // altura de um poste
            },
            trees: {
                emoji: '🌳',
                factor: 15, // altura média de uma árvore grande
            },
            soda_cans: {
                emoji: '🥤',
                factor: 0.123, // altura de uma lata
            },
            books: {
                emoji: '📚',
                factor: 0.03, // espessura média de um livro
            },
            pages: {
                emoji: '📄',
                factor: 0.0003, // espessura média de uma página
            }
        }
    }
};

// Função para obter todas as unidades de uma dimensão
function getUnitsForDimension(dimension) {
    return UNITS_DATA[dimension]?.units || {};
}

// Função para obter informações de uma unidade específica
function getUnitInfo(dimension, unitKey) {
    return UNITS_DATA[dimension]?.units[unitKey] || null;
}