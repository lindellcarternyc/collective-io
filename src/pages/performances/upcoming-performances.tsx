import * as React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../../redux/state'

import { Layout } from '../../components/Layout'
import { PerformancePreviewList } from '../../components/performance/PreviewList'

import { PerformanceType } from '../../constants/performance'
interface UpcomingPerformancesProps {
  performances: { [id: string]: PerformanceType }
}
export const UpcomingPerformancesComponent = (props: UpcomingPerformancesProps): JSX.Element => {
  const { performances } = props
  const items = Object.keys(performances).map(id => performances[id])
  return (
    <Layout title="Upcoming Performances">
      <PerformancePreviewList items={items}/>
    </Layout>
  )
}

interface StateProps {
  performances: { [id: string]: PerformanceType }
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    performances: state.performances
  }
}

export const UpcomingPerformances = connect(
  mapStateToProps
)(UpcomingPerformancesComponent)