const cartModal = document.querySelector("#cartModal");
const cartItems = document.querySelector("#cartItems");
const openCartBtn = document.querySelector("#openCartBtn");
const closeCartBtn = document.querySelector("#closeCartBtn");

function openCartModal() {
  cartModal.classList.replace("hidden", "flex");
  document.querySelector("body").classList.add("overflow-hidden");
}

function closeCartModal() {
  cartModal.classList.replace("flex", "hidden");
  document.querySelector("body").classList.remove("overflow-hidden");
}

function renderOrderItem({ name, quantity, unitPrice }) {
  const getTotal = () => {
    const result = Number(quantity) * Number(unitPrice);
    const formatter = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRl",
    });

    return formatter.format(result);
  };

  const strHTML = `
    <div class="flex w-full gap-3">
      <div class="flex gap-1 items-center">
        <button class="text-xl text-zinc-600">
          <i class="fa-solid fa-square-minus"></i>
        </button>

        <span class="font-mono">${quantity || 0}</span>

        <button class="text-xl text-red-400">
          <i class="fa-solid fa-square-plus"></i>
        </button>
      </div>

      <span class="grow">${name || "Nome inválido"}</span>
      <span>${getTotal()}</span>
    </div>`;

  return strHTML;
}

function listOrderItems(orderItems) {
  const cartItemsTotal = document.querySelector("#cartItemsTotal");

  for (let item of orderItems) cartItems.innerHTML += renderOrderItem(item);
}

const items = [{ name: "Teste A", quantity: 12, unitPrice: 10 }];
listOrderItems(items);

function sendOrder({ bairro, cidade, endereco, orderItems }) {}

openCartBtn.addEventListener("click", openCartModal);
closeCartBtn.addEventListener("click", closeCartModal);
document.addEventListener("click", (e) => {
  if (e.target == cartModal) closeCartModal();
});
