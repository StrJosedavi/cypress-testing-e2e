// Page Object para a página de inventário (lista de produtos)
export class InventoryPage {
  // ==== Seletor raiz / containers ====
  private readonly menuOverlay = '.bm-overlay'
  private readonly menuWrap = '.bm-menu-wrap'
  private readonly burgerBtn = '.bm-burger-button button' // botão "Open Menu"
  private readonly menuCloseBtn = '.bm-cross-button button' // botão "Close Menu"
  private readonly cartLink = '#shopping_cart_container a.shopping_cart_link'
  private readonly sortSelect = 'select.product_sort_container'
  private readonly inventoryList = '.inventory_list'
  private readonly inventoryItem = '.inventory_list .inventory_item'
  private readonly addToCartBtn = '.btn_primary.btn_inventory'

  // Links do menu lateral
  private readonly menuAllItems = '#inventory_sidebar_link'
  private readonly menuAbout = '#about_sidebar_link'
  private readonly menuLogout = '#logout_sidebar_link'
  private readonly menuReset = '#reset_sidebar_link'

  // ==== Ações de navegação ====
  visit() {
    cy.visit('/inventory.html') // ajuste se sua rota base for diferente
  }

  goToCart() {
    cy.get(this.cartLink).click()
  }

  // ==== Menu lateral (hamburger) ====
  openMenu() {
    cy.get(this.burgerBtn).click()
    cy.get(this.menuWrap).should('be.visible')
  }

  closeMenu() {
    cy.get(this.menuCloseBtn).click()
    cy.get(this.menuWrap).should('not.be.visible')
  }

  navigateMenuAllItems() {
    this.openMenu()
    cy.get(this.menuAllItems).click()
  }

  navigateMenuAbout() {
    this.openMenu()
    cy.get(this.menuAbout).invoke('removeAttr', 'target').click() // evitar nova aba
  }

  navigateMenuLogout() {
    this.openMenu()
    cy.get(this.menuLogout).click()
  }

  resetAppState() {
    this.openMenu()
    cy.get(this.menuReset).click()
  }

  // ==== Ordenação (sort) ====
  /** values: az | za | lohi | hilo */
  selectSort(value: 'az' | 'za' | 'lohi' | 'hilo') {
    cy.get(this.sortSelect).select(value)
  }

  // ==== Lista de produtos ====
  /** Retorna todos os cards de produto */
  getItems() {
    return cy.get(this.inventoryItem)
  }

  /** Retorna o card de produto pelo índice na lista (0-based) */
  getItemByIndex(index: number) {
    return cy.get(this.inventoryItem).eq(index)
  }

  /** Clica em "ADD TO CART" do item pelo índice */
  addItemByIndex(index: number) {
    this.getItemByIndex(index).within(() => {
      cy.get(this.addToCartBtn).click()
    })
  }

  /** Clica em "ADD TO CART" do item pelo nome exibido (div.inventory_item_name) */
  addItemByName(name: string) {
    cy.get(this.inventoryList)
      .contains('.inventory_item_name', name)
      .parents('.inventory_item')
      .within(() => {
        cy.get(this.addToCartBtn).click()
      })
  }

  /** Abre a página de detalhes do item pelo nome (clica no link do título) */
  openItemDetailsByName(name: string) {
    cy.get(this.inventoryList)
      .contains('.inventory_item_name', name)
      .parents('.inventory_item_label')
      .find('a[id$="_title_link"]') // ex.: #item_4_title_link
      .click()
  }

  /** Valida o preço de um item pelo nome */
  assertPriceByName(name: string, expected: string | number) {
    const expectedStr = String(expected)
    cy.get(this.inventoryList)
      .contains('.inventory_item_name', name)
      .parents('.inventory_item')
      .find('.inventory_item_price')
      .should('contain.text', expectedStr)
  }

  /** Valida que ao menos uma imagem carregou corretamente */
  assertAtLeastOneImageLoaded() {
    cy.get('img.inventory_item_img').should('have.length.greaterThan', 0)
    cy.get('img.inventory_item_img')
      .first()
      .should(($img) => {
        const el = $img[0] as HTMLImageElement
        expect(el.naturalWidth, 'imagem carregada').to.be.greaterThan(0)
      })
  }
}
