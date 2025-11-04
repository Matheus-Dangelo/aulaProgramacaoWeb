// Verifica se o campo não está vazio
export function isNotEmpty(value) {
  return value.trim().length > 0;
}

// Verifica formato de e-mail
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Verifica formato de telefone simples (DDD + número)
export function isValidPhone(phone) {
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(phone);
}

// Mostra mensagem de erro personalizada
export function showError(input, message) {
  const error = document.createElement("small");
  error.className = "error-msg";
  error.textContent = message;
  input.parentNode.appendChild(error);
  input.classList.add("invalid");
}

// Remove mensagens anteriores
export function clearErrors(form) {
  form.querySelectorAll(".error-msg").forEach(el => el.remove());
  form.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}