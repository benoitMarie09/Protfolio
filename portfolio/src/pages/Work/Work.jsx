import { useContext } from "react";
import Cube from "../../components/Cube/Cube";
import VSlide from "../../components/Slide/VSlide";
import Detail from "../../components/Work_detail/Work_detail";
import { works } from "../../data/works";
import { SlideContext } from "../../index";
import "./Work.scss";

export default function Work(props) {
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    const slidesNb = works.getWorks().length;
    const cubeClick = (key) => {
        setCurrentSlide({ ...currentSlide, v: key - 1 });
    };

    return (
        <>
            {works.getWorks().map((worksItems, index) => (
                <VSlide key={worksItems.key} index={index} slidesNb={slidesNb}>
                    <div className="work">
                        <div className="work__cube">
                            <Cube
                                images={worksItems.images}
                                id={worksItems.key}
                            />
                        </div>
                        <span className="v-separator sep-1"></span>
                        <div className="icon-scroll"></div>
                        <span className="v-separator sep-2"></span>
                        <div className="work__detail">
                            <Detail
                                details={worksItems.details}
                                pageVIndex={index}
                            />
                        </div>
                    </div>
                </VSlide>
            ))}

            <nav className="projects_navigation">
                {works.getWorks().map((worksItems) => (
                    <div className="scene" key={worksItems.key}>
                        <div
                            className={`cube cube--very-small 
                            ${
                                currentSlide.v === worksItems.key - 1
                                    ? "cube--active"
                                    : "cube--inactive "
                            }`}
                            onClick={() => {
                                cubeClick(worksItems.key);
                            }}
                        >
                            <div className="cube__front"></div>
                            <div className="cube__back">{worksItems.key}</div>
                            <div className="cube__top"></div>
                            <div className="cube__bottom"></div>
                            <div className="cube__left"></div>
                            <div className="cube__right"></div>
                        </div>
                    </div>
                ))}
            </nav>
        </>
    );
}
