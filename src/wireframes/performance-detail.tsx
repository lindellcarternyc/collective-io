import * as React from 'react'

interface PerformanceDetailProps {
  date: string
  startTime: string
  endTime: string
  location: string
  cast: string[]
  covers: string[]
}
export const PerformanceDetail = (props: PerformanceDetailProps): JSX.Element => {
  const { date, startTime, endTime, location, cast, covers } = props
  return (
    <>
      <h2>Performance Detail</h2>
      {date}<br />
      {startTime} - {endTime}<br />
      @{location}
      <h3>Cast</h3>
      <ul>
        {cast.map(castName => (
          <li key={castName}>{castName}</li>
        ))}
      </ul>
      <h3>Covers</h3>
      <ul>
        {covers.map(coverName => (
          <li key={coverName}>{coverName}</li>
        ))}
      </ul>
      <button>Join Cast / Leave Cast</button>
    </>
  )
}

const MOCK_PERFORMANCE_DETAIL_DATA: PerformanceDetailProps = {
  date: 'Monday 3/26',
  startTime: '6:00',
  endTime: '10:00',
  location: 'Times Square',
  cast: [
    'Rachel',
    'Jose',
    'Alexis',
    'Jonathan'
  ],
  covers: []
}

export const getPerformanceDetailData = () => MOCK_PERFORMANCE_DETAIL_DATA