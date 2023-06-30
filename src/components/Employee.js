import React from 'react'

function Employee(props) {
  return (
    <div>
      <h3 className="text-lg font-bold underline">Employee {props.name}</h3>
      {props.role ? <p>{props.role}</p> : <p>No Role Available</p>}
    </div>
  )
}
export default Employee
