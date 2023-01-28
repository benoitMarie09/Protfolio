import VSlide from "../Slide/VSlide";
import Cube from "./Cube/Cube";
import Info from "./Info/Info";
import "./Project.scss"

export default function Project(props) {
    const { projectItems, index, slidesNb } = props;
    return (
        <VSlide index={index} slidesNb={slidesNb}>
            <article className="project">
                <header className="project__title">
                  <h2>{projectItems.details.name}</h2>
                </header>
                <section className="project__cube">
                    <Cube images={projectItems.images} id={projectItems.key} />
                </section>

                <section className="project__info">
                    <Info details={projectItems.details} pageVIndex={index} />
                </section>
            </article>
        </VSlide>
    );
}
