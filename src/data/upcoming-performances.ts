import { PerformanceDetailsObject } from '../constants/performance-details-type'

const MOCK_PERFORMANCE_LIST_DATA: PerformanceDetailsObject[] = [
  {
    id: 'a',
    date: 'Monday 3/26',
    startTime: '6:00',
    endTime: '10:00',
    location: 'Times Square',
    cast: [
      'Rachel', 'Jose', 'Alexis', 'Jonathan'
    ]
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

export const getUpcomingPerformances = () => MOCK_PERFORMANCE_LIST_DATA

export const getPerformanceById = (id: string): PerformanceDetailsObject | undefined => {
  const filtered = getUpcomingPerformances().filter(details => {
    return details.id === id
  })
  if (filtered.length > 0) {
    return filtered[0]
  } 
  return
}