import VSlide from "../Slide/VSlide";
import Cube from "./Cube/Cube";
import Info from "./Info/Info";
import "./Project.scss";

/**
 * @param {*} props {
 * projectIems => object / all information, images and url about the website project }
 * @returns A vertical slide with a project information section and an project images cube
 */
export default function Project(props) {
    const { projectItems, index, slidesNb } = props;
    return (
        <VSlide index={index} slidesNb={slidesNb}>
            <article className="project">
                <header className="project__title">
                    <h2>{projectItems.details.name}</h2>
                </header>
                <section className="project__cube">
                    <Cube images={projectItems.images} id={index} />
                </section>

                <section className="project__info">
                    <Info details={projectItems.details} pageVIndex={index} />
                </section>
            </article>
        </VSlide>
    );
}
