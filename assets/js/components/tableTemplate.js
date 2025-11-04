// =====================================================
// Exibe dados salvos em tabela
// =====================================================

export function TableTemplate({ titulo, dados }) {
  if (!dados || dados.length === 0) {
    return `<p class="alerta-vazio">Nenhum registro encontrado.</p>`;
  }

  // Gera cabeçalhos automaticamente a partir das chaves do primeiro objeto
  const cabecalhos = Object.keys(dados[0]);

  const headerHTML = cabecalhos.map(c => `<th>${c}</th>`).join("");
  const bodyHTML = dados
    .map(item => {
      const cells = cabecalhos.map(c => `<td>${item[c]}</td>`).join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `
    <section class="tabela-dinamica">
      <h2>${titulo}</h2>
      <table>
        <thead><tr>${headerHTML}</tr></thead>
        <tbody>${bodyHTML}</tbody>
      </table>
    </section>
  `;
}
