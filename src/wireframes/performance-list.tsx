import * as React from 'react'

interface PerformanceListItemProps {
  id: string
  date: string
  startTime: string
  endTime: string
  location: string
}
const PerformanceListItem = (props: PerformanceListItemProps): JSX.Element => {
  return (
    <div>
      {props.date}<br />
      {props.startTime} - {props.endTime}<br />
      @{props.location}
    </div>
  )
}

export interface PerformanceListProps {
  items: PerformanceListItemProps[]
}

export const PerformanceList = (props: PerformanceListProps): JSX.Element => {
  return (
    <>
    <h2>Performance List</h2>
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.id}>
            <PerformanceListItem {...item} />
          </li>
        )
      })}
    </ul>
    </>
  )
}

const MOCK_PERFORMANCE_LIST_DATA: PerformanceListProps = {
  items: [
    {
      id: 'a',
      date: 'Monday 3/26',
      startTime: '6:00',
      endTime: '10:00',
      location: 'Times Square'
    },
    {
      id: 'b',
      date: 'Tuesday 3/27',
      startTime: '6:00',
      endTime: '9:00',
      location: 'Union Square'
    },
    {
      id: 'c',
      date: 'Wednesday 3/28',
      startTime: '6:00',
      endTime: '9:00',
      location: 'Herald Square'
    },
    {
      id: 'd',
      date: 'Monday 4/02',
      startTime: '6:00',
      endTime: '9:00',
      location: 'Port Authority'
    },
    {
      id: 'e',
      date: 'Wednesday 4/04',
      startTime: '6:00',
      endTime: '9:00',
      location: 'Herald Square'
    }
  ]
}

export const getPerformanceListItems = () => MOCK_PERFORMANCE_LIST_DATA