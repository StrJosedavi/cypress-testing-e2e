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
    fillCheckoutInformation(firstName: string = '', lastName: string = '', postalCode: string = '') {
      cy.get(this.inputFirstName).type(firstName)
      cy.get(this.inputLastName).type(lastName)
      cy.get(this.inputPostalCode).type(postalCode)
    }

    // Asserções
    assertPageStep1CheckoutIsVisible() {
      cy.get(this.inputFirstName).should('be.visible')
      cy.get(this.inputLastName).should('be.visible')
      cy.get(this.inputPostalCode).should('be.visible')
    }
}