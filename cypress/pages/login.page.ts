export class LoginPage {
  private readonly inputUsername = '#user-name'
  private readonly inputPassword = '#password'
  private readonly buttonSubmit = '#login-button'
  private readonly error = '[data-test="error"]'

  visit() {
    cy.visit('/')
  }

  // Ações de interação com os elementos da página
  fillUsername(value: string) {
    cy.get(this.inputUsername).clear().type(value)
  }

  fillPassword(value: string) {
    cy.get(this.inputPassword).clear().type(value, { log: false })
  }

  clickButtonSubmit() {
    cy.get(this.buttonSubmit).click()
  }

  // Fluxos de ações
  fillLoginForm(userName: string, password: string) {
    this.fillUsername(userName)
    this.fillPassword(password)
  }

  // Asserções
  assertErrorMessage(text: string) {
    cy.get(this.error).should('be.visible').and('contain.text', text)
  }

  assertPageLoginIsVisible() {
    cy.get(this.inputUsername).should('be.visible')
    cy.get(this.inputPassword).should('be.visible')
    cy.get(this.buttonSubmit).should('be.visible')
  }
}
