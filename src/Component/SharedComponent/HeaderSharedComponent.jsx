import React from 'react'
import './HSc.css'
export default function HeaderSharedComponent({videoSrc ,title , macImages}) {
  return (
    <>
        {/* <h1> <span className='store'> Store. </span>The best way to buy the products you love.</h1> */}
        <h2>{title}</h2>
        <div>
            <video style={{ width: '100%', height: 'auto' }} autoPlay muted loop>
                <source src={videoSrc}/>
            </video>
            {macImages && macImages.length > 0 ? (
                <div className='header-shared-component-Img-Div'>
                    {macImages.map((item, index) => (
                        <img 
                            key={index} 
                            src={item} 
                            alt={`Image ${index + 1}`} 
                            className='header-shared-component-img' 
                        />
                    ))}
                </div>) :''
            }
        </div>
    </>
  )
}