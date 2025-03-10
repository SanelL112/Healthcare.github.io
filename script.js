document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Expandable sections
    document.querySelectorAll('.stage, .factor, .theory').forEach(section => {
        const header = section.querySelector('h3');
        const content = section.querySelector('p');

        header.style.cursor = 'pointer';
        content.style.display = 'none'; // Initially hide content

        header.addEventListener('click', () => {
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    // Highlight active navigation
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial highlight on page load

    // Optional: Simple feedback form (add to HTML)
    const feedbackForm = document.getElementById('feedbackForm');
    if(feedbackForm){
        feedbackForm.addEventListener('submit', (event)=>{
            event.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            alert(`Thank you ${name}, for your feedback: ${message}`);
            feedbackForm.reset();
        });
    }

});
