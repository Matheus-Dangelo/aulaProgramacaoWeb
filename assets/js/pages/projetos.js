// =====================================================
// Página: Projetos (SPA)
// =====================================================

import { initForm } from "../utils/forms.js";

export const ProjetosPage = `
  <section>
    <h2>Projetos Sociais em Andamento</h2>
    <p>Conheça alguns dos projetos que fazem a diferença na vida de muitas pessoas.</p>

    <!-- Galeria -->
    <section>
      <h3>Galeria de Fotos</h3>
      <div class="galeria">
        <picture>
          <source srcset="../assets/imagens/thumbs/thumb_vista-frontal-de-livros-empilhados-um-chapeu-de-formatura-e-escadas-para-o-dia-da-educacao.webp" type="image/webp">
          <img src="../assets/imagens/full/vista-frontal-de-livros-empilhados-um-chapeu-de-formatura-e-escadas-para-o-dia-da-educacao.jpg" alt="Projeto de Educação" loading="lazy">
        </picture>

        <picture>
          <source srcset="../assets/imagens/thumbs/thumb_composicao-de-cozimento-em-lote-plano.webp" type="image/webp">
          <img src="../assets/imagens/full/composicao-de-cozimento-em-lote-plano.jpg" alt="Projeto de Alimentação" loading="lazy">
        </picture>

        <picture>
          <source srcset="../assets/imagens/thumbs/thumb_protegendo-terra-maos-aconchegando-um-globo-de-musgo.webp" type="image/webp">
          <img src="../assets/imagens/full/protegendo-terra-maos-aconchegando-um-globo-de-musgo.jpg" alt="Projeto Ambiental" loading="lazy">
        </picture>
      </div>
    </section>

    <!-- Formulário -->
    <section>
      <h2>Inscreva-se em um Projeto</h2>
      <p>Se você deseja participar de um de nossos projetos, preencha o formulário abaixo:</p>

      <form id="formProjetos" action="#" method="post">
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000">
        </fieldset>

        <fieldset>
          <legend>Informações do Projeto</legend>

          <label for="projeto">Selecione o projeto:</label>
          <select id="projeto" name="projeto" required>
            <option value="">Escolha...</option>
            <option value="educacao">Educação para Todos</option>
            <option value="alimentacao">Alimente Esperança</option>
            <option value="meioambiente">Verde Vivo</option>
          </select>

          <label for="motivacao">Por que deseja participar?</label>
          <textarea id="motivacao" name="motivacao" rows="4" required></textarea>

          <label for="experiencia">Possui experiência prévia?</label>
          <textarea id="experiencia" name="experiencia" rows="3" placeholder="Descreva brevemente..."></textarea>
        </fieldset>

        <button type="submit">Enviar inscrição</button>
      </form>
    </section>

    <!-- Vídeo -->
    <section>
      <h2>Vídeo Institucional</h2>
      <video controls width="640" poster="../assets/imagens/thumb-video.jpg">
        <source src="../assets/videos/video_institucional.mp4" type="video/mp4">
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>

    <!-- Gráficos -->
    <section>
      <h2>Impacto dos Projetos</h2>
      <p>Veja os resultados de nossas ações sociais:</p>
      <canvas id="graficoRecursos" width="400" height="300">Gráfico de distribuição de recursos</canvas>
      <canvas id="graficoVoluntarios" width="400" height="300">Gráfico de evolução de voluntários</canvas>
      <canvas id="graficoRegioes" width="400" height="300">Gráfico de impacto por região</canvas>
    </section>
  </section>
`;

// Inicialização específica
export function initProjetos() {
  initForm("#formProjetos", "inscricoesProjetos");
}
