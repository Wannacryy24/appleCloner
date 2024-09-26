import React from 'react'
import HeaderSharedComponent from '../SharedComponent/HeaderSharedComponent';
const macImages = [
    "https://www.apple.com/v/watch/bo/images/overview/consider/feature_health__b8l8jg8aa0b6_xlarge.jpg",
    "https://www.apple.com/in/watch/images/overview/consider/feature_connectivity__k68bkgj3a6ie_xlarge.jpg",
    "https://www.apple.com/v/watch/bo/images/overview/consider/feature_personalization__fdz9dgc5afma_xlarge.jpg",
];
export default function Watch() {
  return (
    <HeaderSharedComponent
    title='Apple Watch The ultimate device for a healthy life.'
    macImages={macImages}
    videoSrc='/watch.mp4'
    />
  )
}