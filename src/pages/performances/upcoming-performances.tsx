import * as React from 'react'

import { Layout } from '../../components/Layout'
import { PerformancePreviewList } from '../../components/performance/PreviewList'
import { getUpcomingPerformances } from '../../data/upcoming-performances'

export const UpcomingPerformances = (): JSX.Element => {
  return (
    <Layout title="Upcoming Performances">
      <PerformancePreviewList items={getUpcomingPerformances()}/>
    </Layout>
  )
}