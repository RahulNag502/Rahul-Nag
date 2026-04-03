// 1. Define the content for each section

const pages = {
   // Inside pages object in script.js <h3>I am a <span class="typing-text"></span></h3>  <p>I am a TYBScIT student building modern web applications.</p>
            
home: `
    <div class="fade-in home-container">
        <div class="home-content">
            <h3>Hello, I am</h3>
            <h1>Rahul Nag</h1>
            <h3 class="subtitle-typing">I am a <span class="typing-text"></span></h3>
            
            <a href="#" onclick="loadContent('projects')" class="btn btn-primary">View My Work</a>
            <a href="Resume_2026.docx" download class="btn btn-secondary">Download Resume</a>
        </div>
        
        <div class="home-img">
            <!-- Replace 'profile.png' with your actual file name -->
            <img src="rahul.png" alt="Rahul Nag Profile" class="profile-img-animated">
        </div>
    </div>
`,
    about: `
    <div class="fade-in about-container">
        <h1>About <span>Me</span></h1>
        <p>Information Technology student with a strong interest in web development and software development. Experienced in building academic projects using HTML, CSS, JavaScript, PHP, MySQL, and Android Studio. Passionate about learning new technologies and developing practical applications through real-world projects.</p>
        <br>
        <p>Currently seeking opportunities to apply my skills and contribute to innovative projects in the field of web development and software engineering.</p>
        <div class="achievements">
            <div class="achievement-item">
                <i class="fas fa-code"></i>
                <h3>Full-Stack Development</h3>
                <p>Building scalable web applications from frontend to backend</p>
            </div>
            <div class="achievement-item">
                <i class="fas fa-users"></i>
                <h3>Team Projects</h3>
                <p>Collaborated on multiple production-ready systems</p>
            </div>
            <div class="achievement-item">
                <i class="fas fa-graduation-cap"></i>
                <h3>Continuous Learner</h3>
                <p>Always exploring new technologies and best practices</p>
            </div>
        </div>
    </div>
`,
    projects: `
    <div class="fade-in">
        <h1>My <span>Projects</span></h1>
        <div class="projects-grid">
            
           <!-- Card 1 -->
<div class="project-card project-card-frontend">
    <div class="card-header"><span class="badge badge-frontend">Frontend</span></div>
    <h3>Tic Tac Toe</h3>
    <p>Classic 2-player game with interactive logic.</p>
    <div class="tech-stack">HTML • CSS • JavaScript</div>
    <a href="https://rahulnag502.github.io/tic-tac-toe/" class="btn btn-card">Live Demo</a>
</div>

<!-- Card 2 -->
<div class="project-card project-card-fullstack">
    <div class="card-header"><span class="badge badge-fullstack">Full-Stack</span></div>
    <h3>Airline Management System</h3>
    <p>Collaborative 2nd-year project with Aniket Singh. Manages flight bookings and admin dashboards.</p>
    <div class="tech-stack">PHP • MySQL • Team Project</div>
    <a href="https://github.com/Singhaniket2110/Mini-Airline-Project" class="btn btn-card">GitHub Repo</a>
</div>

<!-- Card 3 -->
<div class="project-card project-card-frontend">
    <div class="card-header"><span class="badge badge-frontend">Frontend</span></div>
    <h3>Love & Date App</h3>
    <p>A playful interactive website where the "No" button mischievously evades clicks.</p>
    <div class="tech-stack">HTML • CSS • JavaScript</div>
    <a href="https://rahulnag502.github.io/date-me/" class="btn btn-card">Live Demo</a>
</div>

<!-- Card 4 -->
<div class="project-card project-card-fullstack">
    <div class="card-header"><span class="badge badge-fullstack">Full-Stack</span></div>
    <h3>NSS Volunteer Management System</h3>
    <p>Individual 3rd-year project for managing NSS activities at Navneet College. Digital platform for volunteers, events, attendance, certificates, and communication.</p>
    <div class="tech-stack">PHP • MySQL</div>
    <a href="https://github.com/RahulNag502/Navneet_NSS_Management_System" class="btn btn-card">Private Repo</a>
</div>

        </div>
    `,
    // UPDATED CONTACT SECTION
    contact: `
    <div class="fade-in" style="display:flex; flex-direction:column; align-items:center;">
        <h1>Contact <span>Me</span></h1>
        <p>Let's discuss your next project!</p>
        
        <!-- IMPORTANT: Change 'YOUR_FORM_ID' below to your actual Formspree ID -->
        <form id="contact-form" action="https://formspree.io/f/xwpgkkqd" method="POST" onsubmit="submitForm(event)">
            
            <div class="input-box">
                <input type="text" name="name" placeholder="Full Name" required>
            </div>
            
            <div class="input-box">
                <input type="email" name="email" placeholder="Email Address" required>
            </div>
            
            <div class="input-box">
                <textarea name="message" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" class="btn" style="width:100%; border:none; cursor:pointer;">Send Message</button>
            
            <div id="form-status"></div>
        </form>
    </div>
    `
};

// 2. Load Content Function
function loadContent(pageName) {
    const app = document.getElementById('app');
    app.innerHTML = pages[pageName] || pages['home'];

    // Start typewriter only on home
    if (pageName === 'home' || pageName === undefined) {
        startTyping();
    }
}

// 3. Typewriter Effect
function startTyping() {
    const textElement = document.querySelector('.typing-text');
    const textToType = "Web Developer";
    let i = 0;

    if(textElement) {
        textElement.innerHTML = ""; 
        function typeWriter() {
            if (i < textToType.length) {
                textElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100); 
            }
        }
        // Small delay before starting typewriter
        setTimeout(typeWriter, 300);
    }
}

// 6. Scroll-to-Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 7. Show/Hide Back-to-Top Button on Scroll
window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 8. Scroll-Triggered Animations with Intersection Observer
function setupScrollAnimations() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe all project cards and section elements
    document.querySelectorAll('.project-card, .achievement-item').forEach(el => {
        observer.observe(el);
    });
}

// 4. Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('theme-toggle');

    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// 5. NEW: Handle Form Submission (AJAX)
async function submitForm(event) {
    event.preventDefault(); // Stop page reload
    
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const data = new FormData(event.target);

    status.innerHTML = "Sending...";
    status.className = "";

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Message sent successfully! ✅";
            status.className = "success";
            form.reset(); // Clear the inputs
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form.";
                }
                status.className = "error";
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form.";
        status.className = "error";
    });
}

// Initialize year in footer
function updateYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Initial Load
window.onload = () => {
    loadContent('home');
    updateYear();
    setupScrollAnimations();
};