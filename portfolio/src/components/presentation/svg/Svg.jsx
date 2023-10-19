import React from "react";
import VSlide from "../../Slide/VSlide";
import "./svg.scss";

export default function Svg(props) {
    const { projectItems, index, slidesNb } = props;

    return (
        <VSlide index={index} slidesNb={slidesNb}>
            <article className="text">
                <header className="text__title">
                    <h2>{projectItems.title}</h2>
                </header>
                <div className="text__container">
                    
                    
                    </div>
            </article>
        </VSlide>
    );
}
