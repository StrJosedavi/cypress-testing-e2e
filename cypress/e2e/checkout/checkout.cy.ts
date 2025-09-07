import { InventoryPage } from '../../pages/inventory.page'
import { CartPage } from '../../pages/cart.page'
import { Step1CheckoutPage } from '../../pages/step-1-checkout.page'
import { Step2CheckoutPage } from '../../pages/step-2-checkout.page'
import { CompleteCheckoutPage } from '../../pages/complete-checkout.page'

const inventory = new InventoryPage()
const cart = new CartPage()
const step1Checkout = new Step1CheckoutPage()
const step2Checkout = new Step2CheckoutPage()
const completeCheckoutPage = new CompleteCheckoutPage()

describe('Feature: Product selection and order completion', () => {
    beforeEach(() => {
        cy.loginValid()
    })

    /*
        O caso de teste tem como objetivo validar o fluxo de compra, desde a adição do produto ao carrinho
        até onde o usuário consegue avançar para a página de checkout.
    */
    it('Scenario: Add product to cart and advance to checkout', () => {   
        inventory.addItemByIndex(0)
        inventory.goToCart()
        cart.proceedToCheckout()

        step1Checkout.assertPageStep1CheckoutIsVisible()
    })

    /*
        O caso de teste tem como objetivo validar o fluxo de compra, desde a adição do produto ao carrinho
        até a finalização da compra, garantindo que o usuário consiga avançar para a página de checkout e finalizar o pedido.
    */
    it('Scenario: Add product to cart and advance to checkout', () => {   
        inventory.addItemByIndex(0)
        inventory.goToCart()
        cart.proceedToCheckout()

        step1Checkout.fillCheckoutInformation('Jose', 'Silva', '12345')
        step1Checkout.clickButtonContinue()
        step2Checkout.clickButtonFinish()

        completeCheckoutPage.assertPageCompleteCheckoutIsVisible()
    })
})