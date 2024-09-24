import { useScroll } from 'framer-motion'
import React, { memo, useCallback, useState } from 'react'

export default function CallbackAndMemo() {
    // var  x = ()=>{
    //     console.log('counter2');
    // };
    //case First is Commented
    
    const [ count , setCount ] = useState(0);
    const [count2 , setCount2 ] = useState([]);
    var x= useCallback(()=>{
        console.log('Counter 2');
    } ,[count2]);
    const handleInc = () =>{
        console.log('Increase Called');
        setCount(count+1);
    }

  return (
    <div>
        <h1>Parent</h1>
        <p>{count}</p>
        <button onClick={handleInc}>Increase</button>
        <Child x={x} count2={count2}/>
    </div>
  )
}


//agar memo use Karte hai tab ye ek hi baar call hota hai but agar hum component me props pass kar dete hai to ye for se render hona shuru ho jata hai increase Button ke click karne pe vo firse galat hai 
// <Child/>
// jab tak child khali hai tab tak theek jaise hi props aaye ye firse gadbad karega

const  Child = memo(({x , count2}) => {
    console.log('child Called');
    return(
        <>
        </>
    )
})


//to tackle this we use useCallback as it 



