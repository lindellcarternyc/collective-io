import * as React from 'react'
import './App.css'

import { UserNavigation } from './components/user/Navigation'
import { Root } from './pages/Root'

interface AppProps { }
interface AppState {
  isAuthenticated: boolean
  isAdmin: boolean
}
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      isAuthenticated: false,
      isAdmin: false
    }
  }
  render() {
    const { isAuthenticated, isAdmin } = this.state
    return (
      <div className="App">
        <UserNavigation isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <Root />
      </div>
    )
  }
}

export default App
