import React, { useState } from 'react';
import "../styles/TableFloorMap.css";
import { faCow, faBreadSlice, faShrimp, faEgg, faSeedling, faHeart, faCertificate } from '@fortawesome/free-solid-svg-icons';

const TableFloorMap = () => {
  const [isOn, setIsOn] = useState(false);
  const [activeButtons, setActiveButtons] = useState({});

  const handleToggle = (buttonId) => {
    setActiveButtons(prevState => ({
      ...prevState,
      [buttonId]: !prevState[buttonId]
    }));
  };

  return (
    <div className="imageContainer">
      <i className={`fa-solid fa-certificate but-1 ${activeButtons[1] ? 'activeButton' : ''}`} onClick={() => handleToggle(1)}></i>
      <i className={`fa-solid fa-certificate but-2 ${activeButtons[2] ? 'activeButton' : ''}`} onClick={() => handleToggle(2)}></i>
      <i className={`fa-solid fa-certificate but-3 ${activeButtons[3] ? 'activeButton' : ''}`} onClick={() => handleToggle(3)}></i>
      <i className={`fa-solid fa-certificate but-4 ${activeButtons[4] ? 'activeButton' : ''}`} onClick={() => handleToggle(4)}></i>
      <i className={`fa-solid fa-certificate but-5 ${activeButtons[5] ? 'activeButton' : ''}`} onClick={() => handleToggle(5)}></i>
      <i className={`fa-solid fa-certificate but-6 ${activeButtons[6] ? 'activeButton' : ''}`} onClick={() => handleToggle(6)}></i>
      <i className={`fa-solid fa-certificate but-7 ${activeButtons[7] ? 'activeButton' : ''}`} onClick={() => handleToggle(7)}></i>
      <i className={`fa-solid fa-certificate but-8 ${activeButtons[8] ? 'activeButton' : ''}`} onClick={() => handleToggle(8)}></i>
      <i className={`fa-solid fa-certificate but-9 ${activeButtons[9] ? 'activeButton' : ''}`} onClick={() => handleToggle(9)}></i>
      <i className={`fa-solid fa-certificate but-10 ${activeButtons[10] ? 'activeButton' : ''}`} onClick={() => handleToggle(10)}></i>
      <i className={`fa-solid fa-certificate but-11 ${activeButtons[11] ? 'activeButton' : ''}`} onClick={() => handleToggle(11)}></i>
      <i className={`fa-solid fa-certificate but-12 ${activeButtons[12] ? 'activeButton' : ''}`} onClick={() => handleToggle(12)}></i>
      <i className={`fa-solid fa-certificate but-13 ${activeButtons[13] ? 'activeButton' : ''}`} onClick={() => handleToggle(13)}></i>
      <i className={`fa-solid fa-certificate but-14 ${activeButtons[14] ? 'activeButton' : ''}`} onClick={() => handleToggle(14)}></i>
      <i className={`fa-solid fa-certificate but-15 ${activeButtons[15] ? 'activeButton' : ''}`} onClick={() => handleToggle(15)}></i>
      <i className={`fa-solid fa-certificate but-16 ${activeButtons[16] ? 'activeButton' : ''}`} onClick={() => handleToggle(16)}></i>
      <i className={`fa-solid fa-certificate but-17 ${activeButtons[17] ? 'activeButton' : ''}`} onClick={() => handleToggle(17)}></i>
      <i className={`fa-solid fa-certificate but-18 ${activeButtons[18] ? 'activeButton' : ''}`} onClick={() => handleToggle(18)}></i>

    </div>
  );
};

export default TableFloorMap;
