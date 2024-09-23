import React from 'react';
import { iphoneandWatchData } from './iphone16';
import './renderPhonesandWatch.css'
export default function RenderPhonesandWatch() {
  return (
    <div className='homePage-collection-module'>
      {
        iphoneandWatchData.map((item, index) => (
          <div className={item.name} key={index}>
            <div className={`${item.name}-inner`}>
              {item.headline && <h1 className={`${item.name}-h1 headline`}>{item.headline}</h1>}
              {item.logo && <div style={{backgroundImage:`url(${item.logo})`}}></div>}
              <p className={`subhead-p`}>{item.subhead}</p>
            </div>
            <div className='split-wrapper-bottom'>
                <div className='button-buy-learnmore-div'>
              <button className='learn-more-btn'>Learn more</button>
              <button className='buy-btn'>Buy</button>
                </div>
              <div>
              <p>{item.moreDetails}</p>
              </div>
            </div>
            <div 
              style={{ backgroundImage: `url(${item.imageSrc})` }} 
              className={`${item.name}-image-wrapper`}
            >
            </div>
          </div>
        ))
      }
    </div>
  );
}
