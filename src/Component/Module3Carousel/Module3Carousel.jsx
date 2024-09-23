import React, { useEffect, useState } from 'react'
import './Module3Carousel.css'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { motion } from 'framer-motion';
let imageData= ['/img1.jpg','/img2.jpg','/img3.jpg','/img4.jpg','/img5.jpg','/img6.jpg','/img7.jpg','/img8.jpg','/img9.jpg'];
let smallCarousalData  = ['/smallcar1.jpg','/smallcar2.jpg','/smallcar3.jpg','/smallcar4.jpg','/smallcar5.jpg','/smallcar6.png',]; 
export default function Module3Carousel() {
    const [ index , setIndex] = useState(0);
    // const [xAxis , setXAxis] = useState(0);
    
    // useEffect(()=>{
    //   const intervalId = setInterval(()=>{
    //     setXAxis(prevAxis=>{
    //     if(prevAxis <= -1100){
    //       return 0
    //     }
    //     else{
    //      return prevAxis-50
    //     }} 
    //   );
    //   },1000);
    //   return ()=> clearInterval(intervalId);
    // },[xAxis]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const getPrevIndex = () => (index === 0 ? imageData.length - 1 : index - 1);
    const getNextIndex = () => (index === imageData.length - 1 ? 0 : index + 1);

  return (
    <>
    <div className='module3-carousel-div'>
       <img
       src={imageData[getPrevIndex()]} alt="previous" className='car-1' />
       <img src={imageData[index]} alt="current" className='car-2' />    
       <img src={imageData[getNextIndex()]} alt="next" className='car-3' />
    </div>
    <Marquee fade={true}
      direction="left"
      reverse={false}
      pauseOnHover={true}>
      {smallCarousalData.map((item,index)=>
        <img 
        src={item} alt=""  key={index}
        style={{height:'38vh' , width:'30vw'}}
        />
      )}
    </Marquee>
       </>
  )
}