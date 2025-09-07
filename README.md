# cypress-testing-e2e

Este projeto é uma automação de testes usando **Cypress** + **TypeScript**, com organização em **Page Objects**, boas práticas e pipeline pronto para **GitHub Actions**.  

---

## 🚀 Tecnologias usadas
- [Cypress](https://www.cypress.io/) (E2E Testing Framework)
- [TypeScript](https://www.typescriptlang.org/)
- Page Object Pattern
- GitHub Actions (CI/CD)

---

## 🛠️ Pré-requisitos
- **Node.js** v18 ou superior
- **npm** v8+ ou **yarn** (recomendado `npm ci` para CI)

---
## ▶️ Como rodar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/StrJosedavi/cypress-testing-e2e.git
cd cypress-testing-e2e
```

### 2. Instale dependências
```bash
npm install
```

### 3. Abra o Cypress em modo interativo
```bash
npm run cy:open
```

### 4. Execute testes em modo headless
```bash
npm run cy:run
```

---

## ⚙️ Scripts disponíveis

- `npm run cy:open` → abre a UI do Cypress  
- `npm run cy:run` → executa todos os testes em headless (modo CI/CD)  

---

## Cloud Cypress
- Execução Cypress Cloud 
<img width="1907" height="989" alt="image" src="https://github.com/user-attachments/assets/aa0fd022-c84b-469d-b87b-daeed8e46cb9" />

## 📖 Boas práticas aplicadas

- **Page Objects** → classes para cada página/feature.  
- **Seletores estáveis** → use `data-test="..."` sempre que possível.  
- **Fixtures** → centralização de dados mockados (`cypress/fixtures`).  
- **Custom Commands** → funções globais (`cypress/support/commands.ts`).  
- **CI/CD integrado** → execução automática no GitHub Actions.  

---

✍️ **Autor:** José Davi (Quality Analist)  
⚡ Feito para estudos e projetos reais.
