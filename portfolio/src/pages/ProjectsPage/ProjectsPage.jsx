import { useContext } from "react";
import Project from "../../components/Project/Project";
import { works } from "../../data/works";
import { SlideContext } from "../../index";
import "./ProjectsPage.scss";


/**
 * Component to present a web site project
 * @returns Project page that present a website with an info section and a cube section with images of the site and a small cube to navigate each project
 */
export default function ProjectsPage() {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    /* State to track the total number of verticals slides */
    const slidesNb = works.getWorks().length;
    /**
     * function to handle projects navigations links with smalls cubes
     * @param {number} key 
     */
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
