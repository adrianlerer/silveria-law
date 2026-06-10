# Workspace legal local-first

SilverIA Law adopta como hoja de ruta publica el patron de workspace legal local-first: un asunto separado, documentos separados, indice privado, citas verificables, redlines revisables y explicacion clara del proveedor IA.

Esta es una direccion de arquitectura. La demo publica actual sigue siendo estatica: no procesa documentos reales, no llama modelos de IA y no guarda expedientes.

## Principios

- Un asunto no debe mezclar documentos, conversaciones ni indices con otro asunto.
- Una respuesta sobre documentos debe mostrar la fuente antes de habilitar confianza profesional.
- Una cita debe poder verificarse contra el documento vivo, no solo contra un indice viejo.
- Una modificacion contractual debe proponerse como redline revisable, no como texto suelto que el usuario pega a ciegas.
- La app debe explicar si usa demo sin IA, BYOK cloud, backend institucional o modelo local/on-prem.
- La decision final queda en el abogado o abogada.

## Patron tecnico recomendado

```text
matter/
  matter.json
  documents/
  index/
  redlines/
  exports/
```

Cada matter deberia tener:

- metadata de asunto;
- documentos fuente;
- indice reconstruible;
- cola de cambios propuestos;
- registro minimo de revision;
- exportaciones separadas del material fuente.

## Capas

1. UI accesible.
2. Ingestion de documentos.
3. OCR y extraccion.
4. Indice por asunto.
5. Recuperacion con citas.
6. Generacion de borrador o respuesta.
7. Verificacion de fuente.
8. Redline o exportacion.
9. Revision humana.

## Datos y proveedores

La politica debe decir que sale de la maquina:

- Demo sin IA: no sale contenido documental.
- BYOK cloud: los fragmentos incluidos en el prompt van al proveedor elegido.
- Backend institucional: depende de la politica y contrato de la institucion.
- Local/on-prem: embedding e inferencia pueden quedar dentro de la infraestructura propia.

Nunca guardar API keys en el navegador ni en archivos publicos.

## Publico / privado

Publicable:

- patron de asunto local;
- UX accesible;
- checklist de citas;
- checklist de redline revisable;
- explicacion de BYOK/local/cloud;
- guias educativas.

Reservado:

- prompts internos;
- routing;
- thresholds;
- scoring;
- ledgers;
- datos reales;
- clientes;
- estrategia propietaria de productos privados.

## Referencia estudiada

Este patron fue reforzado luego de revisar el repositorio publico `sure-scale/doc-haus`, que muestra una implementacion open source de legal AI local-first con asuntos, indices locales, citas y redlines. SilverIA Law no copia su codigo, nombres, prompts ni mecanicas operativas: adopta conceptos generales compatibles con su propia arquitectura y frontera publica/privada.
