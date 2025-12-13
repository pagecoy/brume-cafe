document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.menu-sandwich');
    const navList = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        const visibility = navList.getAttribute('data-visible') === 'true' ? 'false' : 'true';
        navList.setAttribute('data-visible', visibility);
        navToggle.setAttribute('aria-expanded', visibility);
    });

    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                navList.setAttribute('data-visible', 'false');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

window.addEventListener('scroll', reveal); 
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
reveal();