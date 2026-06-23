# Vale Knits — Sitio web estático

Sitio one-page para la boutique **Vale Knits** (accesorios y tejidos hechos a mano).
HTML + CSS + JavaScript puro, sin build ni dependencias. Listo para **GitHub Pages**.

---

## 1. Estructura del proyecto

```
valeknits/
├── index.html          ← estructura del sitio
├── styles.css          ← sistema de diseño (variables, componentes, responsive)
├── script.js           ← datos de productos, filtros, modal, lightbox, contacto
├── .nojekyll           ← evita que GitHub Pages procese el sitio con Jekyll
├── README.md           ← este archivo
└── assets/
    ├── products/       ← fotos de productos (1 por pieza)
    ├── editorial/      ← hero, lookbook, fondos editoriales
    └── img/            ← logo y otros recursos
```

> Si descargaste todos los archivos en una misma carpeta, créala así:
> mueve `index.html`, `styles.css`, `script.js`, `.nojekyll` y `README.md` a la raíz,
> y crea la carpeta `assets/` con sus subcarpetas `products/`, `editorial/` e `img/`.

---

## 2. Configura tus datos de contacto (1 minuto)

Abre **`script.js`** y edita el bloque `CONFIG` (arriba del todo):

```js
const CONFIG = {
  whatsapp:  "56912345678",        // tu número, formato internacional, sin "+" ni espacios
  instagram: "valeknits",          // tu usuario, sin "@"
  email:     "hola@valeknits.cl",  // tu correo
};
```

Esto alimenta automáticamente los botones de WhatsApp, Instagram y correo del sitio
(incluido el mensaje pre-escrito de cada producto).

---

## 3. Agrega las imágenes

El sitio funciona aunque falten fotos: muestra un *placeholder* elegante con el nombre.
Para reemplazarlo, sube cada imagen con **el nombre exacto** indicado abajo.

### Recomendaciones
- Formato `.jpg` (o `.webp`/`.png` si cambias la extensión en el código).
- Productos: cuadradas, ~1000×1000 px.
- Editorial/hero: horizontales, ~1600×1000 px. Optimiza el peso (< 300 KB ideal).

### Imágenes de producto → `assets/products/`
| Archivo | Producto |
|---|---|
| `aros-antiamatista.jpg` | Aros Antiamatista |
| `aros-filigranita.jpg` | Aros Filigranita |
| `conjunto-di-mare.jpg` | Conjunto Di Mare |
| `conjunto-furioso.jpg` | Conjunto Furioso |
| `conjunto-pinkylady.jpg` | Conjunto Pinkylady |
| `conjunto-della-ostra.jpg` | Conjunto Della Ostra |
| `conjunto-primtemps.jpg` | Conjunto Primtemps |
| `aros-salamanca.jpg` | Aros Salamanca |
| `aros-jardin-secreto.jpg` | Aros Jardín Secreto |
| `aros-gatoalsol.jpg` | Aros Gatoalsol |
| `aros-aum.jpg` | Aros Aum |
| `aros-nectar.jpg` | Aros Nectar |
| `aros-tropic-vibe.jpg` | Aros Tropic Vibe |
| `aros-asimetricalia.jpg` | Aros Asimetricalia |
| `pines.jpg` | Pines |
| `aros-riseup.jpg` | Aros Riseup |
| `aros-solari.jpg` | Aros Solari |
| `aros-amatisk.jpg` | Aros Amatisk |
| `cinturon-wear-me-nicely.jpg` | Cinturón Wear Me Nicely |
| `scrunchie-minimalii.jpg` | Scrunchie Minimalii |
| `scrunchie-maximaniac.jpg` | Scrunchie Maximaniac |
| `bufanda-albusomno.jpg` | Bufanda Albusomno |
| `cuello-dual-colore.jpg` | Cuello Dual Colore |
| `bufanda-mare-nostrum.jpg` | Bufanda Mare Nostrum |
| `bufanda-aurinegra.jpg` | Bufanda Aurinegra (patrón) |
| `cardigan-ankalli.jpg` | Cardigan Ankalli (patrón) |
| `ponchardigan-bebeciwi.jpg` | Ponchardigan Bebeciwi (patrón) |
| `canasto-ayunpa.jpg` | Canasto Ayunpa (patrón) |

### Imágenes editoriales → `assets/editorial/`
| Archivo | Uso |
|---|---|
| `hero.jpg` | Imagen principal de portada (recomendado: el collar crochet + oro) |
| `handmade.jpg` | Sección "La marca / Hecho a mano" |
| `quote.jpg` | Fondo de la cita de Coco Chanel |
| `col-exclusivas.jpg` | Tarjeta de colección "Piezas elaboradas y exclusivas" |
| `col-elegidas.jpg` | Tarjeta de colección "Piezas elegidas" |
| `col-patrones.jpg` | Tarjeta de colección "Patrones de autor" |
| `look-1.jpg` … `look-4.jpg` | Galería Lookbook (4 slots editoriales) |

> **Las 9 imágenes que te faltaban**: la galería del Lookbook tiene 4 slots
> editoriales (`look-1` a `look-4`) y puedes añadir más editando el arreglo
> `LOOKBOOK` en `script.js`. Cuando me las pases, las asigno a su lugar exacto.

---

## 4. Publicar en GitHub Pages

1. Crea un repositorio en GitHub (p. ej. `valeknits`).
2. Sube todos los archivos del proyecto (incluida la carpeta `assets/` y el `.nojekyll`).
   - Por web: *Add file → Upload files* y arrastra todo.
   - Por consola:
     ```bash
     git init
     git add .
     git commit -m "Sitio Vale Knits"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/valeknits.git
     git push -u origin main
     ```
3. En el repo: **Settings → Pages**.
4. En *Build and deployment → Source* elige **Deploy from a branch**.
5. Branch: **main** · carpeta: **/ (root)** · *Save*.
6. Espera ~1 minuto. Tu sitio quedará en:
   `https://TU_USUARIO.github.io/valeknits/`

Todas las rutas son **relativas**, así que funciona tanto en la raíz del dominio
como en un subdirectorio de GitHub Pages.

---

## 5. Cómo editar el catálogo

Todo el contenido vive en `script.js`:
- **`PRODUCTS`** — productos (nombre, precio, categoría, descripción, etiquetas).
- **`PATTERNS`** — patrones de autor.
- **`LOOKBOOK`** — imágenes de la galería.
- **`FILTERS`** — chips de filtro.

Para agregar un producto, copia un objeto existente y cambia sus valores.
Si pones `price: null`, la tarjeta mostrará "Próximamente".

---

## 6. Pendientes / reemplazo de placeholders

- [ ] Editar `CONFIG` con WhatsApp, Instagram y correo reales.
- [ ] Subir las fotos de producto a `assets/products/`.
- [ ] Subir hero, lookbook y fondos a `assets/editorial/`.
- [ ] Confirmar precios sin valor visible (bufandas/cuello → hoy "Próximamente").
- [ ] (Opcional) Añadir favicon en `assets/img/` y enlazarlo en `index.html`.

Hecho con cariño para **Vale Knits** · Colección Invierno/Primavera 2026.
