import * as React from 'react'
import './App.css'

import { PerformanceList, getPerformanceListItems } from './wireframes/performance-list'
import { PerformanceDetail, getPerformanceDetailData } from './wireframes/performance-detail'
import { AddPerformance } from './wireframes/add-performance'

const WIREFRAMES = {
  'PerformanceList': () => {
    return (
      <PerformanceList {...getPerformanceListItems()} />
    )
  },
  'PerformanceDetail': () => {
    return (
      <PerformanceDetail {...getPerformanceDetailData()} />
    )
  },
  'AddPerformance': () => (
    <AddPerformance />
  )
}

interface AppState {
  wireframeName: string
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      wireframeName: 'PerformanceDetail'
    }
  }

  selectWireframe = (name: string) => {
    this.setState({ wireframeName: name })
  }

  renderWireframeNav(): JSX.Element {
    return (
      <ul>
        {Object.keys(WIREFRAMES).map(name => {
          return (
            <a 
              key={name} 
              onClick={(evt: React.SyntheticEvent<HTMLAnchorElement>) => {
                evt.preventDefault()
                evt.stopPropagation()
                this.selectWireframe(name)
              }}
              style={{marginRight: '1rem'}}
            >{name}
            </a>
          )
        })}
      </ul>
    )
  }

  renderCurrentWireframe(): JSX.Element  {
    return WIREFRAMES[this.state.wireframeName]()
  }

  render() {
    return (
      <div className="App">
        Wireframes
        {this.renderWireframeNav()}
        {this.renderCurrentWireframe()}
      </div>
    )
  }
}

export default App
