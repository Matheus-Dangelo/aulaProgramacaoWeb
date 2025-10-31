# 🌍 ONG UBM — Unidos pelo Bem do Mundo

> Projeto desenvolvido na disciplina **Programação Web**, com foco em acessibilidade, design responsivo e boas práticas de desenvolvimento front-end.

---

## Sumário
1. [Descrição do Projeto](#-descrição-do-projeto)
2. [Demonstração](#-demonstração)
3. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Funcionalidades Principais](#-funcionalidades-principais)
6. [Acessibilidade (WCAG 2.1 AA)](#-acessibilidade-wcag-21-aa)
7. [Controle de Versão — GitFlow](#-controle-de-versão--gitflow)
8. [Como Executar Localmente](#-como-executar-localmente)
9. [Documentação Técnica](#-documentação-técnica)
10. [Autores](#-autores)

---

## Descrição do Projeto

O **site da ONG UBM** foi desenvolvido com o objetivo de divulgar ações sociais, ambientais e educacionais.  
O projeto enfatiza **acessibilidade digital, responsividade e organização modular** do código, seguindo boas práticas de front-end moderno.

O site é composto por páginas de:
- **Início**
- **Projetos**
- **Doações**
- **Galeria de Imagens**
- **Contato**

Cada seção apresenta conteúdo multimídia e recursos interativos voltados à inclusão e sustentabilidade.

---

## Demonstração

 [Acesse o site da ONG UBM no GitHub Pages](https://matheus-dangelo.github.io/aulaProgramacaoWeb/)  
*(link será válido após o deploy)*

---

## Tecnologias Utilizadas

| Categoria | Ferramentas |
|------------|-------------|
| **Linguagens** | HTML5, CSS3, JavaScript (ES6 Modules) |
| **Design & UI** | Layout responsivo com CSS Grid e Flexbox |
| **Controle de versão** | Git + GitHub (GitFlow) |
| **Documentação** | Markdown (`README`, `ACESSIBILIDADE_WCAG.md`, `README_GITFLOW.md`) |
| **Otimização** | Imagens WebP, minificação de CSS e JS |

---

## Estrutura do Projeto


AULAPROGRAMACAOWEB/
├── assets/
│   ├── áudio/ ← Trilhas e efeitos sonoros (futuro)
│   │   
│   ├── css/
│   │   ├── style.css
│   ├── docs/
│   ├── imagens/
│   │   │   ├── full/ ← Imagens originais otimizadas (.jpg, .webp)
│   │   │   └── thumbs/ ← Miniaturas otimizadas para galeria
│   ├── js/
│   │   │   ├── components/
│   │   │   │   │   ├── alertTemplate.js
│   │   │   │   │   ├── cardTemplate.js
│   │   │   │   │   └── tableTemplate.js
│   │   │   ├── pages/
│   │   │   │      ├── blog.js
│   │   │   │      ├── contato.js
│   │   │   │      ├── doacoes.js
│   │   │   │      ├── index.js
│   │   │   │      ├── projetos.js
│   │   │   │      ├── sobre.js
│   │   │   │      └── voluntariado.js
│   │   │   ├── utils/
│   │   │   │      ├── forms.js
│   │   │   │      └── validation.js
│   │   │   ├── main.js
│   │   │   ├── menu.js
│   │   │   ├── render.js
│   │   │   ├── storage.js
│   │   │   └── templates.js
├── pages/
│   ├── blog.html ← Notícias e assinatura de newsletter
│   ├── contato.html ← Formulário de contato institucional
│   ├── doacoes.html ← Opções e formulário de doações
│   ├── galeria.html ← Galeria de imagens responsiva
│   ├── index.html ← Página inicial com vídeo institucional
│   ├── projetos.html ← Projetos sociais ativos
│   ├── sobre.html ← Missão, visão, valores e imagens da ONG
│   ├── transparencia.html ← Relatórios e gráficos de prestação de contas
│   ├── voluntariado.html ← Formulário de inscrição de voluntários
├── ACESSIBILIDADE_WCAG.md
├── README_GITFLOW.md
└── README.md


---

## Funcionalidades Principais

✅ Navegação modular com carregamento dinâmico das páginas.  
✅ Formulários acessíveis e validados.  
✅ Galeria responsiva com imagens otimizadas.  
✅ Modo de **alto contraste** e **modo escuro**.  
✅ Multimídia acessível (vídeos, legendas e descrições).  
✅ Design responsivo para todos os tamanhos de tela.

---

## Acessibilidade (WCAG 2.1 AA)

O site segue os **critérios de acessibilidade da WCAG 2.1 nível AA**, incluindo:

- Navegação por teclado completa (`Tab`, `Enter`, `Espaço`);
- Textos alternativos (`alt`, `aria-label`, `figcaption`);
- Contraste mínimo de 4.5:1;
- Estrutura semântica com `main`, `section`, `header`, `footer`;
- Modo de **alto contraste** acessível.

 Detalhes completos: [`ACESSIBILIDADE_WCAG.md`](./ACESSIBILIDADE_WCAG.md)

---

## Controle de Versão — GitFlow

O repositório segue o fluxo **GitFlow**, com branches organizadas por propósito:

- `main` — versão estável e pronta para produção  
- `develop` — integração de novas funcionalidades  
- `feature/*` — novas implementações  
- `hotfix/*` — correções rápidas  

 Detalhamento: [`README_GITFLOW.md`](./README_GITFLOW.md)

---

## Como Executar Localmente

```bash
# Clonar o repositório
git clone https://github.com/Matheus-Dangelo/aulaProgramacaoWeb.git

# Acessar a pasta do projeto
cd aulaProgramacaoWeb

# Executar localmente (usando VSCode Live Server, por exemplo)

Documentação Técnica

Além deste README, o projeto contém:

README_GITFLOW.md

Autores

Desenvolvido por:

Matheus Dangelo
GitHub @Matheus-Dangelo
https://github.com/Matheus-Dangelo

Licença

Este projeto é de uso educacional e está licenciado sob a licença MIT.