import { showInHamburguerMenu } from "./scripts/menuHamburguer.js";

let hamburguer = {
  picture: "./src/assets/hamb-1.png",
  name: "Hámburguer Smash",
  description: "Pão Brioche, 2 blends de carne bovina, alface, tomate",
  price: 12,
};

for (let i = 0; i < 20; i++) {
  showInHamburguerMenu(hamburguer);
}
