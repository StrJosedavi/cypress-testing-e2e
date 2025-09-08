import { LoginPage } from '../../pages/auth/login.page'
import { InventoryPage } from '../../pages/inventory/inventory.page'
import type { UserTypes } from '../../support/types/user'

const login = new LoginPage()
const inventory = new InventoryPage()

/*
  Feature (funcionalidade) que está sendo testada - Autenticação de usuário na aplicação.
*/
describe('Feature: User authentication in the application', () => {

  let users: UserTypes

  // Definindo as funções executadas antes de cada cenário
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()

    cy.fixture<UserTypes>('login-users').then((types) => {
      users = types
    })

    login.visit()
  })

  /*
    O caso de teste tem como objetivo validar o login de um usuário com credenciais válidas,
    garantindo assim que o sistema autentica corretamente e redireciona para a página de inventário.
  */
  it('Scenario: Successful login with valid credentials', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.valid.username, users.valid.password)
    login.clickButtonSubmit()

    // Validando se o navegador foi redirecionado para a página inventory
    inventory.assertPageInventoryIsVisible()
  })

  /*
    O caso de teste tem como objetivo validar o login de um usuário com credenciais válidas,
    em seguida realizar o logout, garantindo que o sistema encerra a sessão corretamente
  */
  it('Scenario: Successful login and logout', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.valid.username, users.valid.password)
    login.clickButtonSubmit()

    // Realizando logout
    inventory.navigateMenuAndClickLogout()

    // Validando se o navegador foi redirecionado para a página de login
    login.assertPageLoginIsVisible()
  })

  /*
    O caso de teste tem como objetivo validar o login de um usuário com credenciais de um usuário bloqueado,
    garantindo assim que o sistema apresenta a mensagem de erro apropriada.
  */
  it('Scenario: Unsuccessful login with user blocked', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.blocked.username, users.blocked.password)
    login.clickButtonSubmit()

    // Validando se a mensagem de erro foi aprsentada
    login.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.')
  })

  /*
    O caso de teste tem como objetivo validar o login de um usuário com credenciais inválidas,
    garantindo assim que o sistema apresenta a mensagem de erro apropriada.
  */
  it('Scenario: Unsuccessful login with invalid credentials', () => {

    // preenchendo o formulário de login
    login.fillLoginForm(users.invalid.username, users.invalid.password)
    login.clickButtonSubmit()

    // Validando se a mensagem de erro foi aprsentada
    login.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')
  })
})