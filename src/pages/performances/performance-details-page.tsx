import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { StoreState } from '../../redux/state'

import { 
  getPerformanceById,
  joinCast
} from '../../data/upcoming-performances'
import { getUserById } from '../../data/user-databse'
import { User } from '../../constants/user'

import { Layout } from '../../components/Layout'
import { PerformanceDetails } from '../../components/performance/Details'

interface RouteProps {
  id: string
}
interface PerformanceDetailsComponentProps extends RouteComponentProps<RouteProps> {
  user: User | null
}

const PerformanceDetailsComponent = (props: PerformanceDetailsComponentProps) => {
  const id = props.match.params.id
  const details = getPerformanceById(id)

  const handleJoin = (mode: 'cast' | 'covers') => {
    if (props.user) {
      joinCast(id, props.user.id)
    }
  }

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
      <>
        <PerformanceDetails 
          preview={{
            date: details.date,
            startTime: details.startTime,
            endTime: details.endTime,
            location: details.location
          }}
          castList={cast}
          coverList={covers}
          handleJoin={handleJoin}
        />
      </>
    )
  }

  return (
    <Layout title="Details">
      {content}
    </Layout>
  )
}

interface StateProps {
  user: User | null
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    user: state.auth.user
  }
}
export const PerformanceDetailsPage = withRouter(
  connect(
    mapStateToProps
  )(PerformanceDetailsComponent)
)