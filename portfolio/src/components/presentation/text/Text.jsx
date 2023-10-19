import React, { useState } from "react";
import VSlide from "../../Slide/VSlide";
import TextTyper from "../../TextTyper/TextTyper";
import "./text.scss";

export default function Text(props) {
    const { projectItems, index, slidesNb, pageVIndex } = props;

    const [cursorIndex, setCursorIndex] = useState(0);
    return (
        <VSlide index={index} slidesNb={slidesNb}>
            <article className="text">
                <header className="text__title">
                    <h2>{projectItems.title}</h2>
                </header>
                <div className="text__container">
                    <h1 style={{fontSize: `${projectItems.size}em`}}>
                        <TextTyper
                        cursorIndex={cursorIndex}
                        setCursorIndex={setCursorIndex}
                        text={projectItems.desc}
                        delay={1500}
                        textIndex={0}
                        pageVIndex={pageVIndex}
                        pageHIndex={1}
                        speed={100}
                    />
                    </h1>
                </div>
            </article>
        </VSlide>
    );
}
