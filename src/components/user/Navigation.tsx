import * as React from 'react'

import { Navigation } from '../UI/navigation/Navigation'

interface UserNavigationProps {
  isAuthenticated: boolean
  isAdmin: boolean
  signOut: () => void
}
interface UserLink {
  to: string
  title: string
}
// interface 
const makeLinks = (isAuthenticated: boolean =  false, isAdmin: boolean =  false): UserLink[] => {
  let links: UserLink[] = [
    // basic routes
    {to: '/', title: 'Home'}
  ]

  if (isAuthenticated === true) {
    links.push(
      {to: '/performances', title: 'Upcoming Performances'}
    )
    if (isAdmin === true) {
      links.push(
        {to: '/add-performance', title: 'Add Performance'}
      )
    }
  } else {
    links.push(
      {to: '/signin', title: 'Sign In'},
      {to: '/signup', title: 'Sign Up'}
    )
  }

  return links
}

const UserNavigationComponent = (props: UserNavigationProps): JSX.Element => {
  const links = makeLinks(props.isAuthenticated, props.isAdmin)
  return (
    <Navigation 
      links={links}
      isAuthenticated={props.isAuthenticated}
      signOut={props.signOut}
    />
  )
}

import { StoreState } from '../../redux/state'
import { connect } from 'react-redux'
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

import { Dispatch } from 'redux'
import { signOut } from '../../redux/auth/actions' 
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
export const UserNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNavigationComponent)