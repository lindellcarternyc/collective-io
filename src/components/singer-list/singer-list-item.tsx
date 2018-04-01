import * as React from 'react'

import { ListItem } from 'semantic-ui-react'

import { SingerListItemIcon } from './singer-list-item-icon'

interface SingerListItemProps {
  name: string
  action?: () => void
}
export const SingerListItem = (props: SingerListItemProps): JSX.Element => {
  return (
    <ListItem>
      {props.name} {props.action !== undefined &&
        <SingerListItemIcon onClick={props.action}/>
      }
    </ListItem>
  )
}