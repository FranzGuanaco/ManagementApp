import React, { useState, useEffect } from "react";
import "./BoxPattern.css";
import Pic from "../Picture/Pic";
import EditButton from "../Button/EditButton";
import TextDataEmployee from "./TextDataEmployee";
import axios from "axios";
import { Link } from "react-router-dom";
import Homepage from "../Interface/Homepage";

function BoxEmployee({ onEmployeeClick }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = "Hello Everyone"; // Définissez la valeur ici

  return (
    <div>
      {employees.map((employee) => (

        <div style={{ top: "20%"}}>
          <div key={employee.id}>

          <p onClick={() => onEmployeeClick(employee.id)}>Le test : {employee.id}</p>
            
           
        </div>
        </div>
      ))}
    </div>
  );
}

export default BoxEmployee;



