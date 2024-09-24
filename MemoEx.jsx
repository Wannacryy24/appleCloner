import { useScroll } from 'framer-motion'
import React, { useMemo, useState } from 'react'

export default function MemoEx() {
    const [todo , setTodo] = useState([1,2,3]);
    const [count , setCount ] = useState(0); 

    
    const expensiveCalculation = useMemo(()=>{
        let result;
        for(var i=1 ; i<90000 ;i++){
            result = 2000*i*i*count;
        }
        return result;
    },[count]);


    const handleInc = ()=>{
        setCount(pcount=>pcount+1);
    }

    const handleDec = ()=>{
        setCount(pcount=>pcount-1);
    }

  return (
    <>
    <div>
        count : {count}
        <hr/>
        <button onClick={handleInc} style={{backgroundColor:'black', color:'red'}}>increase</button>
        
        <hr/>
        <hr/>
        <hr/>

        <button onClick={handleDec} style={{backgroundColor:'black', color:'red'}}>D</button>
    </div>
        <p>{expensiveCalculation}</p>
    </>
  )
}
