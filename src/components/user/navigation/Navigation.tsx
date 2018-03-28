import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Navigation } from '../../UI/navigation/Navigation'
import { makeLinks } from './link'

import { StoreState } from '../../../redux/state'
import { signOut } from '../../../redux/auth/actions'

interface UserNavigationProps extends RouteComponentProps<{}> {
  isAuthenticated: boolean
  isAdmin: boolean
  signOut: () => void
}
const UserNavigationComponent = (props: UserNavigationProps): JSX.Element => {
  const links = makeLinks(props.isAuthenticated, props.isAdmin)
  return (
    <Navigation 
      links={links}
      isAuthenticated={props.isAuthenticated}
      signOut={() => {
        props.signOut()
        props.history.push('/')
      }}
    />
  )
}

interface StateProps {
  isAuthenticated: boolean
  isAdmin: boolean
}
const mapStateToProps = (state: StoreState): StateProps => {
  const { auth } = state
  return {
    isAuthenticated: auth.user !== null,
    isAdmin: false
  }
}

interface DispatchProps {
  signOut: () => void
}
const mapDispatchToProps = (dispatch: Dispatch<StoreState>): DispatchProps => {
  return {
    signOut: () => {
      dispatch(signOut())
    }
  }
}

export const UserNavigation = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserNavigationComponent)
)