import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import NavMenu from "./components/NavMenu.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
