import Cube from "../../components/Cube/Cube";
import VSlide from "../../components/Slide/VSlide";
import Detail from "../../components/Work_detail/Work_detail";
import { works } from "../../data/works";
import "./Work.scss";

export default function Work(props) {
    const slidesNb = works.getWorks().length;
    return (
        <>
            {works.getWorks().map((worksItems, index) => (
                <VSlide
                    key={worksItems.key}
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
                                pageVIndex={index}
                            />
                        </div>
                    </div>
                </VSlide>
            ))}
        </>
    );
}
