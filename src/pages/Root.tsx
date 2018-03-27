import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './HomePage'
import { SignUpPage } from './user/SignUpPage'
import { SignInPage } from './user/SignInPage'
import { UpcomingPerformances } from './performances/upcoming-performances'
import { PerformanceDetailsPage } from './performances/performance-details-page'
import { AddPerformancePage } from './performances/add-performance-page'

export const Root = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <Route exact path="/add-performance" component={AddPerformancePage} />
      <Route exact path="/performances" component={UpcomingPerformances} />
      <Route path="/performances/:id" component={PerformanceDetailsPage} />
    </Switch>
  )
}