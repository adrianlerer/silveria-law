# Radar BORA 🇦🇷 e internacional

Radar BORA 🇦🇷 es una propuesta de modulo para SilverIA Law orientada a monitorear el Boletin Oficial de la Republica Argentina y entregar informes diarios con enlaces oficiales.

Es tambien la primera edicion de un radar internacional de boletines y diarios oficiales.

Denominacion publica:

- Español: Radar BORA 🇦🇷 · Boletin Oficial de la Republica Argentina.
- Ingles: BORA 🇦🇷 Radar · Argentine Official Gazette.

## Principio

La IA no debe leer todo el Boletin Oficial si antes puede filtrarse con reglas simples.

Orden recomendado:

1. Captura publica.
2. Normalizacion de metadatos.
3. Filtro deterministico.
4. IA sobre items relevantes.
5. Informe con enlaces oficiales.
6. Revision profesional.

## Fuentes

Una implementacion productiva deberia consultar las secciones publicas del BORA y conservar los enlaces originales.

Secciones iniciales:

- Primera Seccion: legislacion y avisos oficiales.
- Segunda Seccion: sociedades y avisos judiciales.
- Tercera Seccion: contrataciones.

## Roadmap internacional

Argentina es el primer caso documentado. La arquitectura debe permitir sumar otras jurisdicciones por etapas, despues de revisar fuente oficial, estabilidad tecnica, permisos de uso, formato y costo de procesamiento.

Candidatos:

- Argentina 🇦🇷: BORA / Boletin Oficial de la Republica Argentina.
- España 🇪🇸: BOE / Boletin Oficial del Estado.
- Chile 🇨🇱: Diario Oficial de la Republica de Chile.
- Estados Unidos 🇺🇸: Federal Register y fuentes oficiales relacionadas.
- LatAm: boletines y diarios oficiales nacionales.

No presentar una jurisdiccion como soportada hasta que exista captura, normalizacion, enlaces oficiales y verificacion basica.

## Flujo tecnico

```text
cron diario
  -> descargar portada/secciones BORA
  -> registrar health/frescura de fuente
  -> extraer fecha, seccion, rubro, titulo, organismo y URL
  -> deduplicar por fecha + seccion + id/link
  -> aplicar perfiles de interes
  -> resumir con IA solo resultados filtrados
  -> enviar informe o mostrar panel
```

## Uso de API keys

No poner claves de proveedores en:

- `index.html`;
- `app.js`;
- `localStorage`;
- variables publicas de build;
- capturas de pantalla;
- repositorios GitHub.

Una integracion con OpenAI u otro proveedor debe usar backend.

Ejemplo:

```text
OPENAI_API_KEY=...
```

Esa variable debe existir solo en el entorno del servidor o proveedor de hosting.

La PWA llama a una ruta propia, por ejemplo:

```text
/api/radar-bora/informe
```

Esa ruta verifica usuario, cupo, suscripcion y recien despues llama al proveedor.

## Instructivo para usuarios de ChatGPT

Una suscripcion de ChatGPT no equivale a una API key.

Para obtener una API key:

1. Ir a <https://platform.openai.com/api-keys>.
2. Iniciar sesion.
3. Crear una clave secreta para el proyecto.
4. Copiarla y guardarla de forma segura.
5. Pegarla solo en el panel seguro del backend o en variables de entorno del hosting.

Si la clave se expone, debe revocarse y reemplazarse.

## Modelo economico recomendado

No ofrecer IA ilimitada sin control.

Opciones:

- Comunidad: resumen general, bajo costo, sin personalizacion profunda.
- Profesional: perfiles limitados por materia y palabras clave.
- Estudio: multiples usuarios, cupo mensual e historial.
- Colegio de Abogados: plan institucional con presupuesto cerrado.
- BYOK: el usuario o institucion aporta su propia clave, guardada de forma segura del lado servidor.

## Texto honesto de producto

Radar BORA 🇦🇷 genera un informe preliminar a partir de publicaciones oficiales y filtros configurados. Puede usar IA para resumir o clasificar, pero no reemplaza la revision del abogado ni constituye asesoramiento juridico automatizado.

BORA 🇦🇷 Radar generates a preliminary report from official publications and configured filters. It may use AI to summarize or classify, but it does not replace lawyer review and is not automated legal advice.

## Fuente viva y frescura

Cada fuente del radar debe informar:

- ultima corrida;
- ultimo estado;
- fecha maxima detectada;
- estado `VERIFICADO`, `STALE` o `NO VERIFICADO`;
- enlace oficial por item;
- motivo de falta de frescura cuando aplique.

Si BORA u otra fuente esta `STALE`, el digest no debe presentarse como completo.

## No objetivos

- No reemplazar revision profesional.
- No prometer deteccion exhaustiva sin falsos negativos.
- No usar credenciales en el frontend.
- No ocultar costos de IA.
- No guardar documentos sensibles sin politica de datos.
