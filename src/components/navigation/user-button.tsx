import * as React from 'react'

import { MenuItem, Button } from 'semantic-ui-react'

import { User } from '../../constants/user'

interface UserButtonProps {
  user: User
}
export const UserButton = (props: UserButtonProps): JSX.Element => {
  return (
    <MenuItem>
      <Button content={props.user.initials} circular/>
    </MenuItem>
  )
}