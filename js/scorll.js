document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) { // Check if target element exists
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});