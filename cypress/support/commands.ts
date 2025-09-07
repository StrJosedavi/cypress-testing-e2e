/// <reference types="cypress" />
import { LoginPage } from '../pages/login.page'
import { InventoryPage } from '../pages/inventory.page'
import type { UserTypes } from '../support/types/user'

const loginPage = new LoginPage()
const inventory = new InventoryPage()

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Faz login com o usuário válido (standard_user)
       * e valida se o inventário foi carregado.
       */
      loginValid(): Chainable<void>
    }
  }
}

Cypress.Commands.add('loginValid', () => {
  cy.fixture<UserTypes>('login-users').then((users) => {
    const { username, password } = users.valid

    loginPage.visit()
    loginPage.fillLoginForm(username, password)
    loginPage.clickButtonSubmit()
    inventory.assertPageInventoryIsVisible()

    cy.log('Login realizado com sucesso')
  })
})