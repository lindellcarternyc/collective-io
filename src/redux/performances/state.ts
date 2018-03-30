import { PerformanceType } from '../../constants/performance'

export interface PerformanceState {
  [id: string]: PerformanceType
}

export const InitialPerformanceState: PerformanceState = {
  'a': {
    id: 'a',
    date: 'Monday 3/26',
    startTime: '6:00',
    endTime: '10:00',
    location: 'Times Square',
    cast: [
      'a', 'b', 'c', 'd'
    ],
    covers: []
  },
  'b': {
    id: 'b',
    date: 'Tuesday 3/27',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Union Square',
    cast: [
      'c', 'd', 'e', 'f'
    ],
    covers: []
  },
  'c': {
    id: 'c',
    date: 'Wednesday 3/28',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Herald Square',
    cast: [
      'b', 'g', 'h'
    ],
    covers: []
  },
  'd': {
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
  'e': {
    id: 'e',
    date: 'Wednesday 4/04',
    startTime: '6:00',
    endTime: '9:00',
    location: 'Herald Square',
    cast: [
      'c', 'e', 'j', 'm'
    ],
    covers: []
  }
}