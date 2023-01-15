import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CubicMenu from "./components/CubicMenu/CubicMenu";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import NoPage from "./pages/NoPage/NoPage";
import HSlide from "./components/Slide/HSlide";
import "./index.scss";

export default function App() {
  const [currentHSlide, updateHSlide] = useState(0);
  const [currentVSlide, updateVSlide] = useState(0);
  
  function handleResize (){
  let resizeTimer;
  document.body.classList.add("resize-transition-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-transition-stopper");
  }, 400);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
});
  return (
    <main>
    <CubicMenu currentSlide={currentHSlide} updateSlide={updateHSlide}/>
    <HSlide
      key={1}
      currentSlide={currentHSlide}
      updateSlide={updateHSlide}
      index={0}
      slidesNb={3}
      nextPage = {"Works"}>
      <Home />
    </HSlide>
    <HSlide
      key={2}
      currentSlide={currentHSlide}
      updateSlide={updateHSlide}
      index={1}
      slidesNb={3}
      previousPage = {"Home"}
      nextPage = {"About"}>
      <Work currentSlide={currentVSlide} updateSlide={updateVSlide}/>
    </HSlide>
    <HSlide
      key={3}
      currentSlide={currentHSlide}
      updateSlide={updateHSlide}
      index={2}
      slidesNb={3}
      previousPage = {"Works"}>
      <About />
    </HSlide>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
