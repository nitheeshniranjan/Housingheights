import React, { useState } from "react";
import { properties } from "../data/Data";
import PropertyCard from "./PropertyCard";
import PropHeader from "./PropHeader";
import "./properties.css";




const Properties = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("Western Mumbai");

  // State for filters
  const [budget, setBudget] = useState([0, 100]); // Example range 0 to 100 Lac
  const [area, setArea] = useState([0, 5000]); // Example range 0 to 5000 sq.ft.
  const [propertyType, setPropertyType] = useState("");
  const [constructionStatus, setConstructionStatus] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [furnishingStatus, setFurnishingStatus] = useState("");
  const [availableFor, setAvailableFor] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [ageOfProperty, setAgeOfProperty] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearAllFilters = () => {
    setPropertyType("");
    setConstructionStatus("");
    setPostedBy("");
    setFurnishingStatus("");
    setAvailableFor("");
    setAvailableFrom("");
    setAgeOfProperty("");
    setVerifiedOnly(false);
    setSelectedAmenities([]);
    setBudget([0, 100]);
    setArea([0, 5000]);
  };

  const handleCheckboxChange = (value) => {
    setSelectedAmenities((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="properties-page">
      <PropHeader />
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-md-3 filters p-4 shadow-sm">
            <h2 className="mb-3">Filters</h2>
            <button className="clear-all" onClick={clearAllFilters}>Clear All</button>

            {/* Budget & Area Slider */}
            <h4>Budget (₹ Lac)</h4>
            <input type="range" min="0" max="100" step="1"
              value={budget[0]} onChange={(e) => setBudget([e.target.value, budget[1]])} />
            <input type="range" min="0" max="100" step="1"
              value={budget[1]} onChange={(e) => setBudget([budget[0], e.target.value])} />
            <p>{budget[0]} - {budget[1]} Lac</p>

            <h4>Area (sq.ft.)</h4>
            <input type="range" min="0" max="5000" step="10"
              value={area[0]} onChange={(e) => setArea([e.target.value, area[1]])} />
            <input type="range" min="0" max="5000" step="10"
              value={area[1]} onChange={(e) => setArea([area[0], e.target.value])} />
            <p>{area[0]} - {area[1]} sq.ft.</p>

            {/* Property Type Dropdown */}
            <h4>Type of Property</h4>
            <select className="form-control" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Select</option>
              <option value="Apartment">Residential Apartment</option>
              <option value="Villa">Independent House/Villa</option>
              <option value="Land">Residential Land</option>
            </select>

            {/* Construction Status Dropdown */}
            <h4>Construction Status</h4>
            <select className="form-control" value={constructionStatus} onChange={(e) => setConstructionStatus(e.target.value)}>
              <option value="">Select</option>
              <option value="New Launch">New Launch</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Ready to Move">Ready to move</option>
            </select>

            {/* Posted By Dropdown */}
            <h4>Posted By</h4>
            <select className="form-control" value={postedBy} onChange={(e) => setPostedBy(e.target.value)}>
              <option value="">Select</option>
              <option value="Owner">Owner</option>
              <option value="Builder">Builder</option>
              <option value="Dealer">Dealer</option>
            </select>

            {/* Furnishing Status Dropdown */}
            <h4>Furnishing Status</h4>
            <select className="form-control" value={furnishingStatus} onChange={(e) => setFurnishingStatus(e.target.value)}>
              <option value="">Select</option>
              <option value="Furnished">Furnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>

            {/* Available For Dropdown */}
            <h4>Available For</h4>
            <select className="form-control" value={availableFor} onChange={(e) => setAvailableFor(e.target.value)}>
              <option value="">Select</option>
              <option value="Family">Family</option>
              <option value="Single Men">Single Men</option>
              <option value="Single Women">Single Women</option>
            </select>

            {/* Available From Dropdown */}
            <h4>Available From</h4>
            <select className="form-control" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)}>
              <option value="">Select</option>
              <option value="Any Time">Any Time</option>
              <option value="Immediately">Immediately</option>
            </select>

            {/* Age of Property Dropdown */}
            <h4>Age of Property</h4>
            <select className="form-control" value={ageOfProperty} onChange={(e) => setAgeOfProperty(e.target.value)}>
              <option value="">Select</option>
              <option value="0-1 years">0-1 years old</option>
              <option value="5-10 years">5-10 years old</option>
            </select>

            {/* Verified Property Toggle */}
            <h4>Verified Property</h4>
            <label className="switch">
              <input type="checkbox" checked={verifiedOnly} onChange={() => setVerifiedOnly(!verifiedOnly)} />
              <span className="slider round"></span>
            </label>

            <button className="btn btn-primary w-100 mt-3">Apply Filters</button>
          </div>

          {/* Main Content */}
          <div className="col-md-9 p-4">
            <div className="row">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} isWishlisted={wishlist.includes(property.id)} toggleWishlist={toggleWishlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
