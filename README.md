# Nómada — Sitio web bilingüe de asesoría legal en visas y pasaportes

Sitio web estático sin build step, listo para deploy en GitHub Pages.

## Estructura

```
nomada/
├── index.html              # Redirect a /es/
├── es/                     # Versión en español
├── en/                     # Versión en inglés
├── assets/
│   ├── css/styles.css      # Sistema de diseño
│   ├── css/responsive.css  # Media queries
│   ├── js/nav.js           # Header sticky + menú móvil
│   ├── js/faq.js           # Acordeón FAQ
│   ├── js/lang-switch.js   # Indicador de idioma activo
│   └── img/                # Logo, hero, iconos SVG
├── 404.html                # Página de error personalizada
├── .nojekyll               # Deshabilita Jekyll
├── robots.txt              # SEO
├── sitemap.xml             # SEO / indexación
└── README.md
```

## Deploy en GitHub Pages

### Paso 1 — Crear el repositorio

```bash
cd nomada
git init
git add .
git commit -m "feat: sitio web inicial"
gh repo create nomada-web --public --source=. --remote=origin --push
```

> Si no usas `gh` CLI, crea el repo en github.com y sigue los pasos estándar.

### Paso 2 — Activar Pages

1. Ve a **Settings → Pages**
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` / `(root)`
4. Guarda

Publicará en `https://<usuario>.github.io/nomada-web/` en pocos minutos.

### Paso 3 — Dominio personalizado (opcional)

1. Crea un archivo `CNAME` en la raíz con tu dominio:
   ```
   nomada-dominio.com
   ```
2. En tu proveedor DNS configura:
   ```
   CNAME  www     <usuario>.github.io
   A      @       185.199.108.153
   A      @       185.199.109.153
   A      @       185.199.110.153
   A      @       185.199.111.153
   ```
3. En Settings → Pages → **Enforce HTTPS**

## Personalización rápida

Antes del deploy, reemplaza los siguientes marcadores por datos reales:

| Marcador                          | Dónde                                          |
|-----------------------------------|------------------------------------------------|
| `contacto@nomada.example.com`     | Todos los HTML, `mailto:`                      |
| `contact@nomada.example.com`       | Versión EN                                     |
| `+00 000 000 000`                 | Teléfonos de contacto                          |
| `Av. Principal 123, Ciudad`       | Dirección física                               |
| `nomada.example.com`              | `canonical`, `og:url`, `sitemap.xml`, schema   |
| `Frank Gonzalez`                  | README / copyright                             |

Busca con `grep -r "example.com" .` para localizar todas las referencias.

## Diseño

**Paleta legal/soberana:**
- Primario: Azul marino `#0B2A4A`
- Secundario: Dorado sobrio `#B08D57`
- Acento: Granate `#7A1F2B`
- Fondo: Blanco hueso `#F8F6F1`

**Tipografía:**
- Serif (headings): Cormorant Garamond
- Sans-serif (body): Inter

Cargadas vía Google Fonts con `font-display: swap`.

## Accesibilidad

- Skip link `Saltar al contenido principal`
- Contraste WCAG AA
- Roles ARIA en nav y formularios
- `prefers-reduced-motion` respetado
- Etiquetas asociadas en todos los inputs

## SEO

- Meta description por página
- Open Graph + Twitter Cards
- Schema.org `LegalService`
- `hreflang` para indexación bilingüe
- `sitemap.xml` y `robots.txt`
- Canonical URLs

## Idioma y rutas

- `/es/` — versión en español (por defecto)
- `/en/` — versión en inglés
- Selector de idioma en el header de cada página
- Persistencia: la URL cambia, no localStorage (mejor para SEO y GitHub Pages)

## Mantenimiento

### Agregar un artículo nuevo al blog

1. Crear `es/blog/nuevo-articulo.html` (basado en `requisitos-visa-schengen.html`)
2. Crear `en/blog/new-article.html` (traducción)
3. Agregar tarjeta en `es/blog/index.html` y `en/blog/index.html`
4. Agregar entrada en `sitemap.xml`

### Cambiar colores / tipografía

Editar variables CSS en `assets/css/styles.css` bajo `:root`.

### Cambiar contenido

Directamente en los archivos HTML (no hay CMS). Cada footer se repite en todas las páginas — usa grep para buscar/editar globalmente.

## Licencia

Código y diseño: código abierto. Reemplazar textos del bufete antes de publicación pública.
