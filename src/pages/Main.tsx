import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './HomePage'
import { SignUpPage } from './user/SignUpPage'
import { SignInPage } from './user/SignInPage'

import { AuthenticatedRoute } from '../components/routes/AuthenticatedRoute'
import { PerformancesRouteComponent } from './performances/performances-routes'
import { AddPerformancePage } from './performances/add-performance-page'

export const Main = ( ): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <AuthenticatedRoute path="/performances" component={PerformancesRouteComponent} />
      <AuthenticatedRoute 
        path="/add-performance"
        component={() => ( <AddPerformancePage /> )}
      />
    </Switch>
  )
}