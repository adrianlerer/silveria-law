const flows = {
  leer: {
    title: "Leer un documento",
    state: "Primer paso",
    source: "Pendientes",
    step: 1,
    body: `
      <div class="drop-zone">
        <div>
          <strong>Arrastre un PDF, Word o imagen escaneada</strong>
          <p>También puede elegir un archivo desde su computadora. La app preparará un resumen y separará datos, alertas y fuentes.</p>
          <div class="button-row" style="justify-content:center;margin-top:16px">
            <button class="primary-btn" type="button" data-demo="documento">Elegir archivo</button>
            <button class="secondary-btn" type="button" data-demo="ejemplo">Usar ejemplo</button>
          </div>
        </div>
      </div>
      <div class="assist-note">
        <strong>Resultado esperado</strong>
        <p>Resumen corto, partes involucradas, fechas relevantes, obligaciones, riesgos y puntos que requieren revisión profesional.</p>
      </div>
    `
  },
  dictar: {
    title: "Dictar una consulta",
    state: "Listo para voz",
    source: "No aplica",
    step: 2,
    body: `
      <div class="dictation-box">
        <p><strong>Puede hablar como lo haría con un colega.</strong></p>
        <textarea aria-label="Texto dictado" placeholder="Ejemplo: necesito preparar una carta documento por incumplimiento contractual..."></textarea>
        <div class="button-row" style="margin-top:14px">
          <button class="primary-btn" type="button" data-demo="dictado">Iniciar dictado</button>
          <button class="secondary-btn" type="button" data-demo="limpiar">Limpiar</button>
        </div>
      </div>
      <div class="assist-note">
        <strong>La app ordena el relato</strong>
        <p>Convertirá el dictado en hechos, dudas, documentos faltantes y una consulta jurídica ordenada.</p>
      </div>
    `
  },
  preparar: {
    title: "Preparar un escrito",
    state: "Formulario breve",
    source: "Pendientes",
    step: 2,
    body: `
      <div class="form-grid">
        <label>Tipo de pieza
          <select aria-label="Tipo de pieza">
            <option>Carta documento</option>
            <option>Demanda breve</option>
            <option>Contestación</option>
            <option>Informe para cliente</option>
          </select>
        </label>
        <label>Materia
          <select aria-label="Materia">
            <option>Contratos</option>
            <option>Laboral</option>
            <option>Consumo</option>
            <option>Privacidad</option>
          </select>
        </label>
        <label>Hechos principales
          <textarea aria-label="Hechos principales" placeholder="Escriba o dicte los hechos en lenguaje natural."></textarea>
        </label>
      </div>
      <div class="button-row">
        <button class="primary-btn" type="button" data-demo="borrador">Preparar borrador</button>
        <button class="secondary-btn" type="button" data-demo="preguntas">Ver preguntas faltantes</button>
      </div>
    `
  },
  verificar: {
    title: "Verificar fuentes",
    state: "Control previo",
    source: "En revisión",
    step: 3,
    body: `
      <ul class="verification-list">
        <li><span class="checkmark">1</span><span><strong>Separar afirmaciones.</strong><br />La app lista qué hechos y normas aparecen en el borrador.</span></li>
        <li><span class="checkmark">2</span><span><strong>Buscar respaldo.</strong><br />Cada cita debe indicar origen, fecha y fragmento relevante.</span></li>
        <li><span class="checkmark">3</span><span><strong>Marcar incertidumbre.</strong><br />Lo no confirmado queda señalado antes de exportar.</span></li>
      </ul>
      <div class="result-preview">
        <h3>Vista de control</h3>
        <ul>
          <li>Fundado: identificación de partes y fechas.</li>
          <li>A revisar: vigencia normativa y competencia.</li>
          <li>No exportar aún: citas sin fuente visible.</li>
        </ul>
      </div>
    `
  }
};

const shell = document.querySelector(".app-shell");
const taskButtons = [...document.querySelectorAll(".task-card")];
const navButtons = [...document.querySelectorAll(".nav-item")];
const flowTitle = document.querySelector("#flow-title");
const flowState = document.querySelector("#flow-state");
const flowBody = document.querySelector("#flow-body");
const sourceStatus = document.querySelector("#source-status");
const steps = [...document.querySelectorAll("#steps li")];
const toast = document.querySelector("#toast");

let currentTask = "leer";
let fontSize = "normal";

function renderFlow(task, activeSection = task) {
  const flow = flows[task] || flows.leer;
  currentTask = task;
  flowTitle.textContent = flow.title;
  flowState.textContent = flow.state;
  flowBody.innerHTML = flow.body;
  sourceStatus.textContent = flow.source;

  taskButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.task === task);
  });

  navButtons.forEach((button) => {
    const active = button.dataset.section === activeSection;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  steps.forEach((step, index) => {
    step.classList.toggle("is-current", index + 1 === flow.step);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

taskButtons.forEach((button) => {
  button.addEventListener("click", () => renderFlow(button.dataset.task));
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.dataset.section;
    renderFlow(section === "inicio" ? "leer" : section, section);
  });
});

document.addEventListener("click", (event) => {
  const demo = event.target.closest("[data-demo]");
  if (!demo) return;
  const action = demo.dataset.demo;
  const messages = {
    documento: "Carga simulada: el documento quedaría listo para resumen y extracción.",
    ejemplo: "Ejemplo cargado: se habilitaría resumen, alertas y fuentes.",
    dictado: "Dictado simulado: en producción usaría reconocimiento de voz con confirmación visible.",
    limpiar: "Campo listo para comenzar de nuevo.",
    borrador: "Borrador simulado: antes de exportar pasaría por control de fuentes.",
    preguntas: "Preguntas faltantes: partes, jurisdicción, fecha y documentación respaldatoria."
  };
  showToast(messages[action] || "Acción registrada.");
});

document.querySelector("#continue-btn").addEventListener("click", () => {
  const next = currentTask === "leer" ? "dictar" : currentTask === "dictar" ? "preparar" : "verificar";
  renderFlow(next);
  showToast("Avanzamos al siguiente paso guiado.");
});

document.querySelector("#help-btn").addEventListener("click", () => {
  showToast("Ayuda: elija una tarea, cargue información y revise fuentes antes de exportar.");
});

document.querySelector("#font-plus").addEventListener("click", () => {
  fontSize = fontSize === "normal" ? "large" : "xlarge";
  shell.dataset.fontSize = fontSize;
  showToast("Tamaño de letra aumentado.");
});

document.querySelector("#font-minus").addEventListener("click", () => {
  fontSize = fontSize === "xlarge" ? "large" : "normal";
  shell.dataset.fontSize = fontSize;
  showToast("Tamaño de letra reducido.");
});

document.querySelector("#contrast-toggle").addEventListener("change", (event) => {
  document.body.classList.toggle("high-contrast", event.target.checked);
  showToast(event.target.checked ? "Contraste alto activado." : "Contraste alto desactivado.");
});

document.querySelector("#speak-btn").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    showToast("Este navegador no permite lectura en voz alta.");
    return;
  }
  window.speechSynthesis.cancel();
  const text = `${flowTitle.textContent}. ${document.querySelector(".intro").textContent}`;
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  showToast("Lectura en voz alta iniciada.");
});

document.querySelector("#save-btn").addEventListener("click", () => {
  localStorage.setItem("silveria-law-last-task", currentTask);
  showToast("Estado guardado en este dispositivo.");
});

const savedTask = localStorage.getItem("silveria-law-last-task");
renderFlow(savedTask && flows[savedTask] ? savedTask : "leer");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
