import { useContext } from "react";
import Project from "../../components/Project/Project";
import projects from "../../data/works";
import { SlideContext } from "../../index";
import "./ProjectsPage.scss";

/**
 * Component to present a web site project
 * @returns Project page with all projects websites from in Verticals slides
 */
export default function ProjectsPage() {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    /* State to track the total number of verticals slides */
    const slidesNb = projects.getProjects().length;
    /**
     * function to handle projects navigations links with smalls cubes
     * @param {number} key
     */
    const cubeClick = (key) => {
        setCurrentSlide({ ...currentSlide, v: key - 1 });
    };

    return (
        <section className="projects">
            {projects.getProjects().map((projectsItems, index) => (
                <Project
                    key={projectsItems.key}
                    projectItems={projectsItems}
                    index={index}
                    slidesNb={slidesNb}
                />
            ))}

            <nav className="projects__navigation">
                {projects.getProjects().map((projectsItems) => (
                    <div className="scene" key={projectsItems.key}>
                        <div
                            className={`cube cube--xxs cube--xxxs 
                            ${
                                currentSlide.v === projectsItems.key - 1
                                    ? "cube--active"
                                    : "cube--inactive "
                            }`}
                            onClick={() => {
                                cubeClick(projectsItems.key);
                            }}
                        >
                            <div className="cube__front"></div>
                            <div className="cube__back">
                                {projectsItems.key}
                            </div>
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
