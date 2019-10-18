import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Views/HomeView'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
