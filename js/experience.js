// Stagger card animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.experience-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
});

// Add interactive hover effects
const expCards = document.querySelectorAll('.experience-card');

expCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const description = this.querySelector('.exp-description');
        description.style.transform = 'translateY(-5px)';
        description.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        const description = this.querySelector('.exp-description');
        description.style.transform = 'translateY(0)';
    });
});

// Particle background
function createParticles() {
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${Math.random() > 0.5 ? '#00d9ff' : '#00ff88'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.4 + 0.1};
            pointer-events: none;
            z-index: 0;
            animation: drift ${Math.random() * 15 + 10}s linear infinite;
        `;
        document.body.appendChild(particle);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes drift {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

createParticles();