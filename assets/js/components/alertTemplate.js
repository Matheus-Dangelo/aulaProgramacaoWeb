// =====================================================
// Template de mensagens de feedback
// =====================================================

export function AlertTemplate({ tipo = "info", mensagem }) {
  const cores = {
    info: "#0288d1",
    sucesso: "#2e7d32",
    erro: "#d32f2f",
    aviso: "#f57c00"
  };

  return `
    <div class="alert" style="
      background-color: ${cores[tipo]};
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      margin: 10px 0;
      animation: fadeIn 0.4s ease;
    ">
      ${mensagem}
    </div>
  `;
}
