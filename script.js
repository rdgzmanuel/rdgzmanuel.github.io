// ===================================
// DOM Content Loaded
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
    setupSmoothScrolling();
    setupNavbarScroll();
});

// ===================================
// Initialize Portfolio Content
// ===================================
function initializePortfolio() {
    renderExperience();
    renderEducation();
    renderProjects();
    renderSkills();
    renderAwards();
}

// ===================================
// Render Experience Section
// ===================================
function renderExperience() {
    const container = document.getElementById('experience-container');
    
    portfolioData.experience.forEach((exp, index) => {
        const card = createExperienceCard(exp);
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        container.appendChild(card);
    });
}

function createExperienceCard(exp) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-header">
            <div>
                <h3 class="card-title">${exp.title}</h3>
                <p class="card-subtitle">${exp.company}</p>
            </div>
            <span class="card-date">${exp.date}</span>
        </div>
        <p class="card-description">${exp.description}</p>
    `;
    
    return card;
}

// ===================================
// Render Education Section
// ===================================
function renderEducation() {
    const container = document.getElementById('education-container');
    
    portfolioData.education.forEach((edu, index) => {
        const card = createEducationCard(edu);
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        container.appendChild(card);
    });
}

function createEducationCard(edu) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="card-header">
            <div>
                <h3 class="card-title">${edu.degree}</h3>
                <p class="card-subtitle">${edu.institution}</p>
            </div>
            <span class="card-date">${edu.date}</span>
        </div>
        <p class="card-description">${edu.description}</p>
    `;
    
    return card;
}

// ===================================
// Render Projects Section
// ===================================
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    portfolioData.projects.forEach((project, index) => {
        const card = createProjectCard(project);
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        container.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const linkHTML = project.link 
        ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener">View Project →</a>`
        : '';
    
    card.innerHTML = `
        <div class="project-image">${project.icon}</div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tech">${project.tech}</p>
            <p class="project-description">${project.description}</p>
            ${linkHTML}
        </div>
    `;
    
    return card;
}

// ===================================
// Render Skills Section
// ===================================
function renderSkills() {
    const container = document.getElementById('skills-container');
    
    Object.entries(portfolioData.skills).forEach(([category, skills], index) => {
        const skillCard = createSkillCard(category, skills);
        skillCard.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        container.appendChild(skillCard);
    });
}

function createSkillCard(category, skills) {
    const card = document.createElement('div');
    card.className = 'skill-category';
    
    const skillTags = skills
        .map(skill => `<span class="skill-tag">${skill}</span>`)
        .join('');
    
    card.innerHTML = `
        <h3>${category}</h3>
        <div class="skill-tags">
            ${skillTags}
        </div>
    `;
    
    return card;
}

// ===================================
// Smooth Scrolling for Navigation
// ===================================
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Navbar Scroll Effect
// ===================================
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===================================
// Utility Functions
// ===================================

// Scroll to top functionality (optional, can be called from a button)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Intersection Observer for scroll animations (optional enhancement)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card, .project-card, .skill-category').forEach(el => {
        observer.observe(el);
    });
}