# Fuentes vivas para IA legal argentina

SilverIA Law incorpora como patron publico una capa de fuentes vivas: catalogo de fuentes, ingesta normalizada, estado de salud, control de frescura, resumen IA separado del texto oficial y revision profesional.

Este patron se refuerza luego de revisar Vigia/OpenArg, que muestra una arquitectura open source para monitoreo legislativo y regulatorio argentino. SilverIA Law no copia su codigo, marca ni mecanicas internas; adopta principios generales compatibles con su arquitectura propia.

## Patron

```text
fuente oficial
  -> ingesta idempotente
  -> normalizacion
  -> catalogo + freshness SLO
  -> indice / busqueda
  -> resumen IA opt-in
  -> alerta o informe
  -> revision humana
```

## Campos minimos de una fuente

- codigo interno;
- nombre legible;
- tipo: feed, scrape, API, documento local;
- URL base;
- jurisdiccion;
- cadencia esperada;
- ultima corrida;
- ultimo estado;
- fecha maxima detectada;
- stale: si/no;
- razones de stale;
- enlace oficial por resultado.

## Estados de confianza

- `VERIFICADO`: fuente oficial disponible, fecha visible y dato coincidente.
- `STALE`: fuente atrasada respecto de su cadencia o SLO.
- `NO VERIFICADO`: fuente caida, incompleta o sin enlace suficiente.
- `INFERIDO`: conclusion razonada a partir de fuentes, pendiente de revision.
- `URGENTE`: posible plazo, vencimiento o carga profesional.

## Control de omisiones

Un radar normativo no debe limitarse a "encontre algo". Debe marcar si falta:

- texto oficial;
- enlace o identificador;
- fecha de publicacion;
- organismo;
- jurisdiccion;
- vigencia o estado de tramitacion;
- fuente primaria;
- dato necesario para decidir si afecta al usuario.

## Aplicacion publica

SilverIA Law puede publicar:

- guia de fuentes vivas;
- checklist de frescura;
- estados de confianza;
- explicacion para abogados no tecnicos;
- patrones de Radar BORA / radar internacional.

## Reservado

Mantener fuera del open source:

- prompts internos;
- scoring de relevancia propietario;
- routing de modelos/proveedores;
- thresholds;
- cost ledgers;
- clientes;
- corpus privados;
- estrategia propietaria.

## Referencias

- Vigia/OpenArg: plataforma open source de inteligencia legislativa y regulatoria argentina.
- Radar BORA: modulo publico de SilverIA Law para monitoreo de boletines oficiales con control humano.
