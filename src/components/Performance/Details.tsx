import * as React from 'react'

import { PerformancePreviewType } from '../../constants/performance'
import { User } from '../../constants/user'
import { PerformancePreview } from './Preview'
import { SingerList } from '../Singer/List/List'
import { JoinButton } from './join-button'

interface PerformanceDetailsProps {
  preview: PerformancePreviewType
  castList: {id: string, name: string}[]
  coverList: {id: string, name: string}[]
  user: User | null
  handleJoin: (mode: 'cast' | 'covers') => void
}
export const PerformanceDetails = (props: PerformanceDetailsProps): JSX.Element => {
  const { preview, castList, coverList } = props
  const buttonIsDisabled = (): boolean => {
    if ( props.user === null ) {
      return true
    } else {
      const castIds = props.castList.map(item => item.id)
      if (castIds.indexOf(props.user.id) >= 0) {
        return true
      }

      const coverIds = props.coverList.map(singer => singer.id)
      if (coverIds.indexOf(props.user.id) >= 0) {
        return true
      }
    }
    return false
  }
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
        <SingerList name="Cast" singers={castList}/>
      }
      {coverList.length >= 1 && 
        <SingerList name="Covers" singers={coverList} />
      }
      <JoinButton 
        mode={castList.length < 4 ? 'cast' :  'covers'}
        join={props.handleJoin}
        disabled={buttonIsDisabled()}
      />
    </>
  )
}