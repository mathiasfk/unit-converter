const TRANSLATIONS = {
    units:{
        length:{
            meters: {
                name: "Metros",
                description: "Unidad estándar de longitud en el sistema métrico"
            },
            centimeters: {
                name: "Centímetros",
                description: "Centímetros tradicionales (1/100 de metro)"
            },
            kilometers: {
                name: "Kilómetros",
                description: "Unidad métrica para grandes distancias (1000 m)"
            },
            miles: {
                name: "Millas",
                description: "Unidad imperial para largas distancias (1,6 km)"
            },
            inches: {
                name: "Pulgadas",
                description: "Unidad imperial tradicional"
            },
            feet: {
                name: "Pies",
                description: "Unidad imperial común"
            },
            yards: {
                name: "Yardas",
                description: "Unidad imperial usada en deportes"
            },
            people: {
                name: "Personas",
                description: "Altura promedio de un adulto (1,75m)"
            },
            pace: {
                name: "Pasos",
                description: "Un paso promedio de adulto mide unos 75 centímetros"
            },
            lightyears: {
                name: "Años luz",
                description: "La distancia que la luz recorre en un año (aprox. 9,461 billones de km)"
            },
            elephants: {
                name: "Elefantes",
                description: "Un elefante africano adulto mide unos 6,5 metros"
            },
            giraffes: {
                name: "Jirafas",
                description: "Una jirafa adulta mide unos 5,5 metros de altura"
            },
            blue_whales: {
                name: "Ballenas Azules",
                description: "Una ballena azul adulta mide unos 25 metros"
            },
            ants: {
                name: "Hormigas",
                description: "Una hormiga común mide unos 5 milímetros"
            },
            football_fields: {
                name: "Campos de fútbol",
                description: "Un campo de fútbol oficial tiene 105 metros de largo"
            },
            bus: {
                name: "Autobús",
                description: "Un autobús urbano típico mide unos 12 metros"
            },
            iphones: {
                name: "iPhones",
                description: "Un iPhone 14 Pro mide unos 14,6 centímetros"
            },
            pizzas: {
                name: "Pizzas",
                description: "Una pizza grande tiene unos 35 centímetros de diámetro"
            },
            boeing_747: {
                name: "Boeing 747",
                description: "Un Boeing 747 mide unos 70,6 metros de largo"
            },
            horses: {
                name: "Caballos",
                description: "Un caballo adulto mide unos 2,4 metros de largo"
            },
            blue_sharks: {
                name: "Tiburón Azul",
                description: "Un tiburón azul adulto mide unos 3,8 metros"
            },
            banana: {
                name: "Bananas",
                description: "Una banana promedio mide unos 18 centímetros"
            },
            bacteria: {
                name: "Bacterias",
                description: "Una bacteria común mide unos 2 micrómetros"
            }
        },
        weight:{
            kilograms: {
                name: "Kilogramos",
                description: "Unidad estándar de peso"
            },
            grams: {
                name: "Gramos",
                description: "Gramos tradicionales"
            },
            tons: {
                name: "Toneladas",
                description: "Para pesos muy grandes"
            },
            pounds: {
                name: "Libras",
                description: "Unidad imperial común"
            },
            ounces: {
                name: "Onzas",
                description: "Unidad imperial menor"
            },
            babies: {
                name: "Bebés",
                description: "Un bebé recién nacido pesa unos 3,5 kg"
            },
            people: {
                name: "Personas",
                description: "Peso promedio de un adulto (70kg)"
            },
            elephants: {
                name: "Elefantes",
                description: "Un elefante africano adulto pesa unos 6 toneladas"
            },
            mammoths: {
                name: "Mamuts",
                description: "Un mamut adulto pesaba unos 6 toneladas"
            },
            blue_whales: {
                name: "Ballenas Azules",
                description: "Una ballena azul adulta pesa unos 150 toneladas"
            },
            horses: {
                name: "Caballos",
                description: "Un caballo adulto pesa unos 500 kg"
            },
            cats: {
                name: "Gatos",
                description: "Un gato doméstico adulto pesa unos 4,5 kg"
            },
            cars: {
                name: "Autos",
                description: "Un auto popular pesa unos 1,5 toneladas"
            },
            smartphones: {
                name: "Smartphones",
                description: "Un smartphone típico pesa unos 200 gramos"
            },
            rice_bags: {
                name: "Bolsas de arroz",
                description: "Una bolsa de arroz común pesa 5 kg"
            },
            hamburgers: {
                name: "Hamburguesas",
                description: "Una hamburguesa promedio pesa unos 250 gramos"
            },
            watermelons: {
                name: "Sandías",
                description: "Una sandía promedio pesa unos 3 kg"
            },
            feathers: {
                name: "Plumas",
                description: "Una pluma pequeña de pájaro pesa unos 0,625 gramos"
            },
            kilogram_feathers: {
                name: "kg de Plumas",
                description: "Un kilogramo de plumas - ocupa mucho espacio pero pesa igual!"
            },
            kilogram_lead: {
                name: "kg de Plomo",
                description: "Un kilogramo de plomo - denso y compacto pero pesa igual!"
            }
        },
        height:{
            meters: {
                name: "Metros",
                description: "Unidad estándar de altura"
            },
            centimeters: {
                name: "Centímetros",
                description: "Centímetros tradicionales"
            },
            people: {
                name: "Personas",
                description: "Altura promedio de un adulto (1,75m)"
            },
            children: {
                name: "Niños",
                description: "Altura promedio de un niño de 8 años (1,2m)"
            },
            eiffel_towers: {
                name: "Torres Eiffel",
                description: "La Torre Eiffel mide 324 metros de altura"
            },
            statues_liberty: {
                name: "Estatuas de la Libertad",
                description: "La Estatua de la Libertad mide 93 metros de altura"
            },
            christ_redeemers: {
                name: "Cristo Redentor",
                description: "La estatua del Cristo Redentor mide 38 metros"
            },
            building_floors: {
                name: "Pisos de edificio",
                description: "Un piso de edificio tiene unos 3 metros de altura"
            },
            giraffes: {
                name: "Jirafas",
                description: "Una jirafa adulta mide unos 5,5 metros de altura"
            },
            t_rexes: {
                name: "T-Rex",
                description: "Un Tyrannosaurus Rex medía unos 4 metros de altura"
            },
            brachiosauruses: {
                name: "Braquiosaurio",
                description: "Un Braquiosaurio medía unos 16 metros de altura"
            },
            light_poles: {
                name: "Postes de luz",
                description: "Un poste de luz urbano mide unos 8 metros"
            },
            trees: {
                name: "Árboles",
                description: "Un árbol grande mide unos 15 metros"
            },
            soda_cans: {
                name: "Latas de refresco",
                description: "Una lata de refresco mide 12,3 centímetros"
            },
            books: {
                name: "Libros",
                description: "Un libro tiene unos 3 centímetros de grosor"
            },
            pages: {
                name: "Páginas",
                description: "Una página de libro tiene unos 0,3 milímetros de grosor"
            }
        }
    },
    examples: {
        length: [
            "Un campo de fútbol tiene la longitud de 16,2 elefantes",
            "La altura de una jirafa equivale a 37,7 iPhones",
            "Una ballena azul tiene la longitud de 2,4 campos de fútbol",
            "Un Boeing 747 equivale a 392 bananas en fila",
            "Una bacteria es invisible a simple vista - ¡hay 875 millones en 1 metro!",
            "Un tiburón azul es casi el doble del tamaño de un caballo",
            "Para cruzar un campo de fútbol, darías 140 pasos",
            "Un autobús urbano equivale a 66,7 iPhones en fila",
            "Una jirafa tiene la longitud de 30,6 pizzas",
            "Una hormiga es 36 veces más pequeña que una banana"
        ],
        weight: [
            "Un auto pesa lo mismo que 4 caballos",
            "Una ballena azul pesa tanto como 25 elefantes",
            "Una sola pluma pesa menos que un clip de papel",
            "¡1kg de plumas pesa EXACTAMENTE lo mismo que 1kg de plomo!",
            "Tu smartphone pesa lo mismo que 44 hamburguesas",
            "Un bebé recién nacido pesa lo mismo que 17.500 plumas",
            "Una bolsa de arroz equivale al peso de un gato gordo",
            "Un gato pesa lo mismo que 22,5 smartphones",
            "¡Para igualar el peso de un elefante, necesitarías 1.333 gatos!"
        ],
        height: [
            "La Torre Eiffel tiene la altura de 8,5 Cristos Redentor",
            "Un edificio de 10 pisos equivale a 5,5 jirafas",
            "Un árbol grande tiene la altura de 122 latas de refresco",
            "Un Braquiosaurio era 3 veces más alto que una jirafa",
            "Un poste de luz tiene la altura de 4,6 personas apiladas",
            "El Cristo Redentor equivale a casi 7 jirafas",
            "Para alcanzar 1 metro, apilarías 33 libros",
            "Un T-Rex era más alto que 2 personas apiladas",
            "¡La Torre Eiffel es tan alta como 108 pisos de edificio!"
        ]
    },
    funFacts: {
        quadrillion: "¡Impresionante! Son más de {{count}} cuatrillones de {{unit}}!",
        trillion: "¡Wow! Son más de {{count}} trillones de {{unit}}!",
        billion: "¡Impresionante! Son más de {{count}} billones de {{unit}}!",
        million: "¡Eso es mucho! Son más de {{count}} millones de {{unit}}!",
        thousand: "¡Eso es bastante! Son más de {{count}} miles de {{unit}}!",
        lessThanThousandth: "¡Qué pequeño! Menos de una milésima de {{unit}}!",
        football_fields: "🏟️ ¡Eso daría para hacer {{count}} campo{{plural}} de fútbol!",
        elephants_row: "🐘 ¡Una fila de {{count}} elefantes sería impresionante!",
        elephants_weight: "🐘 ¡Eso pesa tanto como {{count}} elefante{{plural}}!",
        blue_whale: "🐋 ¡Una ballena azul es realmente gigantesca!",
        people_stack: "🧍 ¡Sería como apilar {{count}} personas!"
    }
}

function getExamplesForDimension(dimension) {
    return TRANSLATIONS.examples[dimension] || [];
}

function getUnitTranslation(dimension, unitKey) {
    return TRANSLATIONS.units[dimension]?.[unitKey] || { name: unitKey, description: "" };
}