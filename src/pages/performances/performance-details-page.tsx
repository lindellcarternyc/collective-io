import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { getPerformanceById } from '../../data/upcoming-performances'
import { getUserById } from '../../data/user-databse'

import { Layout } from '../../components/Layout'
import { PerformanceDetails } from '../../components/performance/Details'

interface RouteProps {
  id: string
}

const PerformanceDetailsComponent = (props: RouteComponentProps<RouteProps>) => {
  const id = props.match.params.id
  const details = getPerformanceById(id)

  let content: React.ReactNode
  if (details === undefined) {
      content = <div>No Performance found!</div>
  } else {
    let { cast, covers } = details
    if (cast !== undefined) {
      cast = cast.map(castId => getUserById(castId).fullname)
    }
    if (covers !== undefined) {
      covers = covers.map(coverId => getUserById(coverId).fullname)
    }
    content = (
      <PerformanceDetails 
        preview={{
          date: details.date,
          startTime: details.startTime,
          endTime: details.endTime,
          location: details.location
        }}
        castList={cast}
        coverList={covers}
      />
    )
  }

  return (
    <Layout title="Details">
      {content}
    </Layout>
  )
}

export const PerformanceDetailsPage = withRouter(PerformanceDetailsComponent)