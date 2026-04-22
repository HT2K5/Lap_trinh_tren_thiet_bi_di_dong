const data = {
  categories: ["All Coffee", "Machiato", "Latte", "Americano", "Espresso"],
promo: {
  image: require("./assets/Banner.png"),
},
  coffees: [
    {
      id: "1",
      name: "Caffe Mocha",
      category: "Latte",
      tag: "Deep Foam",
      type: "Ice/Hot",
      price: 4.53,
      rating: 4.8,
      reviews: 230,
      description: "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam.",
      image: require("./assets/1.png"),
      sizes: ["S", "M", "L"]
    },
    {
      id: "2",
      name: "Flat White",
      category: "Espresso",
      tag: "Espresso",
      type: "Hot",
      price: 3.53,
      rating: 4.8,
      reviews: 180,
      description: "Flat white is a coffee drink consisting of espresso with microfoam, resulting in a stronger flavor with a velvety texture.",
      image: require("./assets/2.png"),
      sizes: ["S", "M", "L"]
    },
    {
      id: "3",
      name: "Cappuccino",
      category: "Machiato",
      tag: "Machiato",
      type: "Ice/Hot",
      price: 4.20,
      rating: 4.8,
      reviews: 315,
      description: "Cappuccino is an espresso-based coffee drink prepared with steamed milk foam.",
      image: require("./assets/3.png"),
      sizes: ["S", "M", "L"]
    },
    {
      id: "4",
      name: "Americano",
      category: "Americano",
      tag: "Dark Roast",
      type: "Hot",
      price: 3.10,
      rating: 4.7,
      reviews: 200,
      description: "Caffe Americano is prepared by diluting an espresso shot with hot water.",
      image: require("./assets/4.png"),
      sizes: ["S", "M", "L"]
    },
  ]
};

export default data;