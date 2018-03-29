import * as React from 'react'

import { PerformancePreviewType } from '../../constants/performance'
import { PerformancePreview } from './Preview'
import { SingerList } from '../Singer/List/List'

import { Button } from 'semantic-ui-react'
interface JoinButtonProps {
  castList?: string[]
  coverList?: string[]
  handleClick: (mode: 'cast' | 'covers') => void
}
const JoinButton = (props: JoinButtonProps): JSX.Element => {
  let content: string
  let mode: 'cast' | 'covers'
  if (props.castList === undefined || props.castList.length < 4) {
    mode = 'cast'
    content = 'Join Cast'
  } else {
    mode = 'covers'
    content = 'Join Covers'
  }
  return (
    <Button 
      content={content} 
      onClick={() => { props.handleClick(mode) }} 
    />
  )
}

interface PerformanceDetailsProps {
  preview: PerformancePreviewType
  castList?: string[]
  coverList?: string[]
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
      {castList !== undefined && <SingerList singerNames={castList}/>}
      {coverList !== undefined && <SingerList singerNames={coverList} />}
      <JoinButton 
        castList={castList} 
        coverList={coverList}
        handleClick={props.handleJoin}
      />
    </>
  )
}