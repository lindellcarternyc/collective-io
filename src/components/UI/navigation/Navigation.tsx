import * as React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

interface NavigationProps {
  links: {
    title: string
    to: string
  }[]
  logout: boolean
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
      {props.logout === true &&
        <Menu.Menu position="right">
          <Menu.Item content="Sign Out" />
        </Menu.Menu>
      }
    </Menu>
  )
}