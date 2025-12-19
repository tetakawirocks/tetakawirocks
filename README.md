# Lizbeth Avena Hernández - Portafolio Geológico

Una página web profesional de geología con diseño inspirado en el Desierto de Sonora, creada para mostrar la experiencia y especialidades de la Geóloga Lizbeth Avena Hernández.

## 🏜️ Características del Diseño

- **Tema del Desierto de Sonora**: Paleta de colores tierra con ocres, terracotas y dorados
- **Elementos Visuales**: Sahuaros (cactus), estrellas, formaciones rocosas
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Efectos de parallax y transiciones elegantes
- **Accesibilidad**: Cumple con estándares WCAG

## 🎨 Paleta de Colores

```css
--terracotta-strong: #A04028    /* Botones y acentos principales */
--ochre-gold: #D4A017           /* Iconos y detalles */
--deep-copper: #8B4513          /* Subtítulos */
--night-sky: #0F172A            /* Fondos oscuros */
--sand-dune: #FDFCF6            /* Fondo principal */
```

## 📋 Contenido

### Sobre Mí
- Perfil profesional bilingüe (Español/Inglés)
- Formación académica: MSc Ciencias de la Tierra (UNAM)
- Ingeniería en Minas y Metalurgia (UACH)
- Experiencia internacional en México y Estados Unidos

### Experiencia Profesional
- **7+ años** en geología aplicada
- **Wellsite Geology & Mudlogging**
- **Environmental Compliance**
- **Geofísica Aplicada**
- **QA/QC Minero**
- **Auditorías ISO 9001 & ISO 17025**

### Certificaciones
- HAZWOPER 40 horas
- OSHA 30 horas
- Safeland
- CSX Roadway Worker Protection
- DOT Physical Certificate

### Software y Herramientas
- ArcGIS, QGIS, AutoCAD
- Kingdom Suite, Mainlog, Zone Vu
- TLog, Global Mapper

## 🚀 Instalación y Despliegue

### Para GitHub Pages

1. **Crear repositorio en GitHub**:
   ```bash
   # En GitHub, crear nuevo repositorio
   # Nombre sugerido: lizbeth-avena-geology
   # Configurar como público para GitHub Pages gratuito
   ```

2. **Subir archivos**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Geology portfolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/lizbeth-avena-geology.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**:
   - Ir a Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Save

4. **Acceder a la página**:
   - URL: `https://TU-USUARIO.github.io/lizbeth-avena-geology/`

### Estructura de Archivos

```
lizbeth-avena-geology/
├── index.html              # Página principal
├── style.css               # Estilos CSS
├── script.js               # JavaScript
├── *.jpg                   # Imágenes de galería
├── *.jpeg                  # Imágenes adicionales
├── README.md               # Este archivo
└── .gitignore             # Archivos a ignorar
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Variables CSS personalizadas
  - Grid y Flexbox
  - Animaciones CSS
  - Media queries responsive
- **JavaScript ES6+**:
  - Intersection Observer API
  - Canvas API (animación de estrellas)
  - Fetch API (futuras integraciones)
- **Lucide Icons**: Iconografía moderna
- **Google Fonts**: Merriweather + Inter

## 📱 Funcionalidades

### Navegación
- Menú sticky con efectos de scroll
- Navegación suave entre secciones
- Indicador de sección activa
- Menú hamburguesa para móvil

### Galería
- Lightbox para visualización de imágenes
- Efectos hover profesionales
- Optimización para touch devices

### Formulario de Contacto
- Validación en tiempo real
- Estados de carga
- Notificaciones de éxito/error

### Animaciones
- Canvas de estrellas parpadeantes
- Parallax en silueta del desierto
- Scroll reveal animations
- Transiciones suaves

## 🎯 Optimizaciones

### Performance
- Lazy loading de imágenes
- Optimización de animaciones para dispositivos móviles
- Compresión de recursos
- Preload de fuentes críticas

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- Alt text en imágenes
- URLs amigables

### Accesibilidad
- Contraste WCAG AA
- Navegación por teclado
- Screen reader friendly
- Reduced motion support

## 🔧 Personalización

### Cambiar Colores
Modificar variables CSS en `style.css`:
```css
:root {
  --terracotta-strong: #A04028;
  --ochre-gold: #D4A017;
  /* ... otros colores */
}
```

### Añadir Imágenes
1. Subir imagen al directorio raíz
2. Agregar a la galería en `index.html`:
```html
<div class="gallery-item" onclick="openLightbox(this)">
    <img src="tu-imagen.jpg" alt="Descripción">
    <div class="gallery-overlay">
        <div class="overlay-content">
            <i data-lucide="icono" class="overlay-icon"></i>
            <span>Tu descripción</span>
        </div>
    </div>
</div>
```

### Modificar Contenido
- Editar textos directamente en `index.html`
- Actualizar información de contacto
- Modificar experiencia profesional

## 📞 Contacto

**Lizbeth Avena Hernández**
- 📱 Teléfono: +1 (510) 421-1524
- 📧 Email: lizbeth.avenita@gmail.com
- 🌍 Ubicación: Estados Unidos & México
- 🗣️ Idiomas: Español (Nativo) | English (Fluent)

## 📄 Licencia

Este portafolio es de uso personal y profesional de Lizbeth Avena Hernández. 

## 🙏 Créditos

- **Diseño**: Inspirado en la belleza del Desierto de Sonora
- **Desarrollo**: MiniMax Agent
- **Iconografía**: Lucide Icons
- **Tipografía**: Google Fonts (Merriweather & Inter)
- **Imágenes**: Galería personal de trabajo de campo

---

*"Diseñado con precisión geológica en el espíritu del Desierto de Sonora"*

🏜️ **Cada línea de código como una formación rocosa, cada función como una estrella en el vasto desierto digital** 🏜️