import * as React from 'react'

import { Menu } from 'semantic-ui-react'

import { NavigationLinks } from './Link'
import { SignOutButton } from './SignOut'

import { makeLinks } from './utils'

interface NavigationProps {
  isAuthenticated: boolean
  signOut: () => void
}
export const NavigationComponent = (props: NavigationProps): JSX.Element => {
  const links = makeLinks(props.isAuthenticated)
  return (
    <Menu color="blue" inverted>
      <NavigationLinks links={links} />
      {props.isAuthenticated &&
        <SignOutButton signOut={props.signOut} />
      }
    </Menu>
  )
}