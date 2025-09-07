// Page Object para a página de Carrinho (Your Cart)
export class CartPage {
  // ==== Header / containers ====
  private readonly cartTitle = '.subheader' // "Your Cart"
  private readonly cartContainer = '#cart_contents_container'
  private readonly cartList = '.cart_list'
  private readonly qtyLabel = '.cart_quantity_label'
  private readonly descLabel = '.cart_desc_label'

  // ==== Footer actions ====
  private readonly continueShoppingBtn = 'a.btn_secondary[href="./inventory.html"]'
  private readonly checkoutBtn = 'a.btn_action.checkout_button[href="./checkout-step-one.html"]'

  // ==== Menu lateral / header (mesmo padrão do inventário) ====
  private readonly burgerBtn = '.bm-burger-button button'
  private readonly menuWrap = '.bm-menu-wrap'
  private readonly menuCloseBtn = '.bm-cross-button button'
  private readonly menuAllItems = '#inventory_sidebar_link'
  private readonly menuAbout = '#about_sidebar_link'
  private readonly menuLogout = '#logout_sidebar_link'
  private readonly menuReset = '#reset_sidebar_link'
  private readonly cartIconLink = '#shopping_cart_container a.shopping_cart_link'

  private readonly labelNameItem = '.inventory_item_name'
  // ==== Navegação ====
  visit() {
    cy.visit('/cart.html')
  }

  proceedToCheckout() {
    cy.get(this.checkoutBtn).click()
    cy.url().should('include', '/checkout-step-one.html')
  }

  goToCart() {
    cy.get(this.cartIconLink).click()
    cy.url().should('include', '/cart.html')
  }

  // ==== Menu lateral ====
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
    cy.get(this.menuAbout).invoke('removeAttr', 'target').click()
  }

  navigateMenuLogout() {
    this.openMenu()
    cy.get(this.menuLogout).click()
  }

  resetAppState() {
    this.openMenu()
    cy.get(this.menuReset).click()
  }

  // ==== Ações do carrinho ====
  continueShopping() {
    cy.get(this.continueShoppingBtn).click()
    cy.url().should('include', '/inventory.html')
  }

  // ==== Leitura/validações ====
  assertOnCartPage() {
    cy.get(this.cartTitle).should('contain.text', 'Your Cart')
    cy.get(this.cartContainer).should('be.visible')
  }

  /** Valida labels do grid (QTY e DESCRIPTION) */
  assertGridHeaders() {
    cy.get(this.qtyLabel).should('contain.text', 'QTY')
    cy.get(this.descLabel).should('contain.text', 'DESCRIPTION')
  }  
}
