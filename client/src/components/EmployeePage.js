import React from 'react'
import Employee from "./Employee"
import { Card } from "semantic-ui-react";

const EmployeePage = ({users}) => {
   let employees = users.filter(user=>user.user_role === "Employee")
console.log(employees)
  const employeeArr = employees.map((obj)=> {
return <Employee key={obj.id} /> })
    return (
      <div>
      <Card>

        {employeeArr}
      </Card >
      </div>
    );

}

export default EmployeePage
