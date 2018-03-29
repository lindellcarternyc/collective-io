import { NavigationLinkType } from './constants'

export const makeLinks = (isAuthenticated: boolean): NavigationLinkType[] => {
  let links: NavigationLinkType[] = [
    {path: '/', title: 'Home'}
  ]

  if (isAuthenticated) {
    links.push(
      {path: '/performances', title: 'Upcoming Performances'}
    )
  } else {
    links.push(
      {path: '/signin', title: 'Sign In'},
      {path: '/signup', title: 'Sign Up'}
    )
  }

  return links
}