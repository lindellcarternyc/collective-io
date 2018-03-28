import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import { PerformanceDetailsPage } from './performance-details-page'
import { UpcomingPerformances } from './upcoming-performances'

export const PerformancesRouteComponent = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/performances/:id" component={PerformanceDetailsPage} />
      <Route path="/performances" component={UpcomingPerformances}/>
    </Switch>
  )
}