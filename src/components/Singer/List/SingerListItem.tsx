import * as React from 'react'

import { ListItem, Icon } from 'semantic-ui-react'

const SingerListItemIconStyles = {
  marginLeft: '0.5rem'
}
interface SingerListItemIconProps {
  onClick: () => void
}
interface SingerListItemIconState {
  isHovered: boolean
}
class SingerListItemIcon extends React.Component<
  SingerListItemIconProps, SingerListItemIconState
> {
  constructor(props: SingerListItemIconProps) {
    super(props)

    this.state = { 
      isHovered: false
    }
  }

  handleMouseOver = () => {
    this.setState({ isHovered: true })
  }

  handleMouseOut = () => {
    this.setState({ isHovered: false })
  }
  render() {
    return (
      <Icon 
        style={SingerListItemIconStyles} 
        name="close" 
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        color={this.state.isHovered ? 'red' : 'black'}
        onClick={this.props.onClick}
      />
    )
  }
}

interface SingerListItemProps {
  id: string
  name: string
  action?: () => void
}
export const SingerListItem = (props: SingerListItemProps): JSX.Element => {
  return (
    <ListItem>
      {props.name} {props.action !== undefined &&
        <SingerListItemIcon onClick={props.action}/>
      }
    </ListItem>
  )
}