import * as React from 'react'
import { Link } from 'react-router-dom'

interface NavigationProps {
  links: {
    title: string
    to: string
  }[]
}
export const Navigation = (props: NavigationProps): JSX.Element => {
  return (
    <nav>
      <ul>
        {props.links.map(link => {
          return (
            <li key={link.to}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}