import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error404 from "./Pages/error404/Error404";
import Housing from "./Pages/housing/Housing";
import "./data/JSON.logements.json";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
