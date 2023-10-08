import React, { useState } from 'react';
import "../styles/TableFloorMap.css";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart, faCertificate } from '@fortawesome/free-solid-svg-icons';

const TableFloorMap = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div className="imageContainer">


      {/* <button onClick={handleToggle}>
        {isOn ? 'On' : 'Off'}
      </button> */}

      <i class="fa-solid fa-certificate but-1" onClick={handleToggle}></i>
      <i class="fa-solid fa-certificate but-2" onClick={handleToggle}></i>
      <i class="fa-solid fa-certificate but-3" onClick={handleToggle}></i>
      <i class="fa-solid fa-certificate but-4" onClick={handleToggle}></i>
      <i class="fa-solid fa-certificate but-5" onClick={handleToggle}></i>
      <i class="fa-solid fa-certificate but-6" onClick={handleToggle}></i>
      <i class="fa-solid fa-certificate but-7" onClick={handleToggle}></i>





    </div>
  );
};

export default TableFloorMap;
