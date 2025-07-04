const carouselWrapper = document.getElementById('carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const totalItems = carouselItems.length;

function updateCarousel() {
  carouselWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  updateCarousel();
}

let autoPlayInterval = setInterval(() => moveCarousel(1), 5000);

carouselWrapper.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carouselWrapper.parentElement.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(() => moveCarousel(1), 5000);
});

updateCarousel();
