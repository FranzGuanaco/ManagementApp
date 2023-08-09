import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BoxEmployee from '../Box/BoxEmployee';
import AlignMenuShorter from '../Menu/AlignMenuShorter';
import BoxNews from '../Box/BoxNews'
import { Link } from "react-router-dom";
import ParamPic from './ParamPic';
import ViewAccount from './ViewAccount';

export default function Homepage() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const redirectUrl = `/Employee details?=${selectedEmployeeId}`;

  useEffect(() => {
    console.log("result:", selectedEmployeeId);
    if(selectedEmployeeId !== null){
    window.location.href = redirectUrl;
    }
  }, [selectedEmployeeId]);

  const handleEmployeeClick = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    
  };
  return (
    <div className="home">
      <div className='menu-left'>
        
          <BoxEmployee onEmployeeClick={handleEmployeeClick} />
                   
      </div>
     
    </div>
  );
}


