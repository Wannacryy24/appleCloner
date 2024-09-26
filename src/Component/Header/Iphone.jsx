import React from 'react'
import HeaderSharedComponent from '../SharedComponent/HeaderSharedComponent'
const macImages = [
    "https://www.apple.com/in/iphone/home/images/overview/consider/apple_intelligence__e2hdg0mpzvki_xlarge.jpg",
    "https://www.apple.com/v/iphone/home/bw/images/overview/consider/camera__exi2qfijti0y_xlarge.jpg",
    "https://www.apple.com/v/iphone/home/bw/images/overview/consider/innovation__os9bmmo3mjee_xlarge.jpg",
];
export default function Iphone() {
  return (
    <HeaderSharedComponent
    title='iPhone Designed to be loved.'
    macImages={macImages}
    videoSrc='/iphone.mp4'
    />
  )
}
