// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }

    // Update scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = scrollPercent + '%';
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add typing animation effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero .subtitle');
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 80);
});

// Particle background effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: rgba(59, 130, 246, 0.5);
        pointer-events: none;
        z-index: 0;
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: float 20s infinite linear;
    `;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 20000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
setInterval(createParticle, 3000);

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    if (card.style.opacity === '0.7') return;
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

// Prevent link click interference
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', e => e.stopPropagation());
});

// Skill tag animations
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Contact form functionality
document.querySelectorAll('.contact-card').forEach(card => {
    const emailCard = card.querySelector('a[href^="mailto:"]');
    const linkedinCard = card.querySelector('a[href*="linkedin"]');
    if (emailCard && card.querySelector('.fa-envelope')) {
        card.addEventListener('click', e => {
            navigator.clipboard.writeText('rayanwasif@gmail.com').then(() => {
                emailCard.textContent = 'Copied to clipboard!';
                setTimeout(() => {
                    emailCard.textContent = 'rayanwasif@gmail.com';
                }, 1200);
            });
            e.preventDefault();
            e.stopPropagation();
        });
        card.style.cursor = 'pointer';
    }
    if (linkedinCard) {
        card.addEventListener('click', () => {
            window.open(linkedinCard.href, '_blank');
        });
        card.style.cursor = 'pointer';
    }
});

// Mobile menu
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const navContainer = document.querySelector('.nav-container');
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.style.cssText = `
                background: none;
                border: none;
                color: #cbd5e1;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            `;
            const navLinks = document.querySelector('.nav-links');
            menuBtn.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(15, 23, 42, 0.98)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '1rem';
                navLinks.style.borderTop = '1px solid rgba(148, 163, 184, 0.1)';
            });
            navContainer.appendChild(menuBtn);
        }
    }
}
createMobileMenu();
window.addEventListener('resize', createMobileMenu);

// Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s ease;
    z-index: 1000;
`;
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.transform = 'translateY(100px)';
    }
});

// Page load fade-in
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Lazy load animations
const lazyElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .cert-card, .contact-card');
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            lazyObserver.unobserve(entry.target);
        }
    });
});
lazyElements.forEach(el => lazyObserver.observe(el));

// Logo click scroll to top
document.getElementById('scrollToTopLogo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('Portfolio loaded successfully!');
