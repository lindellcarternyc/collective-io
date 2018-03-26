import * as React from 'react'

import { Header, Container } from 'semantic-ui-react'

interface LayoutProps {
  title?: string
  children?: React.ReactNode
}
export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <Container>
      {props.title !== undefined &&
        <Header as="h2" content={props.title} />
      }
      {props.children}
    </Container>
  )
}