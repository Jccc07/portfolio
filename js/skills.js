// Stagger animations for skill categories
document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.skill-category');
    
    categories.forEach((category, index) => {
        category.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add ripple effect on skill item click
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgba(0, 255, 136, 0.6);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Particle background
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