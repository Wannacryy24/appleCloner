import React, { useCallback, useContext } from 'react';
import { HoverContext } from '../SharedComponent/HoverProvider';
import { useNavigate } from 'react-router-dom';
import './LiDetails.css'

const liData = [
  { type: 'Store', items: ['Shop the Latest', 'Mac', 'iPad','iPhone','Apple Watch','Apple Vision Pro', 'Accessories'], 
    QuickLinks:{type:'Quick Links', QuickLinksData:['Find a store' , 'Order Status', 'Apple Trade In', 'Financing', 'College Student Offer']},
    specialStore:{specialStoreType:'Shop Special Stores', specialStoreData:['Certified Refurbished','Education','Business','Veterans and Military','Government']}},
  
  { type: 'Explore Mac', items: ['Explore All Mac', 'iPad Pro', 'Macbook Air', 'Macbook Pro' , 'iMac', 'Mac Mini'] ,
    QuickLinks:{type:'Shop Mac', QuickLinksData:['Shop Mac','Help me Choose', 'Mac Accessories', 'Apple Trade In', 'Financing', 'College Student Offer']},
    specialStore:{specialStoreType:'More From iMac', specialStoreData:['iMac Support','AppleCare+ for iMac','iMac 18','Apple Intelligence','Apps by Apple','iCloud+','Education']}
  },
  {type:'Explore ipad' , items: ['Explore All iPad','iPad Pro' , 'iPad Air','iPad','iPad mini' ,'Apple Pencil','Keyboards'],
  QuickLinks:{type:'Shop iPad', QuickLinksData:['shop iPad' , 'iPad Accessories', 'Apple Trade In', 'Financing', 'College Student Offer']},
  specialStore:{specialStoreType:'More From iPad', specialStoreData:['iPad Support','AppleCare+ for iPad','iPadOS 18','Education']}},
    
  { type:'Explore iPhone' , items: ['Explore All iPhone','iPhone 16 Pro' , 'iPhone 16' , 'iPhone 15 Pro','iPhone 16' ,'iPhone 14','iPhone SE'],
  QuickLinks:{type:'Shop iPad', QuickLinksData:['shop iPhone' , 'iPhone Accessories', 'Apple Trade In', 'Financing', 'College Student Offer']},
  specialStore:{specialStoreType:'More From iPad', specialStoreData:['iPhone Support','AppleCare+ for iPhone','iPhone 18','Education']}},
    
  { type:'Explore watch' , items: ['Explore All Watches','Apple Watch Series 10' , 'Apple Watch Ultra 2' , 'Apple Watch SE','Apple Watch Nike' ,'Apple Watch Hermes','Apple Watch Studio'],
  QuickLinks:{type:'Shop iPad', QuickLinksData:['shop Apple Watch' , 'Apple Watch Accessories', 'Apple Trade In', 'Financing', 'College Student Offer']},        specialStore:{specialStoreType:'More From iPad', specialStoreData:['Apple Watch Support','AppleCare+ for Apple Watch','Apple Watch','Education']}},
        
  { type:'Explore Vision' , items: ['Explore All Vision Pro'],
  QuickLinks:{type:'Shop iPad', QuickLinksData:['shop Apple Vision Pro' , 'Apple Vision Pro Accessories', 'Apple Trade In', 'Financing', 'College Student Offer']},
  specialStore:{specialStoreType:'More From iPad', specialStoreData:['Apple Vision Pro Support']}},
        
  { type:'Explore Tv & Home' , items: ['Explore TV & Home' , 'Apple Tv 4k', 'HomePod', 'HomePod mini'],
    QuickLinks:{type:'Shop Tv & Home', QuickLinksData:['Shop Apple Tv 4k', 'Shop HomePod', 'Shop HomePod mini']},
    specialStore:{specialStoreType:'More From Rv & Home', specialStoreData:['Apple Tv Support' , 'AppleCare+','Applt TV+']}},

    { type:'Entertainment' , items: ['Explore Entertainment' , 'Apple Tv 4k', 'Apple Music Support', 'Apple One','Apple TV+','Apple Music','Apple Arcade','Apple Fitness+','Apple News+'],
      QuickLinks:{type:'Shop Tv & Home', QuickLinksData:['Shop Apple Tv 4k', 'Shop HomePod', 'Shop HomePod mini']},
      specialStore:{specialStoreType:'Support', specialStoreData:['Apple Tv Support' , 'AppleCare+','Applt TV+']}},
];

export default function LiDetails({value=''}) {
  const navigate = useNavigate();
  const {showLiDetails ,setShowLiDetails} = useContext(HoverContext);
  var filteredResult;

  if(value != null ){
     filteredResult = liData.filter(item =>(item.type.toLowerCase().includes(value.toLowerCase())));
  }
  return (
    <div className='hoveredContent' 
      onMouseEnter={()=>setShowLiDetails(true)}
      onMouseLeave={()=> setShowLiDetails(false)}
    >
      {filteredResult.length > 0 ? (
        filteredResult.map((item, index) => (
          <div key={index} className='li-Details-main-div'>
            <div className='left-li-div'>
              <h1>{item.type}</h1>
              <ul>{item.items.map((val, i) => (<li key={i} >{val}</li>))}
              </ul>
            </div>
            <div className='middle-li-div'>
              <h1>{item.QuickLinks.type}</h1>
              <ul>
                {item.QuickLinks.QuickLinksData.map((item,index)=> <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div className='right-li-div'>
              <h1>{item.specialStore.specialStoreType}</h1>
              <ul>
                {item.specialStore.specialStoreData.map((item,index)=> <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No results found for "{value}".</p>
      )}
      <div className='li-hovered-blur'></div>
    </div>
  );
}