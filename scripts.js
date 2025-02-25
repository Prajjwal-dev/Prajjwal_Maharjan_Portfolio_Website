// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if the link is an internal section (starts with "#")
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Else, let it navigate normally (for external pages like index.html)
    });
});


// Hover effect interactions for links
document.querySelectorAll('.hover-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#f39c12';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '#fff';
    });
});

// Make project cards clickable
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        const link = this.querySelector('a').href;
        window.open(link, '_blank');
    });
});
