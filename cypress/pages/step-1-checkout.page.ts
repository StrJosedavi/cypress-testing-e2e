export class Step1CheckoutPage {

  private readonly inputFirstName = '#first-name'
  private readonly inputLastName = '#last-name'
  private readonly inputPostalCode = '#postal-code'
  private readonly buttonContinue = '//input[@value="CONTINUE"]'

  visit() {
    cy.visit('/checkout-step-one.html')
  }

  clickButtonContinue() {
    cy.xpath(this.buttonContinue).click()
  }

  // Fluxos 
  fillCheckoutInformation(firstName?: string, lastName?: string, postalCode?: string) {
    if (firstName) {
      cy.get(this.inputFirstName).clear().type(firstName)
    }

    if (lastName) {
      cy.get(this.inputLastName).clear().type(lastName)
    }

    if (postalCode) {
      cy.get(this.inputPostalCode).clear().type(postalCode)
    }
  }


  // Asserções
  assertPageStep1CheckoutIsVisible() {
    cy.get(this.inputFirstName).should('be.visible')
    cy.get(this.inputLastName).should('be.visible')
    cy.get(this.inputPostalCode).should('be.visible')
  }

  assertErrorMessageIsVisible(field: string) {
    cy.get('form h3[data-test="error"]').should('be.visible')

    if (field === 'firstName') {
      cy.get('form h3[data-test="error"]').should('have.text', 'Error: First Name is required')
    } else if (field === 'lastName') {
      cy.get('form h3[data-test="error"]').should('have.text', 'Error: Last Name is required')
    } else if (field === 'postalCode') {
      cy.get('form h3[data-test="error"]').should('have.text', 'Error: Postal Code is required')
    }
  }
}