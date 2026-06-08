# Radar BORA

Radar BORA es una propuesta de modulo para SilverIA Law orientada a monitorear el Boletin Oficial de la Republica Argentina y entregar informes diarios con enlaces oficiales.

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

## Flujo tecnico

```text
cron diario
  -> descargar portada/secciones BORA
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

Radar BORA genera un informe preliminar a partir de publicaciones oficiales y filtros configurados. Puede usar IA para resumir o clasificar, pero no reemplaza la revision del abogado ni constituye asesoramiento juridico automatizado.

## No objetivos

- No reemplazar revision profesional.
- No prometer deteccion exhaustiva sin falsos negativos.
- No usar credenciales en el frontend.
- No ocultar costos de IA.
- No guardar documentos sensibles sin politica de datos.
