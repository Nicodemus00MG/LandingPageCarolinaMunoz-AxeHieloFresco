let current = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) item.classList.add('active');
  });
}

function nextSlide() {
  current = (current + 1) % items.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
}