/* ============================================================
   Editorial Dark Claude — i18n + typewriter
   ============================================================ */
const translations = {
    en: {
        'hero-eyebrow':    'Buenos Aires &middot; Remote-friendly',
        'hero-role':       'Analytics Engineer<span class="sep">&middot;</span>BI Developer',
        'hero-subtitle':   'Three production <b>n8n workflows</b>. Fifteen quality validations. <b>4,709 daily records</b> processed. An IMAP&nbsp;&rarr;&nbsp;Power BI pipeline for a European industrial multinational.',
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
        'sec2-title':      'Production data pipeline',
        'sec2-lede':       '<em>Client: European industrial multinational, Argentine operations.</em> I replaced a manual supply-chain reporting process &mdash; emails and spreadsheets &mdash; with an end-to-end data pipeline that runs daily, audits itself, and alerts when it doesn\'t.',
        'pipe1-detail':    'daily mail<br>ingestion',
        'pipe2-detail':    '3 production<br>workflows',
        'pipe3-detail':    'pandas, 15<br>validations',
        'pipe4-detail':    'star schema,<br>DAX measures',
        'pipe-sum-1':      'production issues resolved',
        'pipe-sum-2':      'rollback plan',
        'pipe-sum-3-strong': 'dead-man',
        'pipe-sum-3':      'switch active',
        'f1-title':        'End-to-end architecture',
        'f1-body':         'IMAP ingestion, n8n orchestration with three production workflows (receiver, dead-man switch, error handler), Python/pandas processing on a hardened VPS, OneDrive sync, and Power BI dashboard with star-schema modeling.',
        'f2-title':        'Data transformation',
        'f2-body':         'Fifteen quality validations, composite-key deduplication, date normalization, automatic schema-change detection, and merge logic between historical snapshots and daily deltas.',
        'f3-title':        'Power BI dimensional model',
        'f3-body':         'Three fact tables, three dimensions, DAX measures for logistics KPIs and FX exposure. Skills equivalent to Microsoft PL-300 applied in production, not in a sandbox.',
        'f4-title':        'Operational discipline',
        'f4-body':         'Thirteen documented production issues resolved with SHA tracking, regression tests, three-layer alerting with a dead-man switch, and a sub-minute rollback plan. Hardened VPS, no external dependencies.',

        'sec3-eyebrow':    'The Bridge',
        'footer-loc':      'Buenos Aires, Argentina',
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
        'sec2-title':      'Pipeline de datos en producci&oacute;n',
        'sec2-lede':       '<em>Cliente: multinacional europea industrial, operaciones en Argentina.</em> Reemplac&eacute; un proceso manual de reporting de supply chain &mdash; correos y planillas &mdash; con un pipeline end-to-end que corre diariamente, se audita a s&iacute; mismo y avisa cuando algo no cierra.',
        'pipe1-detail':    'ingesta de correo<br>diaria',
        'pipe2-detail':    '3 workflows<br>productivos',
        'pipe3-detail':    'pandas, 15<br>validaciones',
        'pipe4-detail':    'modelo estrella,<br>medidas DAX',
        'pipe-sum-1':      'issues productivos resueltos',
        'pipe-sum-2':      'plan de rollback',
        'pipe-sum-3-strong': 'dead-man',
        'pipe-sum-3':      'switch activo',
        'f1-title':        'Arquitectura end-to-end',
        'f1-body':         'Ingesta IMAP, orquestaci&oacute;n n8n con tres workflows productivos (recepci&oacute;n, dead-man switch, error handler), procesamiento Python/pandas sobre VPS endurecido, sincronizaci&oacute;n a OneDrive y dashboard Power BI con modelo estrella.',
        'f2-title':        'Transformaci&oacute;n de datos',
        'f2-body':         'Quince validaciones de calidad, deduplicaci&oacute;n por claves compuestas, normalizaci&oacute;n de fechas, detecci&oacute;n autom&aacute;tica de cambios de schema y merge entre snapshots hist&oacute;ricos y deltas diarios.',
        'f3-title':        'Modelo dimensional Power BI',
        'f3-body':         'Tres tablas de hechos, tres dimensiones, medidas DAX para KPIs log&iacute;sticos y exposici&oacute;n cambiaria. Conocimientos equivalentes a Microsoft PL-300 aplicados en producci&oacute;n, no en un sandbox.',
        'f4-title':        'Disciplina operativa',
        'f4-body':         'Trece issues productivos documentados y resueltos con SHA tracking, tests de no-regresi&oacute;n, alertas en triple capa con dead-man switch y plan de rollback menor a un minuto. VPS endurecido, sin dependencias externas.',

        'sec3-eyebrow':    'El Puente',
        'footer-loc':      'Buenos Aires, Argentina',
    }
};

/* ============================================================
   State
   ============================================================ */
const DEFAULT_LANG = 'en';
let currentLang = DEFAULT_LANG;
let typewriterTimer = null;
let typewriterDone = false;

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
            let speed = Math.random() * 22 + 14;
            const ch = fullText.charAt(index - 1);
            if (['.', ',', '?', '!', '—', ';', ':'].includes(ch)) {
                speed += 220;
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
});
