import React, { useEffect, useState } from 'react'
import Image from '../SharedComponent/Image'
import Navbar from '../SharedComponent/Navbar';
import './header.css'
const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "Airpods", "Tv & Home", "Entertainment", "Accessories", "Support"
];



export default function Header() {
  const [scrolled , serScroll] = useState(false);
  const handleScroll = ()=>{
    if(window.scrollY>1){
      serScroll(true);
    }
    else
    serScroll(false);
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll' , handleScroll); 
  })

  return (
    <header className={scrolled ? 'headerTransparent':''}>
        <Image src={'/appleicon.svg'}/>
        <Navbar data={navItems} className={'header-nav'}/>
        <Image src={'/search.svg'}/>
        <Image src={'/cart.svg'}/>
    </header>
  )
}
