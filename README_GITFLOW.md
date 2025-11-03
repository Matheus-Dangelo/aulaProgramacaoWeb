# 🧭 Fluxo de Versionamento - GitFlow

Este documento define o **padrão de versionamento** e **boas práticas de Git** utilizadas no projeto da ONG UBM.

---

## 1. Estrutura de Branches

| Branch | Função |
|--------|--------|
| `main` | Versão estável em produção |
| `develop` | Desenvolvimento contínuo (base para novas features) |
| `feature/*` | Desenvolvimento de novas funcionalidades |
| `release/*` | Preparação para novos releases |
| `hotfix/*` | Correções urgentes na produção |

---

## 2. Configuração Inicial

```bash
# Verifica se está na branch principal
git checkout main

# Atualiza o código local
git pull origin main

# Cria a branch de desenvolvimento
git checkout -b develop
git push -u origin develop

# Cria uma branch de feature
git checkout -b feature/nome-da-feature

# Após desenvolver:
git add .
git commit -m "feat(nome-da-feature): descrição breve"
git push origin feature/nome-da-feature

# Quando finalizado:
git checkout develop
git merge feature/nome-da-feature
git branch -d feature/nome-da-feature

# Cria uma branch de release
git checkout -b release/v1.0.0

# Ajusta, testa e finaliza:
git checkout main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Primeiro release estável"
git push origin main --tags

# Sincroniza com develop
git checkout develop
git merge release/v1.0.0
git branch -d release/v1.0.0

git checkout -b hotfix/descricao-breve main
# Corrige o bug
git add .
git commit -m "fix(nome-da-parte): descrição da correção"
git checkout main
git merge hotfix/descricao-breve
git push origin main

# Atualiza develop também
git checkout develop
git merge hotfix/descricao-breve
git push origin develop
git branch -d hotfix/descricao-breve
