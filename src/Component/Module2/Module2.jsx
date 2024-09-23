import React from "react";
import './Module2.css'
var module2Data = [
  {
    name: "watvh2Ultra",
    logo: "./apple_watch_ultra2_logo.png",
    headline: "",
    subhead: "New finish. Never quit.",
    moreDetails: "",
    imageSrc: "/apple_watch_ultra2.jpg",
  },
  {
    name: "AirPods-4",
    logo: "",
    headline: "AirPods 4",
    subhead: "Iconic. Now supersonic. Available with Active Noise Cancellation.",
    moreDetails: "",
    imageSrc: "/AirPods-4.jpg",
  },
];
export default function Module2() {
  return (
    <div className="module2-Main-Div">
      {module2Data.map((item, index) => (
        <div className={item.name} key={index}  style={{ backgroundImage: `url(${item.imageSrc})`}}>
          <div className={`${item.name}-inner`}>
            {item.headline && (
              <h1 className={`${item.name}-h1 headline`}>{item.headline}</h1>
            )}
            {item.logo && (
              <img src={item.logo}/>
            )}
            <p className={`subhead-p-${item.name}`}>{item.subhead}</p>
          </div>
          <div className={`split-wrapper-bottom split-wrapper-bottom${item.name}`}>
            <div className="button-buy-learnmore-div">
              <button className="learn-more-btn">Learn more</button>
              <button className="buy-btn">Buy</button>
            </div>
            <div>
              {item.moreDetails && <p>{item.moreDetails}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
