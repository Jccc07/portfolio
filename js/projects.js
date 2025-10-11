// Stagger card animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add click functionality to view buttons
const viewButtons = document.querySelectorAll('.view-btn');

viewButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.project-card');
        const title = card.querySelector('.project-title').textContent;
        alert(`Viewing details for: ${title}\n\nYou can add a modal or link to project details here!`);
    });
});

// Add tilt effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        this.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
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
            animation: sparkle ${Math.random() * 4 + 3}s ease-in-out infinite;
        `;
        document.body.appendChild(particle);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0%, 100% {
            opacity: 0.1;
            transform: scale(1) translateY(0);
        }
        50% {
            opacity: 0.6;
            transform: scale(1.5) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

createParticles();

// Add tag interaction
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.animation = 'tagPulse 0.3s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
    });
});

const tagStyle = document.createElement('style');
tagStyle.textContent = `
    @keyframes tagPulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(tagStyle);