// ==================== LOADING ANIMATION REMOVED ====================
// Loading animation has been removed for faster page load

// ==================== PAW CURSOR TRAIL ====================
class PawTrail {
    constructor() {
        this.paws = [];
        this.maxPaws = 10;
        this.createPaws();
        this.setupMouseTracking();
    }

    createPaws() {
        for (let i = 0; i < this.maxPaws; i++) {
            const paw = document.createElement('div');
            paw.className = 'paw-print';
            paw.innerHTML = '🐾';
            document.body.appendChild(paw);
            this.paws.push({
                element: paw,
                x: -100,
                y: -100,
                alpha: 0
            });
        }
    }

    setupMouseTracking() {
        let currentIndex = 0;
        let lastX = 0;
        let lastY = 0;
        let throttleTimer = null;

        document.addEventListener('mousemove', (e) => {
            // Throttle for performance
            if (throttleTimer) return;
            
            throttleTimer = setTimeout(() => {
                throttleTimer = null;
            }, 50);

            // Use clientX/clientY + scroll position for accurate positioning
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            
            const mouseX = e.clientX + scrollLeft;
            const mouseY = e.clientY + scrollTop;
            
            const deltaX = Math.abs(mouseX - lastX);
            const deltaY = Math.abs(mouseY - lastY);
            
            // Only add paw if mouse moved significantly
            if (deltaX > 20 || deltaY > 20) {
                const paw = this.paws[currentIndex];
                paw.x = mouseX;
                paw.y = mouseY;
                paw.alpha = 1;
                
                paw.element.style.left = paw.x + 'px';
                paw.element.style.top = paw.y + 'px';
                paw.element.style.opacity = 1;
                paw.element.style.transform = `translate(-50%, -50%) scale(1) rotate(${Math.random() * 30 - 15}deg)`;
                
                currentIndex = (currentIndex + 1) % this.maxPaws;
                
                lastX = mouseX;
                lastY = mouseY;
            }
        });

        // Fade out paws
        setInterval(() => {
            this.paws.forEach(paw => {
                if (paw.alpha > 0) {
                    paw.alpha -= 0.05;
                    paw.element.style.opacity = paw.alpha;
                    const currentScale = 1 - (1 - paw.alpha) * 0.3;
                    paw.element.style.transform = `translate(-50%, -50%) scale(${currentScale})`;
                }
            });
        }, 50);
    }
}

// Initialize paw trail
new PawTrail();

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Yukarı Çık');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
window.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.card, .animal-card, .law-card, .org-card, .tip-card, .intro-section');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// ==================== TOOLTIPS ====================
function initTooltips() {
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    
    tooltipTriggers.forEach(trigger => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = trigger.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        
        trigger.addEventListener('mouseenter', (e) => {
            const rect = trigger.getBoundingClientRect();
            tooltip.style.left = rect.left + rect.width / 2 + 'px';
            tooltip.style.top = rect.top - 10 + 'px';
            tooltip.classList.add('tooltip-visible');
        });
        
        trigger.addEventListener('mouseleave', () => {
            tooltip.classList.remove('tooltip-visible');
        });
        
        // Update position on scroll
        window.addEventListener('scroll', () => {
            if (tooltip.classList.contains('tooltip-visible')) {
                const rect = trigger.getBoundingClientRect();
                tooltip.style.top = rect.top - 10 + 'px';
            }
        });
    });
}

// Initialize tooltips
initTooltips();

// ==================== PAGE TRANSITION EFFECT ====================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

// Smooth page transitions on navigation
document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname && !link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href !== '#' && !href.startsWith('mailto:')) {
                e.preventDefault();
                document.body.classList.add('page-transition');
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    }
});

// ==================== FILTER FUNCTIONALITY ====================
function initFilter() {
    const filterContainer = document.querySelector('.filter-container');
    if (!filterContainer) return;

    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.animal-card, .card, .law-card, .org-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filter cards
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.classList.add('reveal-visible');
                    }, 100);
                } else {
                    card.classList.remove('reveal-visible');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize filter
initFilter();

// ==================== GLASSMORPHISM HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', () => {
    const glassCards = document.querySelectorAll('.card, .animal-card, .law-card, .org-card');
    
    glassCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// ==================== MOBILE MENU TOGGLE ====================
function initMobileMenu() {
    const nav = document.querySelector('nav');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Menüyü Aç/Kapat');
    
    const headerContent = document.querySelector('.header-content');
    headerContent.insertBefore(menuToggle, nav);
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-menu-open');
        menuToggle.innerHTML = nav.classList.contains('mobile-menu-open') ? '✕' : '☰';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('mobile-menu-open');
            menuToggle.innerHTML = '☰';
        }
    });
}

// Initialize mobile menu
if (window.innerWidth <= 768) {
    initMobileMenu();
}
