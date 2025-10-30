# aulaProgramacaoWeb
# Plataforma ONG UBM - Unidos por um Bairro Melhor

## Objetivo Geral
Desenvolver uma **plataforma web completa e profissional** para a ONG *UBM - Unidos por um Bairro Melhor*, com foco em acessibilidade, design responsivo e engajamento social.

---

## Objetivos Específicos
- Aplicar **HTML5 semântico** para construir uma estrutura clara e acessível;
- Criar **formulários interativos e validados** para voluntariado, doações e contato;
- Integrar **recursos multimídia** (`video`, `audio`, `picture`) e imagens otimizadas;
- Implementar **CSS3 modular e responsivo**, com variáveis, componentes e grid;
- Adicionar **interatividade com JavaScript**, incluindo menu hambúrguer e dropdown;
- Preparar o ambiente para futuras **integrações dinâmicas (API, banco de dados, etc.)**.

---

## Estrutura Atual do Projeto
```
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
│   └── voluntariado.html ← Formulário de inscrição de voluntários
└── README.md
```

---

## Tecnologias Utilizadas
| Categoria | Tecnologias e Recursos |
|------------|------------------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Layout** | CSS Grid, Flexbox, variáveis CSS, design responsivo |
| **Responsividade** | 5 breakpoints: 1200px, 992px, 768px, 576px, 400px |
| **Interatividade** | Menu hambúrguer, submenu dropdown, transições suaves |
| **Multimídia** | imagens otimizadas em `.jpg` e `.webp` |
| **Componentes** | Botões, formulários, alertas, badges e cards |
| **Acessibilidade** | Estrutura semântica e textos alternativos (`alt`) |

---
## Funcionalidades Implementadas
- Cabeçalho fixo e menu principal responsivo  
- Menu hambúrguer funcional no mobile  
- Submenus dropdown com transições suaves  
- Galeria de imagens responsiva com miniaturas otimizadas  
- Estrutura de design modular e consistente  
- Formulários com validação e foco em acessibilidade  
- Paleta de cores e tipografia definida via variáveis CSS  

---

## Próximas Etapas (Fase 3) Adicionado
1. **gráficos e visualizações interativas** com `<canvas>` e Chart.js;  
2. **animações sutis com CSS e JS**;  
3. **armazenamento de dados local (LocalStorage)**;  
4. **manuais de uso e manutenção**.

---


## Autor
**Matheus Dangelo**  
Curso: *Análise e Desenvolvimento de Sistemas*  
Disciplina: *Desenvolvimento Web - Fundamentos de HTML5, CSS3 e JavaScript*  
Instituição: *UBM - Centro Universitário de Barra Mansa*  
Ano: **2025**


*Este projeto é parte do aprendizado prático de desenvolvimento web, com foco em boas práticas, acessibilidade e impacto social positivo.*