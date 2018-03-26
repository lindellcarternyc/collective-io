import * as React from 'react'

import { Layout } from '../../components/UI/Layout'
import { PerformanceForm } from '../../components/Performance/Form'

export const AddPerformancePage = (): JSX.Element => {
  return (
    <Layout title="Add Performance">
      <PerformanceForm mode="add" />
    </Layout>
  )
}