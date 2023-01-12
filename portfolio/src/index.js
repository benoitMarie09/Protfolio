import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CubicMenu from "./components/CubicMenu/CubicMenu";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import "./index.scss";

export default function App() {
  const [currentSlide, updateSlide] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CubicMenu currentSlide={currentSlide} updateSlide={updateSlide} />
          }>
          <Route
            index
            element={
              <Home />
            }
          />
          <Route
            path="works"
            element={
              <Work currentSlide={currentSlide} updateSlide={updateSlide} />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
