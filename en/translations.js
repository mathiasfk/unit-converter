const TRANSLATIONS = {
    units:{
        length:{
            meters: {
                name: "Meters",
                description: "Standard unit of length in the metric system"
            },
            centimeters: {
                name: "Centimeters",
                description: "Traditional centimeters (1/100 of a meter)"
            },
            kilometers: {
                name: "Kilometers",
                description: "Metric unit for long distances (1000 m)"
            },
            miles: {
                name: "Miles",
                description: "Imperial unit for long distances (1.6 km)"
            },
            inches: {
                name: "Inches",
                description: "Traditional imperial unit"
            },
            feet: {
                name: "Feet",
                description: "Common imperial unit"
            },
            yards: {
                name: "Yards",
                description: "Imperial unit used in sports"
            },
            people: {
                name: "People",
                description: "Average height of an adult (1.75m)"
            },
            pace: {
                name: "Steps",
                description: "An average adult step measures about 75 centimeters"
            },
            lightyears: {
                name: "Light-years",
                description: "The distance light travels in a year (approx. 9.461 trillion km)"
            },
            elephants: {
                name: "Elephants",
                description: "An adult African elephant measures about 6.5 meters"
            },
            giraffes: {
                name: "Giraffes",
                description: "An adult giraffe measures about 5.5 meters tall"
            },
            blue_whales: {
                name: "Blue Whales",
                description: "An adult blue whale measures about 25 meters"
            },
            ants: {
                name: "Ants",
                description: "A common ant measures about 5 millimeters"
            },
            football_fields: {
                name: "Soccer Fields",
                description: "An official soccer field is 105 meters long"
            },
            bus: {
                name: "Bus",
                description: "A typical city bus measures about 12 meters"
            },
            iphones: {
                name: "iPhones",
                description: "An iPhone 14 Pro measures about 14.6 centimeters"
            },
            pizzas: {
                name: "Pizzas",
                description: "A large pizza is about 35 centimeters in diameter"
            },
            boeing_747: {
                name: "Boeing 747",
                description: "A Boeing 747 is about 70.6 meters long"
            },
            horses: {
                name: "Horses",
                description: "An adult horse measures about 2.4 meters long"
            },
            blue_sharks: {
                name: "Blue Shark",
                description: "An adult blue shark measures about 3.8 meters"
            },
            banana: {
                name: "Bananas",
                description: "An average banana is about 18 centimeters long"
            },
            bacteria: {
                name: "Bacteria",
                description: "A common bacterium measures about 2 micrometers"
            }
        },
        weight:{
            kilograms: {
                name: "Kilograms",
                description: "Standard unit of weight"
            },
            grams: {
                name: "Grams",
                description: "Traditional grams"
            },
            tons: {
                name: "Tons",
                description: "For very large weights"
            },
            pounds: {
                name: "Pounds",
                description: "Common imperial unit"
            },
            ounces: {
                name: "Ounces",
                description: "Smaller imperial unit"
            },
            babies: {
                name: "Babies",
                description: "A newborn baby weighs about 3.5 kg"
            },
            people: {
                name: "People",
                description: "Average weight of an adult (70kg)"
            },
            elephants: {
                name: "Elephants",
                description: "An adult African elephant weighs about 6 tons"
            },
            mammoths: {
                name: "Mammoths",
                description: "An adult mammoth weighed about 6 tons"
            },
            blue_whales: {
                name: "Blue Whales",
                description: "An adult blue whale weighs about 150 tons"
            },
            horses: {
                name: "Horses",
                description: "An adult horse weighs about 500 kg"
            },
            cats: {
                name: "Cats",
                description: "An adult domestic cat weighs about 4.5 kg"
            },
            cars: {
                name: "Cars",
                description: "A popular car weighs about 1.5 tons"
            },
            smartphones: {
                name: "Smartphones",
                description: "A typical smartphone weighs about 200 grams"
            },
            rice_bags: {
                name: "Rice Bags",
                description: "A common rice bag weighs 5 kg"
            },
            hamburgers: {
                name: "Hamburgers",
                description: "An average hamburger weighs about 250 grams"
            },
            watermelons: {
                name: "Watermelons",
                description: "An average watermelon weighs about 3 kg"
            },
            feathers: {
                name: "Feathers",
                description: "A small bird feather weighs about 0.625 grams"
            },
            kilogram_feathers: {
                name: "kg of Feathers",
                description: "A kilogram of feathers - takes up a lot of space but weighs the same!"
            },
            kilogram_lead: {
                name: "kg of Lead",
                description: "A kilogram of lead - dense and compact but weighs the same!"
            }
        },
        height:{
            meters: {
                name: "Meters",
                description: "Standard unit of height"
            },
            centimeters: {
                name: "Centimeters",
                description: "Traditional centimeters"
            },
            people: {
                name: "People",
                description: "Average height of an adult (1.75m)"
            },
            children: {
                name: "Children",
                description: "Average height of an 8-year-old child (1.2m)"
            },
            eiffel_towers: {
                name: "Eiffel Towers",
                description: "The Eiffel Tower is 324 meters tall"
            },
            statues_liberty: {
                name: "Statues of Liberty",
                description: "The Statue of Liberty is 93 meters tall"
            },
            christ_redeemers: {
                name: "Christ the Redeemer",
                description: "The Christ the Redeemer statue is 38 meters tall"
            },
            building_floors: {
                name: "Building Floors",
                description: "A building floor is about 3 meters high"
            },
            giraffes: {
                name: "Giraffes",
                description: "An adult giraffe measures about 5.5 meters tall"
            },
            t_rexes: {
                name: "T-Rex",
                description: "A Tyrannosaurus Rex was about 4 meters tall"
            },
            brachiosauruses: {
                name: "Brachiosaurus",
                description: "A Brachiosaurus was about 16 meters tall"
            },
            light_poles: {
                name: "Light Poles",
                description: "A city light pole is about 8 meters tall"
            },
            trees: {
                name: "Trees",
                description: "A large tree is about 15 meters tall"
            },
            soda_cans: {
                name: "Soda Cans",
                description: "A soda can is 12.3 centimeters tall"
            },
            books: {
                name: "Books",
                description: "A book is about 3 centimeters thick"
            },
            pages: {
                name: "Pages",
                description: "A book page is about 0.3 millimeters thick"
            }
        }
    },
    examples: {
        length: [
            "A soccer field is the length of 16.2 elephants",
            "A giraffe's height equals 37.7 iPhones",
            "A blue whale is the length of 2.4 soccer fields",
            "A Boeing 747 equals 392 bananas lined up",
            "A bacterium is invisible to the naked eye - there are 875 million in 1 meter!",
            "A blue shark is almost twice the size of a horse",
            "To cross a soccer field, you'd take 140 steps",
            "A city bus equals 66.7 iPhones lined up",
            "A giraffe is the length of 30.6 pizzas",
            "An ant is 36 times smaller than a banana"
        ],
        weight: [
            "A car weighs the same as 4 horses",
            "A blue whale weighs as much as 25 elephants",
            "A single feather weighs less than a paperclip",
            "1kg of feathers weighs EXACTLY the same as 1kg of lead!",
            "Your smartphone weighs the same as 44 hamburgers",
            "A newborn baby weighs as much as 17,500 feathers",
            "A rice bag equals the weight of a fat cat",
            "A cat weighs as much as 22.5 smartphones",
            "To match the weight of an elephant, you'd need 1,333 cats!"
        ],
        height: [
            "The Eiffel Tower is as tall as 8.5 Christ the Redeemers",
            "A 10-story building equals 5.5 giraffes",
            "A large tree is as tall as 122 soda cans",
            "A Brachiosaurus was 3 times taller than a giraffe",
            "A light pole is as tall as 4.6 people stacked",
            "Christ the Redeemer equals almost 7 giraffes",
            "To reach 1 meter, you'd stack 33 books",
            "A T-Rex was taller than 2 people stacked",
            "The Eiffel Tower is as tall as 108 building floors!"
        ]
    },
    funFacts: {
        quadrillion: "Impressive! That's over {{count}} quadrillion {{unit}}!",
        trillion: "Wow! That's over {{count}} trillion {{unit}}!",
        billion: "Impressive! That's over {{count}} billion {{unit}}!",
        million: "That's a lot! Over {{count}} million {{unit}}!",
        thousand: "That's quite a bit! Over {{count}} thousand {{unit}}!",
        lessThanThousandth: "So tiny! Less than a thousandth of a {{unit}}!",
        football_fields: "🏟️ That would make {{count}} football field{{plural}}!",
        elephants_row: "🐘 A row of {{count}} elephants would be impressive!",
        elephants_weight: "🐘 That weighs as much as {{count}} elephant{{plural}}!",
        blue_whale: "🐋 A blue whale is truly gigantic!",
        people_stack: "🧍 That would be like stacking {{count}} people!"
    }
}

function getExamplesForDimension(dimension) {
    return TRANSLATIONS.examples[dimension] || [];
}

function getUnitTranslation(dimension, unitKey) {
    return TRANSLATIONS.units[dimension]?.[unitKey] || { name: unitKey, description: "" };
}