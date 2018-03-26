import * as React from 'react'

import { List, ListItem } from 'semantic-ui-react'

interface SingerListProps {
  singerNames: string[]
}
export const SingerList = (props: SingerListProps): JSX.Element => {
  return (
    <List>
      {props.singerNames.map(name => {
        return (
          <ListItem key={name} content={name} />
        )
      })}
    </List>
  )
}