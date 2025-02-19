import React from "react";
import { insightsData } from "../../data/Data";
import "./propertyInsights.css";

const PropertyInsights = () => {
  return (
    <section className="insights-container">
      <h2 className="title"> Property Insights</h2>
      <div className="insights-grid">
        {insightsData.map((item, index) => (
          <div key={index} className="insight-card">
            <div className="insight-card-header">
              <h3>{item.title}</h3>
            </div>
            <div className="insight-card-body">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyInsights;
