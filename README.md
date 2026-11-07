# ScholarNet — versión web

Versión web (HTML + CSS + JavaScript, sin librerías ni servidor) de la aplicación móvil ScholarNet.
**No requiere crear cuenta ni iniciar sesión**: cualquier persona puede entrar y buscar becas.

## Cómo abrirlo
Abre `index.html` con doble clic. También funciona en cualquier hosting estático (GitHub Pages, Netlify, etc.).

## Estructura
```
index.html
css/
  styles.css        estilos base y componentes
  responsive.css    tablet, laptop y escritorio
js/
  data.js           TODO el contenido (becas, noticias, experiencias, contacto)
  views.js          plantillas de cada pantalla
  navigation.js     navegación entre pantallas + menú lateral
  main.js           arranque
assets/
  logos/ images/ icons/ fonts/   recursos originales de la app
```

## Pantallas de la app → sitio web
| App (Python/Kivy)                         | Sitio web                                   |
|-------------------------------------------|---------------------------------------------|
| Splash, Login, Registro, Bienvenida       | **Eliminadas** (sin cuentas). Se reúnen en **Home** |
| Choose Scholarship Type (NATIONAL / INTERNATIONAL) | **Home** `#/`                      |
| Nationals                                 | `#/national`                                |
| Internationals                            | `#/international`                           |
| Beca detalle                              | `#/national/<beca>` · `#/international/<beca>` |
| Experiences + detalle                     | `#/experiences` · `#/experiences/<nombre>`  |
| News + detalle                            | `#/news` · `#/news/<noticia>`               |
| About us                                  | `#/about`                                   |
| Contact us                                | `#/contact`                                 |
| Menú lateral                              | Barra superior (escritorio) / menú lateral (móvil) |

## Cómo actualizar contenido
Edita solo `js/data.js`: agrega o cambia becas, noticias o experiencias y el sitio las muestra solo.
Para activar el enlace de Facebook, escribe la URL real en `S.contact.facebook.url`.

## Lo que se dejó fuera a propósito
- Base de datos MySQL, login y registro (`kivy_login`): ya no aplican.
- No se inventó ninguna funcionalidad nueva (p. ej. buscador o filtros): `search.png` está incluido en `assets/icons/` por si se quiere agregar más adelante.
