import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import FilterButton from "../Filters/Filter";
import ProjectCard from "../Box/BoxProjects";
import AlignMenu from "../Menu/AlignMenu";
import FilterText from "../Filters/FilterText";

class Projects extends React.Component {

    render(){
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

      <div style={{ marginLeft:'25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%', padding: '20px', boxSizing: 'border-box', border: 'solid', color: 'red' }}>
        <FilterButton options={options}/>
        <FilterButton options={options}/>
        <FilterButton options={options}/>
        <FilterText/>
        </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: '22%' }}>
        <ProjectCard />
        </div>
    </div>
  

    );
}}

export default Projects