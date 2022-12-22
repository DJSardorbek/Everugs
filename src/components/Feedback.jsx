import React from "react";
import "../styles/Feedback.css";
import { sliderItems } from "./data";

export default function Feedback() {
  return (
    <div className="feedback-slider">
      <div className="slider-wrapper">
        <div className="slider-inner">
          {sliderItems.map((item) => (
            <div key={item.id} className={item.id === 2 ? 'slider active' : 'slider'}>
              <div className="slider-author">
                <img src={item.img} alt={item.author} />
              </div>
              <div className="slider-content">
                <div className="content-text">{item.text}</div>
                <div className="divider"></div>
                <div className="author">{item.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
