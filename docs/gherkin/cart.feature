Funcionalidade: Gerenciamento do carrinho de compras
  Como usuário da loja
  Quero adicionar e remover produtos do carrinho
  Para controlar os itens que desejo comprar

  Cenário: Adicionar um produto ao carrinho
    Dado que estou logado no sistema e visualizo a lista de produtos
    Quando adiciono um produto ao carrinho
    Então o botão do produto deve ser alterado para "REMOVE"
    E o carrinho deve indicar que há 1 item

  Cenário: Remover um produto do carrinho
    Dado que tenho um produto previamente adicionado ao carrinho
    Quando removo esse produto do carrinho
    Então o botão do produto não deve estar marcado como "REMOVE"
    E o carrinho deve indicar que está vazio
