// =====================================================
// Gera Cards HTML via JS
// =====================================================

export function CardTemplate({ titulo, descricao, imagem }) {
  return `
    <div class="card">
      <img src="${imagem}" alt="${titulo}" loading="lazy">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>
  `;
}
