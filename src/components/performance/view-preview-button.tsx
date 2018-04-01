import * as React from 'react'

import { Button } from 'semantic-ui-react'

interface ViewPreviewButtonProps {
  onClick: () => void
}
interface ViewPreviewButtonState {
  isHovered: boolean
}
export class ViewPreviewButton extends React.Component<ViewPreviewButtonProps, ViewPreviewButtonState> {
  constructor(props: ViewPreviewButtonProps) {
    super(props)

    this.state = { isHovered: false }
  }

  onMouseOver = () => { this.setState({ isHovered: true })}
  onMouseOut = () => { this.setState({ isHovered: false })}

  render() {
    return (
      <Button 
        color={this.state.isHovered ? 'blue' : undefined}
        content="View" 
        size="tiny"
        style={{marginTop: '0.25rem'}}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={this.props.onClick}
      />
    )
  }
}