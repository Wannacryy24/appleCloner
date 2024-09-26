import React from 'react'
import HeaderSharedComponent from '../SharedComponent/HeaderSharedComponent';
const macImages = [
    "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_productivity__d55aee5so6ky_xlarge.jpg",
    "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_creativity__gcfv7x90x42u_xlarge.jpg",
    "https://www.apple.com/v/ipad/home/ck/images/overview/consider/fc_learning__es1tt702bf6u_xlarge.jpg",
];
export default function Ipad() {
  return (
    <HeaderSharedComponent
        title='iPad Touch, draw and type on one magical device.'
        macImages={macImages}
        videoSrc='/ipad.mp4'
    />
  )
}
