// The best way to buy the products you love.
import React from 'react'
import HeaderSharedComponent from '../SharedComponent/HeaderSharedComponent'
const macImages = [
    "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg",
    "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg",
    "https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_ease__bvgkz2zdltxy_large_2x.jpg",
];
export default function Mac() {
  return (
    <HeaderSharedComponent
        title='The best way to buy the products you love.'
        macImages={macImages}
        videoSrc='/mac.mp4'
    />
  ) 
}
