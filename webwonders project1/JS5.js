const slider = document.querySelector(".slider");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const totalSlides = slides.length-4;

function showSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  const offset = -currentIndex * slides[0].offsetWidth * 1;
  slider.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);

// Show the initial slide
showSlide(currentIndex);




