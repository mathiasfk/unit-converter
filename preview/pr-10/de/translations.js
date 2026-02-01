const TRANSLATIONS = {
    units:{
        length:{
            meters: {
                name: "Meter",
                description: "Standardlängeneinheit im metrischen System"
            },
            centimeters: {
                name: "Zentimeter",
                description: "Klassische Zentimeter (1/100 Meter)"
            },
            kilometers: {
                name: "Kilometer",
                description: "Metrische Einheit für lange Strecken (1000 m)"
            },
            miles: {
                name: "Meilen",
                description: "Imperiale Einheit für lange Strecken (1,6 km)"
            },
            inches: {
                name: "Zoll",
                description: "Traditionelle imperiale Einheit"
            },
            feet: {
                name: "Fuß",
                description: "Gängige imperiale Einheit"
            },
            yards: {
                name: "Yards",
                description: "Imperiale Einheit, häufig im Sport"
            },
            people: {
                name: "Menschen",
                description: "Durchschnittliche Körpergröße eines Erwachsenen (1,75 m)"
            },
            pace: {
                name: "Schritte",
                description: "Ein durchschnittlicher Erwachsenenschritt misst etwa 75 Zentimeter"
            },
            lightyears: {
                name: "Lichtjahre",
                description: "Die Strecke, die Licht in einem Jahr zurücklegt (ca. 9,461 Billionen km)"
            },
            elephants: {
                name: "Elefanten",
                description: "Ein ausgewachsener afrikanischer Elefant misst etwa 6,5 Meter"
            },
            giraffes: {
                name: "Giraffen",
                description: "Eine ausgewachsene Giraffe ist etwa 5,5 Meter hoch"
            },
            blue_whales: {
                name: "Blauwale",
                description: "Ein ausgewachsener Blauwal ist etwa 25 Meter lang"
            },
            ants: {
                name: "Ameisen",
                description: "Eine gewöhnliche Ameise ist etwa 5 Millimeter lang"
            },
            football_fields: {
                name: "Fußballfelder",
                description: "Ein offizielles Fußballfeld ist 105 Meter lang"
            },
            bus: {
                name: "Busse",
                description: "Ein typischer Stadtbus ist etwa 12 Meter lang"
            },
            iphones: {
                name: "iPhones",
                description: "Ein iPhone 14 Pro ist etwa 14,6 Zentimeter lang"
            },
            pizzas: {
                name: "Pizzen",
                description: "Eine große Pizza hat etwa 35 Zentimeter Durchmesser"
            },
            boeing_747: {
                name: "Boeing 747",
                description: "Eine Boeing 747 ist etwa 70,6 Meter lang"
            },
            horses: {
                name: "Pferde",
                description: "Ein erwachsenes Pferd ist etwa 2,4 Meter lang"
            },
            blue_sharks: {
                name: "Blauhaie",
                description: "Ein ausgewachsener Blauhai ist etwa 3,8 Meter lang"
            },
            banana: {
                name: "Bananen",
                description: "Eine durchschnittliche Banane ist etwa 18 Zentimeter lang"
            },
            bacteria: {
                name: "Bakterien",
                description: "Ein gewöhnliches Bakterium ist etwa 2 Mikrometer groß"
            }
        },
        weight:{
            kilograms: {
                name: "Kilogramm",
                description: "Standardeinheit für Gewicht"
            },
            grams: {
                name: "Gramm",
                description: "Klassische Gramm"
            },
            tons: {
                name: "Tonnen",
                description: "Für sehr große Gewichte"
            },
            pounds: {
                name: "Pfund",
                description: "Gängige imperiale Einheit"
            },
            ounces: {
                name: "Unzen",
                description: "Kleinere imperiale Einheit"
            },
            babies: {
                name: "Babys",
                description: "Ein Neugeborenes wiegt etwa 3,5 kg"
            },
            people: {
                name: "Menschen",
                description: "Durchschnittsgewicht eines Erwachsenen (70 kg)"
            },
            elephants: {
                name: "Elefanten",
                description: "Ein ausgewachsener afrikanischer Elefant wiegt etwa 6 Tonnen"
            },
            mammoths: {
                name: "Mammuts",
                description: "Ein ausgewachsenes Mammut wog etwa 6 Tonnen"
            },
            blue_whales: {
                name: "Blauwale",
                description: "Ein ausgewachsener Blauwal wiegt etwa 150 Tonnen"
            },
            horses: {
                name: "Pferde",
                description: "Ein erwachsenes Pferd wiegt etwa 500 kg"
            },
            cats: {
                name: "Katzen",
                description: "Eine ausgewachsene Hauskatze wiegt etwa 4,5 kg"
            },
            cars: {
                name: "Autos",
                description: "Ein beliebtes Auto wiegt etwa 1,5 Tonnen"
            },
            smartphones: {
                name: "Smartphones",
                description: "Ein typisches Smartphone wiegt etwa 200 Gramm"
            },
            rice_bags: {
                name: "Reissäcke",
                description: "Ein üblicher Sack Reis wiegt 5 kg"
            },
            hamburgers: {
                name: "Hamburger",
                description: "Ein durchschnittlicher Hamburger wiegt etwa 250 Gramm"
            },
            watermelons: {
                name: "Wassermelonen",
                description: "Eine durchschnittliche Wassermelone wiegt etwa 3 kg"
            },
            feathers: {
                name: "Federn",
                description: "Eine kleine Vogelfeder wiegt etwa 0,625 Gramm"
            },
            kilogram_feathers: {
                name: "kg Federn",
                description: "Ein Kilogramm Federn – nimmt viel Platz ein, wiegt aber gleich!"
            },
            kilogram_lead: {
                name: "kg Blei",
                description: "Ein Kilogramm Blei – dicht und kompakt, wiegt aber gleich!"
            }
        },
        height:{
            meters: {
                name: "Meter",
                description: "Standardeinheit für Höhe"
            },
            centimeters: {
                name: "Zentimeter",
                description: "Klassische Zentimeter"
            },
            people: {
                name: "Menschen",
                description: "Durchschnittliche Körpergröße eines Erwachsenen (1,75 m)"
            },
            children: {
                name: "Kinder",
                description: "Durchschnittliche Körpergröße eines 8-jährigen Kindes (1,2 m)"
            },
            eiffel_towers: {
                name: "Eiffeltürme",
                description: "Der Eiffelturm ist 324 Meter hoch"
            },
            statues_liberty: {
                name: "Freiheitsstatuen",
                description: "Die Freiheitsstatue ist 93 Meter hoch"
            },
            christ_redeemers: {
                name: "Christus der Erlöser",
                description: "Die Christus-der-Erlöser-Statue ist 38 Meter hoch"
            },
            building_floors: {
                name: "Stockwerke",
                description: "Ein Stockwerk ist etwa 3 Meter hoch"
            },
            giraffes: {
                name: "Giraffen",
                description: "Eine ausgewachsene Giraffe ist etwa 5,5 Meter hoch"
            },
            t_rexes: {
                name: "T-Rex",
                description: "Ein Tyrannosaurus Rex war etwa 4 Meter hoch"
            },
            brachiosauruses: {
                name: "Brachiosaurus",
                description: "Ein Brachiosaurus war etwa 16 Meter hoch"
            },
            light_poles: {
                name: "Lichtmasten",
                description: "Ein Stadtlichtmast ist etwa 8 Meter hoch"
            },
            trees: {
                name: "Bäume",
                description: "Ein großer Baum ist etwa 15 Meter hoch"
            },
            soda_cans: {
                name: "Getränkedosen",
                description: "Eine Getränkedose ist 12,3 Zentimeter hoch"
            },
            books: {
                name: "Bücher",
                description: "Ein Buch ist etwa 3 Zentimeter dick"
            },
            pages: {
                name: "Seiten",
                description: "Eine Buchseite ist etwa 0,3 Millimeter dick"
            }
        }
    },
    examples: {
        length: [
            "Ein Fußballfeld ist so lang wie 16,2 Elefanten",
            "Die Höhe einer Giraffe entspricht 37,7 iPhones",
            "Ein Blauwal ist so lang wie 2,4 Fußballfelder",
            "Eine Boeing 747 entspricht 392 aneinandergereihten Bananen",
            "Ein Bakterium ist mit bloßem Auge unsichtbar - in 1 Meter passen 875 Millionen!",
            "Ein Blauhai ist fast doppelt so groß wie ein Pferd",
            "Um ein Fußballfeld zu überqueren, brauchst du 140 Schritte",
            "Ein Stadtbus entspricht 66,7 aneinandergereihten iPhones",
            "Eine Giraffe ist so lang wie 30,6 Pizzen",
            "Eine Ameise ist 36-mal kleiner als eine Banane"
        ],
        weight: [
            "Ein Auto wiegt so viel wie 4 Pferde",
            "Ein Blauwal wiegt so viel wie 25 Elefanten",
            "Eine einzelne Feder wiegt weniger als eine Büroklammer",
            "1 kg Federn wiegt GENAU so viel wie 1 kg Blei!",
            "Dein Smartphone wiegt so viel wie 44 Hamburger",
            "Ein Neugeborenes wiegt so viel wie 17.500 Federn",
            "Ein Sack Reis wiegt so viel wie eine dicke Katze",
            "Eine Katze wiegt so viel wie 22,5 Smartphones",
            "Um das Gewicht eines Elefanten zu erreichen, bräuchtest du 1.333 Katzen!"
        ],
        height: [
            "Der Eiffelturm ist so hoch wie 8,5 Christus-der-Erlöser-Statuen",
            "Ein Gebäude mit 10 Stockwerken entspricht 5,5 Giraffen",
            "Ein großer Baum ist so hoch wie 122 Getränkedosen",
            "Ein Brachiosaurus war dreimal so hoch wie eine Giraffe",
            "Ein Lichtmast ist so hoch wie 4,6 übereinander gestapelte Menschen",
            "Christus der Erlöser entspricht fast 7 Giraffen",
            "Um 1 Meter zu erreichen, würdest du 33 Bücher stapeln",
            "Ein T-Rex war höher als 2 übereinander gestapelte Menschen",
            "Der Eiffelturm ist so hoch wie 108 Stockwerke!"
        ]
    },
    funFacts: {
        quadrillion: "Beeindruckend! Das sind über {{count}} Billiarden {{unit}}!",
        trillion: "Wow! Das sind über {{count}} Billionen {{unit}}!",
        billion: "Beeindruckend! Das sind über {{count}} Milliarden {{unit}}!",
        million: "Das ist eine Menge! Über {{count}} Millionen {{unit}}!",
        thousand: "Das ist schon viel! Über {{count}} Tausend {{unit}}!",
        lessThanThousandth: "So winzig! Weniger als ein Tausendstel eines {{unit}}!",
        football_fields: "🏟️ Das wären {{count}} Fußballfeld{{plural}}!",
        elephants_row: "🐘 Eine Reihe von {{count}} Elefanten wäre beeindruckend!",
        elephants_weight: "🐘 Das wiegt so viel wie {{count}} Elefant{{plural}}!",
        blue_whale: "🐋 Ein Blauwal ist wirklich gigantisch!",
        people_stack: "🧍 Das wäre wie {{count}} gestapelte Menschen!"
    }
}

function getExamplesForDimension(dimension) {
    return TRANSLATIONS.examples[dimension] || [];
}

function getUnitTranslation(dimension, unitKey) {
    return TRANSLATIONS.units[dimension]?.[unitKey] || { name: unitKey, description: "" };
}
