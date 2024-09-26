import React from 'react'

export default function Vision() {
  return (
    <div  className='Vision'>
        <img src="https://www.apple.com/v/apple-vision-pro/e/images/overview/hero/portrait_base_us__fucaqiry5e2q_medium.jpg" alt="" />
        <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop >               <source src='/vision.mp4'/></video>
        <img src="https://www.apple.com/v/apple-vision-pro/e/images/overview/intro/hardware_base__ecl2v43j73o2_medium.jpg" alt="" />
    </div>
  )
}
