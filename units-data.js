// Dados das unidades não convencionais
// Todas as unidades são convertidas para a unidade base (metros para comprimento, quilos para peso)

const UNITS_DATA = {
    comprimento: {
        baseUnit: 'metros',
        symbol: '📏',
        units: {
            // Unidades convencionais (para referência)
            metros: {
                name: 'Metros',
                emoji: '📐',
                factor: 1,
                description: 'Unidade padrão de comprimento'
            },
            centimetros: {
                name: 'Centímetros',
                emoji: '📏',
                factor: 0.01,
                description: 'Centímetros tradicionais'
            },
            quilometros: {
                name: 'Quilômetros',
                emoji: '🛣️',
                factor: 1000,
                description: 'Para grandes distâncias'
            },
            
            // Unidades não convencionais - Animais
            elefantes: {
                name: 'Elefantes',
                emoji: '🐘',
                factor: 6.5, // comprimento médio de um elefante adulto
                description: 'Um elefante africano adulto mede cerca de 6,5 metros'
            },
            girafas: {
                name: 'Girafas',
                emoji: '🦒',
                factor: 5.5, // altura de uma girafa
                description: 'Uma girafa adulta mede cerca de 5,5 metros de altura'
            },
            baleias: {
                name: 'Baleias Azuis',
                emoji: '🐋',
                factor: 25, // comprimento de uma baleia azul
                description: 'Uma baleia azul adulta mede cerca de 25 metros'
            },
            formigas: {
                name: 'Formigas',
                emoji: '🐜',
                factor: 0.005, // 5mm
                description: 'Uma formiga comum mede cerca de 5 milímetros'
            },
            
            // Objetos do dia a dia
            campos_futebol: {
                name: 'Campos de Futebol',
                emoji: '⚽',
                factor: 105, // comprimento oficial de um campo de futebol
                description: 'Um campo de futebol oficial tem 105 metros de comprimento'
            },
            onibus: {
                name: 'Ônibus',
                emoji: '🚌',
                factor: 12, // comprimento de um ônibus urbano
                description: 'Um ônibus urbano típico mede cerca de 12 metros'
            },
            iphones: {
                name: 'iPhones',
                emoji: '📱',
                factor: 0.146, // iPhone 14 Pro
                description: 'Um iPhone 14 Pro mede cerca de 14,6 centímetros'
            },
            pizzas: {
                name: 'Pizzas',
                emoji: '🍕',
                factor: 0.35, // pizza grande
                description: 'Uma pizza grande tem cerca de 35 centímetros de diâmetro'
            },
            
            // Referências humanas
            pessoas: {
                name: 'Pessoas',
                emoji: '🧍',
                factor: 1.75, // altura média
                description: 'Altura média de uma pessoa adulta (1,75m)'
            },
            passadas: {
                name: 'Passadas',
                emoji: '👣',
                factor: 0.75, // passada média
                description: 'Uma passada média de adulto mede cerca de 75 centímetros'
            }
        },
        
        examples: [
            "Um campo de futebol tem o comprimento de 16,2 elefantes",
            "A altura de uma girafa equivale a 37,7 iPhones",
            "Uma baleia azul tem o comprimento de 2,4 campos de futebol"
        ]
    },

    peso: {
        baseUnit: 'quilogramas',
        symbol: '⚖️',
        units: {
            // Unidades convencionais
            quilogramas: {
                name: 'Quilogramas',
                emoji: '⚖️',
                factor: 1,
                description: 'Unidade padrão de peso'
            },
            gramas: {
                name: 'Gramas',
                emoji: '⚖️',
                factor: 0.001,
                description: 'Gramas tradicionais'
            },
            toneladas: {
                name: 'Toneladas',
                emoji: '🏋️',
                factor: 1000,
                description: 'Para pesos muito grandes'
            },
            
            // Unidades não convencionais - Animais
            elefantes_peso: {
                name: 'Elefantes',
                emoji: '🐘',
                factor: 6000, // peso médio de um elefante
                description: 'Um elefante africano adulto pesa cerca de 6 toneladas'
            },
            baleias_peso: {
                name: 'Baleias Azuis',
                emoji: '🐋',
                factor: 150000, // peso de uma baleia azul
                description: 'Uma baleia azul adulta pesa cerca de 150 toneladas'
            },
            cavalos: {
                name: 'Cavalos',
                emoji: '🐎',
                factor: 500, // peso médio de um cavalo
                description: 'Um cavalo adulto pesa cerca de 500 quilos'
            },
            gatos: {
                name: 'Gatos',
                emoji: '🐱',
                factor: 4.5, // peso médio de um gato
                description: 'Um gato doméstico adulto pesa cerca de 4,5 quilos'
            },
            
            // Objetos
            carros: {
                name: 'Carros',
                emoji: '🚗',
                factor: 1500, // peso médio de um carro
                description: 'Um carro popular pesa cerca de 1,5 toneladas'
            },
            smartphones: {
                name: 'Smartphones',
                emoji: '📱',
                factor: 0.2, // peso de um smartphone
                description: 'Um smartphone típico pesa cerca de 200 gramas'
            },
            sacos_arroz: {
                name: 'Sacos de Arroz',
                emoji: '🍚',
                factor: 5, // saco de 5kg
                description: 'Um saco de arroz comum pesa 5 quilos'
            },
            
            // Comida
            hamburguers: {
                name: 'Hambúrguers',
                emoji: '🍔',
                factor: 0.25, // hambúrguer médio
                description: 'Um hambúrguer médio pesa cerca de 250 gramas'
            },
            melancias: {
                name: 'Melancias',
                emoji: '🍉',
                factor: 3, // melancia média
                description: 'Uma melancia média pesa cerca de 3 quilos'
            },
            
            // Referências humanas
            bebes: {
                name: 'Bebês',
                emoji: '👶',
                factor: 3.5, // peso médio de um bebê
                description: 'Um bebê recém-nascido pesa cerca de 3,5 quilos'
            },
            pessoas_peso: {
                name: 'Pessoas',
                emoji: '🧍',
                factor: 70, // peso médio de uma pessoa
                description: 'Peso médio de uma pessoa adulta (70kg)'
            }
        },
        
        examples: [
            "Um carro pesa o equivalente a 4 cavalos",
            "Uma baleia azul pesa tanto quanto 25 elefantes",
            "Seu smartphone pesa o mesmo que 44 hamburguers"
        ]
    },

    altura: {
        baseUnit: 'metros',
        symbol: '📐',
        units: {
            // Unidades convencionais
            metros_altura: {
                name: 'Metros',
                emoji: '📐',
                factor: 1,
                description: 'Unidade padrão de altura'
            },
            centimetros_altura: {
                name: 'Centímetros',
                emoji: '📏',
                factor: 0.01,
                description: 'Centímetros tradicionais'
            },
            
            // Unidades não convencionais - Estruturas
            torres_eiffel: {
                name: 'Torres Eiffel',
                emoji: '🗼',
                factor: 324, // altura da Torre Eiffel
                description: 'A Torre Eiffel mede 324 metros de altura'
            },
            christ_redentor: {
                name: 'Cristo Redentor',
                emoji: '⛪',
                factor: 38, // altura do Cristo Redentor
                description: 'A estátua do Cristo Redentor mede 38 metros'
            },
            predios: {
                name: 'Andares de Prédio',
                emoji: '🏢',
                factor: 3, // altura média de um andar
                description: 'Um andar de prédio tem cerca de 3 metros de altura'
            },
            
            // Animais (altura/comprimento vertical)
            girafas_altura: {
                name: 'Girafas',
                emoji: '🦒',
                factor: 5.5, // altura de uma girafa
                description: 'Uma girafa adulta mede cerca de 5,5 metros de altura'
            },
            dinossauros: {
                name: 'T-Rex',
                emoji: '🦕',
                factor: 4, // altura de um T-Rex
                description: 'Um Tiranossauro Rex media cerca de 4 metros de altura'
            },
            
            // Objetos altos
            postes: {
                name: 'Postes de Luz',
                emoji: '🚥',
                factor: 8, // altura de um poste
                description: 'Um poste de luz urbano mede cerca de 8 metros'
            },
            arvores: {
                name: 'Árvores',
                emoji: '🌳',
                factor: 15, // altura média de uma árvore grande
                description: 'Uma árvore grande mede cerca de 15 metros'
            },
            
            // Referências humanas
            pessoas_altura: {
                name: 'Pessoas',
                emoji: '🧍',
                factor: 1.75, // altura média
                description: 'Altura média de uma pessoa adulta (1,75m)'
            },
            criancas: {
                name: 'Crianças',
                emoji: '🧒',
                factor: 1.2, // altura média de uma criança
                description: 'Altura média de uma criança de 8 anos (1,2m)'
            },
            
            // Objetos pequenos empilhados
            latas_refrigerante: {
                name: 'Latas de Refrigerante',
                emoji: '🥤',
                factor: 0.123, // altura de uma lata
                description: 'Uma lata de refrigerante mede 12,3 centímetros'
            },
            livros: {
                name: 'Livros',
                emoji: '📚',
                factor: 0.03, // espessura média de um livro
                description: 'Um livro tem cerca de 3 centímetros de espessura'
            }
        },
        
        examples: [
            "A Torre Eiffel tem a altura de 8,5 Cristo Redentores",
            "Um prédio de 10 andares equivale a 5,5 girafas",
            "Uma árvore grande tem a altura de 122 latas de refrigerante"
        ]
    }
};

// Função para obter todas as unidades de uma dimensão
function getUnitsForDimension(dimension) {
    return UNITS_DATA[dimension]?.units || {};
}

// Função para obter exemplos de uma dimensão
function getExamplesForDimension(dimension) {
    return UNITS_DATA[dimension]?.examples || [];
}

// Função para obter informações de uma unidade específica
function getUnitInfo(dimension, unitKey) {
    return UNITS_DATA[dimension]?.units[unitKey] || null;
}