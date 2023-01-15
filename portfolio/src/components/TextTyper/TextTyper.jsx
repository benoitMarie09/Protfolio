import { useEffect, useState, useContext } from "react";
import "./TextTyper.scss";
import { SlideContext } from "../../index";


function* itertext(text) {
    let rest = String(text).split("");
    let result = "";
    while (rest.length > 0) {
        yield (result += rest.shift());
    }
}

export default function TextTyper(props) {
    const currentSlide= useContext(SlideContext).currentSlide;
    const {
        pageHIndex,
        pageVIndex,
        text, 
        textIndex, 
        cursorIndex, 
        ready, 
        delay, 
        speed, 
        cursor, 
        setCursorIndex, 
    } = props
    const [curText, setCurText] = useState("");
    const [isDone, setDone] = useState(false);
    let counter = itertext(text);
    console.log("I:",cursorIndex)
    // console.log("V:",pageVIndex)
    
    
    useEffect(() => {
        let done = false;
        let letter = "";
        let i = 0;
        while (
            !isDone && ((!done &&
            cursorIndex === textIndex &&
            currentSlide.v === pageVIndex &&
            currentSlide.h === pageHIndex) || (!done && ready))
        ) {
            const currentLetter = counter.next();
            letter = currentLetter.value;
            done = currentLetter.done;
            if (!done) {
                setTimeout(
                    (val) => {
                        // console.log(val);
                        setCurText(val);
                    },
                    speed * i + delay,
                    letter
                );
            } else {
                setTimeout(() => {
                    setCursorIndex(textIndex + 1);
                }, speed * i + delay);
            }
            i += 1;
        }
    }
     ,[currentSlide.v, currentSlide.h, textIndex, speed, delay, cursorIndex, pageVIndex, pageHIndex, ready, setCursorIndex]);
    
    useEffect(() => {
        !textIndex && setDone(curText === text)
    }, [curText,text,textIndex])
    
    
    return (
        <>
            <span>{curText}</span>
            <span
                className={`${
                    cursorIndex === textIndex ? "cursor" : "cursor--hidden"
                    
                } ${isDone && "cursor--done"} `}
            >
                {cursor}
            </span>
        </>
    );
}

TextTyper.defaultProps = {
    cursor: "\u2588",
    speed: 30,
    delay: 300
};
