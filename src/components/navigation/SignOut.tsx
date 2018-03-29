import * as React from 'react'

import { MenuMenu, MenuItem } from 'semantic-ui-react'

interface SignOutButtonProps {
  signOut: () => void
}
export const SignOutButton = (props: SignOutButtonProps): JSX.Element => (
  <MenuMenu position="right">
    <MenuItem content="Sign Out" onClick={props.signOut} />
  </MenuMenu>
)