import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        {/* <Route exact path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
