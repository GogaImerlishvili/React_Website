import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
