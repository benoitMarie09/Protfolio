import { useEffect, useContext, useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./HSlide.scss";
import { SlideContext } from "../../index";

function HSlide(props) {
  const {currentSlide, setCurrentSlide } = useContext(SlideContext);
  const{ index, slidesNb, nextPage, previousPage  } = props;
  const z = slidesNb - index;
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/works":
        setCurrentSlide({...currentSlide, h:1});
        break;
      case "/about":
        setCurrentSlide({...currentSlide, h:2});
        break;
      default:
        setCurrentSlide({...currentSlide, h:0});
        break;
      
    }
  }, [location.pathname]);

  return (
    <div
      className={`Hslide ${
        currentSlide.h === index
          ? ""
          : currentSlide.h > index
          ? "Hslide--left"
          : "Hslide--rigth"
      }`}
    >
      <Link to={nextPage ? nextPage.url : ""}><div className={`Sidebar Sidebar--right ${currentSlide.h === slidesNb-1 ? "Sidebar--hidden" : ""}`} ><span>{nextPage ? nextPage.name:""}</span> </div></Link>
      <Link to={previousPage ? previousPage.url: ""}><div className={`Sidebar Sidebar--left ${currentSlide.h === 0 ? "Sidebar--hidden" : ""}`} ><span>{previousPage ? previousPage.name : ""}</span></div></Link>
      {props.children}
      <Outlet />
    </div>
  );
}

export default HSlide