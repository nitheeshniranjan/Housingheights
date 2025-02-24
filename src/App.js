import { Route, Routes, useLocation } from "react-router-dom";
import Pages from "./components/pages/Pages";
import Header from "./components/common/header/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import ForgotPassword from "./components/login/ForgotPassword";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Properties from "./components/properties/Properties"; 
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();

  // Hide main Header & Footer on login/signup pages
  const hideHeaderFooter = ["/login", "/signup", "/forgot-password","/Properties"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}  {/* ✅ Main header visible everywhere except login/signup */}
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Properties" element={<Properties />} />  {/* ✅ PropHeader is inside this */}
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
