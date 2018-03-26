import * as React from 'react'

import { ListList } from 'semantic-ui-react'

import { PerformanceDetailsType } from '../../../constants/performance-details-type'
import { PerformanceDetails } from '../Details'

export interface PerformanceListItemProps extends PerformanceDetailsType {
  id: string
}
export const PerformanceListItem = (props: PerformanceListItemProps): JSX.Element => {
  const { date, startTime, endTime, location } = props
  return (
      <ListList>
        <PerformanceDetails 
          date={date}
          startTime={startTime}
          endTime={endTime}
          location={location}
        />
      </ListList>
  )
}