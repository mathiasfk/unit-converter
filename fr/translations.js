const TRANSLATIONS = {
    units:{
        length:{
            meters: {
                name: "Mètres",
                description: "Unité standard de longueur dans le système métrique"
            },
            centimeters: {
                name: "Centimètres",
                description: "Centimètres traditionnels (1/100 de mètre)"
            },
            kilometers: {
                name: "Kilomètres",
                description: "Unité métrique pour les longues distances (1000 m)"
            },
            miles: {
                name: "Miles",
                description: "Unité impériale pour les longues distances (1,6 km)"
            },
            inches: {
                name: "Pouces",
                description: "Unité impériale traditionnelle"
            },
            feet: {
                name: "Pieds",
                description: "Unité impériale courante"
            },
            yards: {
                name: "Yards",
                description: "Unité impériale utilisée dans le sport"
            },
            people: {
                name: "Personnes",
                description: "Taille moyenne d'un adulte (1,75m)"
            },
            pace: {
                name: "Pas",
                description: "Un pas moyen d'adulte mesure environ 75 centimètres"
            },
            lightyears: {
                name: "Années-lumière",
                description: "La distance parcourue par la lumière en un an (env. 9,461 billions de km)"
            },
            elephants: {
                name: "Éléphants",
                description: "Un éléphant africain adulte mesure environ 6,5 mètres"
            },
            giraffes: {
                name: "Girafes",
                description: "Une girafe adulte mesure environ 5,5 mètres de haut"
            },
            blue_whales: {
                name: "Baleines bleues",
                description: "Une baleine bleue adulte mesure environ 25 mètres"
            },
            ants: {
                name: "Fourmis",
                description: "Une fourmi commune mesure environ 5 millimètres"
            },
            football_fields: {
                name: "Terrains de football",
                description: "Un terrain de football officiel mesure 105 mètres de long"
            },
            bus: {
                name: "Bus",
                description: "Un bus urbain typique mesure environ 12 mètres"
            },
            iphones: {
                name: "iPhones",
                description: "Un iPhone 14 Pro mesure environ 14,6 centimètres"
            },
            pizzas: {
                name: "Pizzas",
                description: "Une grande pizza mesure environ 35 centimètres de diamètre"
            },
            boeing_747: {
                name: "Boeing 747",
                description: "Un Boeing 747 mesure environ 70,6 mètres de long"
            },
            horses: {
                name: "Chevaux",
                description: "Un cheval adulte mesure environ 2,4 mètres de long"
            },
            blue_sharks: {
                name: "Requin bleu",
                description: "Un requin bleu adulte mesure environ 3,8 mètres"
            },
            banana: {
                name: "Bananes",
                description: "Une banane moyenne mesure environ 18 centimètres"
            },
            bacteria: {
                name: "Bactéries",
                description: "Une bactérie commune mesure environ 2 micromètres"
            }
        },
        weight:{
            kilograms: {
                name: "Kilogrammes",
                description: "Unité standard de poids"
            },
            grams: {
                name: "Grammes",
                description: "Grammes traditionnels"
            },
            tons: {
                name: "Tonnes",
                description: "Pour des poids très importants"
            },
            pounds: {
                name: "Livres",
                description: "Unité impériale courante"
            },
            ounces: {
                name: "Onces",
                description: "Petite unité impériale"
            },
            babies: {
                name: "Bébés",
                description: "Un bébé nouveau-né pèse environ 3,5 kg"
            },
            people: {
                name: "Personnes",
                description: "Poids moyen d'un adulte (70kg)"
            },
            elephants: {
                name: "Éléphants",
                description: "Un éléphant africain adulte pèse environ 6 tonnes"
            },
            mammoths: {
                name: "Mammouths",
                description: "Un mammouth adulte pesait environ 6 tonnes"
            },
            blue_whales: {
                name: "Baleines bleues",
                description: "Une baleine bleue adulte pèse environ 150 tonnes"
            },
            horses: {
                name: "Chevaux",
                description: "Un cheval adulte pèse environ 500 kg"
            },
            cats: {
                name: "Chats",
                description: "Un chat domestique adulte pèse environ 4,5 kg"
            },
            cars: {
                name: "Voitures",
                description: "Une voiture populaire pèse environ 1,5 tonne"
            },
            smartphones: {
                name: "Smartphones",
                description: "Un smartphone typique pèse environ 200 grammes"
            },
            rice_bags: {
                name: "Sacs de riz",
                description: "Un sac de riz courant pèse 5 kg"
            },
            hamburgers: {
                name: "Hamburgers",
                description: "Un hamburger moyen pèse environ 250 grammes"
            },
            watermelons: {
                name: "Pastèques",
                description: "Une pastèque moyenne pèse environ 3 kg"
            },
            feathers: {
                name: "Plumes",
                description: "Une petite plume d'oiseau pèse environ 0,625 gramme"
            },
            kilogram_feathers: {
                name: "kg de Plumes",
                description: "Un kilogramme de plumes - prend beaucoup de place mais pèse pareil !"
            },
            kilogram_lead: {
                name: "kg de Plomb",
                description: "Un kilogramme de plomb - dense et compact mais pèse pareil !"
            }
        },
        height:{
            meters: {
                name: "Mètres",
                description: "Unité standard de hauteur"
            },
            centimeters: {
                name: "Centimètres",
                description: "Centimètres traditionnels"
            },
            people: {
                name: "Personnes",
                description: "Taille moyenne d'un adulte (1,75m)"
            },
            children: {
                name: "Enfants",
                description: "Taille moyenne d'un enfant de 8 ans (1,2m)"
            },
            eiffel_towers: {
                name: "Tours Eiffel",
                description: "La Tour Eiffel mesure 324 mètres de haut"
            },
            christ_redeemers: {
                name: "Christ Rédempteur",
                description: "La statue du Christ Rédempteur mesure 38 mètres"
            },
            building_floors: {
                name: "Étages d'immeuble",
                description: "Un étage d'immeuble mesure environ 3 mètres de haut"
            },
            giraffes: {
                name: "Girafes",
                description: "Une girafe adulte mesure environ 5,5 mètres de haut"
            },
            t_rexes: {
                name: "T-Rex",
                description: "Un Tyrannosaurus Rex mesurait environ 4 mètres de haut"
            },
            brachiosauruses: {
                name: "Brachiosaure",
                description: "Un Brachiosaure mesurait environ 16 mètres de haut"
            },
            light_poles: {
                name: "Poteaux d'éclairage",
                description: "Un poteau d'éclairage urbain mesure environ 8 mètres"
            },
            trees: {
                name: "Arbres",
                description: "Un grand arbre mesure environ 15 mètres"
            },
            soda_cans: {
                name: "Canettes de soda",
                description: "Une canette de soda mesure 12,3 centimètres de haut"
            },
            books: {
                name: "Livres",
                description: "Un livre a environ 3 centimètres d'épaisseur"
            },
            pages: {
                name: "Pages",
                description: "Une page de livre a environ 0,3 millimètre d'épaisseur"
            }
        }
    },
    examples: {
        length: [
            "Un terrain de football a la longueur de 16,2 éléphants",
            "La hauteur d'une girafe équivaut à 37,7 iPhones",
            "Une baleine bleue a la longueur de 2,4 terrains de football",
            "Un Boeing 747 équivaut à 392 bananes alignées",
            "Une bactérie est invisible à l'œil nu - il y en a 875 millions dans 1 mètre !",
            "Un requin bleu est presque deux fois plus grand qu'un cheval",
            "Pour traverser un terrain de football, vous feriez 140 pas",
            "Un bus urbain équivaut à 66,7 iPhones alignés",
            "Une girafe a la longueur de 30,6 pizzas",
            "Une fourmi est 36 fois plus petite qu'une banane"
        ],
        weight: [
            "Une voiture pèse autant que 4 chevaux",
            "Une baleine bleue pèse autant que 25 éléphants",
            "Une seule plume pèse moins qu'un trombone",
            "1kg de plumes pèse EXACTEMENT autant que 1kg de plomb !",
            "Votre smartphone pèse autant que 44 hamburgers",
            "Un bébé nouveau-né pèse autant que 17 500 plumes",
            "Un sac de riz équivaut au poids d'un gros chat",
            "Un chat pèse autant que 22,5 smartphones",
            "Pour égaler le poids d'un éléphant, il vous faudrait 1 333 chats !"
        ],
        height: [
            "La Tour Eiffel a la hauteur de 8,5 Christ Rédempteur",
            "Un immeuble de 10 étages équivaut à 5,5 girafes",
            "Un grand arbre a la hauteur de 122 canettes de soda",
            "Un Brachiosaure était 3 fois plus haut qu'une girafe",
            "Un poteau d'éclairage a la hauteur de 4,6 personnes empilées",
            "Le Christ Rédempteur équivaut à presque 7 girafes",
            "Pour atteindre 1 mètre, vous empileriez 33 livres",
            "Un T-Rex était plus haut que 2 personnes empilées",
            "La Tour Eiffel est aussi haute que 108 étages d'immeuble !"
        ]
    },
    funFacts: {
        quadrillion: "Incroyable ! C'est plus de {{count}} quadrillions de {{unit}} !",
        trillion: "Wow ! C'est plus de {{count}} trillions de {{unit}} !",
        billion: "Incroyable ! C'est plus de {{count}} milliards de {{unit}} !",
        million: "C'est énorme ! Plus de {{count}} millions de {{unit}} !",
        thousand: "C'est beaucoup ! Plus de {{count}} milliers de {{unit}} !",
        lessThanThousandth: "C'est minuscule ! Moins d'un millième de {{unit}} !",
        football_fields: "🏟️ Cela ferait {{count}} terrain{{plural}} de football !",
        elephants_row: "🐘 Une rangée de {{count}} éléphants serait impressionnante !",
        elephants_weight: "🐘 Cela pèse autant que {{count}} éléphant{{plural}} !",
        blue_whale: "🐋 Une baleine bleue est vraiment gigantesque !",
        people_stack: "🧍 Ce serait comme empiler {{count}} personnes !"
    }
}

function getExamplesForDimension(dimension) {
    return TRANSLATIONS.examples[dimension] || [];
}

function getUnitTranslation(dimension, unitKey) {
    return TRANSLATIONS.units[dimension]?.[unitKey] || { name: unitKey, description: "" };
}