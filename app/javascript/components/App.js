import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Employees from './Employees/Employees'
import Employee from './Employee/Employee'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Employees} />
      <Route exact path="/employees/:slug" component={Employee} />
    </Switch>
  )
}

export default App