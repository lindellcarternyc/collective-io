import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { List } from 'semantic-ui-react'

import { PerformancePreview } from './preview'
import { ViewPreviewButton } from './view-preview-button'

interface PerformancePreviewListProps extends RouteComponentProps<{}> {
  items: {
    date: string
    startTime: string
    endTime: string
    location: string
    id: string
  }[]
}
export const PerformancePreviewListComponent = (props: PerformancePreviewListProps): JSX.Element => {
  const { items } = props
  return (
    <List>
      {items.map(item => {
        return (
          <List.Item key={item.id}>
            <List.List>
              <PerformancePreview 
                date={item.date}
                startTime={item.startTime}
                endTime={item.endTime}
                location={item.location}
              />
            </List.List>
            <ViewPreviewButton 
              onClick={() => { props.history.push(`/performances/${item.id}`)}}
            />
          </List.Item>
        )
      })}
    </List>
  )
}

export const PerformancePreviewList = withRouter(
  PerformancePreviewListComponent
)