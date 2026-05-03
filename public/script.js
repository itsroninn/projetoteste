const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector(".contact-form");
const submitButton = document.querySelector("[data-submit]");
const formStatus = document.querySelector("[data-form-status]");

const setNavState = (isOpen) => {
  navToggle?.setAttribute("aria-expanded", String(isOpen));
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

const errors = {
  name: "Informe seu nome com pelo menos 2 caracteres.",
  phone: "Informe um telefone ou WhatsApp valido.",
  goal: "Selecione seu objetivo principal.",
};

const getDigits = (value) => value.replace(/\D/g, "");

const setFieldError = (field, message = "") => {
  const errorElement = document.querySelector(`[data-error-for="${field.name}"]`);
  field.setAttribute("aria-invalid", message ? "true" : "false");
  if (errorElement) {
    errorElement.textContent = message;
  }
};

const validateField = (field) => {
  const value = field.value.trim();
  let message = "";

  if (field.name === "name" && value.length < 2) {
    message = errors.name;
  }

  if (field.name === "phone" && getDigits(value).length < 10) {
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
  if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
    validateField(field);
  }
});

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fields = Array.from(form.querySelectorAll("input[required], select[required]"));
  const isValid = fields.every((field) => validateField(field));

  if (!isValid) {
    showStatus("Revise os campos destacados antes de enviar.", "error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";
  showStatus("Enviando seu interesse...", "");

  try {
    const formData = new FormData(form);
    const response = await fetch("/", {
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
    submitButton.disabled = false;
    submitButton.textContent = "Enviar interesse";
  }
});
