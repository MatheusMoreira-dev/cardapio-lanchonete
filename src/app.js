import { showInHamburguerMenu } from "./scripts/menuHamburguer.js";
import { showInBebidaMenu } from "./scripts/menuBebidas.js";

let hamburguer = {
  picture: "./src/assets/hamb-1.png",
  name: "Hámburguer Smash",
  description: "Pão Brioche, 2 blends de carne bovina, alface, tomate",
  price: 12,
};

let bebida = {
  picture: "./src/assets/refri-1.png",
  name: "Coca-cola",
  price: 1,
};

for (let i = 0; i < 20; i++) {
  showInHamburguerMenu(hamburguer);
  showInBebidaMenu(bebida);
}
