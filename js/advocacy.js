// Animate SDG cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const sdgCards = document.querySelectorAll('.sdg-card');
    
    sdgCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeInUp 0.8s ease-out forwards';
        card.style.opacity = '0';
    });
    
    // Trigger animation
    setTimeout(() => {
        sdgCards.forEach(card => {
            card.style.opacity = '1';
        });
    }, 100);
});

// Add floating animation to icons
const icons = document.querySelectorAll('.sdg-icon');

icons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.3}s`;
});

// Interactive principle items
const principleItems = document.querySelectorAll('.principle-item');

principleItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
    item.style.animation = 'slideInRight 0.8s ease-out forwards';
    item.style.opacity = '0';
    
    setTimeout(() => {
        item.style.opacity = '1';
    }, 100);
});

// Add keyframe for slideInRight
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
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
            animation: gentleFloat ${Math.random() * 15 + 10}s ease-in-out infinite;
        `;
        document.body.appendChild(particle);
    }
}

const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes gentleFloat {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(20px, -20px);
        }
        50% {
            transform: translate(-15px, 15px);
        }
        75% {
            transform: translate(15px, 10px);
        }
    }
`;
document.head.appendChild(floatStyle);

createParticles();

// Add hover effect to mission icon
const missionIcon = document.querySelector('.mission-icon');

if (missionIcon) {
    missionIcon.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'rotate 2s linear infinite';
        }, 10);
    });
}