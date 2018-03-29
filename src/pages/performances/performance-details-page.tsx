import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { getPerformanceById } from '../../data/upcoming-performances'
import { Layout } from '../../components/Layout'
import { PerformanceDetails } from '../../components/Performance/Details'
import { SingerList } from '../../components/Singer/List/List'

interface RouteProps {
  id: string
}

const PerformanceDetailsComponent = (props: RouteComponentProps<RouteProps>) => {
  const id = props.match.params.id
  const details = getPerformanceById(id)
  return (
    <Layout title="Details">
      {details !== undefined &&
        <>
          <PerformanceDetails 
            date={details.date}
            location={details.location}
            startTime={details.startTime}
            endTime={details.endTime}
            as="List"
          />
          {details.cast !== undefined &&
            <SingerList 
              listName="Cast"
              singerNames={details.cast}
            />
          }
          {details.covers !== undefined &&
            <SingerList 
              listName="Covers"
              singerNames={details.covers}
            />
          }
        </>
      }
    </Layout>
  )
}

export const PerformanceDetailsPage = withRouter(PerformanceDetailsComponent)