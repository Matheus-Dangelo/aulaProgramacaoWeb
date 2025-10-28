// =====================================================
// Atualiza dinamicamente o conteúdo da SPA
// =====================================================

import { Storage } from "./storage.js";
import { TableTemplate } from "./components/tableTemplate.js";
import { CardTemplate } from "./components/cardTemplate.js";

export function renderListagemVoluntarios() {
  const container = document.querySelector("#conteudo-dinamico");
  const dados = Storage.load("formularioEnvios");
  container.innerHTML = TableTemplate({ titulo: "Voluntários Cadastrados", dados });
}

export function renderProjetos() {
  const container = document.querySelector("#conteudo-dinamico");
  const projetos = [
    {
      titulo: "Projeto Verde Vivo",
      descricao: "Ações de reflorestamento e conscientização ambiental.",
      imagem: "../assets/imagens/galeria/thumbs/activists-hugging-walking-with-trash-bags-woods.webp"
    },
    {
      titulo: "Ação Comunidade Limpa",
      descricao: "Mutirões mensais de limpeza e reciclagem no bairro.",
      imagem: "../assets/imagens/galeria/thumbs/medium-shot-people-working-together.webp"
    }
  ];

  container.innerHTML = projetos.map(CardTemplate).join("");
}
