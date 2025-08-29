
setInterval(nextSlide, 5000);
    
let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slide');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.banner-slides').style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

showSlide(slideIndex);

