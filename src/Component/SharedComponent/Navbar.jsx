import React from 'react'

export default function Navbar({data , className}) {
  return (
    <ul className={className} >
        {data.map((item,index)=><li className={`item-${index}`} key={item}>{item}</li>)}
    </ul>
  )
}
