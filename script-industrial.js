/* ============================================================
   Translations
   ============================================================ */
const translations = {
    es: {
        'hero-subtitle':   'Analista BI · Data Analyst | Power BI · Python · n8n · SQL | Pipelines de datos end-to-end en producción',
        'card1-title':     '1. El Cimiento: 20 años de operaciones industriales',
        'card1-subtitle':  '(2004 – 2024)',
        'item1-h4':        'Formación en negocio',
        'item1-p':         'Licenciado en Administración de Empresas. Capacidad para entender el negocio detrás del dato y traducir necesidades operativas en sistemas técnicos.',
        'item2-h4':        'Centro de monitoreo a escala',
        'item2-p':         'Diseñé e implementé la arquitectura del Centro de Monitoreo de Seguridad Única: videowall de 48 monitores, visualización en tiempo real de hasta 768 cámaras y administración de más de 900.',
        'item3-h4':        'Operaciones B2B con clientes corporativos',
        'item3-p':         'Diseño y operación de seguridad perimetral para cinco barrios privados y mantenimiento de otros dos. Coordinación de equipos técnicos, proveedores nacionales e internacionales, control de costos y plazos contra requerimientos del cliente.',
        'item4-h4':        'Multi-sede a escala nacional',
        'item4-p':         'Gestión de instalaciones multi-sede para más de 80 sedes corporativas, con integración al centro de monitoreo y protocolos de emergencia.',
        'card2-title':     '2. El Proyecto: ESAB · Pipeline de datos en producción',
        'card2-subtitle':  '(Sept. 2025 — Presente)',
        'lab1-h4':         'Arquitectura end-to-end',
        'lab1-p':          'Ingesta IMAP, orquestación n8n con tres workflows productivos (recepción, dead-man switch, error handler), procesamiento Python/pandas sobre VPS endurecido, sincronización a OneDrive y dashboard Power BI con modelo estrella.',
        'lab2-h4':         'Transformación de datos',
        'lab2-p':          'Quince validaciones de calidad, deduplicación por claves compuestas, normalización de fechas, detección automática de cambios de schema y merge entre snapshots históricos y deltas diarios.',
        'lab3-h4':         'Modelo dimensional Power BI',
        'lab3-p':          'Tres tablas de hechos, tres dimensiones, medidas DAX para KPIs logísticos y exposición cambiaria. Conocimientos equivalentes a Microsoft PL-300 aplicados en producción, no en un sandbox.',
        'lab4-h4':         'Disciplina operativa',
        'lab4-p':          'Trece issues productivos documentados y resueltos con SHA tracking, tests de no-regresión, alertas en triple capa con dead-man switch y plan de rollback menor a un minuto. VPS endurecido, sin dependencias externas.',
        'terminal-title':  '3. El Puente: ¿Hacia dónde voy?',
        'btn-linkedin':    'Conectar en LinkedIn',
        'btn-email':       'Escríbeme',
        'btn-cv':          'Ver CV Clásico',
        'btn-github':      'Ver GitHub',
        'ind-banner-text': 'Mismo contenido, otra piel. Así se vería este sitio con la hipótesis de diseño dark / industrial &mdash; bento, estética de terminal, glow. La versión editorial actual la reemplazó porque la calidez y la tipografía editorial se leen mejor para roles senior de BI. ',
        'ind-banner-tag':  'Iterar es el trabajo.',
        'ind-banner-back': '← volver a la versión actual',
    },
    en: {
        'hero-subtitle':   'Analytics Engineer · BI Developer | Power BI · Python · n8n · SQL | End-to-end data pipelines in production',
        'card1-title':     '1. The Foundation: 20 years of industrial operations',
        'card1-subtitle':  '(2004 – 2024)',
        'item1-h4':        'Business Foundation',
        'item1-p':         'BSc in Business Administration. Ability to understand the business behind the data and translate operational needs into technical systems.',
        'item2-h4':        'Operations center at scale',
        'item2-p':         'I designed and implemented the architecture of the Seguridad Única monitoring center: 48-monitor video wall, real-time visualization of up to 768 cameras, and management of 900+ IP cameras.',
        'item3-h4':        'B2B operations with corporate clients',
        'item3-p':         'Design and operation of perimeter security for five gated communities and maintenance of two more. Coordination of technical teams, domestic and international vendors, cost control, and B2B delivery against client requirements.',
        'item4-h4':        'Multi-site rollout at national scale',
        'item4-p':         'Management of multi-site installations for 80+ corporate locations, integrated with the central monitoring center and emergency protocols.',
        'card2-title':     '2. The Project: ESAB · Production data pipeline',
        'card2-subtitle':  '(Sept. 2025 — Present)',
        'lab1-h4':         'End-to-end architecture',
        'lab1-p':          'IMAP ingestion, n8n orchestration with three production workflows (receiver, dead-man switch, error handler), Python/pandas processing on a hardened VPS, OneDrive sync, and Power BI dashboard with star-schema modeling.',
        'lab2-h4':         'Data transformation',
        'lab2-p':          'Fifteen quality validations, composite-key deduplication, date normalization, automatic schema-change detection, and merge logic between historical snapshots and daily deltas.',
        'lab3-h4':         'Power BI dimensional model',
        'lab3-p':          'Three fact tables, three dimensions, DAX measures for logistics KPIs and FX exposure. Skills equivalent to Microsoft PL-300 applied in production, not in a sandbox.',
        'lab4-h4':         'Operational discipline',
        'lab4-p':          'Thirteen documented production issues resolved with SHA tracking, regression tests, three-layer alerting with a dead-man switch, and a sub-minute rollback plan. Hardened VPS, no external dependencies.',
        'terminal-title':  "3. The Bridge: Where I\u2019m Headed",
        'btn-linkedin':    'Connect on LinkedIn',
        'btn-email':       'Email me',
        'btn-cv':          'View Classic CV',
        'btn-github':      'View GitHub',
        'ind-banner-text': 'Same content, different skin. This is what this site would look like under the dark / industrial design hypothesis &mdash; bento, terminal aesthetic, glow. The current editorial version replaced it because warmth and editorial typography read better for senior BI roles. ',
        'ind-banner-tag':  'Iteration is the job.',
        'ind-banner-back': '← back to current version',
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

    /* --- Industrial banner: dismiss --- */
    const banner = document.getElementById('industrial-banner');
    const bannerClose = document.getElementById('ind-banner-close');
    if (banner && bannerClose) {
        bannerClose.addEventListener('click', () => {
            banner.classList.add('dismissed');
            document.body.classList.add('banner-dismissed');
            try { sessionStorage.setItem('ind-banner-dismissed', '1'); } catch (e) {}
        });
        try {
            if (sessionStorage.getItem('ind-banner-dismissed') === '1') {
                banner.classList.add('dismissed');
                document.body.classList.add('banner-dismissed');
            }
        } catch (e) {}
    }

});
