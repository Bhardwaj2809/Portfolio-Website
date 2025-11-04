

function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = -10 + 'px';
        
        const colors = ['rgba(6, 182, 212, 0.6)', 'rgba(59, 130, 246, 0.6)', 'rgba(255, 255, 255, 0.4)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        particle.style.animation = `particle-float ${duration}s ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Using console log instead of alert()
    console.log('Thank you for your message! I will get back to you soon.'); 
    this.reset();
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            

            entry.target.querySelectorAll('.home-content, .about-content, .skills-grid, .projects-grid, .contact-content, .section-title').forEach(el => {
                el.classList.add('content-animate');
            });

            const current = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    rootMargin: "0px",
    threshold: 0.2 
});

sections.forEach(section => {
    observer.observe(section);
});




document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {

        const speed = (index + 1) * 10; 
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
