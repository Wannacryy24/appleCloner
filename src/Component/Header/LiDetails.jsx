import React, { useCallback, useContext } from 'react';
import { HoverContext } from '../SharedComponent/HoverProvider';

const liData = [
  { type: 'store', items: ['Shop the Latest', 'Mac', 'iPad','iPhone','Apple Watch','Apple Vision Pro', 'Accessories'] },
  { type: 'mac', items: ['Explore All iPad', 'iPad Pro', 'iPad Air', 'iPad mini' , 'Apple Pencil', 'Keyboards'] ,
    shop:{name:'Shop iPad', details:['Shop iPad', 'iPad Accessories', 'Apple Trade In', 'Financing', 'College Student Offer']},
    moreFrom:{name:'More From Ipad', details:['iPad Support','AppleCare+ for iPad','iPadOS 18','Apple Intelligence','Apps by Apple','iCloud+','Education']}
  },
  {type:'ipad' , items: ['ipad1','ipad2' , 'ipad']}
];

export default function LiDetails({value}) {
  const {showLiDetails ,setShowLiDetails} = useContext(HoverContext);
  
  const filteredResult = liData.filter(item =>
    item.type.toLowerCase().includes(value.toLowerCase())
  );
  console.log(filteredResult);

  return (
    <div className='hoveredContent' 
      onMouseEnter={()=>setShowLiDetails(true)}
      onMouseLeave={()=> setShowLiDetails(false)}
    >
      {filteredResult.length > 0 ? (
        filteredResult.map((item, index) => (
          <div key={index}>
            <h4>{item.type}</h4>
            <ul>
              {item.items.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No results found for "{value}".</p>
      )}
    </div>
  );
}
