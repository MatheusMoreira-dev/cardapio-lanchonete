import { showInHamburguerMenu } from "./scripts/menuHamburguer.js";
import { showInBebidaMenu } from "./scripts/menuBebidas.js";
import { fetchCatalogo } from "./scripts/catalogo.js";

async function carregarMenu() {
  const catalogo = await fetchCatalogo();
  catalogo.hamburguers.forEach(showInHamburguerMenu);
  catalogo.bebidas.forEach(showInBebidaMenu);
}

carregarMenu();
