// Enhanced Product Data
const products = [
    {
        id: 1,
        name: "Pro Stage Beam",
        description: "Professional moving head beam with 16 colors and dynamic effects",
        price: 999,
        image: "beam.jpg",
        gameId: "1234567890",
        rating: 4.8,
        sales: 1234,
        features: ['16 Colors', 'Dynamic Movement', 'DMX Compatible']
    },
    // Add more products...
];

// Enhanced initialization
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initParticles();
    generateProductCards();
    setupEventListeners();
});

// Improved AOS initialization
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
}

// Enhanced Particles configuration
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ff3e3e' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff3e3e',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
}

// Improved Product Card Generation
function generateProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach((product, index) => {
        const card = `
            <div class="product-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-stats">
                        <span><i class="fas fa-star"></i> ${product.rating}</span>
                        <span><i class="fas fa-shopping-cart"></i> ${product.sales}</span>
                    </div>
                    <div class="product-price">R$ ${product.price}</div>
                    <button class="roblox-btn" onclick="redirectToRoblox('${product.gameId}')">
                        <i class="fas fa-external-link-alt"></i>
                        Buy on Roblox
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.insertAdjacentHTML('beforeend', card);
    });
}

// Enhanced Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navLinks.classList.remove('active');
            }
        });
    });

    // Header Scroll Effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });
}

// Improved Roblox Redirect
function redirectToRoblox(gameId) {
    const url = `https://www.roblox.com/games/${gameId}`;
    window.open(url, '_blank');
}

// Remove loading overlay
window.addEventListener('load', () => {
    document.querySelector('.loading-overlay').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loading-overlay').style.display = 'none';
    }, 500);
});