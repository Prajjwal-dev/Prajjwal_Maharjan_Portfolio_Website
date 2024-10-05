// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
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
