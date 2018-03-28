import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface NavigationProps {
  links: {
    title: string
    to: string
  }[]
  isAuthenticated: boolean
  signOut: () => void
}
export const Navigation = (props: NavigationProps): JSX.Element => {
  return (
    <Menu color="blue" inverted>
      {props.links.map(link => {
        return (
          <Link key={link.to} to={link.to}>
            <Menu.Item content={link.title} />
          </Link>
          )
      })}
      {props.isAuthenticated === true &&
        <Menu.Menu position="right">
          <Menu.Item content="Sign Out" onClick={props.signOut}/>
        </Menu.Menu>
      }
    </Menu>
  )
}