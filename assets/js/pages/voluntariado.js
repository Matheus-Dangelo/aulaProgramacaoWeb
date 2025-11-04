import { initForm } from "../utils/forms.js";

export const VoluntariadoPage = `
<section>
  <h2>Seja um Voluntário</h2>
  <p>Preencha o formulário abaixo para se cadastrar como voluntário.</p>

  <form id="form-voluntariado">
    <label>Nome completo:</label>
    <input type="text" name="nome" required>

    <label>E-mail:</label>
    <input type="email" name="email" required>

    <label>Telefone:</label>
    <input type="tel" name="telefone" required>

    <label>Área de interesse:</label>
    <select name="area" required>
      <option value="">Selecione...</option>
      <option value="educacao">Educação</option>
      <option value="meioambiente">Meio ambiente</option>
      <option value="alimentacao">Alimentação</option>
      <option value="pets">Pets</option>
    </select>

    <button type="submit">Enviar</button>
  </form>
</section>
`;

// Script específico da página
export function initVoluntariado() {
  initForm("#form-voluntariado", "voluntarios");
}