Funcionalidade: Listagem de produtos
  Como usuário da loja
  Quero visualizar a lista de produtos por preço ou nome
  Para selecionar os itens conforme o critério selecionado

  Cenário: Ordenar produtos do menor para o maior preço
    Dado que estou logado no sistema e visualizo a lista de produtos
    Quando seleciono a ordenação por preço do menor para o maior
    Então os produtos devem ser exibidos em ordem crescente de preço

  Cenário: Ordenar produtos do maior para o menor preço
    Dado que estou logado no sistema e visualizo a lista de produtos
    Quando seleciono a ordenação por preço do maior para o menor
    Então os produtos devem ser exibidos em ordem decrescente de preço

  Cenário: Ordenar produtos em ordem alfabética de A para Z
    Dado que estou logado no sistema e visualizo a lista de produtos
    Quando seleciono a ordenação por nome de A para Z
    Então os produtos devem ser exibidos em ordem alfabética crescente

  Cenário: Ordenar produtos em ordem alfabética de Z para A
    Dado que estou logado no sistema e visualizo a lista de produtos
    Quando seleciono a ordenação por nome de Z para A
    Então os produtos devem ser exibidos em ordem alfabética decrescente

 Cenário: Visualizar detalhes de um produto ao clicar na imagem
    Dado que estou logado e visualizo a lista de produtos
    Quando clico na imagem de um produto
    Então devo ser direcionado para a página de detalhes
    E o nome e o preço do produto devem ser exibidos corretamente

  Cenário: Retornar para a lista de produtos a partir da página de detalhes
    Dado que estou na página de detalhes de um produto
    Quando clico no botão "Back"
    Então devo ser redirecionado para a lista de produtos