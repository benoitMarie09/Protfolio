import { useContext } from "react";
import Project from "../../components/Project/Project";
import projects from "../../data/works";
import { SlideContext } from "../../index";
import "./ProjectsPage.scss";
import Diapo from "../../components/presentation/diapo/Diapo";
import Text from "../../components/presentation/text/Text";
import Svg from "../../components/presentation/svg/Svg";

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
            {projects.getProjects().map((projectsItems, index) => {
                switch(projectsItems.type){
                    case "project":
                        return (
                            <Project
                                key={index}
                                projectItems={projectsItems}
                                index={index}
                                slidesNb={slidesNb}
                            />
                        )
                    case "diapo":
                        return (<Diapo
                                    key={index}
                                    projectItems={projectsItems}
                                    index={index}
                                    slidesNb={slidesNb}
                        />)
                    case "text":
                        return (<Text
                                    key={index}
                                    projectItems={projectsItems}
                                    index={index}
                                    slidesNb={slidesNb}
                                    pageVIndex={index}                                
                        />)
                    case "svg":
                        return (<Svg
                                    key={index}
                                    projectItems={projectsItems}
                                    index={index}
                                    slidesNb={slidesNb}                            
                        />)
                    default:
                        return (<></>)
                }

            }
            )}

            <nav className="projects__navigation">
                {projects.getProjects().map((projectsItems, index) => (
                    <div className="scene" key={index}>
                        <div
                            className={`cube   
                            ${
                                currentSlide.v === index
                                    ? "cube--active cube--xs"
                                    : "cube--inactive cube--xxs cube--responsive-xxxs"
                            }`}
                            onClick={() => {
                                cubeClick(index + 1);
                            }}
                        >
                            <div className="cube__front"></div>
                            <div className="cube__back">
                                {index + 1}
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
