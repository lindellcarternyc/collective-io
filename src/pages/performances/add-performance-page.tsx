import * as React from 'react'

import { Layout } from '../../components/Layout'
import { AddPerformanceForm, AddPerformanceFormData } from '../../components/add-performance'

export const AddPerformancePage = (): JSX.Element => {
  const addPerformance = (data: AddPerformanceFormData) => {
    console.dir(data)
  }
  return (
    <Layout title="Add Performance">
      <AddPerformanceForm addPerformance={addPerformance}/>
    </Layout>
  )
}