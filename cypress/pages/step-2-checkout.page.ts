export class Step2CheckoutPage {

    private readonly ButtonFinish = "//a[contains(text(),'FINISH')]"

    visit() {
        cy.visit('/checkout-step-two.html')
    }

    clickButtonFinish() {
      cy.xpath(this.ButtonFinish).click()
    }

    // Fluxos 
    

    // Asserções
}