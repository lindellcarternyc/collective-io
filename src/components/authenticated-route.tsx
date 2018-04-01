import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { StoreState } from '../redux/state'

interface AuthenticatedRouteProps {
  isAuthenticated: boolean
  path: string
  component: () => JSX.Element
}
const AuthenticatedRouteComponent = (props: AuthenticatedRouteProps): JSX.Element => {
  return (
    props.isAuthenticated
    ? <Route path={props.path} component={props.component} />
    : <Redirect to="/signin" />
  )
}

interface StateProps {
  isAuthenticated: boolean
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    isAuthenticated: state.auth.user !== null
  }
}

export const AuthenticatedRoute = connect(
  mapStateToProps
)(AuthenticatedRouteComponent)