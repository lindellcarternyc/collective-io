import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { getPerformanceById } from '../../data/upcoming-performances'
import { getUserById } from '../../data/user-databse'

import { Layout } from '../../components/Layout'
import { PerformanceDetails } from '../../components/Performance/Details'
import { SingerList } from '../../components/Singer/List/List'

interface RouteProps {
  id: string
}

const PerformanceDetailsComponent = (props: RouteComponentProps<RouteProps>) => {
  const id = props.match.params.id
  const details = getPerformanceById(id)
  if (details === undefined) {
    return (
      <div>No Performance found!</div>
    )
  }

  let { cast, covers } = details
  if (cast !== undefined) {
    cast = cast.map(castId => getUserById(castId).fullname)
  }
  if (covers !== undefined) {
    covers = covers.map(coverId => getUserById(coverId).fullname)
  }
  return (
    <Layout title="Details">
        <>
          <PerformanceDetails 
            date={details.date}
            location={details.location}
            startTime={details.startTime}
            endTime={details.endTime}
            as="List"
          />
          {cast !== undefined &&
            <SingerList 
              listName="Cast"
              singerNames={cast}
            />
          }
          {covers !== undefined &&
            <SingerList 
              listName="Covers"
              singerNames={covers}
            />
          }
        </>
    </Layout>
  )
}

export const PerformanceDetailsPage = withRouter(PerformanceDetailsComponent)