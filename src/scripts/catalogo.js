async function fetchCatalogo() {
  const response = await fetch("./src/catalogo.json");
  const catalogo = await response.json();

  return catalogo;
}

export { fetchCatalogo };
