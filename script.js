// TYPING EFFECT

const text =
  "Explore powerful AI tools for coding, design, productivity, creativity, and innovation.";

let index = 0;

function typeEffect() {
  document.getElementById("typing-text").innerHTML =
    text.slice(0, index);

  index++;

  if (index <= text.length) {
    setTimeout(typeEffect, 50);
  }
}

typeEffect();

// SEARCH FILTER

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

  const filter = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll(".tool-card");

  cards.forEach((card) => {

    const text = card.textContent.toLowerCase();

    if (text.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// DARK MODE

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});