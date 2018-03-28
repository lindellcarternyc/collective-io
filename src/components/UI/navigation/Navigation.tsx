import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface NavigationProps {
  links: {
    title: string
    path: string
  }[]
  isAuthenticated: boolean
  signOut: () => void
}
export const Navigation = (props: NavigationProps): JSX.Element => {
  return (
    <Menu color="blue" inverted>
      {props.links.map(link => {
        return (
          <Link key={link.path} to={link.path}>
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