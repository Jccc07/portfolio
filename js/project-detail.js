// Smooth scroll to top on page load
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-description, .screenshots-section, .project-link-section');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
});

// Add hover effect to screenshots
const screenshots = document.querySelectorAll('.screenshot-item');

screenshots.forEach(screenshot => {
    screenshot.addEventListener('click', function() {
        const img = this.querySelector('img');
        const modal = createImageModal(img.src, img.alt);
        document.body.appendChild(modal);
    });
});

// Create image modal for full-screen view
function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 217, 255, 0.5);
    `;
    
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 2rem;
        right: 2rem;
        font-size: 3rem;
        color: #00d9ff;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.color = '#00ff88';
        this.style.transform = 'rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.color = '#00d9ff';
        this.style.transform = 'rotate(0deg)';
    });
    
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    
    modal.addEventListener('click', function() {
        this.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(this);
        }, 300);
    });
    
    return modal;
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add particle background
function createParticles() {
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: ${Math.random() > 0.5 ? '#00d9ff' : '#00ff88'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.3 + 0.1};
            pointer-events: none;
            z-index: 0;
            animation: float ${Math.random() * 12 + 8}s ease-in-out infinite;
        `;
        document.body.appendChild(particle);
    }
}

const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        33% {
            transform: translate(30px, -30px);
        }
        66% {
            transform: translate(-20px, 20px);
        }
    }
`;
document.head.appendChild(floatStyle);

createParticles();

// Tech tag hover effect
const techTags = document.querySelectorAll('.tech-tag');

techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.4)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Back button animation
const backBtn = document.querySelector('.back-btn');

if (backBtn) {
    backBtn.addEventListener('mouseenter', function() {
        this.querySelector('span')?.classList.add('wiggle');
    });
}

// Add smooth scroll behavior
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