import Cube from "../../components/Cube/Cube";
import VSlide from "../../components/Slide/VSlide";
import Detail from "../../components/Work_detail/Work_detail";
import { works } from "../../data/works";
import "./Work.scss";

export default function Work({ currentSlide, updateSlide }) {
    const slidesNb = works.getWorks().length;
    return (
        <main>
            {works.getWorks().map((worksItems, index) => (
                <VSlide
                    key={worksItems.key}
                    currentSlide={currentSlide}
                    updateSlide={updateSlide}
                    index={index}
                    slidesNb={slidesNb}
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
                </VSlide>
            ))}
        </main>
    );
}
