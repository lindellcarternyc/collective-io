import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Redirect } from 'react-router-dom'

import { StoreState } from '../../redux/state'
import { signIn } from '../../redux/auth/actions'

import { Layout } from '../../components/Layout'
import { SignInForm } from '../../components/user/SignInForm'

import { UserType } from '../../constants/user'

interface SignInPageProps {
  signin: (email: string, password: string) => void
  user: UserType | null
}
const SignInPageComponent = (props: SignInPageProps): JSX.Element => {
  return (
    props.user !== null
    ? <Redirect to="/" />
    : (
      <Layout title="Sign In">
        <SignInForm signIn={props.signin} />
      </Layout>
    )
  )
}

interface StateProps {
  user: UserType | null
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    user: state.auth.user
  }
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
  mapStateToProps,
  mapDispatchToProps
)(SignInPageComponent)