# Use the official Nginx Alpine image for a super lightweight, secure, and fast deployment.
FROM nginx:alpine

# Configuracion de Nginx: va a conf.d, nunca al web root.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Solo los archivos estaticos que el sitio sirve, copiados de forma explicita.
# Asi Dockerfile, docker-compose.yml, README.md y cualquier archivo suelto del
# repositorio no llegan nunca al web root, y el 404 de nginx.conf queda como
# segunda capa en vez de ser la unica defensa.
#
# IMPORTANTE: si se agrega un archivo nuevo al sitio, hay que sumarlo a esta
# lista o no se publica. Si se quita uno sin sacarlo de aca, el build falla.
COPY index.html industrial.html viewer.html viewer_en.html \
     cv_print_en.html cv_print_full_en.html \
     styles.css styles-industrial.css \
     script.js script-industrial.js \
     favicon.svg preview.jpg \
     cv_felix_lezama.pdf cv_felix_lezama_en.pdf \
     /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
