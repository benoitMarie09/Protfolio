import { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./VSlide.scss";
import { SlideContext } from "../../index";

export default function VSlide(props) {
  const {currentSlide, setCurrentSlide } = useContext(SlideContext);
  const z = props.slidesNb - props.index;


  function wheelSlide(event) {

    if (event.deltaY > 0) {
      if (currentSlide.v < props.slidesNb - 1) {
        setCurrentSlide({...currentSlide,v:props.index+1});
      }
    } else {
      if (currentSlide.v >= 1) {
        setCurrentSlide({...currentSlide,v:props.index-1});
    }
  }
}

  return (
    <div index={props.index}
      className={`Vslide ${
        currentSlide.v === props.index
          ? ""
          : currentSlide.v > props.index
          ? "Vslide--up"
          : "Vslide--down"
      }`}
      style={{ zIndex: z }}
      onWheel={(e) => wheelSlide(e)}
    >
      {props.children}
      <Outlet />
    </div>
  );
}


