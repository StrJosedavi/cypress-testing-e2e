export class InventoryPage {

  // Componentes da página
  private readonly menuWrap = '.bm-menu-wrap'
  private readonly menuOpenButton = '.bm-burger-button button'
  private readonly menuCloseButton = '.bm-cross-button button'
  private readonly cartButton = '#shopping_cart_container a.shopping_cart_link'
  private readonly sortSelect = '#inventory_filter_container select'
  private readonly inventoryContainer = '#inventory_container'
  private readonly inventoryList = '.inventory_list'
  private readonly inventoryItem = '.inventory_list .inventory_item'

  private readonly inventoryItemName = '.inventory_item_name'
  private readonly inventoryItemPrice = '.inventory_item_price'
  private readonly inventoryItemImg = '.inventory_item_img a img'

  private readonly addToCartButton = 'button.btn_primary.btn_inventory'
  private readonly removeButton = 'button.btn_secondary.btn_inventory'

  // Links do menu lateral
  private readonly menuAllItems = '#inventory_sidebar_link'
  private readonly menuAbout = '#about_sidebar_link'
  private readonly menuLogout = '#logout_sidebar_link'
  private readonly menuReset = '#reset_sidebar_link'

  // Detalhes do produto
  private readonly inventoryDetailsBackButton = '//button[contains(text(), "<- Back")]'
  private readonly inventoryDetailsPrice = '#inventory_item_container .inventory_details_price'
  private readonly inventoryDetailsName = '#inventory_item_container .inventory_details_name'
  
  visit() {
    cy.visit('/inventory.html')
  }

  // Ações de interação com os elementos da página
  goToCart() {
    cy.get(this.cartButton).click()
  }

  openMenu() {
    cy.get(this.menuOpenButton).click()
    cy.get(this.menuWrap).should('be.visible')
  }

  closeMenu() {
    cy.get(this.menuCloseButton).click()
    cy.get(this.menuWrap).should('not.be.visible')
  }
  
  getItems() {
    return cy.get(this.inventoryItem)
  }

  selectSort(value: 'az' | 'za' | 'lohi' | 'hilo') {
    cy.get(this.sortSelect).select(value)
  }

  getItemByIndex(index: number) {
    return cy.get(this.inventoryItem).eq(index)
  }

  clickButtonBackDetails() {
    cy.xpath(this.inventoryDetailsBackButton).click()
  }
  // Fluxos de ações
  navigateMenuAndClickLogout() {
    this.openMenu()
    cy.get(this.menuLogout).click()
  }

  addItemByIndex(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.get(this.addToCartButton).click()
    })
  }

  removeItemByIndex(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.get(this.removeButton).click()
    })
  }

  EnterPageDetails(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.get(this.inventoryItemImg).click()
    })
  }

  // Assertions
  /*
    Valida se a pagina de inventário está visível, verificando a URL e o container principal.
  */
  assertPageInventoryIsVisible() {
    cy.url().should('include', '/inventory.html')

    cy.get(this.inventoryContainer).should('be.visible')
  }

  /*
    Busca todos os itens, depois guardo em uma variável o primeiro e o último preço, removendo os espaços, o símbolo '$' e convertendo o numero para float.
    Se isSmallestToLargest for true, verifica se o primeiro preço é menor ou igual ao último (crescente).
    Se isSmallestToLargest for false, verifica se o primeiro preço é maior ou igual ao último (decrescente).
  */
  assertFilterPrice(isSmallestToLargest: boolean) {
    return cy.get(this.inventoryItemPrice).then(($prices) => {

      const first = $prices.first().text().trim()
      const last = $prices.last().text().trim()

      const firstPrice = parseFloat(first.replace('$', ''))
      const lastPrice = parseFloat(last.replace('$', ''))

      if (isSmallestToLargest) {
        expect(firstPrice).to.be.lte(lastPrice)
      } else {
        expect(firstPrice).to.be.gte(lastPrice)
      }
    })
  }

  /*
    Valida se o botão "REMOVE" está visível no container do item.
  */
  assertButtonRemoveByIndex(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.get(this.removeButton).should('be.visible').and('contain.text', 'REMOVE')
    })
  }

  /*          
    Clica no carrinho e valida se o item adicionado está presente lá.  
  */
  assertCheckCart(index: number) {

    cy.get(this.inventoryItemName).eq(index).then(($itemName) => {
      const nameItem = $itemName.text().trim()

      this.goToCart()
      // selector do nome do item no carrinho é o mesmo da página de inventário
      cy.get(this.inventoryItemName).should('contain.text', nameItem)
    })

  }

  /*
    Valida se o botão "REMOVE" não está visível no container do item.
  */
  assertButtonIsNotRemoveByIndex(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.contains(this.removeButton, 'REMOVE').should('not.exist')
    })
  }

  /*
    Converte a lista de elementos do DOM em um array de strings com os nomes dos produtos,
    cria uma cópia ordenada desse array e compara com o array original para verificar a ordem.
    Se isAscending for true, verifica se está em ordem crescente (A-Z).
    Se isAscending for false, verifica se está em ordem decrescente (Z-A).
  */
  assertFilterName(isAscending: boolean) {
    return cy.get(this.inventoryItemName).then(($names) => {
      const texts = [...$names].map(el => el.textContent?.trim() || '')

      const sorted = [...texts].sort((a, b) => a.localeCompare(b))

      if (isAscending) {
        expect(texts).to.deep.equal(sorted)
      } else {
        expect(texts).to.deep.equal(sorted.reverse())
      }
    })
  }


  /*    
    Clica na imagem do produto pelo índice, captura o nome e preço do produto,
    depois valida se os detalhes exibidos correspondem ao produto clicado.
  */
  assertDetailsOfProductByIndex(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.get(this.inventoryItemName).invoke('text').then((nameItem) => {
        cy.get(this.inventoryItemPrice).invoke('text').then((priceItem) => {

          const name = nameItem.trim()
          const price = priceItem.trim()

          cy.get(this.inventoryItemImg).click()
                  
          // cy.get(this.inventoryDetailsName)
          //   .should('be.visible')
          //   .and('have.text', name)
            
          // cy.get(this.inventoryDetailsPrice)
          //   .should('be.visible')
          //   .and('have.text', price)
        })
      })
    })
  }


}
