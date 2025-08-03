document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                let current = 0;
                const duration = 2000; // 2 seconds
                const step = target / (duration / 10); // Calculate step based on 10ms interval

                const timer = setInterval(() => {
                    current += step;
                    if (current < target) {
                        element.textContent = Math.ceil(current);
                    } else {
                        element.textContent = target;
                        clearInterval(timer);
                        observer.unobserve(element); // Stop observing once counted
                    }
                }, 10);
            }
        });
    }, observerOptions);

    // Observe all elements with the 'achievement-number' class
    document.querySelectorAll('.achievement-number').forEach(number => {
        observer.observe(number);
    });
});
