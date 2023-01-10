import Cube from "../../components/Cube/Cube";
import Slide from "../../components/Slide/Slide";
import Detail from "../../components/Work_detail/Work_detail";
import { works } from "../../data/works";
import "./Work.scss";

export default function Work({ currentSlide, updateSlide }) {
    const slidesNb = works.getWorks().length;
    return (
        <>
            {works.getWorks().map((worksItems, index) => (
                <Slide
                    key={worksItems.key}
                    currentSlide={currentSlide}
                    updateSlide={updateSlide}
                    index={index}
                    slideNb={slidesNb}
                >
                    <div className="work">
                        <div className="work__cube">
                            <Cube
                                images={worksItems.images}
                                id={worksItems.key}
                            />
                        </div>
                        <span className="v-separator"></span>
                        <div className="work__detail">
                            <Detail
                                details={worksItems.details}
                                currentSlide={currentSlide}
                                pageIndex={index}
                            />
                        </div>
                    </div>
                </Slide>
            ))}
        </>
    );
}
