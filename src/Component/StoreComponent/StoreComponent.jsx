import React from 'react'
import './StoreComponent.css'
import HeaderSharedComponent from '../SharedComponent/HeaderSharedComponent'
export default function StoreComponent() {
  const macImages = [
    "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg",
    "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg",
    "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_ease__bvgkz2zdltxy_large_2x.jpg",
];
  var data={}
  return (
    <div className='Store-Component'>
      <h1> <span className='store'> Store. </span>The best way to buy the products you love.</h1>
       <div>
            <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop>
                <source src='/mac.mp4'/>
            </video>
        </div>
    </div>
  )
}
