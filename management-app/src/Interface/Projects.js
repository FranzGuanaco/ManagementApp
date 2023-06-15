import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterButton from "../Filters/Filter";
import ProjectCard from "../Box/BoxProjects";
import AlignMenu from "../Menu/AlignMenu";
import FilterText from "../Filters/FilterText";
import Pic from "../Picture/Pic";
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Project")
      .then((response) => {
        console.log('réussi');
        setProjects(response.data);
      })
      .catch((error) => {
        console.log('raté');
      });
  }, []);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return(
    <div className="Project">
      <AlignMenu
        bottom="44px"
        buttonText="Home"
        links="/Homepage"
        buttonText1="Edit"
        links1="/EditAccount"
        buttonText2="Staffing"
        links2="/"
        buttonText3="Calendar"
        links3="/"
        buttonText4="Employee"
        links4="/"
        buttonText5="Vacancy"
        links5="/"
        buttonText6="Mail"
        links6="/"
      />

      <Pic/>

      <div style={{ marginLeft:'25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%', padding: '20px', boxSizing: 'border-box', border: 'solid', color: 'red' }}>
        <FilterButton options={options}/>
        <FilterButton options={options}/>
        <FilterButton options={options}/>
        <FilterText/>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '22%' }}>
        {projects.map((project) => (
          <ProjectCard
           name={project.project_name}
           description={project.description}
           // status={project.Status}
            
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
