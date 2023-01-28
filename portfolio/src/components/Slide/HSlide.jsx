import { useEffect, useContext, useState } from "react";
import "./HSlide.scss";
import { useLocation } from "react-router-dom";
import { SlideContext } from "../../index";

function HSlide(props) {
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    const [noTransition, setNoTransition] = useState(false);
    const { index } = props;
    const location = useLocation();

    useEffect(() => {
        function hideTansition() {
            let timer;
            setNoTransition(true);
            clearTimeout(timer);
            timer = setTimeout(() => setNoTransition(false), 1000);
        }
        switch (location.pathname) {
            case "/works":
                // home --> work : notransition if about
                if (currentSlide.h === 0 && index === 2) {
                    console.log("first");
                    hideTansition();
                }
                // home --> work : notransition
                if (currentSlide.h === 2 && index === 0) {
                    hideTansition();
                }
                setCurrentSlide({ ...currentSlide, h: 1 });
                break;
            case "/about":
                // home --> about : notransition if work
                if (currentSlide.h === 0 && index === 1) {
                    hideTansition();
                }
                // work --> about : notransition if home
                if (currentSlide.h === 1 && index === 0) {
                    // work --> about
                    hideTansition();
                }
                setCurrentSlide({ ...currentSlide, h: 2 });
                break;
            default:
                // work --> home : notransition if about
                if (currentSlide.h === 1 && index === 2) {
                    hideTansition();
                }
                // about --> home : notransition if work
                if (currentSlide.h === 2 && index === 1) {
                    hideTansition();
                }
                setCurrentSlide({ ...currentSlide, h: 0 });
                break;
        }
    }, [location.pathname]);

    return (
        <div
            className={`Hslide 
            ${
                index === currentSlide.h
                    ? ""
                    : currentSlide.h === (index + 1) % 3
                    ? "Hslide--left"
                    : "Hslide--rigth"
            } 
            ${noTransition ? "transition-stopper" : ""}
                `}
        >
            {props.children}
        </div>
    );
}

export default HSlide;
