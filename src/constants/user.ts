export interface UserType {
  email: string
  password: string
  id: string
  firstName: string
  lastName: string
}

export class User implements UserType {
  readonly id: string
  readonly email: string
  readonly password: string
  readonly firstName: string
  readonly lastName: string

  constructor(
    args: UserType
  ) { 
    const { 
      id, email, password, firstName, lastName
    } = args
    this.id = id
    this.email = email
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullname(): string {
    return this.firstName + ' ' + this.lastName
  }

  get initials(): string {
    return this.firstName.charAt(0) + this.lastName.charAt(0)
  }
}