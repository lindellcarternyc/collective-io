import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './HomePage'
import { SignUpPage } from './user/SignUpPage'
import { SignInPage } from './user/SignInPage'
import { PerformancesRoutes } from './auth/performances'

export const Main = ( ): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/performances" component={PerformancesRoutes} />
    </Switch>
  )
}