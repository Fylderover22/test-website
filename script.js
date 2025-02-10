// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Simple email validation
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
    });
}

// Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-primary', 'navbar-dark');
        navbar.classList.remove('navbar-light', 'bg-dark');
    } else {
        navbar.classList.add('bg-dark', 'navbar-light');
        navbar.classList.remove('bg-primary', 'navbar-dark');
    }
});
