Funcionalidade: Autenticação de Usuário
  O sistema deve permitir que usuários válidos façam login,
  impedir o acesso de usuários bloqueados ou inválidos,
  e suportar o processo de logout.

  Cenário: Login bem-sucedido com credenciais válidas
    Dado que estou na página de login
    Quando preencho o formulário com um usuário e senha válidos
    E envio o formulário
    Então devo ser redirecionado para a página de inventário

  Cenário: Login bem-sucedido e logout
    Dado que estou logado com um usuário e senha válidos
    Quando abro o menu lateral
    E clico na opção de logout
    Então devo ser redirecionado para a página de login

  Cenário: Login mal-sucedido com usuário bloqueado
    Dado que estou na página de login
    Quando preencho o formulário com um usuário bloqueado e senha
    E envio o formulário
    Então devo ver a mensagem de erro "Epic sadface: Sorry, this user has been locked out."

  Cenário: Login mal-sucedido com credenciais inválidas
    Dado que estou na página de login
    Quando preencho o formulário com um usuário e senha inválidos
    E envio o formulário
    Então devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
