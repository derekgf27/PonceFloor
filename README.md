# Ponce Floor Cleaning Services Website

Un sitio web moderno y responsivo para Ponce Floor Cleaning Services con una paleta de colores rojo, blanco y negro. El sitio está completamente en español.

## Características

- **Sección Hero**: Área de aterrizaje llamativa con llamada a la acción
- **Misión y Visión**: Valores y objetivos de la empresa
- **Sección Acerca de**: Biografía del propietario con marcador de posición para foto
- **Servicios**: Lista completa de servicios de limpieza de pisos
- **Galería**: Muestra de fotos y videos antes/después
- **Testimonios**: Reseñas de clientes con evidencia fotográfica
- **Formulario de Contacto**: Formulario de solicitud de consulta con integración de correo electrónico
- **Enlaces de Redes Sociales**: Integración con Facebook, Instagram, Twitter y LinkedIn
- **Integración de WhatsApp**: Contacto directo vía WhatsApp
- **Diseño Responsivo**: Funciona perfectamente en móvil, tablet y escritorio
- **Idioma**: Todo el contenido está en español

## Files Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling with red, white, and black theme
- `script.js` - Interactive functionality and form handling
- `README.md` - This file

## Customization Guide

### 1. Información de Contacto
Actualice lo siguiente en `index.html`:
- Correo Electrónico: Reemplace `info@poncefloorcleaning.com` con su correo electrónico real
- Teléfono: Reemplace `(123) 456-7890` con su número de teléfono
- WhatsApp: Actualice el enlace de WhatsApp `https://wa.me/1234567890` con su número de WhatsApp (formato: código de país + número, sin + o espacios)

### 2. Enlaces de Redes Sociales
En la sección de contacto, actualice los atributos `href="#"` con sus URLs reales de redes sociales:
- Facebook
- Instagram
- Twitter
- LinkedIn

### 3. Biografía del Propietario
En la sección "Acerca del Propietario", reemplace el texto de marcador de posición con:
- Años reales de experiencia
- Contenido real de la biografía
- Foto del propietario (reemplace el div de marcador de posición con una etiqueta `<img>`)

### 4. Imágenes y Videos de la Galería
Reemplace los divs de marcador de posición en la sección de galería con imágenes reales:
```html
<!-- Reemplace esto -->
<div class="gallery-placeholder">
    <i class="fas fa-image"></i>
    <p>Foto Antes/Después</p>
</div>

<!-- Con esto -->
<img src="ruta/a/su/imagen.jpg" alt="Limpieza Antes/Después">
```

Para videos, use:
```html
<video controls>
    <source src="ruta/a/su/video.mp4" type="video/mp4">
</video>
```

### 5. Testimonios
Actualice las tarjetas de testimonios con:
- Fotos reales de clientes (reemplace el marcador de posición)
- Testimonios reales
- Nombres reales de clientes

### 6. Servicios
Modifique la sección de servicios si es necesario para que coincida con sus ofertas reales.

## Cómo Usar

1. Abra `index.html` en un navegador web
2. Todos los archivos (HTML, CSS, JS) deben estar en el mismo directorio
3. Para producción, suba todos los archivos a su servicio de alojamiento web

## Funcionalidad del Formulario

El formulario de contacto utiliza un enlace `mailto:` para abrir el cliente de correo del usuario. Para producción, es posible que desee:
- Integrar con un servicio backend (PHP, Node.js, etc.)
- Usar un servicio como Formspree, Netlify Forms o EmailJS
- Configurar el manejo de correo del lado del servidor

## Compatibilidad con Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Navegadores móviles (iOS Safari, Chrome Mobile)

## Color Palette

- **Primary Red**: #DC143C (Crimson)
- **Dark Red**: #B22222
- **White**: #FFFFFF
- **Black**: #000000

## Notas

- El sitio web utiliza iconos de Font Awesome (cargados vía CDN)
- Todas las imágenes son actualmente marcadores de posición - reemplácelas con fotos reales
- El formulario actualmente abre el cliente de correo - considere la integración backend para producción
- Asegúrese de probar todos los enlaces y actualizar el contenido de marcador de posición antes de publicar
- Todo el contenido está en español

## Mejoras Futuras

- Agregar un lightbox para las imágenes de la galería
- Implementar procesamiento de formularios backend
- Agregar integración de Google Maps para la ubicación
- Agregar una sección de blog
- Implementar optimizaciones SEO
- Agregar seguimiento de analíticas