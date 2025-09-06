import { LoginPage } from '../../pages/login.page'
import { InventoryPage } from '../../pages/inventory.page'
import { log } from 'console'

const login = new LoginPage()
const inventory = new InventoryPage()

// Descrevendo a funcionalidade testada - Autenticação de usuário na aplicação
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

    // preenchendo o formulário de login
    login.fillLoginForm(users.valid.username, users.valid.password)
    login.clickButtonSubmit()

    // Validando se o navegador foi redirecionado para a página inventory
    inventory.assertPageInventoryIsVisible()
  })

  // Descrevendo o cenário de teste - logout
  it('Scenario: Successful login and logout', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.valid.username, users.valid.password)
    login.clickButtonSubmit()

    // Realizando logout
    inventory.navigateMenuAndClickLogout()

    // Validando se o navegador foi redirecionado para a página de login
    login.assertPageLoginIsVisible()
  })

  // Descrevendo o cenário de teste - falha
  it('Scenario: Unsuccessful login with user blocked', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.blocked.username, users.blocked.password)
    login.clickButtonSubmit()

    // Validando se a mensagem de erro foi aprsentada
    login.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  })

  // Descrevendo o cenário de teste - falha
  it('Scenario: Unsuccessful login with invalid credentials', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.invalid.username, users.invalid.password)
    login.clickButtonSubmit()

    // Validando se a mensagem de erro foi aprsentada
    login.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })
})