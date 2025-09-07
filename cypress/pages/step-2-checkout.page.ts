export class Step2CheckoutPage {

    private readonly ButtonFinish = "//a[contains(text(),'FINISH')]"
    private readonly ButtonCancel = "//a[contains(text(),'CANCEL')]"

    private readonly SubtotalLabel = '.summary_subtotal_label'
    private readonly TaxLabel = '.summary_tax_label'
    private readonly TotalLabel = '.summary_total_label'

    visit() {
        cy.visit('/checkout-step-two.html')
    }

    clickButtonFinish() {
      cy.xpath(this.ButtonFinish).click()
    }

    clickButtonCancel() {
      cy.xpath(this.ButtonCancel).click()
    }
    // Fluxos 
    

    // Asserções
    assertSubtotal(value: string) {
        cy.get(this.TotalLabel).should('contain.text', value)
    }
    
    assertSumTaxAndSubtotalForCheckTotal() {

        let subtotalText: string;
        let taxText: string;
        let resultSum: string;

        let expectTotalText: string;

        cy.get(this.SubtotalLabel).then(($subtotal) => {
            subtotalText = $subtotal.text().replace('Item total: $', '');

            cy.get(this.TaxLabel).then(($tax) => {
                taxText = $tax.text().replace('Tax: $', '');
                resultSum = (parseFloat(subtotalText) + parseFloat(taxText)).toFixed(2);
                
                cy.log('Soma do Subtotal + Tax: ' + resultSum);

                cy.get(this.TotalLabel).then(($total) => {
                    expectTotalText = $total.text().replace('Total: $', '');
                    expect(expectTotalText).to.equal(resultSum);
                })
            })
        })
    }
}