import "./HSlide.scss";

function HSlide(props) {
  const { currentSlide, updateSlide, index, slidesNb } = props;
  const z = slidesNb - index;
  function rightArrowClick(event) {
        updateSlide(index + 1);
  }
  function leftArrowClick(event) {
    updateSlide(index - 1);
  }

  return (
    <div
      className={`Hslide ${
        currentSlide === index
          ? ""
          : currentSlide > index
          ? "Hslide--left"
          : "Hslide--rigth"
      }`}
      style={{ zIndex: z }}
    >
      <div className={`Sidebar Sidebar--right ${currentSlide === slidesNb-1 ? "Sidebar--hidden" : ""}`} onClick={rightArrowClick}><span>{props.nextPage}</span> </div>
      <div className={`Sidebar Sidebar--left ${currentSlide === 0 ? "Sidebar--hidden" : ""}`} onClick={leftArrowClick}><span>{props.previousPage}</span></div>
      {props.children}
    </div>
  );
}

export default HSlide