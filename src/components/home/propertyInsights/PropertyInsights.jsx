import React, { useState } from "react";
import { insightsData } from "../../data/Data";
import "./propertyInsights.css";

const PropertyInsights = () => {
  return (
    <section className="insights-container">
      <h2 className="title"> Property Insights</h2>
      <div className="insights-grid">
        {insightsData.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{item.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyInsights;
