Funcionalidade: Seleção de produto e finalização de pedido
  Como usuário da loja
  Quero selecionar um produto e concluir a compra
  Para finalizar meu pedido com segurança

  Contexto:
    Dado que estou logado no sistema
    E possuo ao menos um produto adicionado ao carrinho
    E estou na etapa 1 do checkout

  Cenário: Acessar a etapa 1 do checkout após adicionar produto ao carrinho
    Quando acesso a página de checkout
    Então devo visualizar a etapa "Checkout: Your Information"

  Cenário: Finalizar compra com dados válidos
    Quando preencho o formulário do checkout com "Jose", "Silva" e "12345"
    E prossigo para a próxima etapa do checkout
    E finalizo o pedido
    Então devo visualizar a página de confirmação da compra

  Cenário: Impedir avanço sem preencher campos obrigatórios (first name)
    Quando tento prosseguir sem preencher o formulário do checkout
    Então devo ver a mensagem de erro referente ao campo "firstName"

  Cenário: Impedir avanço sem preencher campos obrigatórios (last name)
    Dado que preenchi apenas o campo "firstName" com "Jose"
    Quando tento prosseguir para a próxima etapa
    Então devo ver a mensagem de erro referente ao campo "lastName"

  Cenário: Impedir avanço sem preencher campos obrigatórios (postal code)
    Dado que preenchi "firstName" com "Jose" e "lastName" com "Silva"
    Quando tento prosseguir para a próxima etapa
    Então devo ver a mensagem de erro referente ao campo "postalCode"

  Cenário: Validar subtotal, imposto e total na etapa de resumo (step 2)
    Dado que avancei para a etapa de resumo do checkout
    Quando valido os valores de Subtotal e Tax
    Então o valor Total deve corresponder à soma entre Subtotal e Tax

  Cenário: Cancelar o checkout a partir da etapa de resumo
    Dado que avancei para a etapa de resumo do checkout
    Quando cancelo o checkout
    Então devo ser redirecionado para a listagem de produtos
