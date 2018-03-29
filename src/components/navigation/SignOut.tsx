import * as React from 'react'

import { MenuItem } from 'semantic-ui-react'

interface SignOutButtonProps {
  signOut: () => void
}
export const SignOutButton = (props: SignOutButtonProps): JSX.Element => (
    <MenuItem content="Sign Out" onClick={props.signOut} />
)