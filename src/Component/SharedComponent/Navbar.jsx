import React, { useCallback, useContext, useState } from 'react';
import LiDetails from '../Header/LiDetails';
import { HoverContext } from './HoverProvider';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ data, className , onClick}) {
  const navigate = useNavigate();
  const {showLiDetails ,setShowLiDetails} = useContext(HoverContext);
  const [hoveredValue, setHoveredValue] = useState('');
  
  const showDetails = (e) => {
    const targetedValue = e.target.textContent;
    setHoveredValue(targetedValue);
    setShowLiDetails(true);
  };

  const hideDetails = () => {
    setShowLiDetails(false);
  };

  const handleliItemClick = useCallback((val) => {
    console.log(val);
      navigate(val);
      setShowLiDetails(false);
      onClick();
  },[navigate])

  return (
    <>
      <ul className={className}>
        {data.map((item, index) => (
          <li
            className={`item-${index}`}
            key={index}
            onMouseEnter={showDetails}
            onMouseLeave={hideDetails}
            style={{ cursor: 'pointer' }}
            onClick={()=>handleliItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      {showLiDetails && <LiDetails value={hoveredValue} />}
    </>
  );
}