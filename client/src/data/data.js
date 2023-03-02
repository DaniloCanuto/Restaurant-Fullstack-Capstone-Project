import rest1 from "../assets/images/burguer-joint.png";
import rest2 from "../assets/images/corleone.png";
import rest3 from "../assets/images/3amigos.png";
import burger1 from "../assets/images/original-combo.jpg";
import burger2 from "../assets/images/the-clogger.jpg";
import burger3 from "../assets/images/los-3-amigos.jpg";
import pizza1 from "../assets/images/mozzarella.jpg";
import pizza2 from "../assets/images/veggie.jpg";
import pizza3 from "../assets/images/pepperoni.jpg";
import mexican1 from "../assets/images/steak-burrito.jpg";
import mexican2 from "../assets/images/chicken-veggie.jpg";
import mexican3 from "../assets/images/quesadilla.jpg";

export const foodTypes = [
  { name: "burger", img: rest1, id: crypto.randomUUID() },
  { name: `pizza`, img: rest2, id: crypto.randomUUID() },
  { name: "burrito", img: rest3, id: crypto.randomUUID() },
];

export const foods = [
  {
    name: "The Original Combo",
    category: "burger",
    img: burger1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 7),
  },
  {
    name: "The Clogger",
    category: "burger",
    img: burger2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 10),
  },
  {
    name: "Triple Trouble",
    category: "burger",
    img: burger3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 40 + 7),
  },
  {
    name: "Mozzarella Originale",
    category: "pizza",
    img: pizza1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 1),
  },
  {
    name: "Veggie Prime",
    category: "pizza",
    img: pizza2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 9),
  },
  {
    name: "Pepperoni",
    category: "pizza",
    img: pizza3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 5),
  },
  {
    name: "Steak Burrito",
    category: "mexican",
    img: mexican1,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 2),
  },
  {
    name: "Chicken Burrito",
    category: "mexican",
    img: mexican2,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 20 + 3),
  },
  {
    name: "Quesadilla",
    category: "mexican",
    img: mexican3,
    id: crypto.randomUUID(),
    price: Math.floor(Math.random() * 30 + 5),
  },
];
