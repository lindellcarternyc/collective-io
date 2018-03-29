import * as React from 'react'

import { PerformancePreviewType } from '../../constants/performance'
import { PerformancePreview } from './Preview'
import { SingerList } from '../Singer/List/List'

interface PerformanceDetailsProps {
  preview: PerformancePreviewType
  castList?: string[]
  coverList?: string[]
}
export const PerformanceDetails = (props: PerformanceDetailsProps): JSX.Element => {
  const { preview, castList, coverList } = props
  return (
    <>
      <PerformancePreview 
        date={preview.date}
        startTime={preview.startTime}
        endTime={preview.endTime}
        location={preview.location}
        as="List"
      />
      {castList !== undefined && <SingerList singerNames={castList}/>}
      {coverList !== undefined && <SingerList singerNames={coverList} />}
    </>
  )
}