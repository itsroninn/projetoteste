const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector(".contact-form");
const submitButton = document.querySelector("[data-submit]");
const formStatus = document.querySelector("[data-form-status]");
const errorElements = new Map(
  Array.from(document.querySelectorAll("[data-error-for]")).map((element) => [element.dataset.errorFor, element])
);
const submitButtonLabel = submitButton?.textContent ?? "Enviar interesse";

const setNavState = (isOpen) => {
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  navToggle?.setAttribute("aria-label", isOpen ? "Fechar menu de navegacao" : "Abrir menu de navegacao");
  nav?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
};

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavState(!isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setNavState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
    setNavState(false);
    navToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    setNavState(false);
  }
});

const errors = {
  name: "Informe seu nome com pelo menos 2 caracteres.",
  phone: "Informe um telefone ou WhatsApp valido.",
  goal: "Selecione seu objetivo principal.",
};

const getDigits = (value) => value.replace(/\D/g, "");

const setFieldError = (field, message = "") => {
  const errorElement = errorElements.get(field.name);
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (errorElement) {
    errorElement.textContent = message;
  }
};

const validateField = (field) => {
  const value = field.value.trim();
  const digits = getDigits(value);
  let message = "";

  if (field.name === "name" && value.length < 2) {
    message = errors.name;
  }

  if (field.name === "phone" && (digits.length < 10 || digits.length > 13)) {
    message = errors.phone;
  }

  if (field.name === "goal" && !value) {
    message = errors.goal;
  }

  setFieldError(field, message);
  return !message;
};

const showStatus = (message, type = "") => {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`.trim();
};

form?.addEventListener("input", (event) => {
  const field = event.target;
  if (
    (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) &&
    field.getAttribute("aria-invalid") === "true"
  ) {
    validateField(field);
  }
});

form?.addEventListener("blur", (event) => {
  const field = event.target;
  if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
    validateField(field);
  }
}, true);

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fields = Array.from(form.querySelectorAll("input[required], select[required]"));
  const invalidField = fields.find((field) => !validateField(field));

  if (invalidField) {
    showStatus("Revise os campos destacados antes de enviar.", "error");
    invalidField.focus();
    return;
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
  }
  showStatus("Enviando seu interesse...", "");

  try {
    const formData = new FormData(form);
    const formEndpoint = form.getAttribute("action") || "/";
    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error("Falha no envio");
    }

    form.reset();
    fields.forEach((field) => setFieldError(field));
    showStatus("Interesse enviado. A equipe OLYMPO entrara em contato em breve.", "success");
  } catch (error) {
    showStatus("Nao foi possivel enviar agora. Tente novamente ou fale pelo WhatsApp.", "error");
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = submitButtonLabel;
    }
  }
});
