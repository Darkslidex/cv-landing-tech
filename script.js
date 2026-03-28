document.addEventListener('DOMContentLoaded', () => {

    /* --- Typewriter Effect for "El Puente" --- */
    const textElement = document.getElementById('typewriter-text');
    const fullText = document.getElementById('hidden-vision').innerText.trim();
    
    let index = 0;
    let isTyping = false;

    // Intersection Observer to trigger the typing effect only when scrolling into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
                isTyping = true;
                typeWriter();
            }
        });
    }, { threshold: 0.5 });

    const terminalSection = document.getElementById('terminal-body');
    if (terminalSection) {
        observer.observe(terminalSection);
    }

    function typeWriter() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            
            // Randomize typing speed for realism (LLM simulation)
            let speed = Math.random() * 30 + 10;
            
            // Pause slightly at punctuation
            if (['.', ',', '?', '!'].includes(fullText.charAt(index - 1))) {
                speed += 200;
            }
            
            setTimeout(typeWriter, speed);
        }
    }

    /* --- Subtle Hover tracking for Cards (Glow) --- */
    const cards = document.querySelectorAll('.bento-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const glow = card.querySelector('.card-glow');
            if (!glow) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Optional dynamic glow movement (Subtle)
            // glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`;
        });
    });

});
