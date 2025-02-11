import { Route, Routes } from "react-router-dom";
import Pages from "./components/pages/Pages";
import Header from "./components/common/header/Header";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/home/Home.jsx"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Pages />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />  {/* Ensure this exists */}
      </Routes>
    </>
  );
}

export default App;
