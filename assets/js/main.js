// =====================================================
// Controlador Principal (SPA + Inicialização)
// =====================================================

// Importação de módulos
import { initMenu } from './menu.js';
import { loadTemplate } from './templates.js';
import { initFormValidation } from './forms.js';

// ======================================
// 1. Inicialização global do site
// ======================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Aplicação ONG UBM iniciada com sucesso!");

  // Inicializa o menu responsivo
  initMenu();

  // Inicializa o sistema de templates (SPA básica)
  loadTemplate();

  // Inicializa validações de formulário
  initFormValidation();
});