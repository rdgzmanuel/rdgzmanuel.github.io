// ===================================
// DOM Content Loaded
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializePortfolio();
    setupSmoothScrolling();
    setupNavbarScroll();
    setupLanguageSwitcher();
    setupThemeToggle();
    setupReadingProgress();
    setupJourneyLinking();
});

// ===================================
// Theme (light / dark)
// ===================================
// The initial theme is applied by an inline script in <head> (before first
// paint). This only wires up the navbar toggle.
function setupThemeToggle() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        localStorage.setItem('preferredTheme', next);
        // Let theme-aware components (e.g. the mesh canvas) re-read colors
        window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    });
}

// ===================================
// Language Management
// ===================================
let currentLanguage = 'en';

const SUPPORTED_LANGUAGES = ['en', 'es'];

function initializeLanguage() {
    // ?lang= wins, so either version can be linked, shared and indexed on its
    // own. Then a previous choice, then the browser's preference.
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const savedLang = localStorage.getItem('preferredLanguage');

    if (SUPPORTED_LANGUAGES.includes(urlLang)) {
        currentLanguage = urlLang;
        localStorage.setItem('preferredLanguage', urlLang);
        // An explicit ?lang= is the page being viewed — point canonical at it.
        updateCanonicalLink();
    } else if (SUPPORTED_LANGUAGES.includes(savedLang)) {
        currentLanguage = savedLang;
    } else {
        const browserLang = navigator.language.slice(0, 2);
        currentLanguage = (browserLang === 'es') ? 'es' : 'en';
    }

    // Update active button
    updateLanguageButtons();
}

function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                localStorage.setItem('preferredLanguage', lang);
                writeLanguageToUrl();
                updateLanguageButtons();
                updatePageLanguage();
            }
        });
    });
}

// Reflect the choice in the address bar without adding a history entry, so the
// URL stays copy-pasteable. The clean root URL keeps serving the default.
function writeLanguageToUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', currentLanguage);
    window.history.replaceState(null, '', url);
    updateCanonicalLink();
}

function updateCanonicalLink() {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) return;
    const url = new URL(canonical.href);
    url.searchParams.set('lang', currentLanguage);
    canonical.href = url.href;
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function updatePageLanguage() {
    // Keep the document language in sync (screen readers, SEO)
    document.documentElement.lang = currentLanguage;
    const meta = translations[currentLanguage].meta;
    if (meta) {
        document.title = meta.title;
        const descEl = document.querySelector('meta[name="description"]');
        if (descEl) descEl.content = meta.description;
    }

    // Update static translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Re-render dynamic content
    clearContainers();
    renderTimeline();
    renderExperience();
    renderEducation();
    renderProjects();
    renderSkills();
    renderAwards();
    
    // Update hero section
    updateHeroSection();
    
    // Update about section
    updateAboutSection();
    
    // Update journey section
    updateJourneySection();
    
    // Update section titles
    updateSectionTitles();
    
    // Update footer
    updateFooter();
    updateCurrently();

    // Re-bind scroll reveals for newly rendered cards
    reobserveReveals();
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

function clearContainers() {
    document.getElementById('timeline-container').innerHTML = '';
    document.getElementById('experience-container').innerHTML = '';
    document.getElementById('education-container').innerHTML = '';
    document.getElementById('projects-container').innerHTML = '';
    document.getElementById('skills-container').innerHTML = '';
    document.getElementById('awards-container').innerHTML = '';
}

function updateHeroSection() {
    const t = translations[currentLanguage].hero;
    document.querySelector('.hero-content .subtitle').textContent = t.subtitle;
    document.querySelector('.hero-content .hero-description').textContent = t.description;
    document.querySelector('.btn-primary').textContent = t.contactBtn;
    document.querySelector('.cta-buttons .btn-secondary:not(.btn-cv)').textContent = t.projectsBtn;
    document.querySelector('.btn-cv').textContent = t.cvBtn;
}

function updateAboutSection() {
    const about = translations[currentLanguage].about;
    const descriptions = document.querySelectorAll('#about .card-description');
    descriptions[0].innerHTML = about.p1;
    descriptions[1].innerHTML = about.p2;
    descriptions[2].innerHTML = about.p3;
}

function updateSectionTitles() {
    const sections = translations[currentLanguage].sections;
    document.querySelector('#journey .section-title').textContent = sections.journey;
    document.querySelector('#about .section-title').textContent = sections.about;
    document.querySelector('#experience .section-title').textContent = sections.experience;
    document.querySelector('#education .section-title').textContent = sections.education;
    document.querySelector('#projects .section-title').textContent = sections.projects;
    document.querySelector('#skills .section-title').textContent = sections.skills;
    document.querySelector('#awards .section-title').textContent = sections.awards;
}

function updateJourneySection() {
    const j = translations[currentLanguage].journey;
    const subtitleEl = document.querySelector('.journey-subtitle');
    if (subtitleEl) subtitleEl.textContent = j.subtitle;
    document.querySelectorAll('[data-i18n="journey.academic"]').forEach(el => el.textContent = j.academic);
    document.querySelectorAll('[data-i18n="journey.professional"]').forEach(el => el.textContent = j.professional);
    document.querySelectorAll('[data-i18n="journey.exchange"]').forEach(el => el.textContent = j.exchange);
}

function updateFooter() {
    const year = new Date().getFullYear();
    const rights = translations[currentLanguage].footer.rights;
    document.querySelector('footer p').textContent = `© ${year} Manuel Rodríguez Villegas. ${rights}`;
}

function updateCurrently() {
    const t = translations[currentLanguage].currently;
    const data = currentlyData[currentLanguage] || currentlyData.en;
    const titleEl = document.querySelector('.currently-title');
    if (titleEl) titleEl.textContent = t.title;
    const labels = document.querySelectorAll('.currently-label');
    if (labels.length >= 3) {
        labels[0].textContent = t.reading;
        labels[1].textContent = t.building;
        labels[2].textContent = t.focus;
    }
    const readingEl = document.querySelector('[data-currently="reading"]');
    const buildingEl = document.querySelector('[data-currently="building"]');
    const focusEl = document.querySelector('[data-currently="focus"]');
    if (readingEl) readingEl.textContent = data.reading;
    if (buildingEl) buildingEl.textContent = data.building;
    if (focusEl) focusEl.textContent = data.focus;
}

// ===================================
// Initialize Portfolio Content
// ===================================
function initializePortfolio() {
    // updatePageLanguage() already renders every dynamic section,
    // so a single call covers the initial paint too.
    updatePageLanguage();
}

// ===================================
// Render Timeline (Journey Section)
// ===================================
function parseYearMonth(ym) {
    // Accepts "YYYY-MM" or "present"
    if (ym === 'present') {
        const now = new Date();
        return { year: now.getFullYear(), month: now.getMonth() + 1 };
    }
    const [y, m] = ym.split('-').map(Number);
    return { year: y, month: m };
}

function monthsBetween(a, b) {
    // Returns the number of months from date a to date b (can be fractional-free integer).
    return (b.year - a.year) * 12 + (b.month - a.month);
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const rangeStart = parseYearMonth(timelineData.rangeStart);
    const rangeEnd = parseYearMonth(timelineData.rangeEnd);
    const totalMonths = monthsBetween(rangeStart, rangeEnd);
    if (totalMonths <= 0) return;

    const events = timelineData.events[currentLanguage] || timelineData.events.en;

    // Build year markers (every January that falls in range, plus endpoints)
    const years = [];
    for (let y = rangeStart.year; y <= rangeEnd.year; y++) {
        years.push(y);
    }

    const yearsHTML = years.map(y => {
        const pos = monthsBetween(rangeStart, { year: y, month: 1 });
        const pct = Math.max(0, Math.min(100, (pos / totalMonths) * 100));
        return `<div class="timeline-year" style="left: ${pct}%;"><span>${y}</span></div>`;
    }).join('');

    // Separate events by lane (academic/exchange above, professional below)
    const topEvents = events.filter(e => e.type === 'academic' || e.type === 'exchange');
    const bottomEvents = events.filter(e => e.type === 'professional');

    // Card min-width in px (must match CSS .tl-card min-width)
    const CARD_MIN_PX = 150;
    const CARD_GAP_PX = 16;
    // Vertical space one lane of stacked bars takes up
    const LANE_HEIGHT_PX = 82;
    // Consecutive academic stints closer than this are joined by a connector
    // bar, so "one right after the other" reads as a single continuous line.
    // Longer gaps stay open — those are a real break, not a continuation.
    const TL_BRIDGE_MAX_MONTHS = 12;

    // The real timeline pixel width we'll measure after first render.
    // For the initial DOM build we use an estimate (900 is our CSS min-width).
    // After render, we re-measure and re-layout if needed.
    const estimatedPxWidth = Math.max(900, (container.parentElement?.clientWidth || 900));

    const stackEvents = (list, pxWidth) => {
        const pxPerMonth = pxWidth / totalMonths;
        const minMonthGap = (CARD_MIN_PX + CARD_GAP_PX) / pxPerMonth;

        const prepared = list.map(e => {
            const s = parseYearMonth(e.start);
            const endRaw = e.end === 'present' ? timelineData.rangeEnd : e.end;
            const en = parseYearMonth(endRaw);
            return {
                ...e,
                _start: monthsBetween(rangeStart, s),
                _end: monthsBetween(rangeStart, en)
            };
        }).sort((a, b) => a._start - b._start);

        const lanes = [];
        prepared.forEach(ev => {
            // The card for this event visually occupies from _start to at least _start + minMonthGap
            const effectiveEnd = Math.max(ev._end, ev._start + minMonthGap);
            let placed = false;
            for (let i = 0; i < lanes.length; i++) {
                if (ev._start >= lanes[i]) {
                    ev._lane = i;
                    lanes[i] = effectiveEnd;
                    placed = true;
                    break;
                }
            }
            if (!placed) {
                ev._lane = lanes.length;
                lanes.push(effectiveEnd);
            }
        });
        return { prepared, laneCount: Math.max(1, lanes.length) };
    };

    const top = stackEvents(topEvents, estimatedPxWidth);
    const bottom = stackEvents(bottomEvents, estimatedPxWidth);

    const buildBarHTML = (ev, side) => {
        const leftPct = (ev._start / totalMonths) * 100;
        const widthPct = Math.max(1.5, ((ev._end - ev._start) / totalMonths) * 100);
        const typeClass = `tl-${ev.type}`;
        const sideClass = `tl-${side}`;
        // Lane offset within the half (pushes bars away from center line)
        const laneOffset = ev._lane * LANE_HEIGHT_PX;
        const styleSide = side === 'top'
            ? `bottom: ${laneOffset}px;`
            : `top: ${laneOffset}px;`;

        const logoHTML = ev.logo
            ? `<img src="${ev.logo}" alt="${ev.institution}" class="tl-logo" loading="lazy" decoding="async" onerror="this.style.display='none'">`
            : '';

        const endLabel = ev.end === 'present'
            ? translations[currentLanguage].journey.present
            : formatMonthYear(ev.end);

        // Each event links to the matching section:
        // academic + exchange -> #education, professional -> #experience
        const target = ev.type === 'professional' ? '#experience' : '#education';
        const ariaLabel = `${ev.institution}, ${formatMonthYear(ev.start)} — ${endLabel}`;
        // ref points at the matching experience/education card (see setupJourneyLinking)
        const refAttr = ev.ref ? ` data-ref="${ev.ref}"` : '';

        return `
            <a class="tl-event ${typeClass} ${sideClass}" href="${target}"${refAttr} aria-label="${ariaLabel}" style="left: ${leftPct}%; width: ${widthPct}%; ${styleSide}">
                <div class="tl-bar">
                    <div class="tl-bar-fill"></div>
                </div>
                <div class="tl-card">
                    <div class="tl-card-header">
                        ${logoHTML}
                        <div class="tl-card-text">
                            <div class="tl-institution">${ev.institution}</div>
                            <div class="tl-dates">${formatMonthYear(ev.start)} — ${endLabel}</div>
                        </div>
                    </div>
                </div>
            </a>
        `;
    };

    // Fill the gap between back-to-back academic stints sharing a lane, so the
    // academic path shows as unbroken. Purely decorative: no link, no dates.
    const buildBridgesHTML = (prepared, side) => {
        const lanes = new Map();
        prepared
            .filter(ev => ev.type === 'academic')
            .forEach(ev => {
                if (!lanes.has(ev._lane)) lanes.set(ev._lane, []);
                lanes.get(ev._lane).push(ev);
            });

        const bridges = [];
        lanes.forEach((list, lane) => {
            list.sort((a, b) => a._start - b._start);
            for (let i = 0; i < list.length - 1; i++) {
                const gapStart = list[i]._end;
                const gap = list[i + 1]._start - gapStart;
                if (gap <= 0 || gap > TL_BRIDGE_MAX_MONTHS) continue;

                const leftPct = (gapStart / totalMonths) * 100;
                const widthPct = (gap / totalMonths) * 100;
                const laneOffset = lane * LANE_HEIGHT_PX;
                const styleSide = side === 'top'
                    ? `bottom: ${laneOffset}px;`
                    : `top: ${laneOffset}px;`;
                bridges.push(
                    `<div class="tl-bridge tl-${side}" aria-hidden="true" style="left: ${leftPct}%; width: ${widthPct}%; ${styleSide}"></div>`
                );
            }
        });
        return bridges.join('');
    };

    const topBarsHTML = top.prepared.map(ev => buildBarHTML(ev, 'top')).join('');
    const bottomBarsHTML = bottom.prepared.map(ev => buildBarHTML(ev, 'bottom')).join('');

    // Height of each half derived from number of lanes
    const topHeight = 20 + top.laneCount * LANE_HEIGHT_PX;
    const bottomHeight = 20 + bottom.laneCount * LANE_HEIGHT_PX;

    container.innerHTML = `
        <div class="tl-half tl-half-top" style="height: ${topHeight}px;">
            ${buildBridgesHTML(top.prepared, 'top')}
            ${topBarsHTML}
        </div>
        <div class="tl-axis">
            ${yearsHTML}
        </div>
        <div class="tl-half tl-half-bottom" style="height: ${bottomHeight}px;">
            ${bottomBarsHTML}
        </div>
    `;
}

function formatMonthYear(ym) {
    if (ym === 'present') return translations[currentLanguage].journey.present;
    const { year, month } = parseYearMonth(ym);
    const monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const monthsEs = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const arr = currentLanguage === 'es' ? monthsEs : monthsEn;
    return `${arr[month - 1]} ${year}`;
}

// ===================================
// Render Experience Section
// ===================================
function renderExperience() {
    const container = document.getElementById('experience-container');
    const data = portfolioDataTranslations[currentLanguage].experience;
    
    data.forEach((exp, index) => {
        const card = createExperienceCard(exp);
        card.classList.add('reveal');
        container.appendChild(card);
    });
}

function createExperienceCard(exp) {
    const card = document.createElement('div');
    card.className = 'card';
    if (exp.id) card.dataset.itemId = exp.id;

    const linkText = translations[currentLanguage].links.viewWebsite;
    const linkHTML = exp.link 
        ? `<a href="${exp.link}" class="project-link" target="_blank" rel="noopener">${linkText}</a>`
        : '';
    
    const logoHTML = exp.logo
        ? `<img src="${exp.logo}" alt="${exp.company}" class="card-logo" loading="lazy" decoding="async">`
        : '';
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-header-content">
                ${logoHTML}
                <div>
                    <h3 class="card-title">${exp.title}</h3>
                    <p class="card-subtitle">${exp.company}</p>
                </div>
            </div>
            <span class="card-date">${exp.date}</span>
        </div>
        <p class="card-description">${exp.description}</p>
        ${linkHTML}
    `;
    
    return card;
}

// ===================================
// Render Education Section
// ===================================
function renderEducation() {
    const container = document.getElementById('education-container');
    const data = portfolioDataTranslations[currentLanguage].education;
    
    data.forEach((edu, index) => {
        const card = createEducationCard(edu);
        card.classList.add('reveal');
        container.appendChild(card);
    });
}

function createEducationCard(edu) {
    const card = document.createElement('div');
    card.className = 'card';
    if (edu.id) card.dataset.itemId = edu.id;

    const linkText = translations[currentLanguage].links.viewProgram;
    const linkHTML = edu.link 
        ? `<a href="${edu.link}" class="project-link" target="_blank" rel="noopener">${linkText}</a>`
        : '';
    
    const logoHTML = edu.logo
        ? `<img src="${edu.logo}" alt="${edu.institution}" class="card-logo" loading="lazy" decoding="async">`
        : '';
    
    // Handle honors section separately if it exists
    const honorsHTML = edu.honors 
        ? `<p class="card-description card-honors"> ${edu.honors}</p>`
        : '';
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-header-content">
                ${logoHTML}
                <div>
                    <h3 class="card-title">${edu.degree}</h3>
                    <p class="card-subtitle">${edu.institution}</p>
                </div>
            </div>
            <span class="card-date">${edu.date}</span>
        </div>
        <p class="card-description">${edu.description}</p>
        ${honorsHTML}
        ${linkHTML}
    `;
    
    return card;
}

// ===================================
// Render Projects Section
// ===================================
const INITIAL_PROJECTS_COUNT = 4;

// Chip order for the projects filter; labels live in translations.projectFilters
// and the keys must match the tags on each project. Chips with nothing to show
// are dropped, so adding a tag here before using it is harmless.
const PROJECT_FILTERS = ['all', 'cv', 'geometric', 'nlp', 'math'];

// Both survive a language switch — the keys are language-independent.
let activeProjectFilter = 'all';
let projectsExpanded = false;

function renderProjects() {
    const container = document.getElementById('projects-container');
    const data = portfolioDataTranslations[currentLanguage].projects;

    data.forEach(project => {
        const card = createProjectCard(project);
        card.classList.add('reveal');
        card.dataset.tags = (project.tags || []).join(' ');
        container.appendChild(card);
    });

    renderProjectFilters(data);
    applyProjectFilter();
}

function renderProjectFilters(data) {
    const container = document.getElementById('project-filters');
    if (!container) return;
    container.innerHTML = '';

    const labels = translations[currentLanguage].projectFilters || {};
    const usedTags = new Set(data.flatMap(p => p.tags || []));
    const keys = PROJECT_FILTERS.filter(key => key === 'all' || usedTags.has(key));

    // A lone "All" chip filters nothing — don't take up the space.
    if (keys.length < 2) return;

    keys.forEach(key => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'project-filter';
        chip.dataset.filter = key;
        chip.textContent = labels[key] || key;
        const isActive = key === activeProjectFilter;
        chip.classList.toggle('is-active', isActive);
        chip.setAttribute('aria-pressed', String(isActive));

        chip.addEventListener('click', () => {
            if (activeProjectFilter === key) return;
            activeProjectFilter = key;
            container.querySelectorAll('.project-filter').forEach(other => {
                const on = other.dataset.filter === activeProjectFilter;
                other.classList.toggle('is-active', on);
                other.setAttribute('aria-pressed', String(on));
            });
            applyProjectFilter(true);
        });

        container.appendChild(chip);
    });
}

// Decides which cards are on screen and whether the "show all" button still has
// a job. A narrowed filter always shows every match — the four-card limit only
// applies to the unfiltered grid. Pass animate=true for user-driven changes, so
// cards that the scroll observer will never see again still fade in.
function applyProjectFilter(animate = false) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const cards = [...container.querySelectorAll('.project-card')];
    const isFiltering = activeProjectFilter !== 'all';
    let shownCount = 0;

    cards.forEach((card, index) => {
        const tags = (card.dataset.tags || '').split(' ').filter(Boolean);
        const matches = !isFiltering || tags.includes(activeProjectFilter);
        const withinLimit = isFiltering || projectsExpanded || index < INITIAL_PROJECTS_COUNT;
        const visible = matches && withinLimit;

        card.classList.toggle('project-card-hidden', !visible);
        if (visible) {
            if (animate) {
                card.style.transitionDelay = `${Math.min(shownCount, 6) * 60}ms`;
                requestAnimationFrame(() => card.classList.add('is-visible'));
            }
            shownCount++;
        }
    });

    const moreToShow = !isFiltering && !projectsExpanded && cards.length > INITIAL_PROJECTS_COUNT;
    updateShowAllButton(moreToShow);
}

function updateShowAllButton(needed) {
    const section = document.getElementById('projects-container').parentElement;
    let btn = document.getElementById('show-all-projects-btn');

    if (!needed) {
        if (btn) btn.remove();
        return;
    }

    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'show-all-projects-btn';
        btn.type = 'button';
        btn.className = 'btn btn-secondary show-all-projects-btn';
        btn.addEventListener('click', () => {
            projectsExpanded = true;
            applyProjectFilter(true);
        });
        // After the projects grid, inside the same section
        section.appendChild(btn);
    }
    // Re-label on language switch
    btn.textContent = translations[currentLanguage].links.showAllProjects;
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const linkText = translations[currentLanguage].links.viewProject;
    const linkHTML = project.link 
        ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener">${linkText}</a>`
        : '';
    
    // Projects don't use icons anymore, only images.
    // imagePosition frames diagrams whose subject isn't dead centre — the
    // thumbnail is much wider than it is tall, so cover crops aggressively.
    const positionAttr = project.imagePosition
        ? ` style="object-position: ${project.imagePosition};"`
        : '';
    const imageHTML = project.image
        ? `<img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async"${positionAttr}>`
        : `<div class="project-placeholder"></div>`;

    // Attribution for images taken from someone else's work
    const creditHTML = project.imageCredit
        ? `<a class="project-image-credit" href="${project.imageCredit.url}" target="_blank" rel="noopener nofollow">${project.imageCredit.text}</a>`
        : '';

    card.innerHTML = `
        <div class="project-image">${imageHTML}${creditHTML}</div>
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
    const data = portfolioDataTranslations[currentLanguage].skills;
    
    Object.entries(data).forEach(([category, skills], index) => {
        const skillCard = createSkillCard(category, skills);
        skillCard.classList.add('reveal');
        container.appendChild(skillCard);
    });
}

// Mapping: skill name (normalized) -> icon file in assets/icons/tech.
// These are simple-icons (CC0) served from this repo rather than a CDN: one
// less third party in the critical path, works offline, and no visitor IPs
// leaking to someone else's server. Brand colors are baked into each SVG.
// Skills not in this map render as plain text tags — that's intentional for
// abstract concepts (Deep Learning, Linear Algebra, Robotics, PINNs, etc.)
// and for technologies without an official simple-icons logo (MATLAB, C#).
const SKILL_ICONS = {
    "python":      "python",
    "r":           "r",
    "sql":         "mysql",
    "pytorch":     "pytorch",
    "ros":         "ros",
    "opencv":      "opencv",
    "git":         "git",
    "docker":      "docker",
    "n8n":         "n8n"
};

const SKILL_ICON_PATH = 'assets/icons/tech';

function getSkillIcon(skillName) {
    const lower = skillName.toLowerCase().trim();
    // Match either exact, or with a space/parenthesis/number right after the key.
    // This prevents false positives like "Robotics" matching "ros", or
    // "Python (Advanced)" still matching "python".
    const keys = Object.keys(SKILL_ICONS).sort((a, b) => b.length - a.length);
    for (const key of keys) {
        if (lower === key) {
            return `${SKILL_ICON_PATH}/${SKILL_ICONS[key]}.svg`;
        }
        // Allow: "python (advanced)", "ros 2", "sql (postgres)"
        // Disallow: "robotics" matching "ros"
        const nextChar = lower.charAt(key.length);
        if (lower.startsWith(key) && (nextChar === ' ' || nextChar === '(' || /[0-9]/.test(nextChar))) {
            return `${SKILL_ICON_PATH}/${SKILL_ICONS[key]}.svg`;
        }
    }
    return null;
}

function createSkillCard(category, skills) {
    const card = document.createElement('div');
    card.className = 'skill-category';

    const skillTags = skills
        .map(skill => {
            const iconUrl = getSkillIcon(skill);
            const iconHTML = iconUrl
                ? `<img src="${iconUrl}" alt="" class="skill-tag-icon" loading="lazy" decoding="async" onerror="this.style.display='none'">`
                : '';
            return `<span class="skill-tag${iconUrl ? ' has-icon' : ''}">${iconHTML}${skill}</span>`;
        })
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
// Render Awards Section
// ===================================
function renderAwards() {
    const container = document.getElementById('awards-container');
    const data = portfolioDataTranslations[currentLanguage].awards;
    
    data.forEach((award, index) => {
        const card = createAwardCard(award);
        card.classList.add('reveal');
        container.appendChild(card);
    });
}

function createAwardCard(award) {
    const card = document.createElement('div');
    card.className = 'award-card';
    
    const linkText = translations[currentLanguage].links.viewAward;
    const linkHTML = (award.link !== null && award.link !== undefined) 
        ? `<a href="${award.link}" class="project-link" target="_blank" rel="noopener">${linkText}</a>`
        : '';
    
    // Use image if available, otherwise use icon as SVG
    const iconHTML = award.image
        ? `<img src="${award.image}" alt="${award.title}" class="award-image" loading="lazy" decoding="async">`
        : `<img src="${award.icon}" alt="${award.title}" class="award-icon-svg" loading="lazy" decoding="async">`;
    
    card.innerHTML = `
        ${iconHTML}
        <div class="award-content">
            <h3 class="award-title">${award.title}</h3>
            <p class="award-year">${award.year}</p>
            <p class="award-description">${award.description}</p>
            ${linkHTML}
        </div>
    `;
    
    return card;
}

// ===================================
// Smooth Scrolling for Navigation
// ===================================
function setupSmoothScrolling() {
    // Delegated listener: also covers anchors rendered later
    // (timeline bars, cards re-rendered on language switch).
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (!anchor) return;
        e.preventDefault();
        const targetId = anchor.getAttribute('href');

        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // A timeline bar goes to its own card rather than the section heading,
        // and flags it on arrival. Falls back to the section if there's no ref.
        const linkedCard = findLinkedCard(anchor.closest('.tl-event'));
        const targetElement = linkedCard || document.querySelector(targetId);

        if (targetElement) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = offsetTopOf(targetElement) - navHeight - 20;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            if (linkedCard) flashLinkedCard(linkedCard);
        }
    });
}

// ===================================
// Journey <-> card cross-linking
// ===================================
// Timeline events carry a "ref" matching the "id" of an experience/education
// entry, so a bar and its card can find each other regardless of language.
const LINK_FLASH_MS = 1800;
let linkFlashTimer = null;

function findLinkedCard(timelineEvent) {
    const ref = timelineEvent && timelineEvent.dataset.ref;
    return ref ? document.querySelector(`[data-item-id="${ref}"]`) : null;
}

// offsetTop is relative to the nearest positioned ancestor; cards sit inside
// grids, so walk up to get a document-level offset.
function offsetTopOf(el) {
    let top = 0;
    let node = el;
    while (node) {
        top += node.offsetTop;
        node = node.offsetParent;
    }
    return top;
}

function flashLinkedCard(card) {
    clearTimeout(linkFlashTimer);
    document.querySelectorAll('.is-flash').forEach(el => el.classList.remove('is-flash'));
    // The card may still be waiting on the scroll observer
    card.classList.add('is-visible', 'is-flash');
    linkFlashTimer = setTimeout(() => card.classList.remove('is-flash'), LINK_FLASH_MS);
}

// Hovering (or tabbing to) a timeline bar marks its card. Bound to the
// container, which outlives the re-renders of its contents.
function setupJourneyLinking() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    const setHighlight = (on) => (e) => {
        const card = findLinkedCard(e.target.closest('.tl-event'));
        if (card) card.classList.toggle('is-linked', on);
    };

    container.addEventListener('mouseover', setHighlight(true));
    container.addEventListener('mouseout', setHighlight(false));
    container.addEventListener('focusin', setHighlight(true));
    container.addEventListener('focusout', setHighlight(false));
}

// ===================================
// Navbar Scroll Effect
// ===================================
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let scrolled = false;

    const onScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
            scrolled = isScrolled;
            navbar.classList.toggle('is-scrolled', scrolled);
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
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

// Intersection Observer for scroll animations — adds "is-visible"
// to any element carrying the "reveal" class when it enters the viewport.
let revealObserver = null;

function setupScrollAnimations() {
    // Drop the previous observer (language switches rebuild the DOM,
    // so stale observers would pile up otherwise).
    if (revealObserver) revealObserver.disconnect();

    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const parent = entry.target.parentElement;
                const siblings = parent ? [...parent.children].filter(c => c.classList.contains('reveal')) : [];
                const idx = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${Math.min(idx, 6) * 60}ms`;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealObserver = observer;

    // Observe any element flagged as .reveal
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Safety: if for any reason the observer never fires for some elements
    // (e.g., print view, headless screenshot, prefers-reduced-motion already applied),
    // reveal anything still hidden after 1.5s.
    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 1.2) {
                el.classList.add('is-visible');
            }
        });
    }, 1500);
}

// Re-run on language change because clearContainers / renderX rebuild DOM
function reobserveReveals() {
    setupScrollAnimations();
}

// ===================================
// Reading progress bar
// ===================================
function setupReadingProgress() {
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    document.body.appendChild(bar);

    const update = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const pct = height > 0 ? (scrollTop / height) * 100 : 0;
        bar.style.width = `${pct}%`;
    };

    // Coalesce scroll events into one style write per frame
    let ticking = false;
    const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            update();
            ticking = false;
        });
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();
}