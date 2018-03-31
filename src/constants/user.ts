export interface UserType {
  email: string
  password: string
  id: string
  firstName: string
  lastName: string
  isAdmin?: true
}

export class User implements UserType {
  readonly id: string
  readonly email: string
  readonly password: string
  readonly firstName: string
  readonly lastName: string
  readonly isAdmin?: true

  constructor(
    args: UserType
  ) { 
    const { 
      id, email, password, firstName, lastName, isAdmin
    } = args
    this.id = id
    this.email = email
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.isAdmin = isAdmin
  }

  get fullname(): string {
    return this.firstName + ' ' + this.lastName
  }

  get initials(): string {
    return this.firstName.charAt(0) + this.lastName.charAt(0)
  }
}