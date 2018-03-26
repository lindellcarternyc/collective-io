import * as React from 'react'

import { Layout } from '../../components/UI/Layout'
import { PerformanceList } from '../../components/Performance/List/List'
import { getUpcomingPerformances } from '../../data/upcoming-performances'

export const UpcomingPerformances = (): JSX.Element => {
  return (
    <Layout title="Upcoming Performances">
      <PerformanceList items={getUpcomingPerformances()}/>
    </Layout>
  )
}