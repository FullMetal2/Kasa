import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error404 from "./Pages/error404/Error404";
import Housing from "./Pages/housing/Housing";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/Error404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/Error404" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
