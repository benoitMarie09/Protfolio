import { useEffect, useState } from "react";
import "./TextTyper.scss";

function* itertext(text) {
    let rest = String(text).split("");
    let result = "";
    while (rest.length > 0) {
        yield (result += rest.shift());
    }
}

export default function TextTyper(props) {
    const [curText, setCurText] = useState("");
    const [isDone, setDone] = useState(false);
    let counter = itertext(props.text);
    useEffect(() => {
        let done = false;
        let value = "";
        let i = 0;
        while (
            (!done &&
            props.curIndex === props.index &&
            props.currentSlide === props.pageIndex) ||(!done && props.ready)
        ) {
            const cur = counter.next();
            value = cur.value;
            done = cur.done;
            if (!done) {
                setTimeout(
                    (val) => {
                        // console.log(val);
                        setCurText(val);
                    },
                    props.speed * i + props.delay,
                    value
                );
            } else {
                setTimeout(() => {
                    props.indexSetter(props.index + 1);
                }, props.speed * i + props.delay);
            }
            i += 1;
        }
    }, [props]);
    
    useEffect(() => {
        !props.index && setDone(curText === props.text)
    }, [curText,props.text])
    
    
    return (
        <>
            <span>{curText}</span>
            <span
                className={`${
                    props.curIndex === props.index ? "cursor" : "cursor--hidden"
                    
                } ${isDone && "cursor--done"} `}
            >
                {props.cursor}
            </span>
        </>
    );
}

TextTyper.defaultProps = {
    cursor: "\u2588",
    speed: 30,
    delay: 300
};
