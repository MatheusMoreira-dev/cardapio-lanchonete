const cartModal = document.querySelector("#cartModal");
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

openCartBtn.addEventListener("click", openCartModal);
closeCartBtn.addEventListener("click", closeCartModal);
document.addEventListener("click", (e) => {
  if (e.target == cartModal) closeCartModal();
});
