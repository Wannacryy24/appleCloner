import React, { useState } from 'react'
import './Hamburger.css'
import { useScroll } from 'framer-motion'
export default function Hamburger({navItems}) {
  

  return (
    <>
    {
      showDetails && (
        <div className='item-details-hamburger-div'>
          {navItems.map((item,index)=><li key={index}>{item}</li>)}
        </div>
      )
    }
    </>
  )
}
