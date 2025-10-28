// =====================================================
// Sistema de Templates SPA (Simples)
// =====================================================

export function loadTemplate() {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("nav ul li a");

  if (!main) return;

  // Adiciona evento a todos os links do menu
  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // impede recarregamento da página
      const page = link.getAttribute("href").replace(".html", "");

      fetch(`../pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
          // Extrai apenas o conteúdo de <main>
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const newMain = doc.querySelector("main");
          if (newMain) main.innerHTML = newMain.innerHTML;

          console.log(`✅ Página ${page}.html carregada dinamicamente.`);
        })
        .catch(err => console.error("❌ Erro ao carregar a página:", err));
    });
  });
}