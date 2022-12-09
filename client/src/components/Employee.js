import React  from "react";
import { Card } from "semantic-ui-react";


function Employee({first_name, last_name, projects}) {
    return (
        <Card >
          <div>
           {first_name} {last_name}
        </div>
        <div> {projects} </div>
        </Card>
)}

export default Employee
