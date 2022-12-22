import React from "react";
import "../styles/EvaMats.css";
import { mats } from "./data";

export default function EvaMats() {
  return (
    <div className="eva-mats">
      <h4 className="mats-title">
        Что такое <span>EVA</span> коврики?
      </h4>
      <div className="mats-content">
      <div className="mats-card-container">
        {mats.map(mat => (
          <div key={mat.id} className="card">
            <img
              className="card-img"
              src={mat.image}
              alt={mat.title}
            />
            <div className="card-content">
              <div className="card-title">{mat.title}</div>
              <div className="card-desc">{mat.desc}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}
