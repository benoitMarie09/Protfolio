import Cube from "../../components/Cube/Cube";
import Slide from "../../components/Slide/Slide";
import Detail from "../../components/Work_detail/Work_detail";
import { works } from "../../data/works";
import "./Work.scss";

export default function Work({ currentSlide, updateSlide }) {
  const slidesNb = works.getWorks().length;
  console.log(works.getWorks());
  return (
    <div>
      {works.getWorks().map((worksItems, index) => (
        <Slide
          key={worksItems.key}
          currentSlide={currentSlide}
          updateSlide={updateSlide}
          index={index}
          slideNb={slidesNb}>
          <div className="work_page">
            <Cube images={worksItems.images} id={worksItems.key} />
            <span className="v-separator"></span>
            <Detail details={worksItems.details} />
          </div>
        </Slide>
      ))}
    </div>
  );
}
