import { InventoryPage } from '../../pages/inventory/inventory.page'
import { CartPage } from '../../pages/cart/cart.page'
import { Step1CheckoutPage } from '../../pages/checkout/step-1-checkout.page'

const inventory = new InventoryPage()
const cart = new CartPage()
const step1Checkout = new Step1CheckoutPage()

describe('Feature: Shopping cart management', () => {

    beforeEach(() => {
        cy.loginValid()
    })

    /*
        O caso de teste tem como objetivo validar a adição de um produto ao carrinho de compras,
        garantindo que o produto selecionado é adicionado corretamente ao carrinho.
    */
    it('Scenario: Add product to cart', () => {   
        inventory.addItemByIndex(0)
        
        inventory.assertButtonRemoveByIndex(0)
        inventory.assertCheckCart(0)
    })

    /*
        O caso de teste tem como objetivo validar a remoção de um produto ao carrinho de compras,
        garantindo que o produto selecionado é removido corretamente do carrinho.
    */
    it('Scenario: Remove product to cart', () => {   
        inventory.addItemByIndex(0)
        inventory.removeItemByIndex(0)

        inventory.assertButtonIsNotRemoveByIndex(0)
    })
})