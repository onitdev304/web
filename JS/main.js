// Toggle menu
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}

// Slider logic
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Chờ DOM load xong
document.addEventListener("DOMContentLoaded", () => {
  if (slides.length) {
    showSlide(slideIndex);
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    setInterval(nextSlide, 5000);
  }
});
