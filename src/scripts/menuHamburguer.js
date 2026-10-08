const menuHamburguers = document.querySelector("#menuHamburguers");

function hamburguerRender(hamburguer = { picture, name, description, price }) {
  const formatter = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const strHTML = `<div class="flex px-4 py-2 shadow-lg/10 bg-zinc-50 rounded-md">
      <!--Imagem Item-->
      <img
        src="${hamburguer.picture}"
        alt="imagem-item"
        class="w-18 h-18 md:w-24 md:h-24 rounded-xl object-center object-cover self-center"
      />

      <div class="px-2 flex grow flex-col">
        <!--Nome Item-->
        <p class="font-bold text-sm md:text-base">${hamburguer.name}</p>

        <!--Descrição Item-->
        <span class="text-sm">${hamburguer.description}</span>

        <!--Preço e Botão-->
        <div class="mt-2 lg:mt-4 flex justify-between items-center">
        <p class="font-medium">${formatter.format(hamburguer.price)}</p>

        <button class="bg-red-400 px-3 rounded">
            <i class="fa-solid fa-basket-shopping text-white"></i>
        </button>
        </div>
      </div>
    </div>`;

  return strHTML;
}

function showInHamburguerMenu(hamburguer) {
  const render = hamburguerRender(hamburguer);
  menuHamburguers.innerHTML += render;
}

export { showInHamburguerMenu };
