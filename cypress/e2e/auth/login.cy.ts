import { LoginPage } from '../../pages/login.page'

const login = new LoginPage()

// Descrevendo a funcionalidade testada
describe('Feature: User authentication in the application', () => {

  let users: any

  // Definindo as funções executadas antes de cada cenário
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()

    cy.fixture('users-types').then((types) => (users = types))
    login.visit()
  })

  // Descrevendo o cenário de teste - sucesso
  it('Scenario: Successful login with valid credentials', () => {

    login.fillLoginForm(users.valid.username, users.valid.password)
    login.clickButtonSubmit()

    cy.url().should('include', '/inventory.html')
  })

  // Descrevendo o cenário de teste - falha
  it('Scenario: Unsuccessful login with user blocked', () => {

    login.fillLoginForm(users.blocked.username, users.blocked.password)
    login.clickButtonSubmit()

    // mudar para mensagem correta
    login.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  })

  // Descrevendo o cenário de teste - falha
  it('Scenario: Unsuccessful login with invalid credentials', () => {

    login.fillLoginForm(users.invalid.username, users.invalid.password)
    login.clickButtonSubmit()

    // mudar para mensagem correta
    login.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })

  // Descrevendo o cenário de teste - not loading images
  it('Scenario: Successful login with valid credentials but images not loading', () => {

    login.fillLoginForm(users.problem.username, users.problem.password)
    login.clickButtonSubmit()

    // adicionar verificação de imagens

  })

  // Descrevendo o cenário de teste - performance
  it('Scenario: Successful login performance', () => {
    
    login.fillLoginForm(users.performance.username, users.performance.password)
    login.clickButtonSubmit()

    // adicionar verificação de performance

  })


})