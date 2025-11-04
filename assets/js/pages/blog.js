import { initForm } from "../utils/forms.js";

export const BlogPage = `
<section>
  <h2>Deixe seu comentário</h2>

  <form id="form-blog">
    <label>Nome:</label>
    <input type="text" name="nome" required>

    <label>Comentário:</label>
    <textarea name="comentario" rows="3" required></textarea>

    <button type="submit">Enviar</button>
  </form>
</section>
`;

export function initBlog() {
  initForm("#form-blog", "comentarios");
}
