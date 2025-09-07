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
