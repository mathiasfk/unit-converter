const TRANSLATIONS = {
    units:{
        length:{
            meters: {
                name: "Metros",
                description: "Unidade padrão de comprimento no sistema métrico"
            },
            centimeters: {
                name: "Centímetros",
                description: "Centímetros tradicionais (1/100 de metro)"
            },
            kilometers: {
                name: "Quilômetros",
                description: "Unidade métrica para grandes distâncias (1000 m)"
            },
            miles: {
                name: "Milhas",
                description: "Unidade imperial para longas distâncias (1,6 km)"
            },
            inches: {
                name: "Polegadas",
                description: "Unidade imperial tradicional"
            },
            feet: {
                name: "Pés",
                description: "Unidade imperial comum"
            },
            yards: {
                name: "Jardas",
                description: "Unidade imperial usada em esportes"
            },
            people: {
                name: "Pessoas",
                description: "Altura média de uma pessoa adulta (1,75m)"
            },
            pace: {
                name: "Passadas",
                description: "Uma passada média de adulto mede cerca de 75 centímetros"
            },
            lightyears: {
                name: "Anos-luz",
                description: "A distância que a luz percorre em um ano (aprox. 9,461 trilhões de km)"
            },
            elephants: {
                name: "Elefantes",
                description: "Um elefante africano adulto mede cerca de 6,5 metros"
            },
            giraffes: {
                name: "Girafas",
                description: "Uma girafa adulta mede cerca de 5,5 metros de altura"
            },
            blue_whales: {
                name: "Baleias Azuis",
                description: "Uma baleia azul adulta mede cerca de 25 metros"
            },
            ants: {
                name: "Formigas",
                description: "Uma formiga comum mede cerca de 5 milímetros"
            },
            football_fields: {
                name: "Campos de Futebol",
                description: "Um campo de futebol oficial tem 105 metros de comprimento"
            },
            bus: {
                name: "Ônibus",
                description: "Um ônibus urbano típico mede cerca de 12 metros"
            },
            iphones: {
                name: "iPhones",
                description: "Um iPhone 14 Pro mede cerca de 14,6 centímetros"
            },
            pizzas: {
                name: "Pizzas",
                description: "Uma pizza grande tem cerca de 35 centímetros de diâmetro"
            },
            boeing_747: {
                name: "Boeing 747",
                description: "Um Boeing 747 mede cerca de 70,6 metros de comprimento"
            },
            horses: {
                name: "Cavalos",
                description: "Um cavalo adulto mede cerca de 2,4 metros de comprimento"
            },
            blue_sharks: {
                name: "Tubarão Azul",
                description: "Um tubarão azul adulto mede cerca de 3,8 metros"
            },
            banana: {
                name: "Bananas",
                description: "Uma banana média mede cerca de 18 centímetros"
            },
            bacteria: {
                name: "Bactérias",
                description: "Uma bactéria comum mede cerca de 2 micrômetros"
            }
        },
        weight:{
            kilograms: {
                name: "Quilogramas",
                description: "Unidade padrão de peso"
            },
            grams: {
                name: "Gramas",
                description: "Gramas tradicionais"
            },
            tons: {
                name: "Toneladas",
                description: "Para pesos muito grandes"
            },
            pounds: {
                name: "Libras",
                description: "Unidade imperial comum"
            },
            ounces: {
                name: "Onças",
                description: "Unidade imperial menor"
            },
            babies: {
                name: "Bebês",
                description: "Um bebê recém-nascido pesa cerca de 3,5 quilos"
            },
            people: {
                name: "Pessoas",
                description: "Peso médio de uma pessoa adulta (70kg)"
            },
            elephants: {
                name: "Elefantes",
                description: "Um elefante africano adulto pesa cerca de 6 toneladas"
            },
            mammoths: {
                name: "Mamutes",
                description: "Um mamute adulto pesava cerca de 6 toneladas"
            },
            blue_whales: {
                name: "Baleias Azuis",
                description: "Uma baleia azul adulta pesa cerca de 150 toneladas"
            },
            horses: {
                name: "Cavalos",
                description: "Um cavalo adulto pesa cerca de 500 quilos"
            },
            cats: {
                name: "Gatos",
                description: "Um gato doméstico adulto pesa cerca de 4,5 quilos"
            },
            cars: {
                name: "Carros",
                description: "Um carro popular pesa cerca de 1,5 toneladas"
            },
            smartphones: {
                name: "Smartphones",
                description: "Um smartphone típico pesa cerca de 200 gramas"
            },
            rice_bags: {
                name: "Sacos de Arroz",
                description: "Um saco de arroz comum pesa 5 quilos"
            },
            hamburgers: {
                name: "Hambúrguers",
                description: "Um hambúrguer médio pesa cerca de 250 gramas"
            },
            watermelons: {
                name: "Melancias",
                description: "Uma melancia média pesa cerca de 3 quilos"
            },
            feathers: {
                name: "Penas",
                description: "Uma pena pequena de pássaro pesa cerca de 0,625 gramas"
            },
            kilogram_feathers: {
                name: "kg de Penas",
                description: "Um quilograma de penas - ocupa muito espaço mas pesa igual!"
            },
            kilogram_lead: {
                name: "kg de Chumbo",
                description: "Um quilograma de chumbo - denso e compacto mas pesa igual!"
            }
        },
        height:{
            meters: {
                name: "Metros",
                description: "Unidade padrão de altura"
            },
            centimeters: {
                name: "Centímetros",
                description: "Centímetros tradicionais"
            },
            people: {
                name: "Pessoas",
                description: "Altura média de uma pessoa adulta (1,75m)"
            },
            children: {
                name: "Crianças",
                description: "Altura média de uma criança de 8 anos (1,2m)"
            },
            eiffel_towers: {
                name: "Torres Eiffel",
                description: "A Torre Eiffel mede 324 metros de altura"
            },
            christ_redeemers: {
                name: "Cristo Redentor",
                description: "A estátua do Cristo Redentor mede 38 metros"
            },
            building_floors: {
                name: "Andares de Prédio",
                description: "Um andar de prédio tem cerca de 3 metros de altura"
            },
            giraffes: {
                name: "Girafas",
                description: "Uma girafa adulta mede cerca de 5,5 metros de altura"
            },
            t_rexes: {
                name: "T-Rex",
                description: "Um Tiranossauro Rex media cerca de 4 metros de altura"
            },
            brachiosauruses: {
                name: "Braquiossauro",
                description: "Um Braquiossauro media cerca de 16 metros de altura"
            },
            light_poles: {
                name: "Postes de Luz",
                description: "Um poste de luz urbano mede cerca de 8 metros"
            },
            trees: {
                name: "Árvores",
                description: "Uma árvore grande mede cerca de 15 metros"
            },
            soda_cans: {
                name: "Latas de Refrigerante",
                description: "Uma lata de refrigerante mede 12,3 centímetros"
            },
            books: {
                name: "Livros",
                description: "Um livro tem cerca de 3 centímetros de espessura"
            },
            pages: {
                name: "Páginas",
                description: "Uma página de livro tem cerca de 0,3 milímetros de espessura"
            }
        }
    },
    examples: {
        length: [
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
        ],
        weight: [
            "Um carro pesa o equivalente a 4 cavalos",
            "Uma baleia azul pesa tanto quanto 25 elefantes",
            "Uma pena sozinha pesa menos que um clipe de papel",
            "1kg de penas pesa EXATAMENTE o mesmo que 1kg de chumbo!",
            "Seu smartphone pesa o mesmo que 44 hambúrguers",
            "Um bebê recém-nascido pesa como 17.500 penas",
            "Um saco de arroz equivale ao peso de um gato gordo",
            "Um gato pesa tanto quanto 22,5 smartphones",
            "Para igualar o peso de um elefante, você precisaria de 1.333 gatos!"
        ],
        height: [
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
    },
    funFacts: {
        quadrillion: "Impressionante! São mais de {{count}} quadrilhões de {{unit}}!",
        trillion: "Uau! São mais de {{count}} trilhões de {{unit}}!",
        billion: "Impressionante! São mais de {{count}} bilhões de {{unit}}!",
        million: "Isso é muita coisa! São mais de {{count}} milhões de {{unit}}!",
        thousand: "Isso é bastante! São mais de {{count}} milhares de {{unit}}!",
        lessThanThousandth: "Que pequeno! Menos de um milésimo de {{unit}}!",
        football_fields: "🏟️ Isso daria para fazer {{count}} campo{{plural}} de futebol!",
        elephants_row: "🐘 Uma fila de {{count}} elefantes seria impressionante!",
        elephants_weight: "🐘 Isso pesa tanto quanto {{count}} elefante{{plural}}!",
        blue_whale: "🐋 Uma baleia azul é realmente gigantesca!",
        people_stack: "🧍 Seria como empilhar {{count}} pessoas!"
    }
}

function getExamplesForDimension(dimension) {
    return TRANSLATIONS.examples[dimension] || [];
}

function getUnitTranslation(dimension, unitKey) {
    return TRANSLATIONS.units[dimension]?.[unitKey] || { name: unitKey, description: "" };
}