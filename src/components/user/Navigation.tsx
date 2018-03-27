import * as React from 'react'

import { Navigation } from '../UI/navigation/Navigation'

interface UserNavigationProps {
  isAuthenticated: boolean
  isAdmin: boolean
}

interface UserLink {
  to: string
  title: string
}
const makeLinks = (args: UserNavigationProps = {isAuthenticated: false, isAdmin: false}): UserLink[] => {
  let links: UserLink[] = [
    // basic routes
    {to: '/', title: 'Home'}
  ]

  if (args.isAuthenticated === true) {
    links.push(
      {to: '/performances', title: 'Upcoming Performances'}
    )
    if (args.isAdmin === true) {
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

export const UserNavigation = (props: UserNavigationProps): JSX.Element => {
  const links = makeLinks(props)
  return (
    <Navigation links={links} logout={props.isAuthenticated} />
  )
}