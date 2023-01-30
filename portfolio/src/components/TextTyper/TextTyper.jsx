import { useEffect, useState, useContext } from "react";
import "./TextTyper.scss";
import { SlideContext } from "../../index";



/**
 * Compotent to simulate typing text
 * @param {*} props {
 *      pageHIndex => number
        pageVIndex => number
        text => string
        textIndex => number
        cursorIndex => number
        ready => booléen
        delay => number 
        speed => number
        cursor => char
        setCursorIndex => function
    }
 * @returns a span with a text typing ended by a cursor
 */
export default function TextTyper(props) {
    /* context state to track current slide (horizontal and vertical) */
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
    /* State to track the text that has been typed */
    const [curText, setCurText] = useState("");
    /* Sate to track i_f a text is done typing */
    const [isDone, setDone] = useState(false);
    
    useEffect(() => {
        /**
         * iterative function that yield a text letter by letter
         * @param {string} text 
         */
        function* itertext(text) {
            let rest = String(text).split("");
            let result = "";
            while (rest.length > 0) {
                yield (result += rest.shift());
            }
        }
        let counter = itertext(text);
        let done = false;
        let letter = "";
        let i = 0;
        while (// text start typing if it's not finished and we are on the right slide (horizontal or vertical)
            !isDone && ((!done &&
            cursorIndex === textIndex &&
            ((currentSlide.v === pageVIndex && currentSlide.h === 1 && currentSlide.h === pageHIndex) || 
            currentSlide.h == pageHIndex && currentSlide.h !== 1)
            ))
        ) {
            const currentLetter = counter.next();
            letter = currentLetter.value;
            done = currentLetter.done;
            if (!done) {
                // add letter to curtext at an increasing time for each consecutive letters
                setTimeout(
                    (val) => {
                        setCurText(val);
                    },
                    speed * i + delay,
                    letter
                );
            } else {
                setDone(true)
                // when the text is done we pass the cursor to the next text
                if(cursorIndex!== undefined){
                    setTimeout(() => {
                        setCursorIndex(cursorIndex + 1);
                    }, speed * i + delay);
            }}
            i += 1;
        }
    }
     ,[currentSlide.v, currentSlide.h, textIndex, speed, delay, cursorIndex, pageVIndex, pageHIndex, ready, setCursorIndex, isDone, text]);
    
    
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
