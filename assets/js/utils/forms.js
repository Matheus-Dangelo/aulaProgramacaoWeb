// =====================================================
// Validação + Armazenamento Local + Alertas visuais
// =====================================================

import { Storage } from "../storage.js";
import { AlertTemplate } from "../components/alertTemplate.js";

// Inicializa a validação de todos os formulários da página
export function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let valido = true;
      const dados = {};

      inputs.forEach((input) => {
        const valor = input.value.trim();

        if (!valor) {
          valido = false;
          input.classList.add("error");
          showAlert("erro", `⚠️ O campo "${input.name}" é obrigatório.`);
        } else {
          input.classList.remove("error");
          dados[input.name] = valor;
        }
      });

      if (valido) {
        // Salva os dados no localStorage
        Storage.add("formularioEnvios", dados);
        showAlert("sucesso", "✅ Dados enviados com sucesso!");
        form.reset();
      }
    });
  });
}

// Função auxiliar para exibir alertas dinâmicos
function showAlert(tipo, mensagem) {
  const div = document.createElement("div");
  div.innerHTML = AlertTemplate({ tipo, mensagem });
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}

export function initForm(formSelector, storageKey) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Cria um objeto com os dados do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Recupera os dados antigos do localStorage
    const existing = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Adiciona o novo registro
    existing.push({
      ...data,
      dataEnvio: new Date().toLocaleString("pt-BR"),
    });

    // Salva novamente
    localStorage.setItem(storageKey, JSON.stringify(existing));

    // Mensagem de sucesso
    alert("✅ Formulário enviado com sucesso! Obrigado por participar.");

    // Limpa o formulário
    form.reset();
  });
}

