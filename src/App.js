import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Pages from "./components/pages/Pages";
import Header from "./components/common/header/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/login/Login";
import ForgotPassword from "./components/login/ForgotPassword";
import ResetPassword from "./components/login/ResetPassword";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";

import 'font-awesome/css/font-awesome.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const location = useLocation();

  // Hide Header/Footer on specific pages
  const hideHeaderFooter = ["/login", "/signup", "/forgot-password", "/reset-password"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* ✅ Protect Routes with PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* ✅ Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
