import { useContext } from "react";
import Project from "../../components/Project/Project";
import { works } from "../../data/works";
import { SlideContext } from "../../index";
import "./ProjectsPage.scss";

export default function ProjectsPage(props) {
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    const slidesNb = works.getWorks().length;
    const cubeClick = (key) => {
        setCurrentSlide({ ...currentSlide, v: key - 1 });
    };

    return (
        <section className="projects">
            {works.getWorks().map((projectsItems, index) => (
                <Project
                    key={projectsItems.key}
                    projectItems={projectsItems}
                    index={index}
                    slidesNb={slidesNb}
                />
            ))}

            <nav className="projects__navigation">
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
        </section>
    );
}
