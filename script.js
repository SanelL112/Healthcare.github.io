// You can add JavaScript for interactive elements or data fetching here, if needed.
// For example, you could add smooth scrolling for the navigation links:

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
