import React, { useState, useEffect } from "react";
import "./BoxPattern.css";
import Pic from "../Picture/Pic";
import EditButton from "../Button/EditButton";
import TextDataEmployee from "./TextDataEmployee";
import axios from "axios";

function BoxEmployee(props) {
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

  return (
    <div>
      {employees.map((employee) => (
        <div
          key={employee.id} // utiliser un identifiant unique pour chaque élément rendu
          className="box"
          style={{
            position: "relative",
            bottom: props.top,
            marginTop: props.marginTop,
            left: props.margin,
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: "15%", left: "4%" }}>
            <Pic />
          </div>

          <div
            style={{ position: "relative", marginLeft: "70%", top: "10%" }}
          >
            <EditButton
              width="36%"
              height="100%"
              minWidth="100px"
              minHeight="90px"
            />
          </div>

          <div style={{ top: "20%" }}>
            <TextDataEmployee
              left="25%"
              width="45%"
              Nom={`${employee.Firstname} ${employee.Surname}`}
              poste={employee.Position}
              contact={employee.Mail}
              disponibilité={employee.Avaibility}
              cost={employee.Cost}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoxEmployee;

