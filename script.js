document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let current = 0;
                const duration = 2000; 
                const step = target / (duration / 10); 

                const timer = setInterval(() => {
                    current += step;
                    if (current < target) {
                        element.textContent = Math.ceil(current);
                    } else {
                        element.textContent = target;
                        clearInterval(timer);
                        observer.unobserve(element);
                    }
                }, 10);
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('.achievement-number').forEach(number => {
        observer.observe(number);
    });
});
