import * as React from 'react'
import './App.css'

import { UserNavigation } from './components/user/Navigation'
import { Main } from './pages/Main'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserNavigation />
        <Main />
      </div>
    )
  }
}

export default App