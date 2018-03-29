// import * as React from 'react'

// import { ListItem, List } from 'semantic-ui-react'
// import { PerformanceDetailsType } from '../../constants/performance-details-type'
// interface PerformanceDetailsProps extends PerformanceDetailsType {
//   as?: 'List'
// }
// export const PerformanceDetails = (props: PerformanceDetailsProps): JSX.Element => {
//   const { date, startTime, endTime, location } = props
//   const Wrapper = props.as === 'List'
//     ? List
//     : React.Fragment
//   return (
//     <Wrapper>
//       <ListItem icon="calendar" content={date} />
//       <ListItem icon="time" content={`${startTime} - ${endTime}`} />
//       <ListItem icon="point" content={location} />
//     </Wrapper>
//   )
// }