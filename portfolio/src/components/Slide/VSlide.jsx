import "./VSlide.scss";

function VSlide(props) {
  const { currentSlide, updateSlide, index, slidesNb } = props;
  const z = slidesNb - index;
  function wheelSlide(event) {
    if (event.deltaY > 0) {
      if (currentSlide < slidesNb - 1) {
        updateSlide(index + 1);
      }
    } else {
      if (currentSlide >= 1) updateSlide(index - 1);
    }
  }

  return (
    <div
      className={`Vslide ${
        currentSlide === index
          ? ""
          : currentSlide > index
          ? "Vslide--up"
          : "Vslide--down"
      }`}
      style={{ zIndex: z }}
      onWheel={(e) => wheelSlide(e)}
    >
      {props.children}
    </div>
  );
}

export default VSlide;
