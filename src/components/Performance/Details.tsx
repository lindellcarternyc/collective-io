import * as React from 'react'

import { PerformancePreviewType } from '../../constants/performance'
import { PerformancePreview } from './Preview'
import { SingerList } from '../Singer/List/List'
import { JoinButton } from './join-button'

interface PerformanceDetailsProps {
  preview: PerformancePreviewType
  castList: string[]
  coverList: string[]
  handleJoin: (mode: 'cast' | 'covers') => void
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
      {castList.length >= 1 && 
        <SingerList listName="Cast" singerNames={castList}/>
      }
      {coverList.length >= 1 && 
        <SingerList listName="Covers" singerNames={coverList} />
      }
      <JoinButton 
        mode={castList.length < 4 ? 'cast' :  'covers'}
        join={props.handleJoin}
      />
    </>
  )
}