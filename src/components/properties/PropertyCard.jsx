import React from "react";
import { FaHeart } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const PropertyCard = ({ property, isWishlisted, toggleWishlist }) => {
  // Ensure valid latitude & longitude; fallback to Mumbai
  const hasValidLocation = property.latitude !== undefined && property.longitude !== undefined;
  const position = hasValidLocation ? [property.latitude, property.longitude] : [19.0760, 72.8777];

  return (
    <div className="col-md-6 mb-4">
      <div className="card property-card shadow-sm p-3">
        <img src={property.image} className="card-img-top" alt={property.title} />
        <div className="card-body">
          <h6 className="text-muted">{property.location}</h6>
          <h5 className="card-title">{property.title}</h5>
          <p className="text-success fw-bold">{property.price} /month</p>
          <p className="text-muted">+ Deposit {property.deposit}</p>
          <p className="small">{property.area} sqft • {property.bhk} BHK • {property.bathrooms} Baths</p>

          <div className="highlights">
            {property.highlights?.map((highlight, index) => (
              <span key={index} className="badge bg-light text-dark me-1">{highlight}</span>
            ))}
          </div>

          {/* ✅ Only render map if latitude & longitude exist */}
          {hasValidLocation && (
            <MapContainer center={position} zoom={13} style={{ height: "200px", width: "100%", marginTop: "10px" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={position}>
                <Popup>{property.title}</Popup>
              </Marker>
            </MapContainer>
          )}

          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="text-muted small">{property.postedTime} ago</span>
            <span className="verified-badge">99acres Verified</span>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="text-primary fw-bold">{property.dealer}</span>
            <button className="btn btn-outline-primary">Contact</button>
          </div>

          <FaHeart
            className={`wishlist-icon ${isWishlisted ? "active" : ""}`}
            onClick={() => toggleWishlist(property.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
