import { initForm } from "../utils/forms.js";

export const ContatoPage = `
<section>
  <h2>Entre em Contato</h2>
  <p>Envie sua mensagem para nossa equipe.</p>

  <form id="form-contato">
    <label>Nome:</label>
    <input type="text" name="nome" required>

    <label>E-mail:</label>
    <input type="email" name="email" required>

    <label>Assunto:</label>
    <input type="text" name="assunto" required>

    <label>Mensagem:</label>
    <textarea name="mensagem" rows="4" required></textarea>

    <button type="submit">Enviar</button>
  </form>
</section>
`;

export function initContato() {
  initForm("#form-contato", "contatos");
}
