import * as React from 'react'

import './Button.css'

interface ButtonProps {
  content?: string
}
export const Button = (props: ButtonProps): JSX.Element => {
  const { content } = props
  return (
    <button className="button">{content}</button>
  )
}