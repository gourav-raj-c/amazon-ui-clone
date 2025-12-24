// -------- SEARCH FUNCTIONALITY --------
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please enter something to search");
  } else {
    alert(`Searching for: "${query}"`);
  }
});

// -------- CART COUNTER --------
// -------- CART COUNTER (FIXED) --------
let cartCount = 0;
const cart = document.querySelector(".nav-cart");

const cartBadge = document.createElement("span");
cartBadge.style.marginLeft = "5px";
cartBadge.style.color = "orange";
cartBadge.textContent = `(0)`;
cart.appendChild(cartBadge);

const seeMoreButtons = document.querySelectorAll(".box-content p");

seeMoreButtons.forEach((btn) => {
  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    cartCount++;
    cartBadge.textContent = `(${cartCount})`;
  });
});

// -------- BACK TO TOP --------
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// -------- SEE MORE FEEDBACK --------
document.querySelectorAll(".box-content p").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseout", () => {
    link.style.textDecoration = "none";
  });
});
