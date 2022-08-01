import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <div className="container">
      <Routes>
        {/* <Route exact path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
