import React, { act, useEffect, useReducer, useState } from 'react'

function reducer(state, action){
    switch(action.type){
        case 'fetched-Data-Set':
            return action.payload;
        default:
            return state        
    }
}

export default function Todo() {
    const [state, dispatch] = useReducer(reducer, []);
    
    useEffect(()=>{
        const todoData = async() => {
          const resp =  await fetch('https://jsonplaceholder.typicode.com/todos/')
            const data = await resp.json()    
            console.log(data);
            dispatch({type:'fetched-Data-Set' , payload:data}   );      
        }
        todoData();
    },[])


  return (
    <div>{
        state.map(item => <li key={item.id}>
            {item.title}
        </li>)    

    }</div>
  )
}
