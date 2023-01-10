import "./Slide.scss";

function Slide(props) {
  const { currentSlide, updateSlide, index, slideNb } = props;
  const z = slideNb - index;
  function wheelSlide(event) {
    if (event.deltaY > 0) {
      if (currentSlide < slideNb - 1) {
        updateSlide(index + 1);
      }
    } else {
      if (currentSlide >= 1) updateSlide(index - 1);
    }
  }

  return (
    <div
      className={`slide ${
        currentSlide === index
          ? ""
          : currentSlide > index
          ? "slide--up"
          : "slide--down"
      }`}
      style={{ zIndex: z }}
      onWheel={(e) => wheelSlide(e)}
    >
      {props.children}
    </div>
  );
}

export default Slide;