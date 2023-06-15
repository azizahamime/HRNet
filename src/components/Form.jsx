import React, {useState} from "react";
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import {useDispatch} from 'react-redux';
import 'react-dropdown/style.css';
import 'react-datepicker/dist/react-datepicker.css';

import states from "../datas/states";
import departments from "../datas/departements";
//import Modal from "./Modal";
import { addEmployee } from "../redux/reducers/employeeReducer";
//import home from '../assets/house.svg'
import ExampleComponent from 'react-modal-aziza';
import 'react-modal-aziza/dist/index.css';

export default function Form(){
  const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
	const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const defaultDepartement = departments[0];
  const defaultState = states[0].name

  const dispatch = useDispatch();

  const formatDate = (date) => {
    if (date) {
      return new Date(date).toLocaleDateString("fr");
    } else {
      return "";
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      startDate:formatDate(startDate),
      department,
      dateBirth:formatDate(dateBirth),
      street,
      city,
      state,
      zipCode,
    };

    dispatch(addEmployee(employee));
    setIsModalVisible(true);
  };
  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">
          First Name
          <input type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)}/>
        </label>

        <label htmlFor="last-name">
          Last Name
          <input type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label htmlFor="date-of-birth">
          Date of Birth
          <DatePicker
            todayButton={"Aujord'hui"}
            dateFormat="dd/MM/yyyy"
            selected={dateBirth}
            onChange={(date) => setDateBirth(date)}
            
          />
        </label>

        <label htmlFor="start-date">
          Start Date
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            todayButton={"Aujord'hui"}
          />
        </label>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">
            Street
            <input id="street" type="text" onChange={(e) => setStreet(e.target.value)}/>
          </label>

          <label htmlFor="city">
            City
            <input id="city" type="text" onChange={(e) => setCity(e.target.value)}/>
          </label>

          <label htmlFor="state">
            State
            <Dropdown 
              options={states.map(el=>({
                label: el.name,
                value:el.abbreviation
              }))} 
              value={defaultState}  
              onChange={(e) => setState(e.value)} 
              placeholder="Select a state"
            />
          </label>
          <label htmlFor="zip-code">
            Zip Code
            <input id="zip-code" type="number" onChange={(e) => setZipCode(e.target.value)}/>
          </label>
        </fieldset>

        <label htmlFor="department">
          Department
          <Dropdown 
            options={departments} 
            value={defaultDepartement}  
            onChange={(e) => setDepartment(e.value)} 
            placeholder="Select a Department"
          />
        </label>

        <input type="submit" onClick={handleSave} />

      </form>
      {isModalVisible && ( <ExampleComponent />)}
    </>
  )
}