// script.js

// Example: Add scroll animation
window.addEventListener('scroll', function() {
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
        const eventTop = event.getBoundingClientRect().top;
        if (eventTop < window.innerHeight) {
            event.style.opacity = '1';
            event.style.transform = 'translateY(0)';
        } else {
            event.style.opacity = '0';
            event.style.transform = 'translateY(100px)';
        }
    });
});
