import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { StoreState } from '../../redux/state'
import { signOut } from '../../redux/auth/actions'

import { NavigationComponent } from './NavigationComponent'

interface StateProps {
  isAuthenticated: boolean
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    isAuthenticated: state.auth.user !== null
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

interface NavigationProps extends StateProps, DispatchProps, RouteComponentProps<{}> { }
export const Navigation = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )((props: NavigationProps) => {
    return (
      <NavigationComponent 
        isAuthenticated={props.isAuthenticated}
        signOut={() => {
          props.signOut()
          props.history.push('/')
        }}
      />
    )
  })
)