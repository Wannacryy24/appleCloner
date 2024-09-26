import React, { useEffect, useState } from 'react'
import Image from '../SharedComponent/Image'
import Navbar from '../SharedComponent/Navbar';
import './header.css'
import './Hamburger.css'
import { useNavigate } from 'react-router-dom';
const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "Tv & Home", "Entertainment", "Accessories", "Support"
];

const navInnerItems = [ ];
export default function Header() {

  const [showHam , setShowHam] = useState(false);
  const [scrolled , serScroll] = useState(false);
  const navigate = useNavigate();

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
  },[]);

  const handleToHome = ()=>{
    navigate('/')
  }
  
  const handleHamburger = () => {
    setShowHam(!showHam);
  }

  const closeHamburger = ()=>{
    setShowHam(false);
  }

  return (
    <header className={scrolled ? 'headerTransparent':''}>
        <Image src={'/appleicon.svg'} onClick={handleToHome}/>
        <Navbar data={navItems} className={showHam ?'header-nav-hamburger' : 'header-nav'} onClick={closeHamburger}/>
        <Image src={'/search.svg'}/>
        <Image src={'/cart.svg'}/>
        <div className='hamburger-div' onClick={handleHamburger}>
          <img src="/burger.svg" alt="" className='hamburger'/>
        </div>
    </header>
  )
}
