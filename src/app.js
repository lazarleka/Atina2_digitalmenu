import './styles.css';
const COPY = {
  me: {
    drinksMenu: "Karta pića",
    foodMenu: "Jelovnik",
    back: "Nazad",
    opened: "Sekcija je otvorena",
    categories: {
      hot: "Topli napici",
      soft: "Bezalkoholna pića",
      wine: "Vina",
      aperitif: "Aperitivi",
      spirits: "Žestoka pića",
      beer: "Pivo",
      juice: "Cijeđeni sokovi",
      breakfast: "Doručak",
      sandwiches: "Sendviči",
      tortillas: "Tortilje",
      appetizers: "Predjela",
      soups: "Supe i čorbe",
      pasta: "Paste",
      risotto: "Rižoto",
      madeToOrder: "Jela po narudžbi",
      mealSalads: "Obrok salate",
      seasonalSalads: "Sezonske salate",
      dessert: "Deserti",
      extras: "Dodaci",
    },
  },
  en: {
    drinksMenu: "Drinks menu",
    foodMenu: "Food menu",
    back: "Back",
    opened: "Section opened",
    categories: {
      hot: "Hot drinks",
      soft: "Soft drinks",
      wine: "Wines",
      aperitif: "Aperitifs",
      spirits: "Spirits",
      beer: "Beer",
      juice: "Fresh juices",
      breakfast: "Breakfast",
      sandwiches: "Sandwiches",
      tortillas: "Tortillas",
      appetizers: "Appetizers",
      soups: "Soups",
      pasta: "Pasta",
      risotto: "Risotto",
      madeToOrder: "Made-to-order dishes",
      mealSalads: "Main course salads",
      seasonalSalads: "Seasonal salads",
      dessert: "Desserts",
      extras: "Side dishes",
    },
  },
  ru: {
    drinksMenu: "Карта напитков",
    foodMenu: "Меню",
    back: "Назад",
    opened: "Раздел открыт",
    categories: {
      hot: "Горячие напитки",
      soft: "Безалкогольные напитки",
      wine: "Вина",
      aperitif: "Аперитивы",
      spirits: "Крепкие напитки",
      beer: "Пиво",
      juice: "Свежие соки",
      breakfast: "Завтрак",
      sandwiches: "Сэндвичи",
      tortillas: "Тортильи",
      appetizers: "Закуски",
      soups: "Супы",
      pasta: "Паста",
      risotto: "Ризотто",
      madeToOrder: "Блюда на заказ",
      mealSalads: "Сытные салаты",
      seasonalSalads: "Сезонные салаты",
      dessert: "Десерты",
      extras: "Гарниры",
    },
  },
};

const DRINKS = [
  { key: "hot", icon: "coffee" },
  { key: "soft", icon: "cup-soda" },
  { key: "wine", icon: "wine" },
  { key: "aperitif", icon: "martini" },
  { key: "spirits", icon: "glass-water" },
  { key: "beer", icon: "beer" },
  { key: "juice", icon: "citrus" },
];

const FOOD = [
  { key: "breakfast", icon: "egg-fried" },
  { key: "sandwiches", icon: "sandwich" },
  { key: "tortillas", icon: "wrap" },
  { key: "appetizers", icon: "bruschetta" },
  { key: "soups", icon: "soup" },
  { key: "pasta", icon: "utensils" },
  { key: "risotto", icon: "cooking-pot" },
  { key: "madeToOrder", icon: "chef-hat" },
  { key: "mealSalads", icon: "salad" },
  { key: "seasonalSalads", icon: "leaf" },
  { key: "dessert", icon: "cake-slice" },
  { key: "extras", icon: "plus" },
];

const tr = (me, en = me, ru = en) => ({ me, en, ru });
const dish = (name, price, details = null) => ({ label: name, price, details });

const MENU_ITEMS = {
  hot: [
    { label: { me: "Espresso", en: "Espresso", ru: "Эспрессо" }, price: "1,40 €" },
    { label: { me: "Macchiato", en: "Macchiato", ru: "Макиато" }, price: "1,50 €" },
    { label: { me: "Velika kafa sa mlijekom", en: "Large coffee with milk", ru: "Большой кофе с молоком" }, price: "1,70 €" },
    { label: { me: "Cappuccino", en: "Cappuccino", ru: "Капучино" }, price: "1,90 €" },
    { label: { me: "Espresso sa sojinim mlijekom", en: "Espresso with soy milk", ru: "Эспрессо с соевым молоком" }, price: "1,80 €" },
    { label: { me: "Velika kafa sa sojinim mlijekom", en: "Large coffee with soy milk", ru: "Большой кофе с соевым молоком" }, price: "2,20 €" },
    { label: { me: "Nes Caffe", en: "Nes Caffe", ru: "Нес Кафе" }, price: "2,50 €" },
    { label: { me: "Čaj", en: "Tea", ru: "Чай" }, price: "1,50 €" },
    { label: { me: "Americano", en: "Americano", ru: "Американо" }, price: "1,40 €" },
  ],
  soft: [
    { label: { me: "Mala voda 0,33 l", en: "Small water 0.33 l", ru: "Малая вода 0,33 л" }, price: "1,50 €" },
    { label: { me: "Velika voda", en: "Large water", ru: "Большая вода" }, price: "3,50 €" },
    { label: { me: "Gazirani sokovi", en: "Carbonated soft drinks", ru: "Газированные напитки" }, price: "2,50 €" },
    { label: { me: "Voćni sokovi", en: "Fruit juices", ru: "Фруктовые соки" }, price: "2,50 €" },
    { label: { me: "Cedevita", en: "Cedevita", ru: "Цедевита" }, price: "2,20 €" },
    { label: { me: "Red Bull", en: "Red Bull", ru: "Ред Булл" }, price: "3,70 €" },
    { label: { me: "Guarana", en: "Guarana", ru: "Гуарана" }, price: "2,70 €" },
    { label: { me: "Ultra", en: "Ultra", ru: "Ультра" }, price: "2,70 €" },
  ],
  wine: [
    { label: { me: "Chardonnay", en: "Chardonnay", ru: "Шардоне" }, prices: [{ label: { me: "0,187 l", en: "0.187 l", ru: "0,187 л" }, value: "3,80 €" }, { label: { me: "0,7 l", en: "0.7 l", ru: "0,7 л" }, value: "18,00 €" }] },
    { label: { me: "Rose", en: "Rosé", ru: "Розе" }, prices: [{ label: { me: "0,187 l", en: "0.187 l", ru: "0,187 л" }, value: "3,80 €" }, { label: { me: "0,7 l", en: "0.7 l", ru: "0,7 л" }, value: "18,00 €" }] },
    { label: { me: "Vranac", en: "Vranac", ru: "Вранац" }, prices: [{ label: { me: "0,187 l", en: "0.187 l", ru: "0,187 л" }, value: "3,80 €" }, { label: { me: "0,7 l", en: "0.7 l", ru: "0,7 л" }, value: "18,00 €" }] },
    { label: { me: "Ž. Cvet", en: "Ž. Cvet", ru: "Ž. Cvet" }, prices: [{ label: { me: "0,187 l", en: "0.187 l", ru: "0,187 л" }, value: "5,00 €" }, { label: { me: "0,7 l", en: "0.7 l", ru: "0,7 л" }, value: "30,00 €" }] },
    { label: { me: "Graševina", en: "Graševina", ru: "Грашевина" }, prices: [{ label: { me: "0,187 l", en: "0.187 l", ru: "0,187 л" }, value: "4,50 €" }, { label: { me: "0,7 l", en: "0.7 l", ru: "0,7 л" }, value: "26,00 €" }] },
  ],
  aperitif: [
    { label: { me: "Amaro Montenegro ", en: "Amaro Montenegro", ru: "Amaro Montenegro" }, price: "2,70 €" },
    { label: { me: "Gorki List", en: "Gorki List", ru: "Горький Лист" }, price: "2,50 €" },
    { label: { me: "Baileys", en: "Baileys", ru: "Бейлис" }, price: "2,70 €" },
    { label: { me: "Gin Tonic", en: "Gin and tonic", ru: "Джин-тоник" }, price: "3,50 €" },
  ],
  spirits: [
    { label: { me: "Loza Institut", en: "Loza Institut", ru: "Лоза Институт" }, price: "3,00 €" },
    { label: { me: "Prvijenac", en: "Prvijenac", ru: "Првийенац" }, price: "3,00 €" },
    { label: { me: "Viljamovka", en: "Pear rakija", ru: "Грушевая ракия" }, price: "2,50 €" },
    { label: { me: "Dunja / Kajsija", en: "Quince / Apricot rakija", ru: "Айва / Абрикосовая ракия" }, price: "2,70 €" },
    { label: { me: "Peach šljiva", en: "Peach plum", ru: "Персик-слива" }, price: "3,30 €" },
    { label: { me: "Smirnoff", en: "Smirnoff", ru: "Смирнофф" }, price: "2,70 €" },
    { label: { me: "Gin", en: "Gin", ru: "Джин" }, price: "2,70 €" },
    { label: { me: "Red Label", en: "Red Label", ru: "Ред Лейбл" }, price: "3,00 €" },
    { label: { me: "Black Label", en: "Black Label", ru: "Блэк Лейбл" }, price: "4,00 €" },
    { label: { me: "Ballantine's", en: "Ballantine's", ru: "Баллантайнс" }, price: "2,50 €" },
    { label: { me: "Jack Daniel's", en: "Jack Daniel's", ru: "Джек Дэниелс" }, price: "3,50 €" },
    { label: { me: "Chivas", en: "Chivas", ru: "Чивас" }, price: "4,00 €" },
    { label: { me: "Jameson", en: "Jameson", ru: "Джемесон" }, price: "3,30 €" },
    { label: { me: "Jägermeister", en: "Jägermeister", ru: "Егермейстер" }, price: "2,70 €" },
    { label: { me: "Travarica", en: "Herbal rakija", ru: "Травяная ракия" }, price: "2,70 €" },
  ],
  beer: [
    { icon: "beer", label: { me: "Točeno pivo", en: "Draft beer", ru: "Разливное пиво" } },
    { icon: "beer", label: { me: "Lager", en: "Lager", ru: "Лагер" } },
    { icon: "beer", label: { me: "Tamno pivo", en: "Dark beer", ru: "Тёмное пиво" } },
    { icon: "beer", label: { me: "Pšenično pivo", en: "Wheat beer", ru: "Пшеничное пиво" } },
    { icon: "beer", label: { me: "Bezalkoholno pivo", en: "Non-alcoholic beer", ru: "Безалкогольное пиво" } },
  ],
  juice: [
    { label: { me: "Limunada", en: "Lemonade", ru: "Лимонад" }, price: "2,20 €" },
    { label: { me: "Pomorandža", en: "Fresh Orange juice", ru: "Свежевыжатый апельсиновый сок" }, price: "3,00 €" },
  ],
  breakfast: [
    dish(tr("Omlet šunka 350 g", "Ham omelette 350 g", "Омлет с ветчиной 350 г"), "4,30 €", tr("3 jaja, šunka, edamer sir, paradajz, domaći sir", "3 eggs, ham, Edam cheese, tomato, homemade cheese", "3 яйца, ветчина, сыр эдам, помидор, домашний сыр")),
    dish(tr("Omlet pršuta 350 g", "Prosciutto omelette 350 g", "Омлет с пршутом 350 г"), "4,60 €", tr("3 jaja, pršuta, edamer sir, paradajz, domaći sir", "3 eggs, prosciutto, Edam cheese, tomato, homemade cheese", "3 яйца, пршут, сыр эдам, помидор, домашний сыр")),
    dish(tr("Omlet povrće 350 g", "Vegetable omelette 350 g", "Овощной омлет 350 г"), "4,60 €", tr("3 jaja, crvena paprika, pečurke, tikvice", "3 eggs, red pepper, mushrooms, zucchini", "3 яйца, красный перец, грибы, кабачок")),
    dish(tr("Crnogorski doručak 450 g", "Montenegrin breakfast 450 g", "Черногорский завтрак 450 г"), "6,00 €", tr("3 jaja, njeguška kobasica, njeguška pršuta, sir, masline, paradajz", "3 eggs, Njeguši sausage, Njeguši prosciutto, cheese, olives, tomato", "3 яйца, негушская колбаса, негушский пршут, сыр, оливки, помидор")),
    dish(tr("Atina doručak 450 g", "Atina breakfast 450 g", "Завтрак Atina 450 г"), "6,50 €", tr("3 jaja, kobasica, pohovani kačkavalj, aromatični krompir, paradajz", "3 eggs, sausage, breaded cheese, seasoned potatoes, tomato", "3 яйца, колбаса, жареный сыр, ароматный картофель, помидор")),
    dish(tr("Domaće priganice", "Homemade fritters", "Домашние приганице"), "4,80 €", tr("Feta sir, krem, džem, med", "Feta cheese, cream spread, jam, honey", "Сыр фета, крем, джем, мёд")),
    dish(tr("Domaće pancerote", "Homemade pancerotti", "Домашние панцеротти"), "5,20 €", tr("Šunka, sir, paradajz sos", "Ham, cheese, tomato sauce", "Ветчина, сыр, томатный соус")),
    dish(tr("Zdravi doručak", "Healthy breakfast", "Полезный завтрак"), "5,20 €", tr("Ovsena kaša, orašasti plodovi, mlijeko ili jogurt", "Oatmeal, nuts, milk or yogurt", "Овсяная каша, орехи, молоко или йогурт")),
  ],
  sandwiches: [
    dish(tr("Tost sendvič 350 g", "Toast sandwich 350 g", "Тост-сэндвич 350 г"), "4,50 €", tr("Šunka, sir, tartar sos, pomfrit", "Ham, cheese, tartar sauce, fries", "Ветчина, сыр, соус тартар, картофель фри")),
    dish(tr("Tuna sendvič 350 g", "Tuna sandwich 350 g", "Сэндвич с тунцом 350 г"), "5,00 €", tr("Tunjevina u komadima, zelena salata, paradajz, biljni sir, pomfrit", "Tuna chunks, lettuce, tomato, plant-based cheese, fries", "Кусочки тунца, салат, помидор, растительный сыр, картофель фри")),
    dish(tr("Atina sendvič 350 g", "Atina sandwich 350 g", "Сэндвич Atina 350 г"), "5,50 €", tr("Pohovana piletina, zelena salata, tartar sos, paradajz, pomfrit", "Breaded chicken, lettuce, tartar sauce, tomato, fries", "Курица в панировке, салат, соус тартар, помидор, картофель фри")),
    dish(tr("Mornarski sendvič 350 g", "Sailor sandwich 350 g", "Матросский сэндвич 350 г"), "5,20 €", tr("Šunka, sir, kuvano jaje, svježi krastavac, majonez, pomfrit", "Ham, cheese, boiled egg, fresh cucumber, mayonnaise, fries", "Ветчина, сыр, варёное яйцо, свежий огурец, майонез, картофель фри")),
  ],
  tortillas: [
    dish(tr("Tortilja sa piletinom 400 g", "Chicken tortilla 400 g", "Тортилья с курицей 400 г"), "6,50 €", tr("Piletina, pavlaka, paradajz, zelena salata, pomfrit", "Chicken, sour cream, tomato, lettuce, fries", "Курица, сметана, помидор, салат, картофель фри")),
    dish(tr("Tortilja sa povrćem 400 g", "Vegetable tortilla 400 g", "Овощная тортилья 400 г"), "6,20 €", tr("Grilovano povrće, sir, tartar sos, pomfrit", "Grilled vegetables, cheese, tartar sauce, fries", "Овощи гриль, сыр, соус тартар, картофель фри")),
    dish(tr("Tortilja sa biftekom 400 g", "Beefsteak tortilla 400 g", "Тортилья с бифштексом 400 г"), "7,50 €", tr("Grilovani biftek, luk, senf, paradajz, zelena salata, pomfrit", "Grilled beefsteak, onion, mustard, tomato, lettuce, fries", "Бифштекс гриль, лук, горчица, помидор, салат, картофель фри")),
  ],
  appetizers: [
    dish(tr("Bruskete Caprese 300 g", "Caprese bruschetta 300 g", "Брускетта капрезе 300 г"), "5,30 €", tr("Paradajz, mocarela, bosiljak, začini", "Tomato, mozzarella, basil, spices", "Помидор, моцарелла, базилик, специи")),
    dish(tr("Bruskete losos 300 g", "Salmon bruschetta 300 g", "Брускетта с лососем 300 г"), "6,50 €", tr("Losos, paradajz, bosiljak, začini", "Salmon, tomato, basil, spices", "Лосось, помидор, базилик, специи")),
    dish(tr("Daska sireva 400 g", "Cheese board 400 g", "Сырная доска 400 г"), "14,50 €", tr("Tvrdi kravlji sir, koziji sir, njeguški sir", "Hard cow's cheese, goat cheese, Njeguši cheese", "Твёрдый коровий сыр, козий сыр, негушский сыр")),
    dish(tr("Crnogorski pjat za dvoje 500 g", "Montenegrin platter for two 500 g", "Черногорское плато на двоих 500 г"), "18,00 €", tr("Njeguška pršuta, mješavina sireva, masline, kajmak", "Njeguši prosciutto, cheese selection, olives, kajmak", "Негушский пршут, ассорти сыров, оливки, каймак")),
  ],
  soups: [
    dish(tr("Potaž dana", "Soup of the day", "Крем-суп дня"), "3,80 €"),
    dish(tr("Teleća čorba", "Veal soup", "Суп из телятины"), "3,50 €"),
  ],
  pasta: [
    dish(tr("Carbonara 400 g", "Carbonara 400 g", "Карбонара 400 г"), "8,00 €", tr("Taljatele, panceta, jaje, bijeli luk, sos", "Tagliatelle, pancetta, egg, garlic, sauce", "Тальятелле, панчетта, яйцо, чеснок, соус")),
    dish(tr("Gambori i tikvice 400 g", "Prawns and zucchini 400 g", "Креветки и кабачок 400 г"), "10,50 €", tr("Taljatele, gambori, čeri paradajz, šafran, tikvice, bijelo vino, sos", "Tagliatelle, prawns, cherry tomato, saffron, zucchini, white wine, sauce", "Тальятелле, креветки, черри, шафран, кабачок, белое вино, соус")),
    dish(tr("Biftek 400 g", "Beefsteak pasta 400 g", "Паста с бифштексом 400 г"), "12,50 €", tr("Taljatele, biftek, grilovano povrće, paradajz sos", "Tagliatelle, beefsteak, grilled vegetables, tomato sauce", "Тальятелле, бифштекс, овощи гриль, томатный соус")),
    dish(tr("Quattro formaggi 400 g", "Quattro formaggi 400 g", "Четыре сыра 400 г"), "8,00 €", tr("Penne, parmezan, gorgonzola, mocarela, edamer", "Penne, parmesan, gorgonzola, mozzarella, Edam cheese", "Пенне, пармезан, горгонзола, моцарелла, сыр эдам")),
    dish(tr("Penne sa povrćem 400 g", "Penne with vegetables 400 g", "Пенне с овощами 400 г"), "7,50 €", tr("Penne, grilovano povrće, paradajz sos", "Penne, grilled vegetables, tomato sauce", "Пенне, овощи гриль, томатный соус")),
    dish(tr("Frutti di mare 400 g", "Frutti di mare 400 g", "Фрутти ди маре 400 г"), "8,50 €", tr("Taljatele, morski plodovi, crveni sos", "Tagliatelle, seafood, red sauce", "Тальятелле, морепродукты, красный соус")),
    dish(tr("Pollo 400 g", "Pollo 400 g", "Полло 400 г"), "8,50 €", tr("Penne, piletina, tikvice, pavlaka za kuvanje", "Penne, chicken, zucchini, cooking cream", "Пенне, курица, кабачок, сливки")),
  ],
  risotto: [
    dish(tr("Pollo 400 g", "Chicken risotto 400 g", "Ризотто с курицей 400 г"), "8,70 €", tr("Pirinač, grilovana piletina, povrće", "Rice, grilled chicken, vegetables", "Рис, курица гриль, овощи")),
    dish(tr("Rižoto sa povrćem 400 g", "Vegetable risotto 400 g", "Овощное ризотто 400 г"), "7,50 €", tr("Pirinač, grilovano povrće, sos", "Rice, grilled vegetables, sauce", "Рис, овощи гриль, соус")),
    dish(tr("Crni rižoto 400 g", "Black risotto 400 g", "Чёрное ризотто 400 г"), "10,50 €", tr("Riža, sipa, crnilo sipe, maslinovo ulje, crni i bijeli luk, tikvica, peršun, maslac, parmezan, bijelo vino", "Rice, cuttlefish, cuttlefish ink, olive oil, onion, garlic, zucchini, parsley, butter, parmesan, white wine", "Рис, каракатица, чернила каракатицы, оливковое масло, лук, чеснок, кабачок, петрушка, масло, пармезан, белое вино")),
  ],
  madeToOrder: [
    dish(tr("Piletina na žaru 450 g", "Grilled chicken 450 g", "Курица на гриле 450 г"), "7,50 €", tr("Piletina, grilovano povrće, pomfrit", "Chicken, grilled vegetables, fries", "Курица, овощи гриль, картофель фри")),
    dish(tr("Piletina u sosu od pečurki 400 g", "Chicken in mushroom sauce 400 g", "Курица в грибном соусе 400 г"), "8,50 €", tr("Piletina, pavlaka za kuvanje, pečurke, pomfrit", "Chicken, cooking cream, mushrooms, fries", "Курица, сливки, грибы, картофель фри")),
    dish(tr("Piletina u gorgonzola sosu 400 g", "Chicken in gorgonzola sauce 400 g", "Курица в соусе горгонзола 400 г"), "9,50 €", tr("Piletina, pavlaka za kuvanje, pršuta, gorgonzola, pomfrit", "Chicken, cooking cream, prosciutto, gorgonzola, fries", "Курица, сливки, пршут, горгонзола, картофель фри")),
    dish(tr("Hrskava piletina 450 g", "Crispy chicken 450 g", "Хрустящая курица 450 г"), "8,20 €", tr("Piletina, corn flakes, jaje, sos, pomfrit", "Chicken, corn flakes, egg, sauce, fries", "Курица, кукурузные хлопья, яйцо, соус, картофель фри")),
    dish(tr("Bečka šnicla 350 g", "Viennese schnitzel 350 g", "Венский шницель 350 г"), "8,20 €", tr("Svinjski las kare, jaja, brašno, prezla, tartar sos, pomfrit", "Pork loin, eggs, flour, breadcrumbs, tartar sauce, fries", "Свиная корейка, яйца, мука, сухари, соус тартар, картофель фри")),
    dish(tr("Podgorički popeci 400 g", "Podgorica-style pork rolls 400 g", "Подгорицкие попеци 400 г"), "11,50 €", tr("Svinjski las kare, kajmak, pršuta, tartar sos, pomfrit", "Pork loin, kajmak, prosciutto, tartar sauce, fries", "Свиная корейка, каймак, пршут, соус тартар, картофель фри")),
    dish(tr("Atina burger 400 g", "Atina burger 400 g", "Бургер Atina 400 г"), "8,70 €", tr("Juneće meso, sir, paradajz, zelena salata, dresing, pomfrit", "Beef, cheese, tomato, lettuce, dressing, fries", "Говядина, сыр, помидор, салат, соус, картофель фри")),
    dish(tr("Biftek u senf sosu 350 g", "Beefsteak in mustard sauce 350 g", "Бифштекс в горчичном соусе 350 г"), "26,00 €", tr("Biftek, senf, med, grilovano povrće, aromatični krompir", "Beefsteak, mustard, honey, grilled vegetables, seasoned potatoes", "Бифштекс, горчица, мёд, овощи гриль, ароматный картофель")),
    dish(tr("Teleći medaljoni u sosu od pečurki 350 g", "Veal medallions in mushroom sauce 350 g", "Медальоны из телятины в грибном соусе 350 г"), "17,50 €", tr("Teletina, sos, pečurke, pekarski krompir", "Veal, sauce, mushrooms, roasted potatoes", "Телятина, соус, грибы, запечённый картофель")),
    dish(tr("Atina daska za dvoje 500 g", "Atina platter for two 500 g", "Плато Atina на двоих 500 г"), "14,00 €", tr("Dvije vrste kobasice, pohovani pileći štapići, pomfrit, pekarski krompir, sos", "Two types of sausage, breaded chicken strips, fries, roasted potatoes, sauce", "Два вида колбасок, куриные палочки в панировке, картофель фри, запечённый картофель, соус")),
  ],
  mealSalads: [
    dish(tr("Cezar salata 350 g", "Caesar salad 350 g", "Салат Цезарь 350 г"), "8,00 €", tr("Pileći file, slanina ili goveđa pršuta, zelena salata, čeri paradajz, dresing, krutoni, parmezan", "Chicken fillet, bacon or beef prosciutto, lettuce, cherry tomato, dressing, croutons, parmesan", "Куриное филе, бекон или говяжий пршут, салат, черри, соус, крутоны, пармезан")),
    dish(tr("Salata sa gamborima 300 g", "Prawn salad 300 g", "Салат с креветками 300 г"), "9,80 €", tr("Gambori, miks zelenih salata, čeri paradajz, dresing, parmezan", "Prawns, mixed green salad, cherry tomato, dressing, parmesan", "Креветки, микс зелёных салатов, черри, соус, пармезан")),
    dish(tr("Biftek salata 300 g", "Beefsteak salad 300 g", "Салат с бифштексом 300 г"), "9,80 €", tr("Biftek, miks zelenih salata, senf, med, čeri paradajz, krastavac, parmezan", "Beefsteak, mixed green salad, mustard, honey, cherry tomato, cucumber, parmesan", "Бифштекс, микс зелёных салатов, горчица, мёд, черри, огурец, пармезан")),
  ],
  seasonalSalads: [
    dish(tr("Šopska salata 250 g", "Shopska salad 250 g", "Шопский салат 250 г"), "3,50 €", tr("Krastavac, crni luk, crvena paprika, paradajz, feta sir, maslinovo ulje", "Cucumber, onion, red pepper, tomato, feta cheese, olive oil", "Огурец, лук, красный перец, помидор, сыр фета, оливковое масло")),
    dish(tr("Kupus salata 250 g", "Cabbage salad 250 g", "Салат из капусты 250 г"), "2,50 €"),
    dish(tr("Miks zelenih salata 250 g", "Mixed green salad 250 g", "Микс зелёных салатов 250 г"), "2,50 €"),
    dish(tr("Sezonska salata 250 g", "Seasonal salad 250 g", "Сезонный салат 250 г"), "2,50 €", tr("Miks sezonskog povrća", "Mixed seasonal vegetables", "Микс сезонных овощей")),
    dish(tr("Pečena paprika, 2 kom", "Roasted peppers, 2 pcs", "Печёный перец, 2 шт."), "3,00 €"),
  ],
  dessert: [
    dish(tr("Slatke palačinke, 2 kom", "Sweet pancakes, 2 pcs", "Сладкие блинчики, 2 шт."), "3,50 €", tr("Nutella i Plazma, krem i Plazma ili džem", "Nutella and Plazma, cream and Plazma, or jam", "Nutella и Plazma, крем и Plazma или джем")),
    dish(tr("Kolač", "Cake", "Десерт"), null),
  ],
  extras: [
    dish(tr("Pomfrit 200 g", "French fries 200 g", "Картофель фри 200 г"), "2,80 €"),
    dish(tr("Pekarski krompir", "Roasted potatoes", "Запечённый картофель"), "3,30 €"),
    dish(tr("Miks", "Mix", "Микс"), "0,50 €"),
    dish(tr("Kuver", "Cover charge", "Кувер"), "1,50 €"),
  ],
};

const ALL_CATEGORIES = [
  ...DRINKS.map((item) => ({ ...item, menu: "drinks", route: `/karta-pica/${item.key}` })),
  ...FOOD.map((item) => ({ ...item, menu: "food", route: `/jelovnik/${item.key}` })),
];

const ROUTES = Object.fromEntries(ALL_CATEGORIES.map((item) => [item.route, item]));
const app = document.querySelector("#app");

let lang = "me";
let languageOpen = false;
let burgerOpen = false;
let burgerPanel = null;
let splash = "center";
let splashStarted = false;
document.body.classList.add("splash-active");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function iconMarkup(name) {
  if (name === "wrap") {
    return `
      <svg class="wrap-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 48C7 27 22 10 42 10s15 17 15 38c0 5-3 8-8 8H15c-5 0-8-3-8-8Z" />
        <path d="M20 51c0-18 9-32 27-39" />
        <circle cx="43" cy="39" r="2.3" fill="currentColor" stroke="none" />
        <circle cx="49" cy="45" r="2.3" fill="currentColor" stroke="none" />
        <circle cx="38" cy="46" r="2.3" fill="currentColor" stroke="none" />
      </svg>
    `;
  }

  if (name === "bruschetta") {
    return `
      <svg class="bruschetta-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m7 34 4-16c1-4 10-5 13-1l5 17Z" />
        <path d="m20 35 5-18c1-4 11-5 14-1l4 19Z" />
        <circle cx="15" cy="25" r="2" />
        <circle cx="32" cy="25" r="2" />
        <circle cx="36" cy="31" r="1.5" />
        <path d="M17 20c2-3 5-3 7-1-2 2-4 3-7 1Z" />
        <path d="M6 39h37" />
        <path d="M10 42h29" />
      </svg>
    `;
  }

  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function itemLabelMarkup(label) {
  const quantity = label.match(/^(.*?)(?:,)?\s+(\d+(?:[.,]\d+)?\s*(?:g|kom|pcs|г|шт\.?))$/iu);

  if (!quantity) {
    return label;
  }

  return `${quantity[1]} <span class="item-quantity">(${quantity[2]})</span>`;
}

function flagMarkup(code) {
  if (code === "me") {
    return `<img class="flag-image" src="/flag-me.svg" alt="" aria-hidden="true" />`;
  }

  if (code === "en") {
    return `<svg width="28" height="19" viewBox="0 0 60 41" aria-hidden="true"><rect width="60" height="41" fill="#123274"/><path d="M0 0 60 41M60 0 0 41" stroke="#fff" stroke-width="8"/><path d="M0 0 60 41M60 0 0 41" stroke="#c8102e" stroke-width="3"/><path d="M30 0v41M0 20.5h60" stroke="#fff" stroke-width="12"/><path d="M30 0v41M0 20.5h60" stroke="#c8102e" stroke-width="5"/></svg>`;
  }

  return `<svg width="28" height="19" viewBox="0 0 60 41" aria-hidden="true"><rect width="60" height="13.67" y="0" fill="#fff"/><rect width="60" height="13.67" y="13.67" fill="#0039a6"/><rect width="60" height="13.67" y="27.33" fill="#d52b1e"/></svg>`;
}

function normalizePath() {
  const path = window.location.pathname;
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

function scrollToPageTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function navigate(path) {
  history.pushState({}, "", path);
  languageOpen = false;
  burgerOpen = false;
  burgerPanel = null;
  render();
  scrollToPageTop();
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function runSplash() {
  if (splash === "done" || splashStarted) {
    return;
  }

  const introLogo = document.querySelector(".intro-logo");
  const brandLogo = document.querySelector(".brand img");
  const splashLayer = document.querySelector(".splash");
  if (!introLogo || !brandLogo || !splashLayer) {
    return;
  }

  splashStarted = true;

  try {
    await Promise.all([introLogo.decode(), brandLogo.decode()]);
  } catch {
    // The browser can still animate an already cached image if decode is unavailable.
  }

  const target = brandLogo.getBoundingClientRect();
  const mobile = window.matchMedia("(max-width: 520px)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionDuration = reducedMotion ? 420 : mobile ? 2050 : 1900;
  const startWidth = Math.min(mobile ? window.innerWidth * 0.78 : window.innerWidth * 0.42, mobile ? 310 : 460);
  const logoRatio = introLogo.naturalHeight / introLogo.naturalWidth || 2 / 3;
  const startHeight = startWidth * logoRatio;
  const startLeft = (window.innerWidth - startWidth) / 2;
  const startTop = (window.innerHeight - startHeight) / 2;
  const scale = startWidth / target.width;
  const startTranslate = `${startLeft}px ${startTop}px`;
  const endTranslate = `${target.left}px ${target.top}px`;

  introLogo.style.width = `${target.width}px`;
  introLogo.style.translate = startTranslate;
  introLogo.style.scale = `${scale}`;
  introLogo.style.visibility = "visible";

  const revealTargets = [
    { element: document.querySelector(".topbar"), delay: 0, duration: motionDuration * 0.72 },
    ...[...document.querySelectorAll(".column-rail")].map((element) => ({
      element,
      delay: reducedMotion ? 0 : 120,
      duration: motionDuration * 0.76,
    })),
    { element: document.querySelector(".page-shell"), delay: reducedMotion ? 0 : 260, duration: motionDuration * 0.82 },
  ].filter((item) => item.element);

  revealTargets.forEach(({ element }) => {
    element.style.opacity = "0";
  });

  await wait(reducedMotion ? 120 : 560);
  document.body.classList.add("splash-moving");

  const movement = introLogo.animate(
    [
      { translate: startTranslate, scale: `${scale}` },
      { translate: endTranslate, scale: "1" },
    ],
    {
      duration: motionDuration,
      easing: "cubic-bezier(0.45, 0, 0.55, 1)",
      fill: "forwards",
    },
  );

  const backdropReveal = splashLayer.animate(
    [
      { backgroundColor: "rgba(246, 240, 226, 1)", offset: 0 },
      { backgroundColor: "rgba(246, 240, 226, 0.98)", offset: 0.1 },
      { backgroundColor: "rgba(246, 240, 226, 0)", offset: 1 },
    ],
    {
      duration: motionDuration,
      easing: "linear",
      fill: "forwards",
    },
  );

  const contentReveal = revealTargets.map(({ element, delay, duration }) =>
    element.animate([{ opacity: 0 }, { opacity: 1 }], {
      delay,
      duration,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
    }),
  );

  try {
    await Promise.all([movement.finished, backdropReveal.finished, ...contentReveal.map((animation) => animation.finished)]);
  } catch {
    // A resize or navigation may cancel the animation; finish in the target state.
  }

  introLogo.style.translate = endTranslate;
  introLogo.style.scale = "1";
  document.body.classList.add("splash-arrived", "splash-finished");
  await wait(reducedMotion ? 80 : 300);

  splash = "done";
  document.body.classList.remove("splash-active", "splash-moving", "splash-arrived", "splash-finished");
  render();
}

function header(text) {
  const languages = ["me", "en", "ru"]
    .map(
      (code) => `
        <button class="${code === lang ? "active" : ""}" type="button" data-lang="${code}" aria-label="Jezik ${code}">
          ${flagMarkup(code)}
        </button>
      `,
    )
    .join("");

  return `
    <header class="topbar">
      <button class="brand" type="button" data-route="/" aria-label="Atina 2">
        <img src="/atina-logo.png" alt="Atina 2 restoran" />
      </button>

      <div class="toolbar">
        <div class="language">
          <button class="flag-button" type="button" data-language-toggle aria-label="Izbor jezika" aria-expanded="${languageOpen}">
            ${flagMarkup(lang)}
            <span class="chevron">⌄</span>
          </button>
          ${languageOpen ? `<div class="language-menu">${languages}</div>` : ""}
        </div>
        <button class="menu-button" type="button" data-burger-toggle aria-label="Meni">${burgerOpen ? "×" : "☰"}</button>
      </div>

      ${burgerOpen ? burgerMenu(text) : ""}
    </header>
  `;
}

function burgerMenu(text) {
  if (burgerPanel === "drinks") {
    return submenu(text.drinksMenu, DRINKS, text, "drinks");
  }

  if (burgerPanel === "food") {
    return submenu(text.foodMenu, FOOD, text, "food");
  }

  return `
    <nav class="burger-panel" aria-label="Meni">
      <button type="button" data-burger-panel="drinks">
        <span>${text.drinksMenu}</span>
        <strong>›</strong>
      </button>
      <button type="button" data-burger-panel="food">
        <span>${text.foodMenu}</span>
        <strong>›</strong>
      </button>
    </nav>
  `;
}

function submenu(title, items, text, menu) {
  const rows = items
    .map((item) => {
      const route = menu === "drinks" ? `/karta-pica/${item.key}` : `/jelovnik/${item.key}`;
      return `
        <button type="button" data-route="${route}">
          <span class="mini-icon">${iconMarkup(item.icon)}</span>
          <span>${text.categories[item.key]}</span>
        </button>
      `;
    })
    .join("");

  return `
    <nav class="burger-panel" aria-label="${title}">
      <button class="back-row" type="button" data-burger-back>
        <strong>‹</strong>
        <span>${title}</span>
      </button>
      ${rows}
    </nav>
  `;
}

function home(text) {
  return `
    <main class="page-shell home-shell">
      <section class="cards-only">
        ${menuSection(text.drinksMenu, DRINKS.map((item) => ({ ...item, menu: "drinks", route: `/karta-pica/${item.key}` })), text)}
        ${menuSection(text.foodMenu, FOOD.map((item) => ({ ...item, menu: "food", route: `/jelovnik/${item.key}` })), text)}
      </section>
    </main>
  `;
}

function menuSection(title, items, text) {
  return `
    <section class="menu-section">
      <div class="section-title">
        <span></span>
        <h2>${title}</h2>
        <span></span>
      </div>
      <div class="card-grid">
        ${items.map((item) => card(item, text)).join("")}
      </div>
    </section>
  `;
}

function card(item, text) {
  return `
    <button class="category-card" type="button" data-route="${item.route}">
      <span class="card-cap"></span>
      <span class="card-icon">${iconMarkup(item.icon)}</span>
      <strong>${text.categories[item.key]}</strong>
    </button>
  `;
}

function emptySection(route, text) {
  const items = MENU_ITEMS[route.key] || [];

  return `
    <main class="page-shell category-shell">
      <section class="category-section">
        <div class="category-back-row">
          <button class="back-link" type="button" data-route="/" aria-label="${text.back}">←</button>
        </div>
        <div class="section-title category-section-title">
          <span></span>
          <h1>${text.categories[route.key]}</h1>
          <span></span>
        </div>
        <div class="item-grid">
          ${items
            .map(
              (item) => `
                <article class="menu-item-card">
                  <span class="card-cap" aria-hidden="true"></span>
                  <strong>${itemLabelMarkup(item.label[lang])}</strong>
                  ${item.details ? `<p class="item-details">${item.details[lang]}</p>` : ""}
                  ${item.price ? `<span class="item-price">${item.price}</span>` : ""}
                  ${
                    item.prices
                      ? `<div class="item-price-list">
                          ${item.prices
                            .map(
                              (price) => `
                                <span class="item-price-row">
                                  <small>${price.label[lang]}</small>
                                  <b>${price.value}</b>
                                </span>
                              `,
                            )
                            .join("")}
                        </div>`
                      : ""
                  }
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </main>
  `;
}

function render() {
  const text = COPY[lang];
  const route = ROUTES[normalizePath()];

  app.innerHTML = `
    <div class="app-frame">
      ${header(text)}
      <div class="column-stage" aria-hidden="true">
        <div class="column-rail column-left">
          <img class="column" src="/atina-column-engraved.png" alt="" />
        </div>
        <div class="column-rail column-right">
          <img class="column" src="/atina-column-engraved.png" alt="" />
        </div>
      </div>
      ${route ? emptySection(route, text) : home(text)}
      ${
        splash !== "done"
          ? `<div class="splash"><img class="intro-logo" src="/atina-logo.png" alt="Atina 2 restoran" /></div>`
          : ""
      }
    </div>
  `;

  window.lucide?.createIcons({ attrs: { "stroke-width": 1.65 } });

  requestAnimationFrame(runSplash);
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    navigate(routeButton.dataset.route);
    return;
  }

  if (event.target.closest("[data-language-toggle]")) {
    languageOpen = !languageOpen;
    burgerOpen = false;
    burgerPanel = null;
    render();
    return;
  }

  const langButton = event.target.closest("[data-lang]");
  if (langButton) {
    lang = langButton.dataset.lang;
    languageOpen = false;
    render();
    return;
  }

  if (event.target.closest("[data-burger-toggle]")) {
    burgerOpen = !burgerOpen;
    languageOpen = false;
    burgerPanel = null;
    render();
    return;
  }

  const panelButton = event.target.closest("[data-burger-panel]");
  if (panelButton) {
    burgerPanel = panelButton.dataset.burgerPanel;
    render();
    return;
  }

  if (event.target.closest("[data-burger-back]")) {
    burgerPanel = null;
    render();
  }
});

window.addEventListener("popstate", () => {
  render();
  scrollToPageTop();
});
render();
