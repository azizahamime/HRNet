import React, {useState} from "react";
import Dropdown from 'react-dropdown';
import DatePicker from 'react-datepicker';
import {useDispatch} from 'react-redux';
import 'react-dropdown/style.css';
import 'react-datepicker/dist/react-datepicker.css';

import states from "../datas/states";
import departments from "../datas/departements";
import { addEmployee } from "../redux/reducers/employeeReducer";
import  Modal  from 'react-modal-aziza';
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
  const dispatch = useDispatch();
 
  const closeModal = () =>setIsModalVisible(!isModalVisible)
  

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
      <form action="#" id="create-employee" onSubmit={handleSave}>
        <label>
          First Name
          <input type="text" id="first-name" onChange={(e) => setFirstName(e.target.value)} autoComplete="first name" required/>
        </label>

        <label>
          Last Name
          <input type="text" id="last-name" onChange={(e) => setLastName(e.target.value)} required/>
        </label>

        <label>
          Date of Birth
          <DatePicker
            todayButton={"Aujourd'hui"}
            dateFormat="dd/MM/yyyy"
            selected={dateBirth}
            onChange={(date) => setDateBirth(date)}
            required
            id="date-birth"
          />
        </label>

        <label>
          Start Date
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            todayButton={"Aujourd'hui"}
            required
            id="date-start"
          />
        </label>

        <fieldset className="address">
          <legend>Address</legend>

          <label>
            Street
            <input id="street" type="text" onChange={(e) => setStreet(e.target.value)} required/>
          </label>

          <label>
            City
            <input id="city" type="text" onChange={(e) => setCity(e.target.value)} required/>
          </label>

          <label>
            State
            <Dropdown 
              options={states.map(el=>({
                label: el.name,
                value:el.abbreviation,
              }))} 
              onChange={(e) => setState(e.value)} 
              placeholder="Select a state"
              required
            />
          </label>
          <label >
            Zip Code
            <input id="zip-code" type="number" onChange={(e) => setZipCode(e.target.value)} required/>
          </label>
        </fieldset>

        <label>
          Department
          <Dropdown 
            options={departments} 
            onChange={(e) => setDepartment(e.value)} 
            placeholder="Select a Department"
            required
          />
        </label>

        <input type="submit" className="submit" />

      </form>
    
      {isModalVisible && ( <Modal 
        isOpenModal={isModalVisible} 
        onClose={closeModal} 
        btnClose 
        btnStyle={{ btnBackgroundColor: 'yellow', btnTextColor: '#000' }}
        modalStyle={{ modalBackground: '#000', modalTextColor: '#fff' }}
        />)}
      
    </>
  )
}