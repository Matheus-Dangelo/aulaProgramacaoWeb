# Acessibilidade — Conformidade WCAG 2.1 Nível AA

Este documento descreve todas as implementações de **acessibilidade** realizadas no projeto da ONG UBM, alinhadas às diretrizes da **WCAG 2.1 (Web Content Accessibility Guidelines)** — nível **AA**, garantindo inclusão e usabilidade para todos os públicos.

---

## Estrutura Semântica

Foram utilizadas **tags HTML semânticas** em toda a aplicação para descrever corretamente a hierarquia e função de cada elemento:

- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` — para estruturar conteúdo;
- `<nav>` — para blocos de navegação;
- `<h1>` a `<h3>` — hierarquia de títulos consistente;
- `<figure>` e `<figcaption>` — para imagens e mídias com descrição textual.

✅ **Como testar:**
1. Use a extensão **Web Developer Toolbar** ou **Wave**.
2. Selecione “Outline > Show Element Structure”.
3. Verifique se a hierarquia semântica está lógica e linear.

---

## Navegação por Teclado

Toda a navegação foi testada e está acessível via **teclado** (`Tab`, `Enter`, `Shift+Tab`).

- Links, botões e formulários recebem foco (`:focus-visible`);
- Nenhum elemento essencial depende exclusivamente do mouse;
- O foco é claramente visível por meio de destaque visual (`outline` personalizado).

✅ **Como testar:**
1. Pressione `Tab` para navegar pelos elementos.
2. Use `Enter` para ativar botões e links.
3. Verifique se o foco é sempre visível e segue a ordem lógica da página.

---

## 🌗 Modo Alto Contraste e Modo Escuro

Implementado script dedicado de **acessibilidade visual** (arquivo `accessibility.js`) que permite alternar entre:

- **Modo Padrão**
- **Modo Alto Contraste**

O botão é totalmente acessível via teclado e leitor de tela (`aria-pressed` e `aria-label` configurados).

As cores seguem a **proporção mínima de contraste de 4.5:1**, conforme as recomendações WCAG para textos normais.

### Funcionamento Técnico
- O botão aciona a classe `.alto-contraste` no elemento `<body>`;
- O modo selecionado é salvo em `localStorage`, mantendo a preferência do usuário mesmo após recarregar a página;
- Estilos de contraste são definidos em CSS:

```css
body.alto-contraste {
  background-color: #000;
  color: #fff;
}

body.alto-contraste a {
  color: #ffeb3b;
}

body.alto-contraste button {
  background-color: #222;
  color: #fff;
  border: 2px solid #ffeb3b;
}

### Como testar:

Clique no botão “Ativar Alto Contraste” (ou use Tab + Enter);

Observe a alteração imediata das cores e contraste;

Recarregue a página — o modo permanece ativo (persistência via localStorage);

Use uma ferramenta de contraste como Contrast Checker (https://webaim.org/resources/contrastchecker/).

### Suporte a Leitores de Tela

Todos os botões e links possuem descrições alternativas via aria-label;

Estruturas de navegação incluem roles semânticos (role="navigation", role="main");

Imagens e mídias utilizam atributos alt e figcaption descritivos;

O foco e o estado do botão de contraste são anunciados corretamente.

✅ Como testar:

Utilize o NVDA (Windows), VoiceOver (Mac) ou ChromeVox (Chrome);

Navegue usando Tab e Seta para baixo;

Confirme se o leitor de tela anuncia todos os títulos, botões e descrições de imagens.

### Feedback de Formulários

Todos os formulários seguem boas práticas de acessibilidade:

Campos com rótulos <label> associados corretamente;

Mensagens de erro visuais e textuais (.error-msg);

Indicação visual e auditiva de campos inválidos (border-color e aria-live).

✅ Como testar:

Envie o formulário vazio;

Observe as mensagens de erro visuais;

Verifique com leitor de tela se os avisos são anunciados automaticamente.

### Testes Automatizados Recomendados

Para validar a acessibilidade, foram utilizadas (ou são recomendadas) as seguintes ferramentas:

Google Lighthouse → aba “Accessibility” no DevTools;

axe DevTools (extensão gratuita);

Wave Accessibility Tool.

✅ Como testar com Lighthouse:

Abra o site no Chrome;

Ctrl + Shift + I → aba “Lighthouse”;

Gere um relatório selecionando apenas “Accessibility”.

### Resumo de Conformidade
Critério WCAG 2.1 AA	Status	Observação
Navegação por teclado	            ✅ OK	Totalmente funcional
Estrutura semântica e headings	    ✅ OK	Uso correto de tags HTML5
Contraste mínimo 4.5:1	            ✅ OK	Validado manualmente
Suporte a leitores de tela	        ✅ OK	Testado com NVDA
Feedback de formulários	            ✅ OK	Mensagens visuais e ARIA
Persistência de preferências (tema)	✅ OK	LocalStorage implementado

### Futuras Melhorias (Recomendadas)

Implementar atalhos de teclado personalizados (ex: Alt + H para ir ao cabeçalho);

Adicionar resumo de acessibilidade visível ao carregar a página;

Integrar testes automáticos via CI/CD usando axe-core e jest-axe.

### Créditos e Referências

WCAG 2.1 — W3C Recommendation
WebAIM — Contrast Checker
MDN Web Docs — Accessibility Guide
Google Lighthouse
