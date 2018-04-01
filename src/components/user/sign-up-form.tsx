import * as React from 'react'

import { Form } from 'semantic-ui-react'

interface SignUpFormProps { }
interface SignUpFormState { 
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}
const NEW_USER_STATE: SignUpFormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
export class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
  constructor(props: SignUpFormProps) {
    super(props)

    this.state = { 
      ...NEW_USER_STATE
    }
  }

  resetForm = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    this.setState({
      ...NEW_USER_STATE
    })
  }

  onChange = (evt: React.SyntheticEvent<HTMLInputElement>, data: { name: string, value: string}) => {
    const { name, value } = data

    switch ( name ) {
      case 'firstName':
        this.setState({ firstName: value })
        return
      case 'lastName':
        this.setState({ lastName: value })
        return
      case 'email':
        this.setState({ email: value })
        return
      case 'password':
        this.setState({ password: value })
        return
      case 'confirmPassword':
        this.setState({ confirmPassword: value })
        return
      default: return
    }
  }

  get isValid(): boolean {
    const { firstName, lastName, email, password, confirmPassword } = this.state
    return firstName !== ''
      && lastName !== ''
      && email !== ''
      && password !== ''
      && confirmPassword === password
  }

  submit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    if (this.isValid) {
      console.dir(this.state)
    }
  }

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Group widths="equal">
          <Form.Input 
            name="firstName"
            label="First name"
            onChange={this.onChange}
            value={this.state.firstName}
          />
          <Form.Input 
            name="lastName"
            label="Last name"
            onChange={this.onChange}
            value={this.state.lastName}
          />
        </Form.Group>
        <Form.Input 
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          onChange={this.onChange}
          value={this.state.email}
        />
        <Form.Group widths="equal">
          <Form.Input 
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <Form.Input 
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={this.onChange}
            value={this.state.confirmPassword}
          />
        </Form.Group>
        <Form.Group>
          <Form.Button 
            color="blue" 
            disabled={!this.isValid}
            onClick={this.submit}
          >
            Sign In
          </Form.Button>
          <Form.Button basic color="blue" onClick={this.resetForm}>
            Clear
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}