// Script voor interactiviteit

// Play button click handlers
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const gameCard = this.closest('.game-card');
            const gameName = gameCard.querySelector('.game-info h3').textContent;
            alert(`Laden van ${gameName}...\n\nHier kun je het spelletje inbedden!`);
        });
    });
});

// Smooth scroll voor navigatie links
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

// Voeg hier later je spelletjes inbedding toe
// Bijvoorbeeld met iframes voor WebGL exports

console.log('Games Portfolio Loaded!');