import React from "react";
import { Link } from "react-router-dom";

import Form from "../components/Form";

export default function CreateEmployee() {
  return (     
    <main>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/listEmployee">View Current Employees</Link>
        <h4>Create Employee</h4>
        <Form/>  
      </div>
    </main>	
    

  )
}