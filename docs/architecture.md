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
- ingestion de documentos;
- OCR;
- recuperacion de fuentes;
- generacion de borradores;
- verificacion y trazabilidad;
- exportacion.

La capa de UI no deberia depender de un unico proveedor de IA.
