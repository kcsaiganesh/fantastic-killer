import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavbarComponent from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </>
  );
}

export default App;
