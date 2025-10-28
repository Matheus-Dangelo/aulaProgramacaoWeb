// Importa as páginas (templates)
import { VoluntariadoPage } from "./pages/voluntariado.js";

// Objeto que armazena as rotas da aplicação
const routes = {
  "/voluntariado.html": VoluntariadoPage,
  // futuras páginas:
  // "/projetos.html": ProjetosPage,
  // "/sobre.html": SobrePage,
};

// Função para renderizar a página
function renderPage(path) {
  const content = document.getElementById("content");
  const page = routes[path];

  if (page) {
    content.innerHTML = page;
  } else {
    content.innerHTML = `
      <section>
        <h2>Página não encontrada</h2>
        <p>Desculpe, o conteúdo solicitado não existe.</p>
      </section>
    `;
  }
}

// Função para lidar com cliques nos links
function handleNavigation(event) {
  const target = event.target.closest("a");

  if (target && target.getAttribute("href")) {
    const href = target.getAttribute("href");

    // Impede o carregamento completo da página
    if (href.startsWith("http")) return; // ignora links externos
    event.preventDefault();

    // Atualiza o histórico da página
    window.history.pushState({}, "", href);

    // Renderiza o conteúdo correspondente
    renderPage(href);
  }
}

// Adiciona o listener de clique no documento inteiro
document.addEventListener("click", handleNavigation);

// Permite que o botão "Voltar" funcione corretamente
window.addEventListener("popstate", () => {
  renderPage(window.location.pathname.split("/").pop());
});

// Renderiza a página inicial ao carregar
window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  renderPage(`/${currentPath}`);
});
