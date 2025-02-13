import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";


const Pages = () => {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    
    </>
  );
};

export default Pages;
