import React from "react";
import VSlide from "../../Slide/VSlide";
import "./diapo.scss";

export default function Diapo(props) {
    const { projectItems, index, slidesNb } = props;
    return (
        <VSlide index={index} slidesNb={slidesNb}>
            <article className="diapo">
                <header className="diapo__title">
                    <h2>{projectItems.title}</h2>
                </header>
                <div className="diapo__image" style={{backgroundImage:`url(${projectItems.image})`}}></div>
            </article>
        </VSlide>
    );
}
