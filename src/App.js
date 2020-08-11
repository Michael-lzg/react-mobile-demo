import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './views/Home'
import List from './views/list'
import Deatil from './views/detail'



function App () {
  return (
    <BrowserRouter>
      {
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/detail" component={Deatil} />
        </Switch>
      }
    </BrowserRouter>
  )
}
export default App

