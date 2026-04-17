/* ============================================================
   Translations
   ============================================================ */
const translations = {
    es: {
        'hero-subtitle':   'Automation &amp; AI Developer | Security Domain Expert | 20 años de dominio + stack moderno',
        'card1-title':     '1. Dominio en Seguridad Electrónica (20+ años)',
        'card1-subtitle':  '(2004 – 2026)',
        'item1-h4':        'Visión de Negocio',
        'item1-p':         'Licenciado en Administración de Empresas con capacidad para transformar necesidades operativas en infraestructuras tecnológicas rentables.',
        'item2-h4':        'Gestión de Proyectos Críticos',
        'item2-p':         'Diseñé e implementé la arquitectura de monitoreo del Centro de Seguridad Única: videowall de 48 monitores, 768 cámaras en vivo simultáneas y control centralizado de 900+ cámaras IP.',
        'item3-h4':        'Consultoría Estratégica',
        'item3-p':         'Especialista en seguridad perimetral para barrios privados de alta gama y grandes corporaciones, gestionando desde la auditoría técnica hasta la elaboración de pliegos licitatorios.',
        'item4-h4':        'Escalabilidad',
        'item4-p':         'Lideré la migración tecnológica de 80+ sedes nacionales: cámaras IP, alarmas inalámbricas y controles de acceso estandarizados a escala.',
        'card2-title':     '2. Stack Técnico &amp; Proyectos (4 meses · 21 proyectos)',
        'card2-subtitle':  '(Diciembre 2025 – Abril 2026)',
        'lab1-h4':         'SGAI — Chef AI en producción',
        'lab1-p':          'FastAPI async · PostgreSQL · arquitectura hexagonal · sistema multi-LLM (MiMo→Gemini→Llama 4) · 250+ tests automatizados · desplegado en VPS propio.',
        'lab2-h4':         'DeepVision — Monitoreo inteligente',
        'lab2-p':          'Detecta fatiga, uso de celular y armas en tiempo real. YOLOv8/v11 dual · multi-hilo · Leaky Bucket · alertas con foto forense vía Telegram · SHA-256 admin auth.',
        'lab3-h4':         'LatamPriceTracker — Monitor de precios',
        'lab3-p':          'Web scraping con anti-detección de 6 capas (Canvas, WebGL, IP rotation, Cloudflare bypass) · 103 tests · API REST con JWT · dashboard Next.js 15 · 5 retailers LATAM.',
        'lab4-h4':         'PSIM Búnker — Gestión de incidentes',
        'lab4-p':          'Sistema de seguridad perimetral con CI/CD completo · Gherkin BDD · Pydantic v2 · GitHub Actions · arquitectura desacoplada inspirada en PSIM industriales.',
        'terminal-title':  '3. El Puente: ¿Hacia dónde voy?',
        'btn-linkedin':    'Conectar en LinkedIn',
        'btn-email':       'Escríbeme',
        'btn-cv':          'Ver CV Clásico',
        'btn-github':      'Ver GitHub',
    },
    en: {
        'hero-subtitle':   'Automation &amp; AI Developer | Security Domain Expert | 20 years of domain expertise + modern stack',
        'card1-title':     '1. Electronic Security Expertise (20+ years)',
        'card1-subtitle':  '(2004 – 2026)',
        'item1-h4':        'Business Vision',
        'item1-p':         'Business Administration degree with the ability to transform operational needs into profitable technological infrastructures.',
        'item2-h4':        'Critical Project Management',
        'item2-p':         'I designed and implemented the monitoring center architecture at Seguridad Única: 48-monitor video wall, 768 simultaneous live feeds, and centralized control of 900+ IP cameras.',
        'item3-h4':        'Strategic Consulting',
        'item3-p':         'Perimeter security specialist for high-end private communities and large corporations, managing from technical audits to tender documentation.',
        'item4-h4':        'Scalability',
        'item4-p':         'Led the technology rollout across 80+ national branches: IP cameras, wireless alarms, and access control systems standardized at scale.',
        'card2-title':     '2. Tech Stack &amp; Projects (4 months · 21 projects)',
        'card2-subtitle':  '(December 2025 – April 2026)',
        'lab1-h4':         'SGAI — Production Chef AI',
        'lab1-p':          'FastAPI async · PostgreSQL · hexagonal architecture · multi-LLM routing (MiMo→Gemini→Llama 4) · 250+ automated tests · deployed on own VPS.',
        'lab2-h4':         'DeepVision — Intelligent Monitoring',
        'lab2-p':          'Real-time detection of fatigue, phone use, and weapons. Dual YOLOv8/v11 · multi-thread · Leaky Bucket · forensic photo alerts via Telegram · SHA-256 admin auth.',
        'lab3-h4':         'LatamPriceTracker — Price Monitor',
        'lab3-p':          'Web scraping with 6-layer anti-detection (Canvas, WebGL, IP rotation, Cloudflare bypass) · 103 tests · JWT REST API · Next.js 15 dashboard · 5 LATAM retailers.',
        'lab4-h4':         'PSIM Bunker — Incident Management',
        'lab4-p':          'Perimeter security system with full CI/CD · Gherkin BDD · Pydantic v2 · GitHub Actions · decoupled architecture inspired by industrial PSIM platforms.',
        'terminal-title':  "3. The Bridge: Where I\u2019m Headed",
        'btn-linkedin':    'Connect on LinkedIn',
        'btn-email':       'Email me',
        'btn-cv':          'View Classic CV',
        'btn-github':      'View GitHub',
    }
};

/* ============================================================
   State
   ============================================================ */
let currentLang = 'es';
let typewriterTimer = null;
let typewriterDone = false;

/* ============================================================
   Apply language to all [data-i18n] elements
   ============================================================ */
function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    // Toggle active state on ES / EN labels
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    // Swap hrefs on links with data-href-es / data-href-en
    document.querySelectorAll('[data-href-' + lang + ']').forEach(el => {
        el.href = el.getAttribute('data-href-' + lang);
    });

    // Restart typewriter if it has started (typing or finished)
    if (typewriterDone || typewriterTimer !== null) {
        restartTypewriter(lang);
    }

    currentLang = lang;
}

/* ============================================================
   Typewriter
   ============================================================ */
function startTypewriter(lang) {
    const textElement = document.getElementById('typewriter-text');
    const sourceId = lang === 'es' ? 'hidden-vision-es' : 'hidden-vision-en';
    const fullText = document.getElementById(sourceId).innerText.trim();

    textElement.innerHTML = '';
    let index = 0;

    clearTimeout(typewriterTimer);
    typewriterTimer = null;

    function type() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            let speed = Math.random() * 30 + 10;
            if (['.', ',', '?', '!', '\u2014'].includes(fullText.charAt(index - 1))) {
                speed += 200;
            }
            typewriterTimer = setTimeout(type, speed);
        } else {
            typewriterDone = true;
            typewriterTimer = null;
        }
    }

    type();
}

function restartTypewriter(lang) {
    typewriterDone = false;
    startTypewriter(lang);
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

    /* --- Apply default language on load so translations.es is always the source of truth --- */
    applyLang('es');

    /* --- Language toggle --- */
    document.getElementById('lang-toggle').addEventListener('click', () => {
        applyLang(currentLang === 'es' ? 'en' : 'es');
    });

    /* --- Typewriter: trigger on scroll into view --- */
    const terminalSection = document.getElementById('terminal-body');
    if (terminalSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !typewriterDone && typewriterTimer === null) {
                    startTypewriter(currentLang);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(terminalSection);
    }

    /* --- Subtle hover glow on cards --- */
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const glow = card.querySelector('.card-glow');
            if (!glow) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ...)`;
        });
    });

});
