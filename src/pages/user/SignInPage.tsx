import * as React from 'react'

import { Layout } from '../../components/UI/Layout'
import { SignInForm } from '../../components/user/SignInForm'

export const SignInPage = (): JSX.Element => {
  return (
    <Layout title="Sign In">
      <SignInForm />
    </Layout>
  )
}