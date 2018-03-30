import * as React from 'react'

// Router
import { withRouter, RouteComponentProps } from 'react-router-dom'
interface RouteProps {
  id: string
}

// Store
import { connect } from 'react-redux'
import { StoreState } from '../../redux/state'
import { Dispatch } from 'redux'
import { joinPerformance } from '../../redux/performances/actions'
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
  joinPerformance: (performanceId: string, userId: string, mode: 'cast' | 'covers') => void
}
const mapDispatchToProps = (
  dispatch: Dispatch<StoreState>, 
  ownProps: PerformanceDetailsComponentProps
): DispatchProps => {
  return {
    joinPerformance: (
      performanceId: string, userId: string, mode: 'cast' | 'covers'
    ) => {
      dispatch(joinPerformance(performanceId, userId, mode))
    }
  }
}

// types
import { User } from '../../constants/user'
import { PerformanceType } from '../../constants/performance'

// Utils
import { mapUserIdsToSingerObjects } from './utils'

// Components
import { Layout } from '../../components/Layout'
import { PerformanceDetails } from '../../components/performance/Details'

interface PerformanceDetailsComponentProps extends 
  StateProps, DispatchProps, RouteComponentProps<RouteProps> { }

const PerformanceDetailsComponent = (props: PerformanceDetailsComponentProps) => {
  const id = props.match.params.id
  const performance = props.performance

  const handleJoin = (mode: 'cast' | 'covers') => {
    if ( props.user !== null ) {
      props.joinPerformance(id, props.user.id, mode)
    }
  }
  const castList = mapUserIdsToSingerObjects(performance.cast)
  const coverList = mapUserIdsToSingerObjects(performance.covers)
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
        castList={castList}
        coverList={coverList}
        handleJoin={handleJoin}
      />
    </Layout>
  )
}

export const PerformanceDetailsPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PerformanceDetailsComponent)
)