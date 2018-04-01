import * as React from 'react'

import { connect } from 'react-redux'
import { StoreState } from '../../redux/state'
import { Dispatch } from 'redux'
import { addPerformance } from '../../redux/performances/actions'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { Layout } from '../../components/layout'
import { AddPerformanceForm, AddPerformanceFormData } from '../../components/add-performance/form'

interface AddPerformancePageComponentProps extends RouteComponentProps<{}> {
  addPerformance: (data: AddPerformanceFormData) => void
}
export const AddPerformancePageComponent = (props: AddPerformancePageComponentProps): JSX.Element => {
  return (
    <Layout title="Add Performance">
      <AddPerformanceForm 
        addPerformance={(data: AddPerformanceFormData) => {
          props.addPerformance(data)
          props.history.push('/performances')
        }}
      />
    </Layout>
  )
}

interface DispatchProps {
  addPerformance: (data: AddPerformanceFormData) => void
}
const mapDispatchToProps = (dispatch: Dispatch<StoreState>): DispatchProps => {
  return {
    addPerformance: (data: AddPerformanceFormData) => {
      const { date, location, startTime, endTime } = data
      dispatch(addPerformance(date, location, startTime, endTime))
    }
  }
}
export const AddPerformancePage = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddPerformancePageComponent)
)