import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Employee from './Employee'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    // get all employees from API
    // update employees in our state

    axios.get('/api/v1/employees.json')
    .then(response => {
      setEmployees(response.data.data)
    })
    .catch(response => console.log(response))
    }, [employees.length])
  
    const grid = employees.map( person => {
      return (
        <Employee 
        key={person.attributes.first_name}
        attributes={person.attributes}
        />
      )
    })

  return (
  <div>
    <h1>This is the Employees#index view for our app.</h1>
    <div>
      {grid}
    </div>
  </div>
  )
}

export default Employees