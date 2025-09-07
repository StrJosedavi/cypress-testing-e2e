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

        inventory.addItemByIndex(0)
        inventory.goToCart()
        cart.proceedToCheckout()
    })

    describe('checkout step one', () => {
        /*
            O caso de teste tem como objetivo validar o fluxo de compra, desde a adição do produto ao carrinho
            até onde o usuário consegue avançar para a página de checkout.
        */
        it('Scenario: Add product to cart and advance to checkout', () => {
            step1Checkout.assertPageStep1CheckoutIsVisible()
        })

        /*
            O caso de teste tem como objetivo validar o fluxo de compra, desde a adição do produto ao carrinho
            até a finalização da compra, garantindo que o usuário consiga avançar para a página de checkout e finalizar o pedido.
        */
        it('Scenario: Add product to cart and advance to checkout', () => {
            step1Checkout.fillCheckoutInformation('Jose', 'Silva', '12345')
            step1Checkout.clickButtonContinue()
            step2Checkout.clickButtonFinish()

            completeCheckoutPage.assertPageCompleteCheckoutIsVisible()
        })

        /*
            O caso de teste tem como objetivo validar as validações do formulário de checkout na etapa 1,
            garantindo que o usuário receba mensagens de erro apropriadas ao tentar avançar sem preencher os campos obrigatórios.
        */
        it('Scenario: Add product to cart and advance to checkout and not fill the fields of step one', () => {
            step1Checkout.clickButtonContinue()
            step1Checkout.assertErrorMessageIsVisible('firstName')

            step1Checkout.fillCheckoutInformation('Jose')
            step1Checkout.clickButtonContinue()
            step1Checkout.assertErrorMessageIsVisible('lastName')

            step1Checkout.fillCheckoutInformation('Jose', 'Silva')
            step1Checkout.clickButtonContinue()
            step1Checkout.assertErrorMessageIsVisible('postalCode')
        })
    })
    describe('checkout step two', () => {
        /*
            O caso de teste tem como objetivo validar o fluxo de compra, desde a adição do produto ao carrinho
            até onde o usuário consegue avançar para a página de checkout.
        */
        it('Scenario: Add product to cart and advance to step final for check information values products', () => {
            step1Checkout.fillCheckoutInformation('Jose', 'Silva', '12345')
            step1Checkout.clickButtonContinue()
            step2Checkout.assertSumTaxAndSubtotalForCheckTotal()
        })

        /*
            O caso de teste tem como objetivo validar o fluxo de compra, desde a adição do produto ao carrinho
            até onde o usuário consegue avançar para a pagina de resumo do checkout e cancelar a compra.
        */
        it('Scenario: Add product to cart and advance to step final and cancel checkout', () => {
            step1Checkout.fillCheckoutInformation('Jose', 'Silva', '12345')
            step1Checkout.clickButtonContinue()
            step2Checkout.clickButtonCancel()

            inventory.assertPageInventoryIsVisible()
        })

    })

})