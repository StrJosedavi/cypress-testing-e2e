import { InventoryPage } from '../../pages/inventory.page'

const inventory = new InventoryPage()

// Descrevendo a funcionalidade testada - Autenticação de usuário na aplicação
describe('Feature: Viewing, detailing and initializing product pre-sales', () => {

    beforeEach(() => {
        cy.loginValid()
    })

    describe('sort by price', () => {

        /*
            O caso de teste tem como objetivo validar a lista de produtos ordenadas do menor para o maior preço,
            garantindo que os produtos são exibidos corretamente conforme o critério de ordenação selecionado.
        */
        it('Scenario: View product list sorted by price low to high', () => {
            // Ordenar do menor para o maior preço
            inventory.selectSort('lohi')

            inventory.assertFilterPrice(true)
        })

        /*
            O caso de teste tem como objetivo validar a lista de produtos ordenada do maior para o menor preço,
            garantindo que os produtos são exibidos corretamente conforme o critério de ordenação selecionado.
        */
        it('Scenario: View product list sorted by price high to low', () => {
            // Ordenar do maior para o menor preço
            inventory.selectSort('hilo')

            inventory.assertFilterPrice(false)
        })
    })


    describe('sort by name', () => {
        /*
            O caso de teste tem como objetivo validar a lista de produtos ordenada em ordem alfabética crescente (A → Z),
            garantindo que os produtos são exibidos corretamente conforme o critério de ordenação selecionado.
        */
        it('Scenario: View product list sorted by name A to Z', () => {
            // Ordenar de A para Z
            inventory.selectSort('az')

            inventory.assertFilterName(true)
        })

        /*
            O caso de teste tem como objetivo validar a lista de produtos ordenada em ordem alfabética decrescente (Z → A),
            garantindo que os produtos são exibidos corretamente conforme o critério de ordenação selecionado.
        */
        it('Scenario: View product list sorted by name Z to A', () => {
            // Ordenar de Z para A
            inventory.selectSort('za')

            inventory.assertFilterName(false)
        })
    })
})