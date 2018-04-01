import * as React from 'react'

import { Icon } from 'semantic-ui-react'

interface SingerListItemIconProps {
  onClick: () => void
}
interface SingerListItemIconState {
  isHovered: boolean
}

export class SingerListItemIcon extends React.Component<
  SingerListItemIconProps, SingerListItemIconState
> {
  constructor(props: SingerListItemIconProps) {
    super(props)

    this.state = { isHovered: false }
  }

  onMouseOver = () => { this.setState({ isHovered: true }) }
  onMouseOut = () => { this.setState({ isHovered: false }) }

  render() {
    return (
      <Icon 
        name="close"
        style={{marginLeft: '0.5rem'}}
        color={this.state.isHovered ? 'red' : 'black'}
        onClick={this.props.onClick}
      />
    )
  }
}