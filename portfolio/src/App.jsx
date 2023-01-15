import React from "react";
import { useEffect} from "react";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import HSlide from "./components/Slide/HSlide";
import "./Main.scss";

export default function App() {
  

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
      <HSlide
        key={1}
        index={0}
        slidesNb={3}
        nextPage = {{name:"Works",url:"/works"}}>
        <Home />
      </HSlide>
      <HSlide
        key={2}
        index={1}
        slidesNb={3}
        previousPage = {{name:"Home",url:"/"}}
        nextPage = {{name:"About",url:"/about"}}>
        <Work/>
      </HSlide>
      <HSlide
        key={3}
        index={2}
        slidesNb={3}
        previousPage = {{name:"Works",url:"/works"}}>
        <About />
      </HSlide>
    </main>
  );
}


