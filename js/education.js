// Animate cards on load
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.education-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

// Add hover effect to achievement items
const achievementItems = document.querySelectorAll('.achievement-list li');

achievementItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#00ff88';
        this.style.paddingLeft = '2.5rem';
        this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.color = '#b0e0e6';
        this.style.paddingLeft = '2rem';
    });
});

// Particle background effect
function createParticles() {
    const contentSection = document.querySelector('.content-section');
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
            animation: float ${Math.random() * 10 + 5}s linear infinite;
        `;
        document.body.appendChild(particle);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(10px, -10px);
        }
        50% {
            transform: translate(-10px, 10px);
        }
        75% {
            transform: translate(10px, 10px);
        }
    }
`;
document.head.appendChild(style);

createParticles();