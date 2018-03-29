import * as React from 'react'
import { Link } from 'react-router-dom'

import { MenuItem } from 'semantic-ui-react'

interface NavigationLinkProps {
  path: string
  title: string
}
export const NavigationLink = (props: NavigationLinkProps): JSX.Element => {
  const { path, title } = props
  return (
    // <Link to={path}>
    //   <MenuItem content={title} />
    // </Link>
    <MenuItem onClick={() => { return }}>
      <Link to={path}>{title}</Link>
    </MenuItem>
  )
}

interface NavigationLinksProps {
  links: NavigationLinkProps[]
}
export const NavigationLinks = (props: NavigationLinksProps): JSX.Element => {
  return (
    <>
    {props.links.map(link => {
      return <NavigationLink key={link.title} {...link}/>
    })}
    </>
  )
}