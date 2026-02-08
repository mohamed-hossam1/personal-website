
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('progress-bar-fill')) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
            
            if (entry.target.classList.contains('experties-cards')) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                }, 80);
            }
            
            if (entry.target.classList.contains('works-cards')) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                }, 80);
            }
            
            if (entry.target.tagName === 'H2') {
                entry.target.style.animation = 'fadeInDown 0.6s ease-out forwards';
            }
            
            if (entry.target.classList.contains('about')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
            
            if (entry.target.classList.contains('testimonial')) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
            
            // Fix للـ footer
            if (entry.target.classList.contains('footer')) {
                // امسح أي animation قديمة
                entry.target.style.animation = 'none';
                // force reflow
                void entry.target.offsetHeight;
                // حط الـ animation من جديد
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
            }
            
            if (entry.target.classList.contains('hero-section')) {
                const h1 = entry.target.querySelector('h1');
                const p = entry.target.querySelector('p');
                if (h1) h1.style.animation = 'fadeInUp 0.8s ease-out forwards';
                if (p) p.style.animation = 'fadeInUp 0.8s ease-out 0.2s forwards';
            }
            
            if (entry.target.classList.contains('skill')) {
                entry.target.style.animation = 'fadeInLeft 0.6s ease-out forwards';
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.experties-cards').forEach((el) => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    document.querySelectorAll('.works-cards').forEach((el) => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    document.querySelectorAll('.progress-bar-fill').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.experties h2, .works h2, .about-me h2, .testimonial h2').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.about, .testimonial, .hero-section').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.footer').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    document.querySelectorAll('.skill').forEach((el, index) => {
        el.style.animationDelay = (0.2 + index * 0.1) + 's';
        observer.observe(el);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.experties-cards').forEach((el, index) => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    document.querySelectorAll('.works-cards').forEach((el, index) => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    document.querySelectorAll('.progress-bar-fill').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.experties h2, .works h2, .about-me h2, .testimonial h2').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.about, .testimonial, .footer, .hero-section').forEach(el => {
        observer.observe(el);
    });
    
    document.querySelectorAll('.skill').forEach((el, index) => {
        el.style.animationDelay = (0.2 + index * 0.1) + 's';
        observer.observe(el);
    });
});

const scrollTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
        scrollTopBtn.style.animation = 'slideUp 0.4s ease-out forwards';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroSection.style.backgroundPosition = `center ${scrollY * 0.5}px`;
    });
}

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

window.addEventListener('load', () => {
    document.querySelectorAll('[data-animate]').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 100);
    });
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.style.animation = 'none');
        e.target.style.animation = 'pulse 0.6s ease';
    });
});
