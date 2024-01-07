// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Adjust the import path based on your project structure
import Services from "./components/Services";
import Tech from "./components/TechTransfer";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/technology_transfer" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
