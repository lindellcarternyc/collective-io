import * as React from 'react'

import { Layout } from '../../components/UI/Layout'
import { SignInForm } from '../../components/user/SignInForm'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { StoreState } from '../../redux/state'
import { signIn } from '../../redux/auth/actions'

interface SignInPageProps {
  signin: (email: string, password: string) => void
}
const SignInPageComponent = (props: SignInPageProps): JSX.Element => {
  return (
    <Layout title="Sign In">
      <SignInForm signIn={props.signin} />
    </Layout>
  )
}

interface DispatchProps {
  signin: (email: string, password: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch<StoreState>): DispatchProps => {
  return {
    signin: (email: string, password: string) => {
      dispatch(signIn(email, password))
    }
  }
}

export const SignInPage = connect(
  null,
  mapDispatchToProps
)(SignInPageComponent)