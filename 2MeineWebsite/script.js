/* =========================================================
   KEBAP CENTER
   KOMPLETTE SPEISEKARTE
========================================================= */

const lieferando =
"https://www.lieferando.de/speisekarte/kebap-center-frankfurter-strasse";


/* =========================================================
   MENÜDATEN
========================================================= */

const menu = [

    {
        title: "🥙 KEBAP & MORE",
        subtitle: "Drehspieß, Dürüm, Shawarma & vegetarische Spezialitäten",
        items: [

            {
                no: "01",
                name: "Drehspiess-Sandwich",
                price: "Kinder 8,00 € | Gross 9,00 €",
                desc: "mit Drehspiessfleisch, gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "02",
                name: "Drehspiess Dürüm",
                price: "Kinder 8,00 € | Gross 9,00 €",
                desc: "Wrap türk. Art mit Drehspiessfleisch, gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "03",
                name: "Shawarma",
                price: "Kinder 8,00 € | Gross 9,00 €",
                desc: "mit gegrilltem Shawarma, Aioli und sauren Gurken"
            },

            {
                no: "04",
                name: "Crispy-Sandwich",
                price: "Kinder 8,00 € | Gross 8,00 €",
                desc: "mit Crispy Chicken Patty, Eisbergsalat und Mayonnaise"
            },

            {
                no: "05",
                name: "Dönerbox",
                price: "Kinder 7,00 € | Gross 8,00 €",
                desc: "wahlweise mit Reis, Pommes, Falafel oder Salat, dazu Sauce nach Wahl"
            },

            {
                no: "06",
                name: "Veggie-Sandwich",
                price: "6,50 €",
                desc: "mit Weichkäse, gemischtem Salat und Sauce nach Wahl"
            },

            {
                no: "07",
                name: "Veggie Yufka",
                price: "6,50 €",
                desc: "Wrap mit Weichkäse, gemischtem Salat und Sauce nach Wahl"
            },

            {
                no: "08",
                name: "Falafel Sandwich",
                price: "8,00 €",
                desc: "mit Falafelbällchen, gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "09",
                name: "Dürüm Falafel",
                price: "8,00 €",
                desc: "Wrap türk. Art mit Falafelbällchen, gemischter Salat und Sauce nach Wahl"
            }

        ],

        note:
        "Extra Weichkäse: +1,00 € · Extra Fleisch: +2,00 € · Saucen: Joghurt, Knoblauch, Tahina (Sesamsauce), Cocktailsauce"
    },


    {
        title: "🍽️ TELLERGERICHTE",
        subtitle: "Herzhafte Teller mit Beilagen",
        items: [

            {
                no: "10",
                name: "Drehspiess-Teller Weichkäse",
                price: "11,00 €",
                desc: "mit Drehspiessfleisch, Weichkäse, gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "11",
                name: "Drehspiess-Teller",
                price: "14,00 €",
                desc: "mit Drehspiessfleisch, Pommes oder Reis, dazu gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "12",
                name: "Köfte-Teller",
                price: "15,00 €",
                desc: "mit Hackfleischbällchen, Pommes oder Reis, dazu gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "13",
                name: "Cevapcici-Teller",
                price: "15,00 €",
                desc: "würzige Röllchen aus Rindfleisch, mit Pommes oder Reis, dazu gemischter Salat und Sauce nach Wahl"
            },

            {
                no: "14",
                name: "Falafel-Teller",
                price: "10,00 €",
                desc: "mit 6 Stück Falafelbällchen, Pommes oder Reis, dazu Beilagensalat mit Sauce nach Wahl"
            },

            {
                no: "15",
                name: "Lahmacun-Teller",
                price: "11,00 €",
                desc: "mit 1x Lahmacun (mit Hackfleisch), mit Pommes oder Reis, dazu Beilagensalat und Sauce nach Wahl"
            },

            {
                no: "16",
                name: "Roastbeef",
                price: "27,00 €",
                desc: "mit zartem Rindersteakfilet, mit Pommes oder Reis, dazu gemischter Salat und Sauce nach Wahl"
            }

        ],

        note:
        "Extra Weichkäse: +1,00 € · Extra Fleisch: +2,00 € · Saucen: Joghurt, Knoblauch, Sesamsauce (Tahina), Cocktailsauce"
    },


    {
        title: "🫓 LAHMACUN",
        subtitle: "Frisch und türkisch",
        items: [

            {
                no: "20",
                name: "Lahmacun",
                price: "7,00 €",
                desc: "mit gemischtem Salat und Sauce nach Wahl"
            },

            {
                no: "21",
                name: "Lahmacun Cheese",
                price: "8,00 €",
                desc: "mit gemischtem Salat, Weichkäse und Sauce nach Wahl"
            },

            {
                no: "22",
                name: "Lahmacun mit allem",
                price: "10,00 €",
                desc: "mit Drehspiessfleisch, Salat und Sauce nach Wahl"
            },

            {
                no: "23",
                name: "Lahmacun Spezial",
                price: "11,00 €",
                desc: "mit Drehspiessfleisch, Weichkäse, Salat und Sauce"
            }

        ],

        note:
        "Extra Weichkäse: +1,00 € · Extra Fleisch: +2,00 €"
    },


    {
        title: "🥙 PIDE",
        subtitle: "Frisch gebackene Pide",
        items: [

            {
                no: "89",
                name: "Pide Käse",
                price: "9,00 €",
                desc: "mit Schafskäse und Käse"
            },

            {
                no: "90",
                name: "Pide Sucuk",
                price: "10,00 €",
                desc: "mit türk. Knoblauchwurst und Käse"
            },

            {
                no: "91",
                name: "Pide Cheesy Spinat",
                price: "10,00 €",
                desc: "mit Spinat und Weichkäse"
            },

            {
                no: "92",
                name: "Pide Kıymalı",
                price: "10,00 €",
                desc: "mit Hackfleisch, Zwiebeln und Käse"
            },

            {
                no: "93",
                name: "Pide Dönerli",
                price: "10,00 €",
                desc: "mit Drehspiessfleisch, Zwiebeln, Peperoni und Käse"
            },

            {
                no: "94",
                name: "Pide Peperoniwurst",
                price: "10,00 €",
                desc: "mit Peperoniwurst und Käse"
            }

        ],

        note:
        "Extra Spiegelei: +1,00 € · Extra Weichkäse: +1,00 €"
    },


    {
        title: "🥖 PIZZABRÖTCHEN",
        subtitle: "8 knusprige Pizzabrötchen",
        items: [

            {
                no: "80",
                name: "mit Käse",
                price: "7,00 €",
                desc: "8 knusprige Pizzabrötchen"
            },

            {
                no: "81",
                name: "mit Thunfisch und Käse",
                price: "8,00 €",
                desc: "8 knusprige Pizzabrötchen"
            },

            {
                no: "82",
                name: "mit Spinat und Käse",
                price: "8,00 €",
                desc: "8 knusprige Pizzabrötchen"
            },

            {
                no: "83",
                name: "mit Rinderschinken und Käse",
                price: "8,00 €",
                desc: "8 knusprige Pizzabrötchen"
            },

            {
                no: "84",
                name: "mit Drehspiessfleisch & Käse",
                price: "8,00 €",
                desc: "8 knusprige Pizzabrötchen"
            },

            {
                no: "85",
                name: "mit Sucuk und Käse",
                price: "8,00 €",
                desc: "8 knusprige Pizzabrötchen"
            }

        ],

        note:
        "8 knusprige Pizzabrötchen. Perfekt für zwischendurch, einfach unwiderstehlich."
    },


    {
        title: "🥩 SCHNITZEL",
        subtitle: "Putenschnitzel 200g",
        items: [

            {
                no: "30",
                name: "Schnitzel Wiener Art",
                price: "11,00 €",
                desc: "Putenschnitzel 200g"
            },

            {
                no: "31",
                name: "Jägerschnitzel",
                price: "13,00 €",
                desc: "mit Jägersauce"
            },

            {
                no: "32",
                name: "BBQ-Schnitzel",
                price: "13,00 €",
                desc: "mit BBQ-Sauce"
            },

            {
                no: "33",
                name: "Hollandaise-Schnitzel",
                price: "13,00 €",
                desc: "mit Hollandaise-sauce"
            }

        ],

        note:
        "Jedes Schnitzelgericht mit Pommes oder Reis, dazu Salat als Beilage mit Essig-Öldressing"
    },


    {
        title: "🍔 SAFTIGE BURGER",
        subtitle: "Burger als Einzelgericht oder Menü",
        items: [

            {
                no: "35",
                name: "American Hamburger",
                price: "Klein 8,00 € | Menü 12,00 €",
                desc: "mit Rinderpatty, Salat, Tomaten, Zwiebeln, saure Gurken, Cocktailsauce"
            },

            {
                no: "36",
                name: "American Cheeseburger",
                price: "Klein 9,00 € | Menü 13,00 €",
                desc: "mit Cheddarkäse, Rinderpatty, Salat, Tomaten, Zwiebeln, saure Gurken, Cocktailsauce"
            },

            {
                no: "37",
                name: "Crispy Chickenburger",
                price: "Klein 8,00 € | Menü 12,00 €",
                desc: "mit Cheddarkäse, Chicken Crispy Patty, Salat, Tomaten, Zwiebeln, saure Gurken, Cocktailsauce"
            },

            {
                no: "38",
                name: "Veggie-Burger",
                price: "Klein 8,00 € | Menü 12,00 €",
                desc: "mit Gemüsepatty, Salat, Tomaten, Zwiebeln, saure Gurken und Cocktailsauce"
            },

            {
                no: "39",
                name: "BBQ-Chickenburger",
                price: "Klein 8,00 € | Menü 12,00 €",
                desc: "mit Hähnchenbrustfilet, Jalapenos, Salat, Tomaten, Zwiebeln, saure Gurken, BBQ-Sauce"
            }

        ],

        note:
        "Jedes Menü inkl. Pommes und Softgetränk nach Wahl. Extra Cheddar: +1,00 € · Beefpatty Extra: +2,00 € · Chicken Crispy oder Filet Extra: +2,00 €"
    },


    {
        title: "🥗 SALATE",
        subtitle: "Frische Salate",
        items: [

            {
                no: "50",
                name: "Krautsalat",
                price: "5,00 €",
                desc: "Wahl zwischen Weisskraut oder Rotkraut, dazu Weichkäse"
            },

            {
                no: "51",
                name: "Bauernsalat",
                price: "8,00 €",
                desc: "mit Eisbergsalat, Weisskraut, Rotkraut, Zwiebeln, Tomaten, Gurken, Weichkäse, Petersilien"
            },

            {
                no: "52",
                name: "Chef Salat",
                price: "10,00 €",
                desc: "mit Eisbergsalat, Thunfisch, Rotkraut, Weisskraut, Tomaten, Gurken, Zwiebeln und Oliven"
            },

            {
                no: "53",
                name: "Fitness-Salat",
                price: "10,00 €",
                desc: "mit Eisbergsalat, Hähnchenbrustfiletstücke, geriebener Käse, Paprika, Oliven, Tomaten, Zwiebeln, Gurken und Mais"
            },

            {
                no: "54",
                name: "Cappriciosa Salat",
                price: "12,00 €",
                desc: "mit Eisbergsalat, Mais, Thunfisch, Putenschinken, Tomaten, Gurken, Oliven, Karotten, geriebene Käse und Zwiebeln"
            },

            {
                no: "55",
                name: "Ceasersalat",
                price: "10,00 €",
                desc: "mit Hähnchenbruststreifen, Eisbergsalat, Reibekäse"
            }

        ],

        note:
        "Wahlweise Joghurt, Knoblauch, Tahini (Sesam), Cocktail-, Essig-Öl- oder Granatapfeldressing"
    },


    {
        title: "🍟 SNACKS & DESSERT",
        subtitle: "Snacks, Beilagen & Süßes",
        items: [

            {
                no: "61",
                name: "Portion Pommes Frites",
                price: "4,00 €",
                desc: ""
            },

            {
                no: "63",
                name: "Wedges Potato",
                price: "5,00 €",
                desc: "Farmkartoffeln"
            },

            {
                no: "64",
                name: "Chili Cheese Pommes",
                price: "6,00 €",
                desc: "mit Jalapenos und Käse überbacken"
            },

            {
                no: "65",
                name: "Chicken Nuggets",
                price: "6 Stück & Pommes 6,00 €",
                desc: ""
            },

            {
                no: "66",
                name: "Chicken Nuggets",
                price: "9 Stück & Pommes 8,00 €",
                desc: ""
            },

            {
                no: "67",
                name: "Mozzarella Sticks",
                price: "6 Stück 7,00 €",
                desc: ""
            },

            {
                no: "68",
                name: "Zigarrenbörek",
                price: "5 Stück 5,00 €",
                desc: "Gefüllt mit Weichkäse und Petersilie"
            },

            {
                no: "71",
                name: "Chickenwings Gourmet-Style",
                price: "6 Stück 9,00 €",
                desc: "knusprig panierte Hähnchenflügel und Pommes"
            },

            {
                no: "72",
                name: "Hot-Chickenwings",
                price: "6 Stück 9,00 €",
                desc: "knusprig scharfe, panierte Hähnchenflügel und Pommes"
            },

            {
                no: "74",
                name: "Extra Brot",
                price: "2,00 €",
                desc: ""
            },

            {
                no: "75",
                name: "Baklava",
                price: "2 Stück 3,00 €",
                desc: "Süßgebäck, mit Nüssen, Pistazien und Honig"
            }

        ],

        note:
        "Ketchup oder Mayonnaise +0,50 € · BBQ, Mayo-Joghurt, Cocktail +1,00 €"
    },


    {
        title: "🥤 GETRÄNKE",
        subtitle: "Getränke inklusive Pfand",
        items: [

            {
                no: "",
                name: "Coca Cola, Light, Zero Fanta, Exotic",
                price: "0,33 L – 2,50 €",
                desc: ""
            },

            {
                no: "",
                name: "Sprite, Mezzo Mix, Eistee",
                price: "0,33 L – 2,50 €",
                desc: ""
            },

            {
                no: "",
                name: "Coca Cola, Light, Zero Fanta",
                price: "1,00 L – 4,00 €",
                desc: ""
            },

            {
                no: "",
                name: "Apfelschorle",
                price: "0,50 L – 2,50 €",
                desc: ""
            },

            {
                no: "",
                name: "Sprite, Mezzo Mix",
                price: "1,00 L – 4,00 €",
                desc: ""
            },

            {
                no: "",
                name: "Uludag",
                price: "0,33 L – 2,50 €",
                desc: ""
            },

            {
                no: "",
                name: "Ayran Joghurtgetränk",
                price: "0,20 L – 1,50 €",
                desc: "Pfandfrei"
            },

            {
                no: "",
                name: "Red Bull",
                price: "0,25 L – 3,00 €",
                desc: ""
            },

            {
                no: "",
                name: "Mineralwasser Metzeral still",
                price: "0,50 L – 1,50 €",
                desc: ""
            },

            {
                no: "",
                name: "Fuze Tea",
                price: "0,5 L – 2,50 €",
                desc: "verschiedene Sorten"
            },

            {
                no: "",
                name: "Durstlöscher",
                price: "0,5 L – 2,00 €",
                desc: "verschiedene Sorten"
            }

        ]
    },


    {
        title: "🍕 PIZZA",
        subtitle: "Ø24 cm · Ø30 cm · Ø60×40 cm",
        items: [

            {
                no: "100",
                name: "Margherita",
                price: "Ø24 8,00 € | Ø30 9,00 € | Ø60×40 22,00 €",
                desc: "mit Tomatensauce und Käse"
            },

            {
                no: "102",
                name: "Funghi",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 25,00 €",
                desc: "mit frischen Champignons"
            },

            {
                no: "103",
                name: "Schinken",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Rinderschinken"
            },

            {
                no: "104",
                name: "Salami",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Rindersalami"
            },

            {
                no: "105",
                name: "Tonno",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Thunfisch und Zwiebeln"
            },

            {
                no: "106",
                name: "4 Käse",
                price: "Ø24 10,00 € | Ø30 11,00 € | Ø60×40 31,00 €",
                desc: "mit 4 verschiedenen Käsesorten"
            },

            {
                no: "107",
                name: "Vegetaria",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Paprika, Zwiebeln, Champignons, Mais und Brokkoli"
            },

            {
                no: "108",
                name: "Diavolo",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Salami, Paprika, Zwiebeln und Peperoni"
            },

            {
                no: "109",
                name: "Peperoniwurst (scharf)",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Peperoniwurst vom Rind"
            },

            {
                no: "110",
                name: "Roma",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Salami, Champignons & Schinken"
            },

            {
                no: "111",
                name: "Sucuk",
                price: "Ø24 9,00 € | Ø30 11,00 € | Ø60×40 30,00 €",
                desc: "mit türk. Knoblauchwurst"
            },

            {
                no: "112",
                name: "Spezial",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 30,00 €",
                desc: "mit Salami, Schinken, Zwiebeln, Peperoni und Knoblauch"
            },

            {
                no: "113",
                name: "Kebap Center",
                price: "Ø24 10,00 € | Ø30 13,00 € | Ø60×40 35,00 €",
                desc: "mit Kebap & fr. Tomaten"
            },

            {
                no: "114",
                name: "Toscana",
                price: "Ø24 10,00 € | Ø30 11,00 € | Ø60×40 31,00 €",
                desc: "mit Schinken, Champignons, Paprika und Zwiebeln"
            },

            {
                no: "115",
                name: "Holidays",
                price: "Ø24 10,00 € | Ø30 11,00 € | Ø60×40 30,00 €",
                desc: "mit Hähnchenfleisch und Brokkoli"
            },

            {
                no: "116",
                name: "BBQ Chicken",
                price: "Ø24 10,00 € | Ø30 11,00 € | Ø60×40 30,00 €",
                desc: "mit Hähnchenbrustfilet, Zwiebeln und BBQ Sauce"
            },

            {
                no: "117",
                name: "Spinacy",
                price: "Ø24 8,00 € | Ø30 9,00 € | Ø60×40 28,00 €",
                desc: "mit Weichkäse, Knoblauch und Spinat"
            },

            {
                no: "118",
                name: "Pizza Döner",
                price: "Ø24 10,00 € | Ø30 11,00 € | Ø60×40 30,00 €",
                desc: "mit Drehspiessfleisch und Zwiebeln"
            },

            {
                no: "119",
                name: "Pizza Bacon",
                price: "Ø24 10,00 € | Ø30 11,00 € | Ø60×40 28,00 €",
                desc: "mit Rinderbacon"
            },

            {
                no: "120",
                name: "Pizza Hawaii",
                price: "Ø24 9,00 € | Ø30 10,00 € | Ø60×40 31,00 €",
                desc: "mit Schinken und Ananas"
            }

        ],

        note:
        "Alle Pizzen mit Tomatensauce oder Pestosauce und Gouda belegt."
    }

];


/* =========================================================
   MENÜ AUFBAUEN
========================================================= */

const menuContainer =
    document.getElementById("menuCategories");


menu.forEach((category, categoryIndex) => {

    const section =
        document.createElement("section");

    section.className =
        "menu-category reveal";

    section.style.setProperty(
        "--delay",
        `${categoryIndex * 70}ms`
    );


    section.innerHTML = `

        <div class="category-header">

            <div>
                <span class="category-number">
                    ${(categoryIndex + 1).toString().padStart(2, "0")}
                </span>

                <h2>${category.title}</h2>

                <p>${category.subtitle || ""}</p>
            </div>

            <span class="category-fire">🔥</span>

        </div>


        <div class="menu-items">

            ${category.items.map(item => `

                <article class="food-item">

                    <div class="item-number">
                        ${item.no}
                    </div>

                    <div class="item-info">

                        <h3>
                            ${item.name}
                        </h3>

                        ${
                            item.desc
                            ? `<p>${item.desc}</p>`
                            : ""
                        }

                    </div>

                    <div class="item-price">
                        ${item.price}
                    </div>

                    <a
                        class="item-order"
                        href="${lieferando}"
                        target="_blank"
                        rel="noopener noreferrer">

                        BESTELLEN

                    </a>

                </article>

            `).join("")}

        </div>


        ${
            category.note
            ? `
                <div class="category-note">
                    ${category.note}
                </div>
            `
            : ""
        }

    `;


    menuContainer.appendChild(section);

});


/* =========================================================
   PIZZA EXTRAS
========================================================= */

const pizzaExtra = document.createElement("div");

pizzaExtra.className = "pizza-extras";

pizzaExtra.innerHTML = `

    <h3>🍕 EXTRA PIZZABEILAGEN</h3>

    <p>
        Jede 24 cm bis 30 cm = +1,00 € Aufpreis
    </p>

    <p>
        60 × 40 cm = +3,00 € Aufpreis
    </p>

    <p>
        Extra Käserand: 24 bis 30 cm = +2,50 €
    </p>

    <p>
        Extra Käserand: 60 × 40 cm = +7,50 €
    </p>

`;

menuContainer.appendChild(pizzaExtra);


/* =========================================================
   ZUTATEN / ZUSATZSTOFFE
========================================================= */

const ingredients = document.createElement("details");

ingredients.className =
    "ingredients";


ingredients.innerHTML = `

    <summary>
        ℹ️ Zutaten- und Zusatzstoffhinweise öffnen
    </summary>

    <div>

        <h3>Dönerfleisch Zutaten</h3>

        <p>
            Putenfleisch (42,5 %), Putenfleisch (42,5 %),
            Flüssigwürze, Speisesalz, Joghurt, Gewürze,
            Glukosesirup, Geschmacksverstärker E621, E631,
            Stabilisatoren E451a, Kräuter, Verdickungsmittel E407,
            Emulgator E471, Würze, Hefeextrakt, Zucker, Dextrose,
            Glukosesirup, Maltodextrin, modifizierte Stärke,
            Säureregulatoren E262, E327, Farbstoff Carotine, Aroma.
        </p>

        <h3>Zeichenerklärung Zusatzstoffe</h3>

        <p>
            1. mit Farbstoff ·
            2. mit Konservierungsstoff ·
            3. mit Antioxidationsmittel ·
            4. geschwefelt ·
            5. mit Geschmacksverstärker ·
            6. geschwärzt ·
            7. mit Phosphat ·
            8. mit Süßungsmittel ·
            9. koffeinhaltig ·
            10. chininhaltig
        </p>

        <h3>Allergene</h3>

        <p>
            a) Weizen ·
            b) Krebstiere ·
            c) Eier ·
            d) Fische ·
            e) Erdnüsse ·
            f) Milch/Lactose ·
            g) Pistazien ·
            h) Haselnüsse ·
            i) Senf ·
            j) Sesamsamen ·
            k) Weichtiere ·
            l) Sellerie
        </p>

    </div>

`;

menuContainer.appendChild(ingredients);


/* =========================================================
   ALLGEMEINE HINWEISE
========================================================= */

const finalNote =
document.createElement("div");

finalNote.className =
    "menu-final-note";

finalNote.innerHTML = `

    <p>
        Alle Preise in Euro, inklusive Bedienung
        und Mehrwertsteuer.
    </p>

    <p>
        Irrtümer und Änderungen vorbehalten.
    </p>

    <a
        href="${lieferando}"
        target="_blank"
        rel="noopener noreferrer"
        class="order-button big">

        🛒 ONLINE BESTELLEN →

    </a>

`;

menuContainer.appendChild(finalNote);


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const nav =
    document.getElementById("nav");


mobileMenu.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll("#nav a")
.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.08
    }

);


document
.querySelectorAll(".reveal")
.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   NAVBAR SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


console.log(
    "🔥 Kebap Center – komplette Speisekarte geladen."
);