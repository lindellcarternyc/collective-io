import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Store } from 'redux'
import { initStore } from './redux/store'
import { StoreState } from './redux/state'
import { Provider } from 'react-redux'

const Root = (props: { store: Store<StoreState>}) => (
  <Provider store={props.store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

const store = initStore()
ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
