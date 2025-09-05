import { LoginPage } from '../pages/example.cy'

const login = new LoginPage()

describe('Login', () => {
  it('deve exibir erro com credenciais inválidas', () => {
    login.visit()
    login.fillEmail('fake@exemplo.com')
    login.fillPassword('senha-errada')
    login.submitForm()
    login.assertErrorMessage('Credenciais inválidas')
  })
})
