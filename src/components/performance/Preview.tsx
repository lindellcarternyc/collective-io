import * as React from 'react'

import { List } from 'semantic-ui-react'

import { PerformancePreviewType } from '../../constants/performance'
interface PerformancePreviewProps extends PerformancePreviewType {
  as?: 'List'
}
export const PerformancePreview = (props: PerformancePreviewProps): JSX.Element => {
  const { date, startTime, endTime, location, as } = props
  const Wrapper = as === 'List' ? List : React.Fragment

  return (
    <Wrapper>
      <List.Item icon="calendar" content={date} />
      <List.Item icon="time" content={`${startTime} - ${endTime}`} />
      <List.Item icon="point" content={location} />
    </Wrapper>
  )
}