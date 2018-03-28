interface UserLink {
  path: string
  title: string
}

export const makeLinks = (isAuthenticated: boolean, isAdmin: boolean): UserLink[] => {
  let links: UserLink[] = [
    {path: '/', title: 'Home'}
  ]

  if (isAuthenticated) {
    links.push(
      {path: '/performances', title: 'Upcoming Performances'}
    )
    if (isAdmin) {
      links.push(
        {path: '/add-performance', title: 'Add Performance'}
      )
    }
  } else {
    links.push(
      {path: '/signin', title: 'Sign In'},
      {path: '/signup', title: 'Sign Up'}
    )
  }

  return links
}