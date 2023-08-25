import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import HomeContact from './Components/HomeContact'
import EmptyPage from './Components/EmptyPage'

import './App.css'

// Replace your code here

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={EmptyPage} />
          <Route exact path="/home" component={HomeContact} />
        </Switch>
      </>
    )
  }
}

export default App
