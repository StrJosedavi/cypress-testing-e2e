export class LoginPage {
  private readonly email = '#email'
  private readonly password = '#password'
  private readonly submit = 'button[type="submit"]'
  private readonly error = '[data-test="login-error"]'

  visit() {
    cy.visit('/login')
  }

  fillEmail(value: string) {
    cy.get(this.email).clear().type(value)
  }

  fillPassword(value: string) {
    cy.get(this.password).clear().type(value, { log: false })
  }

  submitForm() {
    cy.get(this.submit).click()
  }

  assertErrorMessage(text: string) {
    cy.get(this.error).should('be.visible').and('contain.text', text)
  }
}
