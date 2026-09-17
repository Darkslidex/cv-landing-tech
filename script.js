/* ============================================================
   Editorial Dark Claude — i18n + typewriter
   ============================================================ */
const translations = {
    en: {
        'hero-eyebrow':    'Buenos Aires &middot; Supply chain, imports &amp; foreign trade',
        'hero-role':       'AI Workflow &amp; Data Automation Engineer',
        'hero-subtitle':   'Production systems, not prototypes. For a European industrial multinational I built and operate an inbox&nbsp;&rarr;&nbsp;Power BI pipeline: <b>78 suppliers</b>, <b>7 countries</b>, <b>84 seconds</b> end to end, 15 quality validations. It runs unattended every business day. Independent contractor, invoicing from Argentina.',
        'btn-linkedin':    'Connect on LinkedIn',
        'btn-email':       'Email',
        'btn-cv':          'Curriculum (PDF)',
        'btn-github':      'GitHub',

        'sec1-eyebrow':    'The Foundation',
        'sec1-title':      'Twenty years operating critical industrial infrastructure at scale.',
        'sec1-lede':       'The numbers below are not bullet points. They are the operations I ran &mdash; the same discipline that now shows up in every data pipeline I ship.',
        'm1-label':        'cameras live<br>simultaneous',
        'm2-label':        'IP cameras<br>managed',
        'm3-label':        'corporate sites<br>nationwide',
        'm4-label':        'years in<br>operations',

        'sec2-eyebrow':    'The Project',
        'sec2-meta':       'Sept 2025 &mdash; Present',
        'sec2-client':     'Industrial multinational',
        'sec2-title':      'Production data pipeline',
        'sec2-lede':       '<em>Client: European industrial multinational, Argentine operations.</em> Supply-chain reporting ran on emails and spreadsheets, with someone opening attachments every morning. It now runs as an end-to-end pipeline covering <b>78 suppliers across 7 countries</b> &mdash; it ingests, validates, audits itself, and raises an alarm when it doesn\'t.',
        'pipe1-detail':    'daily mail<br>ingestion',
        'pipe2-detail':    '3 production<br>workflows',
        'pipe3-detail':    'pandas, 15<br>validations',
        'pipe4-detail':    'star schema,<br>DAX measures',
        'pipe-sum-a':      'inbox to dashboard',
        'pipe-sum-b':      'suppliers',
        'pipe-sum-c':      'countries',
        'pipe-sum-d':      'quality validations',
        'pipe-sum-1':      'production issues resolved',
        'pipe-sum-2':      'rollback',
        'pipe-sum-3-strong': 'dead-man',
        'pipe-sum-3':      'switch active',
        'f1-title':        'End-to-end architecture',
        'f1-body':         'IMAP ingestion, three n8n workflows, Python/pandas on a hardened VPS, Power BI star schema.',
        'f2-title':        'Data transformation',
        'f2-body':         'Fifteen validations, composite-key deduplication, schema-change detection, historical snapshots merged with daily deltas.',
        'f3-title':        'Power BI dimensional model',
        'f3-body':         'Three fact tables, three dimensions, DAX measures for logistics KPIs and FX exposure. PL-300 level, applied in production.',
        'f4-title':        'Operational discipline',
        'f4-body':         'Thirteen documented incidents resolved, regression tests, three-layer alerting, sub-minute rollback.',

        'sec3-eyebrow':    'The Bridge',

        'sec4-eyebrow':    'The Stack',
        'sec4-meta':       'production-tested',
        'sec4-title':      'Tools I use to ship.',
        'sec4-lede':       'Stack curated around data pipelines, automation, and self-hosted reliability. Each tool listed is in a project running in production today.',
        'stack-data':      'Data &amp; Analytics',
        'stack-auto':      'Automation &amp; AI',
        'stack-infra':     'Web &amp; Infra',

        'sec5-eyebrow':    'More work',
        'sec5-meta':       'in production',
        'sec5-title':      'Two more systems running today.',
        'p1-tag':          'Full-stack CRM',
        'p1-status':       'live',
        'p1-title':        'Multi-vertical commercial dashboard',
        'p1-body':         'A private-security company was tracking its entire commercial pipeline in spreadsheets. Today <b>1,500+ leads across 15 verticals</b> &mdash; gated communities, industrial parks, logistics, clinics &mdash; live in one system, with an enrichment pipeline that scrapes, validates emails and geocodes end to end. Next.js 16 with Prisma 7 and PostgreSQL, interactive map on Leaflet, Python enrichment.',
        'p2-tag':          'AI agent system',
        'p2-status':       'live',
        'p2-title':        'Supervised B2B outreach with agent teams',
        'p2-body':         'Prospecting by hand doesn\'t scale, and unattended sending is a liability. A coordinator dispatches four specialists &mdash; enrich, qualify, draft, package &mdash; and every message waits for human approval on Telegram before it leaves. <b>~880 emails a month at ~USD 30</b> in tokens, 80% cheaper than the architecture it replaced.',

        'status-off':      'Not available',
        'status-on':       'Available for remote contract work',
        'status-detail':   'US Eastern overlap · supply chain &amp; imports',
        'rail-top':        'Top',
        'rail-sec1':       'Foundation',
        'rail-sec2':       'Project',
        'rail-sec3':       'Bridge',
        'rail-sec4':       'Stack',
        'rail-sec5':       'More work',

        'footer-loc':      'Buenos Aires, Argentina',

        'tap-counter':     '{n} more...',
        'overlay-text':    'Same F&eacute;lix. Earlier draft.',
        'industrial-aria': 'Open archive version',
    },
    es: {
        'hero-eyebrow':    'Buenos Aires &middot; Disponible remoto',
        'hero-role':       'Analista BI<span class="sep">&middot;</span>Data Analyst',
        'hero-subtitle':   'Tres <b>workflows n8n en producci&oacute;n</b>. Quince validaciones de calidad. <b>4.709 filas diarias</b> procesadas. Un pipeline IMAP&nbsp;&rarr;&nbsp;Power BI para una multinacional europea industrial.',
        'btn-linkedin':    'Conectar en LinkedIn',
        'btn-email':       'Email',
        'btn-cv':          'Curr&iacute;culum (PDF)',
        'btn-github':      'GitHub',

        'sec1-eyebrow':    'El Cimiento',
        'sec1-title':      'Veinte a&ntilde;os operando infraestructura industrial cr&iacute;tica a escala.',
        'sec1-lede':       'Los n&uacute;meros de abajo no son bullet points. Son las operaciones que llev&eacute; adelante &mdash; la misma disciplina que hoy aparece en cada pipeline de datos que pongo en producci&oacute;n.',
        'm1-label':        'c&aacute;maras en vivo<br>simult&aacute;neas',
        'm2-label':        'c&aacute;maras IP<br>administradas',
        'm3-label':        'sedes corporativas<br>a nivel nacional',
        'm4-label':        'a&ntilde;os en<br>operaciones',

        'sec2-eyebrow':    'El Proyecto',
        'sec2-meta':       'Sept. 2025 &mdash; Presente',
        'sec2-client':     'Multinacional industrial',
        'sec2-title':      'Pipeline de datos en producci&oacute;n',
        'sec2-lede':       '<em>Cliente: multinacional europea industrial, operaciones en Argentina.</em> El reporting de supply chain corr&iacute;a sobre correos y planillas, con alguien abriendo adjuntos cada ma&ntilde;ana. Hoy corre como un pipeline end-to-end que cubre <b>78 proveedores en 7 pa&iacute;ses</b> &mdash; ingesta, valida, se audita a s&iacute; mismo y avisa cuando algo no cierra.',
        'pipe1-detail':    'ingesta de correo<br>diaria',
        'pipe2-detail':    '3 workflows<br>productivos',
        'pipe3-detail':    'pandas, 15<br>validaciones',
        'pipe4-detail':    'modelo estrella,<br>medidas DAX',
        'pipe-sum-a':      'del correo al dashboard',
        'pipe-sum-b':      'proveedores',
        'pipe-sum-c':      'pa&iacute;ses',
        'pipe-sum-d':      'validaciones de calidad',
        'pipe-sum-1':      'issues productivos resueltos',
        'pipe-sum-2':      'rollback',
        'pipe-sum-3-strong': 'dead-man',
        'pipe-sum-3':      'switch activo',
        'f1-title':        'Arquitectura end-to-end',
        'f1-body':         'Ingesta IMAP, tres workflows n8n, Python/pandas sobre VPS endurecido, modelo estrella en Power BI.',
        'f2-title':        'Transformaci&oacute;n de datos',
        'f2-body':         'Quince validaciones, deduplicaci&oacute;n por claves compuestas, detecci&oacute;n de cambios de schema, merge de snapshots hist&oacute;ricos con deltas diarios.',
        'f3-title':        'Modelo dimensional Power BI',
        'f3-body':         'Tres tablas de hechos, tres dimensiones, medidas DAX para KPIs log&iacute;sticos y exposici&oacute;n cambiaria. Nivel PL-300 aplicado en producci&oacute;n.',
        'f4-title':        'Disciplina operativa',
        'f4-body':         'Trece incidentes documentados y resueltos, tests de no-regresi&oacute;n, alertas en triple capa, rollback menor a un minuto.',

        'sec3-eyebrow':    'El Puente',

        'sec4-eyebrow':    'El Stack',
        'sec4-meta':       'probado en producci&oacute;n',
        'sec4-title':      'Las herramientas con las que entrego.',
        'sec4-lede':       'Stack curado en torno a pipelines de datos, automatizaci&oacute;n y confiabilidad self-hosted. Cada herramienta listada est&aacute; hoy en un proyecto en producci&oacute;n.',
        'stack-data':      'Datos &amp; Analytics',
        'stack-auto':      'Automatizaci&oacute;n &amp; IA',
        'stack-infra':     'Web &amp; Infra',

        'sec5-eyebrow':    'M&aacute;s trabajo',
        'sec5-meta':       'en producci&oacute;n',
        'sec5-title':      'Dos sistemas m&aacute;s, hoy corriendo.',
        'p1-tag':          'CRM full-stack',
        'p1-status':       'en vivo',
        'p1-title':        'Panel comercial multi-vertical',
        'p1-body':         'Una empresa de seguridad privada llevaba todo su pipeline comercial en planillas. Hoy <b>1.500+ leads en 15 verticales</b> &mdash; barrios privados, parques industriales, log&iacute;stica, cl&iacute;nicas &mdash; viven en un solo sistema, con un pipeline de enriquecimiento que scrappea, valida emails y geocodifica end-to-end. Next.js 16 con Prisma 7 y PostgreSQL, mapa interactivo en Leaflet, enriquecimiento en Python.',
        'p2-tag':          'Sistema de agentes IA',
        'p2-status':       'en vivo',
        'p2-title':        'Outreach B2B supervisado con agent teams',
        'p2-body':         'Prospectar a mano no escala, y enviar sin supervisi&oacute;n es un riesgo. Un coordinador despacha cuatro especialistas &mdash; enriquecer, calificar, redactar, empaquetar &mdash; y cada mensaje espera aprobaci&oacute;n humana en Telegram antes de salir. <b>~880 emails al mes a ~USD 30</b> en tokens, 80% m&aacute;s barato que la arquitectura que reemplaz&oacute;.',

        'status-off':      'No disponible',
        'status-on':       'Disponible para posiciones remotas o híbridas en Buenos Aires',
        'status-detail':   'Analista de Datos · BI Developer',
        'rail-top':        'Inicio',
        'rail-sec1':       'Cimiento',
        'rail-sec2':       'Proyecto',
        'rail-sec3':       'Puente',
        'rail-sec4':       'Stack',
        'rail-sec5':       'M&aacute;s trabajo',

        'footer-loc':      'Buenos Aires, Argentina',

        'tap-counter':     '{n} m&aacute;s...',
        'overlay-text':    'Mismo F&eacute;lix. Versi&oacute;n anterior.',
        'industrial-aria': 'Abrir versi&oacute;n de archivo',
    }
};

/* ============================================================
   State
   ============================================================ */
const DEFAULT_LANG = 'en';
let currentLang = DEFAULT_LANG;
let typewriterTimer = null;
let typewriterLoopTimer = null;
let typewriterDone = false;
const TYPEWRITER_LOOP_DELAY_MS = 15000;

/* ============================================================
   Apply language
   ============================================================ */
function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    document.documentElement.lang = lang;

    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-es').classList.toggle('active', lang === 'es');

    document.querySelectorAll('[data-href-' + lang + ']').forEach(el => {
        el.href = el.getAttribute('data-href-' + lang);
    });

    if (typewriterDone || typewriterTimer !== null) {
        restartTypewriter(lang);
    }

    currentLang = lang;

    /* Restart the status pill so the user sees "Not available / No disponible"
       in the new language and the whole cycle replays from scratch. Safe to
       call before the rest of init runs because initStatusPill is idempotent. */
    if (document.readyState !== 'loading' && document.getElementById('status-pill')) {
        initStatusPill();
    }
}

/* ============================================================
   Industrial mode portal — accessible easter egg
   Two redundant paths so any visitor can find it:
     A. Click the terracotta dot in the footer
     B. Tap 5 times on the hero name (Android-style)
   ============================================================ */
function triggerIndustrial() {
    const overlay = document.getElementById('industrial-overlay');
    if (!overlay) {
        window.location.href = 'industrial.html';
        return;
    }
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
        window.location.href = 'industrial.html';
    }, 1300);
}

function initIndustrialPortal() {
    /* --- Path A: click the dot in footer --- */
    const dot = document.getElementById('industrial-portal');
    if (dot) {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            triggerIndustrial();
        });

        /* Touch devices: tap once → show tooltip, tap again within 2.5s → trigger */
        let touchTipShown = false;
        let touchTipTimer = null;
        dot.addEventListener('touchstart', (e) => {
            if (!window.matchMedia('(hover: none)').matches) return;
            if (!touchTipShown) {
                e.preventDefault();
                dot.classList.add('show-tip');
                touchTipShown = true;
                clearTimeout(touchTipTimer);
                touchTipTimer = setTimeout(() => {
                    dot.classList.remove('show-tip');
                    touchTipShown = false;
                }, 2500);
            }
        }, { passive: false });
    }

    /* --- Path B: 5 taps on the hero name (Android-style) --- */
    const heroName = document.getElementById('hero-name');
    const feedback = document.getElementById('tap-feedback');
    if (!heroName || !feedback) return;

    let tapCount = 0;
    let tapTimer = null;
    const TAP_RESET_MS = 1500;
    const TAPS_REQUIRED = 5;

    function showFeedback(text) {
        feedback.innerHTML = text;
        feedback.classList.add('visible');
        clearTimeout(feedback._hideTimer);
        feedback._hideTimer = setTimeout(() => {
            feedback.classList.remove('visible');
        }, 1400);
    }

    function resetTapCount() {
        tapCount = 0;
        clearTimeout(tapTimer);
    }

    /* Prevent the browser's auto-select-word/line behavior on double/triple
       click so that fast consecutive clicks still count as taps.
       Slow clicks (e.detail === 1) preserve normal behavior — and a real
       text drag (mousedown + mousemove) still selects, because we only
       preventDefault on the *secondary* click of a sequence. */
    heroName.addEventListener('mousedown', (e) => {
        if (e.detail > 1) e.preventDefault();
    });

    function handleTap() {
        /* Wipe any selection the browser might have created before we counted */
        try {
            const sel = window.getSelection();
            if (sel && sel.rangeCount > 0) sel.removeAllRanges();
        } catch (err) {}

        tapCount++;
        clearTimeout(tapTimer);
        tapTimer = setTimeout(resetTapCount, TAP_RESET_MS);

        if (tapCount >= TAPS_REQUIRED) {
            resetTapCount();
            triggerIndustrial();
        } else {
            const remaining = TAPS_REQUIRED - tapCount;
            const tpl = translations[currentLang]['tap-counter'] || '{n} more...';
            showFeedback(tpl.replace('{n}', remaining));
        }
    }

    heroName.addEventListener('click', handleTap);
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
    clearTimeout(typewriterLoopTimer);
    typewriterTimer = null;
    typewriterLoopTimer = null;
    typewriterDone = false;

    function type() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            let speed = Math.random() * 22 + 14;
            const ch = fullText.charAt(index - 1);
            if (['.', ',', '?', '!', '—', ';', ':'].includes(ch)) {
                speed += 220;
            }
            typewriterTimer = setTimeout(type, speed);
        } else {
            typewriterDone = true;
            typewriterTimer = null;
            /* Loop: wait 15s, then re-run from scratch in the current language */
            typewriterLoopTimer = setTimeout(() => {
                startTypewriter(currentLang);
            }, TYPEWRITER_LOOP_DELAY_MS);
        }
    }

    type();
}

function restartTypewriter(lang) {
    clearTimeout(typewriterLoopTimer);
    typewriterLoopTimer = null;
    typewriterDone = false;
    startTypewriter(lang);
}

/* ============================================================
   Motion — scroll reveal, count-up, pipeline pulse
   Gracefully degrades for prefers-reduced-motion or missing IO
   ============================================================ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initRevealOnScroll() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    /* If reduced motion: just unhide everything, skip animation */
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('visible'));
        return;
    }

    /* Hero: reveal immediately on load (above the fold, stagger via CSS) */
    document.querySelectorAll('.hero .reveal').forEach(el => {
        requestAnimationFrame(() => el.classList.add('visible'));
    });

    /* Sections: reveal as they scroll into view */
    const sectionItems = document.querySelectorAll('.section.reveal, .section .reveal');
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    sectionItems.forEach(el => io.observe(el));
}

function animateCounter(el, target, duration = 1400) {
    if (prefersReducedMotion) {
        el.textContent = target.toLocaleString('en-US');
        return;
    }
    const start = performance.now();
    function step(now) {
        const t = Math.min(1, (now - start) / duration);
        /* easeOutExpo — fast start, gentle land */
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        const value = Math.round(target * eased);
        el.textContent = value.toLocaleString('en-US');
        if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function initCounters() {
    const nums = document.querySelectorAll('.metric-num[data-count]');
    if (!nums.length) return;

    /* El HTML ya trae el valor final: lo leen los rastreadores, los ATS y
       quien no ejecute scripts. La animación es solo un realce encima, así
       que se resetea a cero únicamente lo que efectivamente se va a animar. */
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count, 10);
                animateCounter(entry.target, target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    nums.forEach(el => {
        el.textContent = '0';
        io.observe(el);
    });
}

function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar || prefersReducedMotion) return;

    let ticking = false;
    function update() {
        const doc = document.documentElement;
        const max = (doc.scrollHeight - doc.clientHeight) || 1;
        const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
        bar.style.width = pct + '%';
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
}

function clearStatusTimers(pill) {
    if (pill._flipTimeout)      { clearTimeout(pill._flipTimeout);      pill._flipTimeout = null; }
    if (pill._innerFlip)        { clearTimeout(pill._innerFlip);        pill._innerFlip = null; }
    if (pill._cycleInterval)    { clearInterval(pill._cycleInterval);   pill._cycleInterval = null; }
    if (pill._cycleSwapTimeout) { clearTimeout(pill._cycleSwapTimeout); pill._cycleSwapTimeout = null; }
}

function initStatusPill() {
    const pill = document.getElementById('status-pill');
    if (!pill) return;

    /* Reset any in-flight timers (re-entrancy: called on language change too) */
    clearStatusTimers(pill);
    pill.classList.remove('flipping', 'cycling');

    /* El HTML ya nace en "on": el script no lo apaga para volver a encenderlo.
       La animación es solo realce, igual que en las métricas. El estado "off"
       queda disponible como conmutación manual desde el HTML. */
    pill.dataset.state = 'on';
    pill.dataset.label = 'on';

    /* Honor reduced-motion: se queda en el titular, sin ciclado */
    if (prefersReducedMotion) return;

    startStatusCycle(pill);
}

function startStatusCycle(pill) {
    /* Once on, alternate every ~3.5s between the headline and the detail */
    const swap = () => {
        pill.classList.add('cycling');
        pill._cycleSwapTimeout = setTimeout(() => {
            pill.dataset.label = pill.dataset.label === 'on' ? 'detail' : 'on';
            requestAnimationFrame(() => pill.classList.remove('cycling'));
        }, 260);
    };
    pill._cycleInterval = setInterval(swap, 3500);
}

function initRail() {
    const items = Array.from(document.querySelectorAll('.rail-item'));
    if (!items.length) return;

    /* Smooth scroll on click (preserved across browsers) */
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const id = item.getAttribute('data-target');
            const el = document.getElementById(id);
            if (!el) return;
            e.preventDefault();
            el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        });
    });

    /* Track active section via IO on each target */
    if (!('IntersectionObserver' in window)) return;
    const map = new Map();
    items.forEach(item => {
        const id = item.getAttribute('data-target');
        const target = document.getElementById(id);
        if (target) map.set(target, item);
    });

    /* Use a wider band so the rail still updates near the very top/bottom
       of the document. */
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const item = map.get(entry.target);
            if (!item) return;
            if (entry.isIntersecting) {
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    }, { rootMargin: '-30% 0px -45% 0px', threshold: 0 });

    map.forEach((_, target) => io.observe(target));

    /* When the user is within ~120px of the page bottom, force the last
       rail item active — IntersectionObserver bands can miss this edge. */
    const targets = Array.from(map.keys());
    const lastTarget = targets[targets.length - 1];
    const lastItem = map.get(lastTarget);
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const nearBottom = window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight - 120;
            if (nearBottom && lastItem && !lastItem.classList.contains('active')) {
                items.forEach(i => i.classList.remove('active'));
                lastItem.classList.add('active');
            }
            ticking = false;
        });
    }, { passive: true });
}

function initPipelinePulse() {
    const flow = document.querySelector('.pipeline-flow');
    if (!flow || prefersReducedMotion) return;
    if (!('IntersectionObserver' in window)) {
        flow.classList.add('flow-active');
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            flow.classList.toggle('flow-active', entry.isIntersecting);
        });
    }, { threshold: 0.4 });
    io.observe(flow);
}

/* ============================================================
   Init
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    applyLang(DEFAULT_LANG);

    document.getElementById('lang-toggle').addEventListener('click', () => {
        applyLang(currentLang === 'en' ? 'es' : 'en');
    });

    const bridgeBody = document.querySelector('.bridge-body');
    if (bridgeBody) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !typewriterDone && typewriterTimer === null) {
                    startTypewriter(currentLang);
                }
            });
        }, { threshold: 0.4 });
        observer.observe(bridgeBody);
    }

    initIndustrialPortal();
    initRevealOnScroll();
    initCounters();
    initPipelinePulse();
    initScrollProgress();
    initRail();
    initStatusPill();
});
