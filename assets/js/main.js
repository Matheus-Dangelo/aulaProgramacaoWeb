// Importa funções de inicialização das páginas
import { IndexPage, initIndex } from "./pages/index.js";
import { SobrePage, initSobre } from "./pages/sobre.js";
import { VoluntariadoPage, initVoluntariado } from "./pages/voluntariado.js";
import { ContatoPage, initContato } from "./pages/contato.js";
import { ProjetosPage, initProjetos } from "./pages/projetos.js";
import { DoacoesPage, initDoacoes } from "./pages/doacoes.js";
import { BlogPage, initBlog } from "./pages/blog.js";



// Rotas e inicializações
const routes = {
  "/index.html": IndexPage,
  "/sobre.html": SobrePage,
  "/voluntariado.html": VoluntariadoPage,
  "/contato.html": ContatoPage,
  "/projetos.html": ProjetosPage,
  "/doacoes.html": DoacoesPage,
  "/blog.html": BlogPage,
};

const inits = {
  "/index.html": initIndex,
  "/sobre.html": initSobre,
  "/voluntariado.html": initVoluntariado,
  "/contato.html": initContato,
  "/projetos.html": initProjetos,
  "/doacoes.html": initDoacoes,
  "/blog.html": initBlog,
};

// Renderiza conteúdo dinâmico
function renderPage(path) {
  const content = document.getElementById("content");
  const page = routes[path];

  if (page) {
    content.innerHTML = page;
    inits[path]?.(); // executa se existir
  } else {
    content.innerHTML = `
      <section>
        <h2>Página não encontrada</h2>
        <p>Desculpe, o conteúdo solicitado não existe.</p>
      </section>
    `;
  }
}

// Navegação SPA
function handleNavigation(event) {
  const target = event.target.closest("a");
  if (!target) return;

  const href = target.getAttribute("href");
  if (href.startsWith("http") || href.startsWith("#") || !routes[href]) return;

  event.preventDefault();
  window.history.pushState({}, "", href);
  renderPage(href);
  setActiveLink(href);
}

// Atualiza o menu ativo
function setActiveLink(href) {
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === href);
  });
}

// Eventos globais
document.addEventListener("click", handleNavigation);

window.addEventListener("popstate", () => {
  const path = "/" + window.location.pathname.split("/").pop();
  renderPage(path);
  setActiveLink(path);
});

window.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  renderPage(`/${currentPath}`);
  setActiveLink(`/${currentPath}`);
});

/* ===============================
   ACESSIBILIDADE — Modo Alto Contraste + Navegação Teclado
================================= */

// Permite navegação via teclado no menu hamburguer
const menuToggle = document.getElementById("menu-toggle");
if (menuToggle) {
  menuToggle.setAttribute("tabindex", "0");
  menuToggle.setAttribute("role", "button");
  menuToggle.setAttribute("aria-label", "Abrir menu principal");

  menuToggle.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      menuToggle.click();
    }
  });
}

/* ===============================
   ACESSIBILIDADE (botão manual)
   - garante toggle consistente de 'alto-contraste'
   - preserva preferência em localStorage
   - suporta teclado (Enter/Space)
   =============================== */

(function() {
  // Identificador do botão que usamos aqui (caso você já tenha o HTML, ele será usado;
  // caso NÃO exista, o script cria o botão automaticamente).
  const BTN_ID = "toggle-contraste";
  const STORAGE_KEY = "site_alto_contraste"; // true/false

  // Localiza ou cria botão
  let btn = document.getElementById(BTN_ID);
  if (!btn) {
    btn = document.createElement("button");
    btn.id = BTN_ID;
    btn.className = "btn-contraste";
    btn.setAttribute("aria-label", "Ativar alto contraste");
    btn.textContent = "🌓 Acessibilidade";
    document.body.appendChild(btn);
  }

  // Inicializa estado salvo
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "true") {
    document.body.classList.add("alto-contraste");
    btn.textContent = "☀️ Modo Padrão";
    btn.setAttribute("aria-pressed", "true");
  } else {
    btn.textContent = "🌓 Acessibilidade";
    btn.setAttribute("aria-pressed", "false");
  }

  // Função de toggle (aplica/remover classe e salva estado)
  function toggleAltoContraste() {
    const ativo = document.body.classList.toggle("alto-contraste");
    localStorage.setItem(STORAGE_KEY, ativo ? "true" : "false");
    btn.textContent = ativo ? "☀️ Modo Padrão" : "🌓 Acessibilidade";
    btn.setAttribute("aria-pressed", ativo ? "true" : "false");
  }

  // Clique normal
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleAltoContraste();
  });

  // Suporta teclado: Enter e Espaço
  btn.setAttribute("tabindex", "0");
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAltoContraste();
    }
  });

  // Acessibilidade adicional: possibilita desativar o alto contraste com Esc quando ativo
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("alto-contraste")) {
      document.body.classList.remove("alto-contraste");
      localStorage.setItem(STORAGE_KEY, "false");
      btn.textContent = "🌓 Acessibilidade";
      btn.setAttribute("aria-pressed", "false");
      btn.focus();
    }
  });

  // (Opcional) expõe método para console debugging
  window.__toggleAltoContraste = toggleAltoContraste;
})();

