// 1. Define the content for each section
const pages = {
   // Inside pages object in script.js
home: `
    <div class="fade-in home-container">
        <div class="home-content">
            <h3>Hello, I am</h3>
            <h1>Rahul Nag</h1>
            <h3>I am a <span class="typing-text"></span></h3>
            <p>I am a TYBScIT student building modern web applications.</p>
            <a href="#" onclick="loadContent('projects')" class="btn">View My Work</a>
            <a href="Rahulresume.docx" download class="btn" style="background:transparent; border: 2px solid #00d9ff; color: #00d9ff; margin-left:10px;">Download Resume</a>
        </div>
        
        <div class="home-img">
            <!-- Replace 'profile.png' with your actual file name -->
            <img src="rahul.png" alt="Rahul Nag Profile">
        </div>
    </div>
`,
    about: `
    <div class="fade-in">
        <h1>About <span>Me</span></h1>
        <p>I am an aspiring <strong>Full Stack Developer</strong> focused on understanding the complete software development lifecycle. I enjoy connecting <strong>interactive user interfaces</strong> with robust <strong>server-side logic</strong>.</p>
        <br>
        <p><strong>Current Focus:</strong> Client-Server Architecture & End-to-End Application Flow.</p>
    </div>
`,
    projects: `
    <div class="fade-in">
        <h1>My <span>Projects</span></h1>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
            
           <!-- Card 1 -->
<div style="background: var(--second-bg-color); padding: 20px; border-radius: 10px; border: 1px solid #333;">
    <h3 style="color: var(--main-color);">Tic Tac Toe</h3>
    <p style="font-size: 14px; margin: 10px 0;">Classic 2-player game with interactive logic.</p>
    <div style="font-size: 12px; color: var(--text-secondary);">HTML • CSS • JavaScript</div>
    <button class="btn" style="padding: 5px 15px; font-size: 12px; margin-top: 10px;">
        <a href="https://rahulnag502.github.io/tic-tac-toe/">Live Demo</a>
    </button>
</div>

<!-- Card 2 -->
<div style="background: var(--second-bg-color); padding: 20px; border-radius: 10px; border: 1px solid #333;">
    <h3 style="color: var(--main-color);">Airline Management System</h3>
    <p style="font-size: 14px; margin: 10px 0;">Collaborative 2nd-year project with Aniket Singh. Manages flight bookings and admin dashboards.</p>
    <div style="font-size: 12px; color: var(--text-secondary);">PHP • MySQL • Team Project</div>
    <button class="btn" style="padding: 5px 15px; font-size: 12px; margin-top: 10px;">
        <a href="https://github.com/Singhaniket2110/Mini-Airline-Project">GitHub Repo</a>
    </button>
</div>

<!-- Card 3 -->
<div style="background: var(--second-bg-color); padding: 20px; border-radius: 10px; border: 1px solid #333;">
    <h3 style="color: var(--main-color);">Love & Date App</h3>
    <p style="font-size: 14px; margin: 10px 0;">A playful interactive website where the "No" button mischievously evades clicks.</p>
    <div style="font-size: 12px; color: var(--text-secondary);">HTML • CSS • JavaScript</div>
    <button class="btn" style="padding: 5px 15px; font-size: 12px; margin-top: 10px;">
        <a href="https://rahulnag502.github.io/date-me/">Live Demo</a>
    </button>
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
        typeWriter();
    }
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

// Initial Load
window.onload = () => loadContent('home');