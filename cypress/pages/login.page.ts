export class LoginPage {
  private readonly inputUsername = '#user-name'
  private readonly inputPassword = '#password'
  private readonly buttonSubmit = '#login-button'
  private readonly error = '[data-test="error"]'

  visit() {
    cy.visit('/')
  }

  fillUsername(value: string) {
    cy.get(this.inputUsername).clear().type(value)
  }

  fillPassword(value: string) {
    cy.get(this.inputPassword).clear().type(value, { log: false })
  }

  clickButtonSubmit() {
    cy.get(this.buttonSubmit).click()
  }

  assertErrorMessage(text: string) {
    cy.get(this.error).should('be.visible').and('contain.text', text)
  }

  fillLoginForm(userName: string, password: string) {
    this.fillUsername(userName)
    this.fillPassword(password)
  }
}
