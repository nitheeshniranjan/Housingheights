import { Route, Routes, useLocation } from "react-router-dom";
import Pages from "./components/pages/Pages";
import Header from "./components/common/header/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import 'font-awesome/css/font-awesome.min.css';

import "./App.css";

function App() {
  const location = useLocation();  // Get current page location

  // Hide header & footer on these pages
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;

