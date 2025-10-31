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

// Cria o botão dinamicamente (caso não exista no HTML)
if (!document.getElementById("toggle-contraste")) {
  const btn = document.createElement("button");
  btn.id = "toggle-contraste";
  btn.className = "btn-contraste";
  btn.textContent = "Alto Contraste";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    btn.textContent = document.body.classList.contains("alto-contraste")
      ? "Modo Padrão"
      : "Alto Contraste";
  });
}

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
