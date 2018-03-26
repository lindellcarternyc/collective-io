import * as React from 'react'
import './App.css'

import { Container } from 'semantic-ui-react'
import { Root } from './pages/Root'
import { Navigation } from './components/UI/navigation/Navigation'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation 
          links={[
            {to: '/', title: 'Home'},
            {to: '/performances', title: 'Upcoming Performances'},
            {to: '/add-performance', title: 'Add Performance'}
          ]}
        />
        <Container>
          <Root />
        </Container>
      </div>
    )
  }
}

export default App
