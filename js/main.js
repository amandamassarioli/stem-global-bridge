// This file contains JavaScript code for interactivity on the website.
// It may handle form submissions, navigation, or other dynamic features.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Example of form submission handling (for join us page)
    const joinForm = document.getElementById('joinForm');
    if (joinForm) {
        joinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for joining us! We will get back to you soon.');
            joinForm.reset();
        });
    }
});