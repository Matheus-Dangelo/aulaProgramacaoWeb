// =====================================================
// Controle do Menu Responsivo
// =====================================================

export function initMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (!menuToggle || !navMenu) {
    console.warn("⚠️ Elementos do menu não encontrados no DOM.");
    return;
  }

  // Abre/fecha o menu no mobile
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link (mobile)
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}