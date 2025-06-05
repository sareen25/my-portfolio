// DOM Elements
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('back-to-top');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const closeButton = document.querySelector('.close-button');

// Project data
const projects = [
    {
        id: 1,
        title: 'Weather App',
        description: 'A Weather App is a software application that provides users with real-time weather information based on their location or selected cities.',
        technologies: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/sareen25/Weather-App',
        live: 'https://github.com/sareen25/Weather-App'
    },
    {
        id: 2,
        title: 'PASTE — A Code / Note Saver React App',
        description: 'PASTE is a lightweight React-based web app designed to save and manage code snippets or notes easily. Users can quickly paste, save, and retrieve text — such as code, ideas, or to-do lists — with a clean and minimal interface.',
        technologies: ['HTML5', 'CSS3', 'JavaScript','React.js'],
        github: 'https://github.com/sareen25/Notes-PasteApp/upload/main',
        live: 'https://github.com/sareen25/Notes-PasteApp/upload/main'
    }
];

// Navigation scroll behavior
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }

    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Update icon based on mode
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Form validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (nameInput.value.trim() === '' || 
        emailInput.value.trim() === '' || 
        messageInput.value.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (contactForm.website && contactForm.website.value !== '') {
        // Spam detected
        return;
    }
    
    // Simulate form submission
    alert('Message sent successfully!');
    contactForm.reset();
});

// Project modal functionality
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = parseInt(card.getAttribute('data-id'));
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="technologies">
                    <strong>Technologies:</strong> ${project.technologies.join(', ')}
                </div>
                <div class="links">
                    <a href="${project.github}" target="_blank">GitHub</a>
                    <a href="${project.live}" target="_blank">Live Demo</a>
                </div>
            `;
            modal.style.display = 'block';
        }
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Animate sections on scroll
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Typewriter effect for headline
const typewriter = document.getElementById('typewriter');
const titles = [
    "Hi, I'm Aman Sareen, Front - End Developer",
    "Hi, I'm Aman Sareen, Web Developer & Designer"
];
let twIndex = 0, charIndex = 0, deleting = false;

function type() {
    const current = titles[twIndex];
    if (!deleting) {
        typewriter.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(type, 1200);
        } else {
            setTimeout(type, 70);
        }
    } else {
        typewriter.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            twIndex = (twIndex + 1) % titles.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, 30);
        }
    }
}
if (typewriter) type();

// Animate skill bars on scroll
function animateSkillBars() {
    document.querySelectorAll('.skill-bar .progress').forEach(bar => {
        const width = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 300);
    });
}
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection && skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        animateSkillBars();
    }
}, { once: true });