// Task 1: Automatic Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Increment slide index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);

// Interaction: Scroll reveal effect (Optional)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
    } else {
        nav.style.padding = '15px 0';
    }
});