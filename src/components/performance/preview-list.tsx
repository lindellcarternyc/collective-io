import * as React from 'react'
import { Link } from 'react-router-dom'

import { List } from 'semantic-ui-react'

import { PerformancePreview } from './preview'

interface PerformancePreviewListProps {
  items: {
    date: string
    startTime: string
    endTime: string
    location: string
    id: string
  }[]
}
export const PerformancePreviewList = (props: PerformancePreviewListProps): JSX.Element => {
  const { items } = props
  return (
    <List>
      {items.map(item => {
        return (
          <List.Item key={item.id}>
            <Link to={`/performances/${item.id}`}>
            <List.List>
              <PerformancePreview 
                date={item.date}
                startTime={item.startTime}
                endTime={item.endTime}
                location={item.location}
              />
            </List.List>
            </Link>
          </List.Item>
        )
      })}
    </List>
  )
}