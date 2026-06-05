# SilverIA Law

SilverIA Law es una PWA open source para acercar herramientas de inteligencia artificial a abogados y abogadas senior, especialmente profesionales de mas de 65 años que no usan IA, la probaron poco o desconfian de las interfaces tecnicas.

El objetivo no es reemplazar el criterio profesional. El objetivo es ofrecer una mesa de trabajo clara, accesible y guiada para leer documentos, dictar consultas, preparar borradores y verificar fuentes antes de cualquier uso profesional.

## Para que sirve

- Leer documentos legales con una guia paso a paso.
- Dictar una consulta en lenguaje natural.
- Preparar borradores desde formularios simples.
- Separar resultado, fuentes y revision humana.
- Usar una interfaz con tipografia grande, contraste alto y lectura en voz alta.

## Para quien esta pensado

- Colegios de Abogados que quieran ofrecer capacitacion o una demo institucional.
- Estudios juridicos que quieran introducir IA sin obligar a aprender prompts.
- Abogados senior que prefieren flujos claros antes que una caja de chat vacia.
- Equipos academicos o de extension interesados en accesibilidad digital legal.

## Principios

- Accesibilidad primero.
- Lenguaje claro.
- Sin promesas de asesoramiento automatizado.
- Revision humana obligatoria.
- Fuentes visibles antes de exportar.
- Arquitectura simple y auditable.
- Cero dependencia de datos privados o credenciales.

## Estado del proyecto

Este repositorio contiene un prototipo funcional de interfaz PWA. Hoy funciona como demo estatica con interacciones locales simuladas. No incluye backend, base de datos, modelos de IA ni integraciones con proveedores.

Importante: la demo publica no llama a ningun modelo de IA y no envia documentos a ningun proveedor. Muestra la experiencia de usuario, los flujos accesibles y el contrato de transparencia que deberia tener una version conectada.

La idea es que la comunidad pueda auditar, adaptar y extender el producto sin depender de infraestructura cerrada.

## Como se alimentaria de IA

SilverIA Law no deberia poner API keys en el navegador. Una version real debe usar un backend que proteja credenciales, aplique limites y registre trazabilidad minima.

Opciones recomendadas:

- Demo sin IA: para capacitacion y presentacion institucional, sin costos ni datos sensibles.
- Backend institucional: el Colegio o institucion configura proveedor, presupuesto, politicas y fuentes permitidas.
- BYOK seguro: cada estudio trae su propia clave, pero se guarda del lado servidor, nunca en `app.js`.
- Modelos locales: Ollama, llama.cpp u otros modelos open-weight para pruebas privadas o bajo costo.
- Capa de fuentes: OCR, documentos cargados, normativa, jurisprudencia y plantillas deben estar separados de la generacion.

Ver [docs/ai-integration.md](docs/ai-integration.md).

La landing incluye una subpagina para usuarios sin experiencia: [guia-ia.html](guia-ia.html).

## Ejecutar localmente

No hace falta instalar dependencias.

```bash
python3 -m http.server 4173
```

Luego abrir:

```text
http://localhost:4173
```

Tambien se puede abrir `index.html` directamente, aunque algunas funciones PWA como service worker requieren servidor local.

## Deploy

Es un sitio estatico. Puede desplegarse en Vercel, Netlify, GitHub Pages, Cloudflare Pages o cualquier hosting de archivos estaticos.

Con Vercel CLI:

```bash
vercel deploy --prod
```

## Estructura

```text
.
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── service-worker.js
├── icon.svg
└── docs/
```

## Uso institucional por Colegios

Ver [docs/colegios-de-abogados.md](docs/colegios-de-abogados.md).

## Accesibilidad

Ver [docs/accessibility.md](docs/accessibility.md).

## Roadmap sugerido

- Integrar OCR para PDF escaneado.
- Agregar dictado real con confirmacion visible.
- Conectar fuentes normativas y jurisprudenciales abiertas.
- Agregar modo capacitacion para talleres.
- Incorporar auditoria de accesibilidad automatizada.
- Permitir instalaciones privadas para instituciones.

## Licencia

MIT. Ver [LICENSE](LICENSE).

## Aviso

SilverIA Law no presta asesoramiento juridico y no reemplaza la revision profesional. Es una herramienta de organizacion, asistencia y accesibilidad.
