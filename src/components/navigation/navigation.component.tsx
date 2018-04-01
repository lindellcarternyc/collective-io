import * as React from 'react'

import { Menu } from 'semantic-ui-react'

import { NavigationLinks } from './link'
import { UserButton } from './user-button'
import { SignOutButton } from './sign-out-button'

import { makeLinks } from './utils'
import { User } from '../../constants/user'

interface NavigationProps {
  user: User | null
  signOut: () => void
}
export const NavigationComponent = (props: NavigationProps): JSX.Element => {
  const isAuthenticated = props.user !== null 
  const isAdmin = props.user !== null && props.user.isAdmin === true
  const links = makeLinks(isAuthenticated, isAdmin)
  return (
    <Menu color="blue" inverted>
      <NavigationLinks links={links} />
      {props.user !== null &&
        <Menu.Menu position="right">
          <UserButton user={props.user}/>
          <SignOutButton signOut={props.signOut} />
        </Menu.Menu>
      }
    </Menu>
  )
}