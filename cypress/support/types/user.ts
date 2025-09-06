export type User = 
{
    username: string
    password: string
}

export type UserTypes = {
  valid: User
  invalid: User
  blocked: User
  problem: User
  performance: User
}