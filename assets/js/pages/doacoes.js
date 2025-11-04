// assets/js/pages/doacoes.js
import { initForm } from "../utils/forms.js";

export const DoacoesPage = `
  <section>
    <h2>Como Contribuir</h2>
    <p>Suas doações ajudam a transformar vidas! Escolha uma forma de contribuir com nossos projetos.</p>

    <ul>
      <li>💳 Doação via cartão de crédito</li>
      <li>🏦 Transferência bancária</li>
      <li>📦 Doação de bens e mantimentos</li>
      <li>🤝 Parcerias empresariais</li>
    </ul>
  </section>

  <section>
    <h2>Formulário de Doação</h2>

    <form id="form-doacao">
      <fieldset>
        <legend>Dados do Doador</legend>

        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000">
      </fieldset>

      <fieldset>
        <legend>Detalhes da Doação</legend>

        <label>Tipo de doação:</label>
        <label><input type="radio" name="tipo" value="unica" required> Única</label>
        <label><input type="radio" name="tipo" value="mensal"> Mensal</label>

        <label for="valor">Valor (R$):</label>
        <input type="number" id="valor" name="valor" min="10" step="5" required>

        <label for="formaPagamento">Forma de pagamento:</label>
        <select id="formaPagamento" name="formaPagamento" required>
          <option value="">Selecione...</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="pix">PIX</option>
          <option value="boleto">Boleto Bancário</option>
        </select>

        <label for="mensagem">Mensagem (opcional):</label>
        <textarea id="mensagem" name="mensagem" rows="3" placeholder="Deixe uma mensagem para nossa equipe..."></textarea>
      </fieldset>

      <button type="submit">Concluir Doação</button>
    </form>
  </section>
  
  <section class="midia-section">
  <h2>Vídeo Institucional</h2>

  <figure class="midia-container">
    <div class="midia-wrapper">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Veja o impacto da sua contribuição"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
    <figcaption>Obrigado por acreditar em nossa missão!</figcaption>
  </figure>
</section>

`;

export function initDoacoes() {
  // Inicializa o comportamento padrão de formulários (validação, feedback, etc.)
  initForm("#form-doacao", {
    onSuccess: (dados) => {
      console.log("Dados enviados:", dados);
      alert("Obrigado pela sua doação! 💚");
    },
  });
}
