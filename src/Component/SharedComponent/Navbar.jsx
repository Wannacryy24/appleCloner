import React, { useContext, useState } from 'react';
import LiDetails from '../Header/LiDetails';
import { HoverContext } from './HoverProvider';

export default function Navbar({ data, className }) {
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
          >
            {item}
          </li>
        ))}
      </ul>
      {showLiDetails && <LiDetails value={hoveredValue} />}
    </>
  );
}
