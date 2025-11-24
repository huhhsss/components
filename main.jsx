import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import AboutUS from "./components/AboutUS";
import Articles from "./components/Articles";
import Tracker from "./components/Tracker";
import More from "./components/More";
import Footer from "./components/Footer";

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/AboutUS">Przejdź do A1</Link>
          </li>
          <li>
            <Link to="/Articles">Przejdź do A2</Link>
          </li>
          <li>
            <Link to="/Tracker">Przejdź do A3</Link>
          </li>
          <li>
            <Link to="/More">Przejdź do A4</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/AboutUS" element={<AboutUS />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Tracker" element={<Tracker />} />
        <Route path="/More" element={<More />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
