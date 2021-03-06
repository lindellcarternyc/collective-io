import * as React from 'react'

import { Button } from 'semantic-ui-react'

interface JoinButtonProps {
  mode: 'cast' | 'covers'
  disabled?: boolean
  join: (mode: 'cast' | 'covers') => void
}
export const JoinButton = (props: JoinButtonProps): JSX.Element => {
  const content = props.mode === 'cast' 
  ? 'Join Cast'
  : 'Join Covers'

  return (
    <Button
      disabled={props.disabled}
      color="blue"
      content={content}
      onClick={ () => {
        props.join(props.mode)
      }}
    />
  )
}