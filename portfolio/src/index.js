import React from "react";
import { useState,createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CubicMenu from "./components/CubicMenu/CubicMenu";
import App from "./App";
import NoPage from "./pages/NoPage/NoPage";

export const SlideContext = createContext({currentSlide : {v:0,h:0},setCurrentSlide:()=>{}});

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState({v:0,h:0})
  const value = {currentSlide, setCurrentSlide}
  return (
    <SlideContext.Provider value={value}>
      <Routes>
        <Route
          path="/"
          element={
            <CubicMenu />
          }>
          <Route
            index
            element={
              <App />
            }
          />
          <Route
            path="works"
            element={
              <App />
            }
          />
          <Route path="about" 
          element={
            <App />
          } />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> 
    </SlideContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>
)