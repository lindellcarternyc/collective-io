import * as React from 'react'

import { List, ListItem, Header } from 'semantic-ui-react'

interface SingerListProps {
  name: string
  singers: {
    id: string
    name: string
  }[]
}
export const SingerList = (props: SingerListProps): JSX.Element => {
  return (
    <>
      <Header as="h3" content={props.name} />
      <List bulleted>
        {props.singers.map(singer => {
          return (
            <ListItem key={singer.id} content={singer.name} />
          )
        })}
      </List>
    </>
  )
}