// =====================================
// Página Projetos - ONG UBM
// =====================================

export const ProjetosPage = `
  <section>
    <h2>Nossos Projetos</h2>
    <p>A ONG UBM atua em diversas áreas, promovendo ações sociais, ambientais e educacionais que impactam positivamente a comunidade.</p>
  </section>

  <section id="educacao">
    <h2>Educação</h2>
    <p>Oferecemos oficinas e reforço escolar para crianças e jovens, incentivando o aprendizado e o desenvolvimento pessoal.</p>

    <figure class="midia-container">
      <div class="midia-wrapper">
        <iframe
          src="https://www.youtube.com/embed/aBcDeFg1234"
          title="Projeto de Educação - ONG UBM"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
      <figcaption>Projeto Educação em Ação — capacitando jovens para o futuro.</figcaption>
    </figure>
  </section>

  <section id="meioambiente">
    <h2>Meio Ambiente</h2>
    <p>Promovemos mutirões de limpeza, plantio de árvores e campanhas educativas sobre sustentabilidade e preservação.</p>

    <figure class="midia-container">
      <div class="midia-wrapper">
        <video controls poster="../assets/imagens/thumbs/thumb_protegendo-terra-maos-aconchegando-um-globo-de-musgo.webp">
          <source src="../assets/videos/meio_ambiente.mp4" type="video/mp4">
          Seu navegador não suporta vídeo.
        </video>
      </div>
      <figcaption>Mutirão Verde — juntos por um bairro mais limpo e sustentável.</figcaption>
    </figure>
  </section>

  <section id="alimentacao">
    <h2>Alimentação</h2>
    <p>Distribuímos cestas básicas e promovemos oficinas de culinária saudável, incentivando o aproveitamento integral dos alimentos.</p>

    <figure class="midia-container">
      <div class="midia-wrapper">
        <iframe
          src="https://www.youtube.com/embed/xYz987654"
          title="Alimentação Solidária - ONG UBM"
          allowfullscreen
          loading="lazy">
        </iframe>
      </div>
      <figcaption>Alimentação Solidária — combatendo a fome com amor e solidariedade.</figcaption>
    </figure>
  </section>
`;

export function initProjetos() {
  console.log("Página de Projetos inicializada!");
}
