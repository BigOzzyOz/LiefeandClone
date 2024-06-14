let restaurant = {
  'name': 'Pizza Avanti',
  'owner': 'Mario Rossi',
  'address': {
    'street': 'Musterstraße 123',
    'city': '12345 Musterstadt',
    'country': 'Deutschland'
  },
  'openingHours': {
    'monday': '14:00 - 22:00',
    'tuesday': '14:00 - 22:00',
    'wednesday': '14:00 - 22:00',
    'thursday': 'Ruhetag',
    'friday': '14:00 - 22:00',
    'saturday': '14:00 - 24:00',
    'sunday': '14:00 - 24:00'
  },
  'deliverCost': 2.5,
  'minOrderVolume': 8,
  'liked': false,
  'images': ['assets/img/img1.jpg', 'assets/img/img2.jpg', 'assets/img/img3.jpg', 'assets/img/img4.jpg', 'assets/img/img5.jpg', 'assets/img/img6.jpg', 'assets/img/img7.jpg', 'assets/img/img8.jpg', 'assets/img/img9.jpg', 'assets/img/img10.jpg', 'assets/img/img11.jpg'],
  'menu': [
    {
      'name': 'Salat',
      'description': 'Alle Salate und Bowls werden täglich frisch mit einem Premium Salat-Mix zubereitet.',
      'meals': [
        {
          'name': 'Gemischter Salat',
          'ingredients': 'mit grünem Salat, Tomaten, Gurken, Paprika, Peperoni, Oliven und Zwiebeln',
          'price': 10
        },
        {
          'name': 'Caesar Salat',
          'ingredients': 'mit Römersalat, Parmesan, Croutons und Caesar-Dressing',
          'price': 12
        },
        {
          'name': 'Griechischer Salat',
          'ingredients': 'mit Tomaten, Gurken, Paprika, Zwiebeln, Feta und Oliven',
          'price': 11
        },
        {
          'name': 'Thunfisch Salat',
          'ingredients': 'mit grünem Salat, Thunfisch, Mais, Zwiebeln und Oliven',
          'price': 13
        },
        {
          'name': 'Nizza Salat',
          'ingredients': 'mit grünem Salat, Thunfisch, Ei, Bohnen, Tomaten, Oliven und Zwiebeln',
          'price': 14
        }
      ]
    },
    {
      'name': 'Vorspeisen',
      'description': 'Unsere Vorspeisen sind der perfekte Start in Ihr Menü.',
      'meals': [
        {
          'name': 'Bruschetta',
          'price': 6
        },
        {
          'name': 'Caprese',
          'price': 8
        },
        {
          'name': 'Antipasti Platte',
          'price': 12
        },
        {
          'name': 'Carpaccio',
          'price': 10
        },
        {
          'name': 'Minestrone',
          'price': 7
        }
      ]
    },
    {
      'name': 'Pizza',
      'description': 'Unsere Pizzen werden im Steinofen gebacken und mit frischen Zutaten belegt.',
      'meals': [
        {
          'name': 'Margherita',
          'ingredients': 'mit Tomatensauce und Mozzarella',
          'price': 8
        },
        {
          'name': 'Salami',
          'ingredients': 'mit Tomatensauce, Mozzarella und Salami',
          'price': 10
        },
        {
          'name': 'Prosciutto',
          'ingredients': 'mit Tomatensauce, Mozzarella und Schinken',
          'price': 10
        },
        {
          'name': 'Vegetarisch',
          'ingredients': 'mit Tomatensauce, Mozzarella, Paprika, Zwiebeln, Oliven und Pilzen',
          'price': 12
        },
        {
          'name': 'Quattro Formaggi',
          'ingredients': 'mit Tomatensauce und vier Käsesorten',
          'price': 13
        }
      ]
    },
    {
      'name': 'Nudeln',
      'description': 'Unsere Pastagerichte werden frisch zubereitet und mit hochwertigen Zutaten verfeinert.',
      'meals': [
        {
          'name': 'Spaghetti Bolognese',
          'ingredients': 'mit Hackfleischsauce und Parmesan',
          'price': 11
        },
        {
          'name': 'Penne Arrabbiata',
          'ingredients': 'mit scharfer Tomatensauce und Knoblauch',
          'price': 10
        },
        {
          'name': 'Lasagne',
          'ingredients': 'mit Hackfleisch, Tomatensauce, Béchamelsauce und Käse',
          'price': 12
        },
        {
          'name': 'Tagliatelle al Pesto',
          'ingredients': 'mit Pesto-Sauce und Parmesan',
          'price': 11
        },
        {
          'name': 'Ravioli mit Ricotta und Spinat',
          'ingredients': 'mit Sahnesauce und Parmesan',
          'price': 13
        }
      ]
    },
    {
      'name': 'Überbackenes',
      'description': 'Unsere überbackenen Gerichte werden mit Käse im Ofen gratiniert.',
      'meals': [
        {
          'name': 'Überbackene Aubergine',
          'ingredients': 'mit Tomatensauce und Mozzarella',
          'price': 12
        },
        {
          'name': 'Überbackene Zucchini',
          'ingredients': 'mit Hackfleischsauce und Käse',
          'price': 13
        },
        {
          'name': 'Überbackene Kartoffeln',
          'ingredients': 'mit Sahnesauce und Käse',
          'price': 10
        },
        {
          'name': 'Überbackenes Hähnchen',
          'ingredients': 'mit Tomatensauce, Mozzarella und Basilikum',
          'price': 14
        },
        {
          'name': 'Überbackene Pilze',
          'ingredients': 'mit Spinat und Käse',
          'price': 11
        }
      ]
    },
    {
      'name': 'Fleischgerichte',
      'description': 'Unsere Fleischgerichte werden mit frischen Zutaten und viel Liebe zubereitet.',
      'meals': [
        {
          'name': 'Rindersteak',
          'ingredients': 'mit Kräuterbutter und Pommes Frites',
          'price': 18
        },
        {
          'name': 'Hähnchenbrust',
          'ingredients': 'mit Reis und Gemüse',
          'price': 15
        },
        {
          'name': 'Schweineschnitzel',
          'ingredients': 'mit Kartoffelsalat',
          'price': 14
        },
        {
          'name': 'Lammkoteletts',
          'ingredients': 'mit Rosmarinkartoffeln und Ratatouille',
          'price': 20
        },
        {
          'name': 'Hackfleischbällchen',
          'ingredients': 'mit Tomatensauce und Spaghetti',
          'price': 13
        }
      ]
    },
    {
      'name': 'Fisch',
      'description': 'Unsere Fischgerichte sind frisch und lecker.',
      'meals': [
        {
          'name': 'Gegrillter Lachs',
          'ingredients': 'mit Zitronenbutter und Spargel',
          'price': 17
        },
        {
          'name': 'Garnelen in Knoblauch',
          'ingredients': 'mit Knoblauchbutter und Reis',
          'price': 18
        },
        {
          'name': 'Zanderfilet',
          'ingredients': 'mit Kartoffeln und Gemüse',
          'price': 16
        },
        {
          'name': 'Thunfischsteak',
          'ingredients': 'mit Sesamkruste und Salat',
          'price': 19
        },
        {
          'name': 'Fischsuppe',
          'ingredients': 'mit verschiedenen Fischsorten und Gemüse',
          'price': 14
        }
      ]
    },
    {
      'name': 'Spezialitäten',
      'description': 'Unsere Spezialitäten bieten einzigartige Geschmackserlebnisse.',
      'meals': [
        {
          'name': 'Trüffelrisotto',
          'ingredients': 'mit Trüffelöl und Parmesan',
          'price': 22
        },
        {
          'name': 'Ossobuco',
          'ingredients': 'mit Polenta und Gremolata',
          'price': 24
        },
        {
          'name': 'Saltimbocca alla Romana',
          'ingredients': 'mit Kalbfleisch, Schinken und Salbei',
          'price': 21
        },
        {
          'name': 'Pasta mit Meeresfrüchten',
          'ingredients': 'mit frischen Meeresfrüchten und Tomatensauce',
          'price': 20
        },
        {
          'name': 'Gnocchi mit Gorgonzola',
          'ingredients': 'mit Gorgonzolasauce und Walnüssen',
          'price': 18
        }
      ]
    },
    {
      'name': 'Kids',
      'description': 'Unsere Gerichte für Kinder sind kindgerecht portioniert und zubereitet.',
      'meals': [
        {
          'name': 'Kinderpizza',
          'ingredients': 'mit Tomatensauce und Mozzarella',
          'price': 6
        },
        {
          'name': 'Chicken Nuggets',
          'ingredients': 'mit Pommes',
          'price': 7
        },
        {
          'name': 'Spaghetti mit Tomatensauce',
          'price': 5
        },
        {
          'name': 'Fischstäbchen',
          'ingredients': 'mit Kartoffelpüree',
          'price': 6
        },
        {
          'name': 'Mini Burger',
          'ingredients': 'mit Pommes',
          'price': 8
        }
      ]
    },
    {
      'name': 'Desserts',
      'description': 'Lass dich von unseren süßen Köstlichkeiten verführen.',
      'meals': [
        {
          'name': 'Tiramisu',
          'price': 6
        },
        {
          'name': 'Panna Cotta',
          'price': 5
        },
        {
          'name': 'Gelato',
          'price': 4
        },
        {
          'name': 'Zitronensorbet',
          'price': 4
        },
        {
          'name': 'Schokoladenkuchen',
          'price': 6
        }
      ]
    },
    {
      'name': 'Getränke',
      'description': 'Unsere erfrischenden Getränke ergänzen perfekt Ihre Mahlzeit.',
      'meals': [
        {
          'name': 'Mineralwasser',
          'price': 2
        },
        {
          'name': 'Cola',
          'price': 3
        },
        {
          'name': 'Apfelsaft',
          'price': 3
        },
        {
          'name': 'Orangensaft',
          'price': 3
        },
        {
          'name': 'Bier (0,5l)',
          'price': 4
        }
      ]
    }
  ]
};


