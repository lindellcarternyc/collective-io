import * as React from 'react'

import { Layout } from '../../components/UI/Layout'
import { SignUpForm } from '../../components/user/SignUpForm'

export const SignUpPage = (): JSX.Element => {
  return (
    <Layout title="Sign Up">
      <SignUpForm />
    </Layout>
  )
}