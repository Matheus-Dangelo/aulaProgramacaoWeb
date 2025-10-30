import { initForm } from "../utils/forms.js";

export const DoacoesPage = `
<section>
  <h2>Faça uma Doação</h2>
  <p>Contribua com nossa causa preenchendo o formulário abaixo.</p>

  <form id="form-doacoes">
    <label>Nome:</label>
    <input type="text" name="nome" required>

    <label>E-mail:</label>
    <input type="email" name="email" required>

    <label>Valor da doação (R$):</label>
    <input type="number" name="valor" step="0.01" required>

    <button type="submit">Doar</button>
  </form>
</section>
`;

export function initDoacoes() {
  initForm("#form-doacoes", "doacoes");
}
