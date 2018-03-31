import { NavigationLinkType } from './constants'

const adminLinks = (): NavigationLinkType[] => {
  return [
    {path: '/add-performance', title: 'Add Performance'}
  ]
}

const authenticatedLinks = (): NavigationLinkType[] => {
  return [
    {path: '/performances', title: 'Upcoming Performances'}
  ]
}

const unauthenticatedLinks = (): NavigationLinkType[] => {
  return [
    {path: '/signin', title: 'Sign In'},
    {path: '/signup', title: 'Sign Up'}
  ]
}

export const makeLinks = (isAuthenticated: boolean, isAdmin: boolean = false): NavigationLinkType[] => {
  let links: NavigationLinkType[] = [
    {path: '/', title: 'Home'}
  ]

  if (isAuthenticated) {
    links.push(
      ...authenticatedLinks()
    )
    if (isAdmin) {
      links.push(
        ...adminLinks()
      )
    }
  } else {
    links.push(
      ...unauthenticatedLinks()
    )
  }

  return links
}