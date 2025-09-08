# Visão Geral do Projeto de Testes E2E com Cypress

## O que é este projeto?

Este projeto é uma suíte de testes automatizados end-to-end (E2E) desenvolvida com Cypress para validar os principais fluxos de uma aplicação web de e-commerce. O objetivo é garantir a qualidade, segurança e usabilidade das funcionalidades críticas do sistema, simulando a experiência real do usuário.

## Estrutura do Projeto

- **cypress/e2e/**: Contém os testes automatizados organizados por domínio (login, carrinho, checkout, inventário).
- **cypress/pages/**: Implementa o padrão Page Object Model, encapsulando seletores, ações e asserções de cada página.
- **cypress/support/**: Comandos customizados e configurações globais para os testes.
- **cypress/fixtures/**: Dados de teste reutilizáveis (ex: usuários de login).
- **docs/gherkin/**: Especificações dos cenários de teste em linguagem Gherkin.
- **docs/project-struct/**: Documentação detalhada das features e cenários testados.

## Abordagem dos Testes

- **Page Object Model (POM):**
  Cada página relevante da aplicação possui uma classe dedicada, facilitando a manutenção e reutilização de código.
- **Comandos Customizados:**
  Fluxos comuns, como login, são abstraídos em comandos Cypress reutilizáveis.
- **Fixtures:**
  Dados de teste são centralizados para facilitar a troca e manutenção.
- **Gherkin:**
  Os cenários são descritos em linguagem natural, promovendo clareza e alinhamento com o negócio.

## Funcionalidades Testadas e Cenários

### 1. Autenticação de Usuário

Garante que o sistema permita o login de usuários válidos, bloqueie o acesso de usuários inválidos ou bloqueados e suporte o logout.

- Login bem-sucedido com credenciais válidas
- Login bem-sucedido e logout
- Login mal-sucedido com usuário bloqueado
- Login mal-sucedido com credenciais inválidas

### 2. Gerenciamento do Carrinho de Compras

Permite ao usuário adicionar e remover produtos do carrinho, controlando os itens que deseja comprar.

- Adicionar um produto ao carrinho
- Remover um produto do carrinho

### 3. Listagem de Produtos

Permite ao usuário visualizar e ordenar a lista de produtos por preço ou nome.

- Ordenar produtos do menor para o maior preço
- Ordenar produtos do maior para o menor preço
- Ordenar produtos em ordem alfabética de A para Z
- Ordenar produtos em ordem alfabética de Z para A

### 4. Checkout

O arquivo de especificação para checkout está vazio, mas a estrutura do projeto já prevê testes para o fluxo de finalização de compra.

## Estruturas Implementadas para os Casos de Teste

- **Testes organizados por domínio:** Cada fluxo de negócio possui seus próprios arquivos de teste e page objects.
- **Reutilização de código:** Métodos e comandos são reaproveitados entre diferentes cenários, reduzindo duplicidade.
- **Separação de responsabilidades:** Dados, lógica de página, comandos e testes ficam em arquivos distintos.
- **Cobertura de fluxos positivos e negativos:** Os testes validam tanto o funcionamento esperado quanto o tratamento de erros.

## Métricas do Projeto

- **Total de arquivos de teste:** 4
- **Total de cenários Gherkin documentados:** 19
- **Cobertura de funcionalidades críticas:** Os testes automatizados cobrem todos os fluxos principais de autenticação, gerenciamento de carrinho e listagem de produtos.
- **Reutilização de Page Objects:** 100% dos testes utilizam page objects, promovendo manutenção facilitada.

## Conclusão

Este projeto demonstra uma abordagem robusta e escalável para automação de testes E2E, utilizando boas práticas de organização, clareza e manutenção. Ele serve como base para garantir a qualidade contínua da aplicação e pode ser expandido conforme novas funcionalidades forem implementadas.
