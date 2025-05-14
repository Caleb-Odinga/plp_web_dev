// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Wrap around if index is out of bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-advance when user interacts with slider
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Initialize slider
showSlide(currentSlide);

// Explore Button Animation
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        exploreBtn.textContent = 'Let\'s Go!';
        setTimeout(() => {
            window.location.href = 'about.html';
        }, 1000);
    });
}

// Form Submissions
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
        newsletterForm.reset();
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('#name').value;
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
        contactForm.reset();
    });
}

// Responsive Navigation for Mobile
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰ Menu';
navToggle.style.display = 'none';

const mainNav = document.querySelector('.main-nav');
if (mainNav) {
    mainNav.parentNode.insertBefore(navToggle, mainNav);
    
    function toggleNav() {
        mainNav.style.display = mainNav.style.display === 'none' ? 'block' : 'none';
    }
    
    navToggle.addEventListener('click', toggleNav);
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
            mainNav.style.display = 'none';
        } else {
            navToggle.style.display = 'none';
            mainNav.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}