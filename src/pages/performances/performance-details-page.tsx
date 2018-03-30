import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { StoreState } from '../../redux/state'
import { Dispatch } from 'redux'

import { joinCast, joinCovers } from '../../redux/performances/actions'

import { getUserById } from '../../data/user-databse'
import { User } from '../../constants/user'
import { PerformanceType } from '../../constants/performance'

import { Layout } from '../../components/Layout'
import { PerformanceDetails } from '../../components/performance/Details'

interface RouteProps {
  id: string
}
interface PerformanceDetailsComponentProps extends RouteComponentProps<RouteProps> {
  user: User | null
  performance: PerformanceType
  joinCast: (performanceId: string, userId: string) => void
  joinCovers: (performanceId: string, userId: string) => void
}

const mapUserIdsToSingers = (userIds: string[]): { id: string, name: string}[] => {
  return userIds.map(id => {
    return {
      id,
      name: getUserById(id).fullname
    }
  })
}

const PerformanceDetailsComponent = (props: PerformanceDetailsComponentProps) => {
  const id = props.match.params.id
  const performance = props.performance

  const handleJoin = (mode: 'cast' | 'covers') => {
    if (props.user !== null) {
      const userId = props.user.id
      if (mode === 'cast') {
        props.joinCast(id, userId)
      } else if (mode === 'covers') {
        props.joinCovers(id, userId)
      }
    }
  }

  return (
    <Layout title="Details">
      <PerformanceDetails 
        preview={{
          date: performance.date,
          startTime: performance.startTime,
          endTime: performance.endTime,
          location: performance.location
        }}
        user={props.user}
        castList={mapUserIdsToSingers(performance.cast)}
        coverList={mapUserIdsToSingers(performance.covers)}
        handleJoin={handleJoin}
      />
    </Layout>
  )
}

interface StateProps {
  user: User | null
  performance: PerformanceType
}
const mapStateToProps = (state: StoreState, ownProps: PerformanceDetailsComponentProps): StateProps => {
  const id = ownProps.match.params.id
  return {
    user: state.auth.user,
    performance: state.performances[id]
  }
}

interface DispatchProps {
  joinCast: (performanceId: string, userId: string) => void
  joinCovers: (performanceId: string, userId: string) => void
}
const mapDispatchToProps = (
  dispatch: Dispatch<StoreState>, 
  ownProps: PerformanceDetailsComponentProps
): DispatchProps => {
  return {
    joinCast: (performanceId: string, userId: string) => {
      dispatch(joinCast(performanceId, userId))
    },
    joinCovers: (performanceId: string, userId: string) => {
      dispatch(joinCovers(performanceId, userId))
    }
  }
}

export const PerformanceDetailsPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PerformanceDetailsComponent)
)