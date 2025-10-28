// =====================================================
// Validação + Armazenamento Local
// =====================================================

import { Storage } from './storage.js';
import { AlertTemplate } from './components/alertTemplate.js';

export function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let valido = true;
      const dados = {};

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valido = false;
          input.classList.add("error");
          showAlert("erro", `⚠️ O campo "${input.name}" é obrigatório.`);
        } else {
          input.classList.remove("error");
          dados[input.name] = input.value.trim();
        }
      });

      if (valido) {
        // Salva dados no localStorage
        Storage.add("formularioEnvios", dados);
        showAlert("sucesso", "✅ Dados enviados com sucesso!");
        form.reset();
      }
    });
  });
}

function showAlert(tipo, mensagem) {
  const div = document.createElement("div");
  div.innerHTML = AlertTemplate({ tipo, mensagem });
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}
