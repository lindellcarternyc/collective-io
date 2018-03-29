// import * as React from 'react'
// import { Link } from 'react-router-dom'
// import { ListList } from 'semantic-ui-react'

// import { PerformanceDetailsType } from '../../../constants/performance-details-type'
// import { PerformanceDetails } from '../Details'

// export interface PerformanceListItemProps extends PerformanceDetailsType {
//   id: string
// }
// export const PerformanceListItem = (props: PerformanceListItemProps): JSX.Element => {
//   const { date, startTime, endTime, location, id } = props
//   return (
//     <Link to={`/performances/${id}`}>
//       <ListList>
//         <PerformanceDetails 
//           date={date}
//           startTime={startTime}
//           endTime={endTime}
//           location={location}
//         />
//       </ListList>
//     </Link>
//   )
// }