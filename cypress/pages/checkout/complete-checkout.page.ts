export class CompleteCheckoutPage {

    private readonly containerComplete = '#checkout_complete_container'
    private readonly completeHeader = '#checkout_complete_container h2'

    // Asserções
    assertPageCompleteCheckoutIsVisible() {
      cy.get(this.containerComplete).should('be.visible')
      cy.get(this.completeHeader).should('have.text', 'THANK YOU FOR YOUR ORDER')
    }
}