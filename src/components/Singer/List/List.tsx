import * as React from 'react'

import { List, ListItem, Header } from 'semantic-ui-react'

interface SingerListProps {
  listName?: string
  singerNames: string[]
}
export const SingerList = (props: SingerListProps): JSX.Element => {
  return (
    <>
      {props.listName !== undefined && 
        <Header as="h3" content={props.listName} />
      }
      <List bulleted>
        {props.singerNames.map(name => {
          return (
            <ListItem key={name} content={name} />
          )
        })}
      </List>
    </>
  )
}