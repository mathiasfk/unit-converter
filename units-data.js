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
                description: 'Unidade padrão de comprimento no sistema métrico'
            },
            centimetros: {
                name: 'Centímetros',
                emoji: '📏',
                factor: 0.01,
                description: 'Centímetros tradicionais (1/100 de metro)'
            },
            quilometros: {
                name: 'Quilômetros',
                emoji: '🛣️',
                factor: 1000,
                description: 'Unidade métrica para grandes distâncias (1000 m)'
            },
            milhas: {
                name: 'Milhas',
                emoji: '🛤️',
                factor: 1609.34,
                description: 'Unidade imperial para longas distâncias (1,6 km)'
            },
            polegadas: {
                name: 'Polegadas',
                emoji: '📏',
                factor: 0.0254,
                description: 'Unidade imperial tradicional'
            },
            pes: {
                name: 'Pés',
                emoji: '🦶',
                factor: 0.3048,
                description: 'Unidade imperial comum'
            },
            jardas: {
                name: 'Jardas',
                emoji: '🎯',
                factor: 0.9144,
                description: 'Unidade imperial usada em esportes'
            },
            polegadas: {
                name: 'Polegadas',
                emoji: '📏',
                factor: 0.0254,
                description: 'Unidade imperial tradicional'
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
            },
            anos_luz: {
                name: 'Anos-luz',
                emoji: '🌌',
                factor: 9.461e+15, // distância que a luz percorre em um ano
                description: 'A distância que a luz percorre em um ano (aprox. 9,461 trilhões de km)'
            },
            
            // Unidades não convencionais
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
            boeing_747: {
                name: 'Boeing 747',
                emoji: '✈️',
                factor: 70.6, // comprimento de um Boeing 747
                description: 'Um Boeing 747 mede cerca de 70,6 metros de comprimento'
            },
            cavalos: {
                name: 'Cavalos',
                emoji: '🐎',
                factor: 2.4, // comprimento médio de um cavalo
                description: 'Um cavalo adulto mede cerca de 2,4 metros de comprimento'
            },
            tubarao_azul: {
                name: 'Tubarão Azul',
                emoji: '🦈',
                factor: 3.8, // comprimento de um tubarão azul
                description: 'Um tubarão azul adulto mede cerca de 3,8 metros'
            },
            bananas: {
                name: 'Bananas',
                emoji: '🍌',
                factor: 0.18, // comprimento de uma banana
                description: 'Uma banana média mede cerca de 18 centímetros'
            },
            bacterias: {
                name: 'Bactérias',
                emoji: '🦠',
                factor: 0.000002, // 2 micrometros
                description: 'Uma bactéria comum mede cerca de 2 micrômetros'
            }
        },
        
        examples: [
            "Um campo de futebol tem o comprimento de 16,2 elefantes",
            "A altura de uma girafa equivale a 37,7 iPhones",
            "Uma baleia azul tem o comprimento de 2,4 campos de futebol",
            "Um Boeing 747 equivale a 392 bananas enfileiradas",
            "Uma bactéria é invisível a olho nu - são 875 milhões em 1 metro!",
            "Um tubarão azul tem quase o dobro do tamanho de um cavalo",
            "Para atravessar um campo de futebol, você daria 140 passadas",
            "Um ônibus urbano equivale a 66,7 iPhones enfileirados",
            "Uma girafa tem o comprimento de 30,6 pizzas",
            "Uma formiga é 36 vezes menor que uma banana"
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
            libras: {
                name: 'Libras',
                emoji: '🏋️',
                factor: 0.453592,
                description: 'Unidade imperial comum'
            },
            oncas: {
                name: 'Onças',
                emoji: '📦',
                factor: 0.0283495,
                description: 'Unidade imperial menor'
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
                emoji: '🧑',
                factor: 70, // peso médio de uma pessoa
                description: 'Peso médio de uma pessoa adulta (70kg)'
            },
            
            // Unidades não convencionais
            elefantes_peso: {
                name: 'Elefantes',
                emoji: '🐘',
                factor: 6000, // peso médio de um elefante
                description: 'Um elefante africano adulto pesa cerca de 6 toneladas'
            },
            mamutes: {
                name: 'Mamutes',
                emoji: '🦣',
                factor: 6400, // peso médio de um mamute
                description: 'Um mamute adulto pesava cerca de 6 toneladas'
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
            penas: {
                name: 'Penas',
                emoji: '🪶',
                factor: 0.000625, // peso de uma pena pequena
                description: 'Uma pena pequena de pássaro pesa cerca de 0,625 gramas'
            },
            kg_penas: {
                name: 'kg de Penas',
                emoji: '🪶',
                factor: 1, // 1 quilo é 1 quilo
                description: 'Um quilograma de penas - ocupa muito espaço mas pesa igual!'
            },
            kg_chumbo: {
                name: 'kg de Chumbo',
                emoji: '🟨',
                factor: 1, // 1 quilo é 1 quilo
                description: 'Um quilograma de chumbo - denso e compacto mas pesa igual!'
            }
        },
        
        examples: [
            "Um carro pesa o equivalente a 4 cavalos",
            "Uma baleia azul pesa tanto quanto 25 elefantes",
            "Uma pena sozinha pesa menos que um clipe de papel",
            "1kg de penas pesa EXATAMENTE o mesmo que 1kg de chumbo!",
            "Seu smartphone pesa o mesmo que 44 hambúrguers",
            "Um bebê recém-nascido pesa como 17.500 penas",
            "Um saco de arroz equivale ao peso de um gato gordo",
            "Um gato pesa tanto quanto 22,5 smartphones",
            "Para igualar o peso de um elefante, você precisaria de 1.333 gatos!"
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
            
            // Unidades não convencionais
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
            girafas_altura: {
                name: 'Girafas',
                emoji: '🦒',
                factor: 5.5, // altura de uma girafa
                description: 'Uma girafa adulta mede cerca de 5,5 metros de altura'
            },
            dinossauros: {
                name: 'T-Rex',
                emoji: '🦖',
                factor: 4, // altura de um T-Rex
                description: 'Um Tiranossauro Rex media cerca de 4 metros de altura'
            },
            braquiossauro: {
                name: 'Braquiossauro',
                emoji: '🦕',
                factor: 16, // altura de um braquiossauro
                description: 'Um Braquiossauro media cerca de 16 metros de altura'
            },
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
            "Uma árvore grande tem a altura de 122 latas de refrigerante",
            "Um Braquiossauro era 3 vezes mais alto que uma girafa",
            "Um poste de luz tem a altura de 4,6 pessoas empilhadas",
            "O Cristo Redentor equivale a quase 7 girafas",
            "Para alcançar 1 metro, você empilharia 33 livros",
            "Um T-Rex era mais alto que 2 pessoas empilhadas",
            "A Torre Eiffel é tão alta quanto 108 andares de prédio!"
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