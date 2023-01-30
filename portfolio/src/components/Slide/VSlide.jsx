import { useContext } from "react";
import { Outlet } from "react-router-dom";
import "./VSlide.scss";
import { SlideContext } from "../../index";


/**
 * Component to creater vertical slide that we can move up and down
 * @param {*} props  
 * index => number
 * slidesNb => number 
 * @returns a slide and define it's position (up, center, down)
 */
export default function VSlide(props) {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    const {index, slidesNb} = props
    // calcul the z-index
    const z = slidesNb - index;

    /**
     * handle slide up and down with mouse wheel
     * @param {*} event 
     */
    function wheelSlide(event) {
        if (event.deltaY > 0) {
            if (currentSlide.v < slidesNb - 1) {
                if (currentSlide.v !== index + 1) {
                    setCurrentSlide({ ...currentSlide, v: index + 1 });
                }
            }
        } else {
            if (currentSlide.v >= 1) {
                if (currentSlide.v !== index - 1) {
                    setCurrentSlide({ ...currentSlide, v: index - 1 });
                }
            }
        }
    }

    return (
        <div
            index={index}
            className={`Vslide ${
                currentSlide.v === index
                    ? ""
                    : currentSlide.v > index
                    ? "Vslide--up"
                    : "Vslide--down"
            }`}
            style={{ zIndex: z }}
            onWheel={(e) => wheelSlide(e)}
        >
            {props.children}
            <Outlet />
        </div>
    );
}
