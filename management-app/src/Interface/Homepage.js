
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BoxEmployee from '../Box/BoxEmployee';
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import BoxNews from '../Box/BoxNews'
import { Link } from "react-router-dom";
import ParamPic from './ParamPic';

export default function Homepage() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const redirectUrl = `/Employee details?=${selectedEmployeeId}`;

  const [username, setUsername] = useState('');
  const location = useLocation();

  useEffect(() => {
     console.log("result:", selectedEmployeeId);
    if(selectedEmployeeId !== null){
    window.location.href = redirectUrl;
    }
  }, [selectedEmployeeId]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const usernameParam = queryParams.get('username');
    setUsername(usernameParam);
  }, [location]);

  const handleEmployeeClick = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    
  };
  return (
    <div className="home">
      <div className='menu-left'>
      <Link to='/Parameters'>
        <ParamPic/>
        </Link>
        </div>

        <div className='menu-right'>
        <AlignMenuShorter
        bottom= "40px"
      
        buttonText = "Project"
        links = "/"

        buttonText1 = "Staffing"
        links1 = "/"

        buttonText2 = "Calendar"
        links2 = "/"

        buttonText3 = "Finance"
        links3 = "/"

        buttonText4 = "Vacancy"
        links4 = "/"

        buttonText5 = "Mail"
        links5 = "/"
        />
        <div style={{ left: "500px" }}>
        <div style={{ padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          
          
        
          <BoxEmployee onEmployeeClick={handleEmployeeClick} />
         
        </div>
      </div>
    </div>
    </div>
  );
}




