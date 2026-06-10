# Arquitectura

SilverIA Law es, por ahora, una PWA estatica.

## Componentes

- `index.html`: estructura semantica de la aplicacion.
- `styles.css`: sistema visual, responsive y accesibilidad.
- `app.js`: interacciones locales y estados simulados.
- `manifest.webmanifest`: metadatos PWA.
- `service-worker.js`: cache offline basico.
- `icon.svg`: icono de instalacion.

## Frontera de confianza

La version publica no contiene:

- prompts internos;
- reglas de routing;
- thresholds;
- ledgers;
- datos de clientes;
- estrategia propietaria;
- integraciones privadas;
- bases legales cerradas.

## Futuras integraciones

Cualquier backend futuro deberia separar:

- UI accesible;
- workspace local-first por asunto;
- ingestion de documentos;
- OCR;
- indice privado y reconstruible por asunto;
- recuperacion de fuentes;
- verificacion de citas contra el documento vigente;
- generacion de borradores;
- redlines revisables antes de modificar documentos;
- verificacion y trazabilidad;
- exportacion.

La capa de UI no deberia depender de un unico proveedor de IA.

## Patron local-first

Ver [local-first-legal-workspace.md](local-first-legal-workspace.md).

El patron se incorpora como hoja de ruta publica, no como implementacion ya disponible en la demo estatica. La regla central es que cada asunto debe aislar documentos, indice, conversacion, cambios propuestos y exportaciones. Si se conecta IA, la app debe explicar si el texto queda local, viaja a un proveedor BYOK/cloud o se procesa en infraestructura institucional.
