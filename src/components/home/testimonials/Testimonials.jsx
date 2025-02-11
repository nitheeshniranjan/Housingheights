import React from "react";
import "./testimonials.css";
import { testimonials } from "../../data/Data";

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-img"
            />
            <div className="testimonial-content">
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-text">"{testimonial.review}"</p>
              <div className="star-rating">{"⭐".repeat(testimonial.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
