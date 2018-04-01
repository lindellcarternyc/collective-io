import * as React from 'react'

import { List, Header } from 'semantic-ui-react'
import { SingerListItem } from './singer-list-item'

interface SingerListProps {
  name: string
  singers: {
    id: string
    name: string
    action?: () => void
  }[]
}
export const SingerList = (props: SingerListProps): JSX.Element => {
  return (
    <>
      <Header as="h3" content={props.name} />
      <List bulleted>
        {props.singers.map(singer => {
          return (
            <SingerListItem key={singer.id} {...singer} />
          )
        })}
      </List>
    </>
  )
}