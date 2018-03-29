import { PerformanceDetailsObject } from '../constants/performance-details-type'

let MOCK_PERFORMANCE_LIST_DATA: PerformanceDetailsObject[] = [
  {
    id: 'a',
    date: 'Monday 3/26',
    startTime: '6:00',
    endTime: '10:00',
    location: 'Times Square',
    cast: [
      // 'Rachel', 'Jose', 'Alexis', 'Jonathan'
      'a', 'b', 'c', 'd'
    ]
  },
  {
    id: 'b',
    date: 'Tuesday 3/27',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Union Square',
    cast: [
      'c', 'd', 'e', 'f'
    ]
  },
  {
    id: 'c',
    date: 'Wednesday 3/28',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Herald Square',
    cast: [
      'b', 'g', 'h'
    ]
  },
  {
    id: 'd',
    date: 'Monday 4/02',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Port Authority',
    cast: [
      'e', 'i', 'j', 'k'
    ],
    covers: [
      'l'
    ]
  },
  {
    id: 'e',
    date: 'Wednesday 4/04',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Herald Square',
    cast: [
      'c', 'e', 'j', 'm'
    ]
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

export const joinCast = (performanceId: string, userId: string) => {
  console.dir('joinCast')
  const performance = getPerformanceById[performanceId]
  console.dir(performance)
}