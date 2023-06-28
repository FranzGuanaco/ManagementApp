import React, { useState, useEffect } from "react";
import "./BoxPattern.css";
import Pic from "../Picture/Pic";
import EditButton from "../Button/EditButton";
import TextDataEmployee from "./TextDataEmployee";
import axios from "axios";

function BoxEmployee(props) {
  const [employees, setEmployees] = useState([]);
  const [boxWidth, setBoxWidth] = useState(300); // Largeur de la boîte par défaut

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Mettre à jour la largeur de la boîte en fonction de la largeur de la fenêtre lors du chargement initial et lorsqu'elle est redimensionnée
    const updateBoxWidth = () => {
      const windowWidth = window.innerWidth;
      const maxWidth = 1000; // Largeur maximale souhaitée
      const minWidth = 300; // Largeur minimale souhaitée
      const width = Math.max(minWidth, Math.min(maxWidth, windowWidth - 100)); // Calculer la largeur en fonction de la taille de la fenêtre
      setBoxWidth(width);
    };

    // Écouter l'événement de redimensionnement de la fenêtre
    window.addEventListener("resize", updateBoxWidth);

    // Appeler la fonction de mise à jour de la largeur de la boîte lors du chargement initial
    updateBoxWidth();

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", updateBoxWidth);
    };
  }, []);

  return (
    <div>
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="box"
          style={{
            position: "relative",
            marginBottom: "7%",
            bottom: props.bottom,
            marginTop: props.marginTop,
            left: props.margin,
            justifyContent: "center",
            width: `${boxWidth}px`, // Utiliser la valeur de la largeur de la boîte mise à jour
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

          <div style={{ top: "20%"}}>
            <TextDataEmployee
              left="25%"
              width="45%"
              Nom={`${employee.Firstname} ${employee.Surname}`}
              poste={employee.position}
              contact={employee.Mail}
              disponibilité={employee.Availability}
              cost={employee.Income}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoxEmployee;


