import * as React from 'react'

import { Layout } from '../../components/layout'
import { SignUpForm } from '../../components/user/sign-up-form'

export const SignUpPage = (): JSX.Element => {
  return (
    <Layout title="Sign Up">
      <SignUpForm />
    </Layout>
  )
}