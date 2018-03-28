import * as React from 'react'

import { Form } from 'semantic-ui-react'

interface SignInFormProps { 
  signIn: (email: string, password: string) => void
}
interface SignInFormState { 
  email: string
  password: string
  pristine: boolean
}
const NEW_SIGNIN_STATE: SignInFormState = {
  email: '',
  password: '',
  pristine: true
}
export class SignInForm extends React.Component<SignInFormProps, SignInFormState> {
  constructor(props: SignInFormProps) {
    super(props)

    this.state = {
      ...NEW_SIGNIN_STATE
    }
  }

  get isValid(): boolean {
    const { email, password, pristine } = this.state
    return !pristine && email !== '' && password !== ''
  }

  onChange = (evt: React.SyntheticEvent<HTMLInputElement>, data: { name: string, value: string} ) => {
    const { name, value } = data
    if (name === 'email') {
      this.setState({ email: value, pristine: false })
    } else if (name === 'password') {
      this.setState({ password: value, pristine: false })
    }
  }

  resetForm = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    this.setState({
      ...NEW_SIGNIN_STATE
    })
  }

  submit = (evt: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (this.isValid) {
      const { email, password } = this.state
      this.props.signIn(email, password)
    }
  }

  render() {
    return (
      <Form>
        <Form.Input 
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <Form.Input 
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <Form.Group>
          <Form.Button 
            color="blue" 
            disabled={!this.isValid} 
            onClick={this.submit}
          >
            Sign In
          </Form.Button>
          <Form.Button basic color="blue" onClick={this.resetForm}>
            Clear Form
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}