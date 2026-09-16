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

Los comandos, en el orden exacto en que se ejecutan:

```bash
# 1. Conectar al VPS
ssh bunker

# 2. Ubicarse y confirmar el estado antes de tocar nada
cd /root/cv-landing-tech
git status
git log --oneline -1        # anotar este hash: es el punto de rollback

# 3. Traer los cambios
git stash push -u -m 'tweaks-pre-deploy'   # SOLO si el paso 2 mostró cambios sin commit
git pull origin main

# 4. Reconstruir la imagen y levantar
docker compose up -d --build

# 5. Verificar, en este orden
docker ps | grep cv-landing                     # debe figurar Up
docker exec cv-landing-nginx nginx -t           # debe decir syntax is ok / test is successful
curl -I https://micv.techcam.com.ar/            # last-modified reciente, HTTP 200
```

Si el paso 5 falla en cualquiera de las tres verificaciones, ejecutar el rollback.

### Rollback

```bash
# 1. Conectar y ubicarse
ssh bunker
cd /root/cv-landing-tech

# 2. Volver al commit anotado en el paso 2 del deploy
git checkout <hash-anotado>

# 3. Reconstruir con la versión anterior
docker compose up -d --build

# 4. Confirmar que volvió
docker ps | grep cv-landing
curl -I https://micv.techcam.com.ar/
```

Para revertir de forma permanente, hacer `git revert` del commit en GitHub,
hacer push a `main` y repetir el despliegue normal.

## Convenciones

- Contenido bilingüe: los textos viven en el diccionario `translations` de
  `script.js` y se enlazan desde el HTML con `data-i18n`.
- Sin dependencias externas nuevas: no se agregan formularios, analítica de
  terceros ni scripts remotos. Todo lo que se sume debe ser autocontenido.
- El contenido tiene que leerse sin JavaScript. Las animaciones son un realce
  encima de un HTML que ya está completo: los valores finales de las métricas
  van como texto en el HTML y la clase `no-js` mantiene visible todo lo que
  el script revelaría.
