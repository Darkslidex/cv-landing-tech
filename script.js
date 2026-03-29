/* ============================================================
   Translations
   ============================================================ */
const translations = {
    es: {
        'hero-subtitle':   'Administrador por formación | Especialista en Seguridad por trayectoria | Desarrollador de IA por convicción.',
        'card1-title':     '1. El Cimiento:<br>Gestión y Escala',
        'card1-subtitle':  '(Pasado y Presente)',
        'item1-h4':        'Visión de Negocio',
        'item1-p':         'Licenciado en Administración de Empresas con capacidad para transformar necesidades operativas en infraestructuras tecnológicas rentables.',
        'item2-h4':        'Gestión de Proyectos Críticos',
        'item2-p':         'Lideré el diseño y ejecución del Centro de Monitoreo de Seguridad Única, coordinando la visualización de más de 900 cámaras y un videowall de 48 monitores.',
        'item3-h4':        'Consultoría Estratégica',
        'item3-p':         'Especialista en seguridad perimetral para barrios privados de alta gama y grandes corporaciones, gestionando desde la auditoría técnica hasta la elaboración de pliegos licitatorios.',
        'item4-h4':        'Escalabilidad',
        'item4-p':         'Coordiné la migración tecnológica de más de 80 sedes a nivel nacional, estandarizando procesos y optimizando costos de mantenimiento.',
        'card2-title':     '2. El Laboratorio:<br>Exploración e IA',
        'card2-subtitle':  '(Los últimos 8 meses)',
        'lab1-h4':         'Investigación en Arquitectura (PSIM Bunker)',
        'lab1-p':          'Ejercicio de práctica profunda sobre Arquitectura Hexagonal en Python, diseñado para entender cómo construir sistemas de seguridad desacoplados, resilientes y escalables.',
        'lab2-h4':         'Pensamiento de Sistemas (SGAI)',
        'lab2-p':          'Mi proyecto más personal, donde aplico logística de administración para optimizar la gestión alimentaria en la nube, automatizando decisiones diarias mediante flujos de datos inteligentes.',
        'lab3-h4':         'Automatización de Vulnerabilidades',
        'lab3-p':          'Desarrollo de scripts ETL experimentales para detectar fallos en dispositivos de seguridad electrónica, buscando proactivamente cerrar brechas antes de ser explotadas.',
        'lab4-h4':         'Inteligencia de Mercado',
        'lab4-p':          'Creación de un monitor autónomo de precios (Python + SQLite) integrado con Power BI, para transformar el caos de datos del mercado en tableros de decisión claros.',
        'terminal-title':  '3. El Puente: ¿Hacia dónde voy?',
        'btn-linkedin':    'Conectar en LinkedIn',
        'btn-email':       'Escríbeme',
        'btn-cv':          'Ver CV Clásico',
    },
    en: {
        'hero-subtitle':   'Business Manager by training | Infrastructure Specialist by experience | AI Developer by conviction.',
        'card1-title':     '1. The Foundation:<br>Management &amp; Scale',
        'card1-subtitle':  '(Past &amp; Present)',
        'item1-h4':        'Business Vision',
        'item1-p':         'Business Administration degree with the ability to transform operational needs into profitable technological infrastructures.',
        'item2-h4':        'Critical Project Management',
        'item2-p':         'Led the design and execution of a Security Monitoring Center, coordinating the visualization of 900+ cameras and a 48-monitor videowall.',
        'item3-h4':        'Strategic Consulting',
        'item3-p':         'Perimeter security specialist for high-end private communities and large corporations, managing from technical audits to tender documentation.',
        'item4-h4':        'Scalability',
        'item4-p':         'Coordinated the technological migration of 80+ national branches, standardizing processes and optimizing maintenance costs.',
        'card2-title':     '2. The Lab:<br>Exploration &amp; AI',
        'card2-subtitle':  '(Last 8 months)',
        'lab1-h4':         'Architecture Research (PSIM Bunker)',
        'lab1-p':          'Deep practice exercise on Hexagonal Architecture in Python, designed to build decoupled, resilient, and scalable security systems.',
        'lab2-h4':         'Systems Thinking (SGAI)',
        'lab2-p':          "My most personal project \u2014 applying administrative logistics to optimize personal nutrition management in the cloud via intelligent data flows.",
        'lab3-h4':         'Vulnerability Automation',
        'lab3-p':          'Experimental ETL scripts for proactive detection of failures in electronic security devices, closing gaps before exploitation.',
        'lab4-h4':         'Market Intelligence',
        'lab4-p':          'Autonomous price monitor (Python + SQLite) integrated with Power BI, transforming market data chaos into clear decision dashboards.',
        'terminal-title':  "3. The Bridge: Where I\u2019m Headed",
        'btn-linkedin':    'Connect on LinkedIn',
        'btn-email':       'Email me',
        'btn-cv':          'View Classic CV',
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

    /* --- Language toggle: initial active state --- */
    document.getElementById('lang-es').classList.add('active');

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
