# cv-landing-tech

Sitio personal de Félix Lezama Mendoza — https://micv.techcam.com.ar

## Stack

HTML, CSS y JavaScript planos, sin build ni framework. Se sirven como archivos
estáticos desde Nginx dentro de un contenedor Docker, detrás de Cloudflare Tunnel.

| Archivo | Rol |
| --- | --- |
| `index.html` + `styles.css` + `script.js` | Versión principal (Editorial Dark), bilingüe EN/ES |
| `industrial.html` + `styles-industrial.css` + `script-industrial.js` | Versión archivo (Industrial Mode), accesible por easter egg |
| `viewer.html` / `viewer_en.html` | Visores de los CV en PDF |
| `cv_felix_lezama.pdf` / `cv_felix_lezama_en.pdf` | CV en PDF (ES / EN) |
| `nginx.conf` | Sirve los PDF con `Content-Disposition: inline` para el preview en iframe |
| `favicon.svg` | Favicon del sitio |

## Desarrollo local

No hay servidor de desarrollo. Alcanza con servir el directorio:

```bash
python3 -m http.server 8080
# abrir http://localhost:8080/
```

Abrir el `index.html` con `file://` también funciona, pero las rutas absolutas
de los PDF no resuelven igual que en producción.

## Despliegue — manual por SSH

**Este proyecto no está en Coolify y no tiene webhook de GitHub. Un push a `main`
no dispara nada.** Vive en un `docker-compose` suelto en el VPS y se despliega a mano.

Camino único del código: WSL → GitHub → VPS. Ninguna otra copia produce commits.

1. Mergear a `main` y hacer push desde WSL.
2. Desplegar en el VPS:

```bash
ssh bunker
cd /root/cv-landing-tech
git status                                 # confirmar rama y estado antes de tocar nada
git stash push -u -m 'tweaks-pre-deploy'   # solo si hay modificaciones locales sin commit
git pull origin main
docker compose up -d --build
docker ps | grep cv-landing                # el contenedor cv-landing-nginx debe quedar Up
```

3. Validar desde afuera que el contenido nuevo está publicado:

```bash
curl -I https://micv.techcam.com.ar/       # last-modified debe ser reciente
```

### Reversión

El despliegue es un checkout de `main`, así que se revierte volviendo al commit
anterior en el VPS y reconstruyendo:

```bash
ssh bunker
cd /root/cv-landing-tech
git log --oneline -5
git checkout <commit-anterior>
docker compose up -d --build
```

Para revertir de forma permanente, hacer `git revert` del commit en GitHub y
repetir el despliegue normal.

## Convenciones

- Contenido bilingüe: los textos viven en el diccionario `translations` de
  `script.js` y se enlazan desde el HTML con `data-i18n`.
- Sin dependencias externas nuevas: no se agregan formularios, analítica de
  terceros ni scripts remotos. Todo lo que se sume debe ser autocontenido.
- El contenido tiene que leerse sin JavaScript. Las animaciones son un realce
  encima de un HTML que ya está completo: los valores finales de las métricas
  van como texto en el HTML y la clase `no-js` mantiene visible todo lo que
  el script revelaría.
