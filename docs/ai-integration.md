# Integracion con IA

SilverIA Law, en su version publica inicial, no esta conectada a ningun modelo de IA.

La demo es deliberadamente estatica: sirve para mostrar la experiencia accesible, los flujos guiados y el tipo de control que deberia tener una herramienta institucional. No procesa documentos reales, no llama APIs externas y no envia informacion a proveedores.

## Regla principal

No poner API keys en el frontend.

Una clave incluida en `app.js`, HTML, variables publicas de build o almacenamiento local puede filtrarse. Cualquier integracion real debe pasar por un backend o gateway controlado.

## Modos posibles

### 1. Demo sin IA

Uso recomendado para:

- presentaciones a Colegios;
- talleres introductorios;
- pruebas de accesibilidad;
- demostraciones sin datos sensibles.

Ventajas:

- cero costo;
- cero envio de datos;
- facil de desplegar;
- auditable por la comunidad.

Limite: no genera respuestas reales.

### 2. Backend institucional

El Colegio, universidad o institucion configura un backend propio.

Ese backend deberia:

- guardar credenciales fuera del navegador;
- aplicar limites por usuario o taller;
- registrar trazabilidad minima;
- separar documento, fuente, borrador y revision humana;
- permitir apagar proveedores o cambiar modelos;
- definir politicas de datos antes de operar.

### 3. BYOK seguro

BYOK significa Bring Your Own Key: cada estudio juridico o institucion usa su propia clave de proveedor.

Debe implementarse del lado servidor:

- clave cifrada o variable segura;
- nunca visible en el navegador;
- revocable por el administrador;
- con limites de uso;
- con aviso claro sobre que datos se envian al proveedor elegido.

### 4. Modelos locales u open-weight

Se puede conectar con modelos locales mediante Ollama, llama.cpp u otras herramientas open source.

Sirven especialmente para:

- resumen preliminar;
- clasificacion de documentos;
- borradores de baja sensibilidad;
- capacitacion offline;
- entornos donde el costo importa.

No deberian presentarse como verificacion juridica suficiente sin evaluacion, fuentes y control humano.

### 5. Fuentes y herramientas deterministicas

La IA no debe inventar derecho. Una version seria deberia consultar fuentes separadas:

- documentos aportados por el usuario;
- OCR;
- normativa;
- jurisprudencia;
- checklists;
- plantillas institucionales;
- reglas de verificacion.

El resultado final debe mostrar que esta fundado, que falta y que requiere revision profesional.

## Arquitectura minima recomendada

```text
PWA accesible
  -> Backend API
    -> Autenticacion y limites
    -> OCR / extraccion
    -> Fuentes y recuperacion documental
    -> Modelo IA elegido
    -> Verificacion y trazabilidad
    -> Respuesta para revision humana
```

## Frase honesta de producto

SilverIA Law no vende un modelo. Ofrece una interfaz accesible y verificable que puede conectarse al modelo, fuente o infraestructura que una institucion decida usar.
