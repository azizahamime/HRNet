import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {employeeTab } from "../redux/reducers/employeeReducer";


export default function ListEmployee() {
  const employeesList = useSelector(employeeTab)
  console.log(employeesList)
  
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
    </div>

  )
}