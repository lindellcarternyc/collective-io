import * as React from 'react'

import { Menu } from 'semantic-ui-react'

import { NavigationLinks } from './Link'
import { UserButton } from './User'
import { SignOutButton } from './SignOut'

import { makeLinks } from './utils'
import { User } from '../../constants/user'

interface NavigationProps {
  user: User | null
  signOut: () => void
}
export const NavigationComponent = (props: NavigationProps): JSX.Element => {
  const links = makeLinks(props.user !== null)
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