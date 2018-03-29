import * as React from 'react'
import './App.css'

import { Navigation } from './components/navigation'
import { Main } from './pages/Main'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
      </div>
    )
  }
}

export default App