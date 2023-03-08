import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { SlideContext } from "../../index";
import "./Sidebar.scss";

/**
 *
 * @returns A sidebar on the right of the screen link to next slide
 */
export function SidebarRight() {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide } = useContext(SlideContext);
    /* State to track information of next page */
    const [nextPage, setNextPage] = useState({ name: "", url: "" });
    /* Upadte next page informations state */
    useEffect(() => {
        switch (currentSlide.h) {
            case 0:
                setNextPage({ name: "Projets", url: "/works" });
                break;
            case 1:
                setNextPage({ name: "Profile", url: "/about" });
                break;
            case 2:
                setNextPage({ name: "Accueil", url: "/" });
                break;
            default:
                break;
        }
    }, [currentSlide.h]);

    return (
        <Link to={nextPage.url}>
            <div className="Sidebar Sidebar--right">
                <span className="Sidebar__text">{nextPage.name}</span>
                <svg
                    className="Sidebar__arrow"
                    version="1.1"
                    width="50"
                    height="50"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M 631.9144,957.23013 C 613.53648,939.26478 556.425,883.13191 505,832.49041 453.575,781.84891 356.69712,686.48024 289.71582,620.56003 222.73451,554.63982 168.05951,500.37186 168.21582,499.96455 168.48646,499.25929 290.55883,378.4441 450.58845,220.5 521.77582,150.24035 637.56943,36.85807 656.74346,18.638045 l 9.24345,-8.7835508 3.25655,2.2648158 c 4.04878,2.815796 162.88576,161.05852 162.52121,161.91318 C 831.6191,174.37376 796.4,209.0303 753.5,251.04702 654.98722,347.53151 500.58329,499.32974 500.23849,500.03454 c -0.14384,0.294 28.88116,29.0821 64.5,63.97355 C 699.15014,695.67491 832,826.39955 832,826.9942 c 0,0.33938 -30.7125,31.21551 -68.25,68.61361 -62.05769,61.82723 -92.2832,91.00163 -96.76568,93.40058 -1.32571,0.7095 -8.31248,-5.62149 -35.06992,-31.77826 z" />
                </svg>
            </div>
        </Link>
    );
}
/**
 *
 * @returns A sidebar on the left of the screen link to previous slide
 */
export function SidebarLeft() {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide } = useContext(SlideContext);
    /* State to track information of previous page */
    const [previousPage, setPreviousPage] = useState({ name: "", url: "" });
    /* Update previous page informations state */
    useEffect(() => {
        switch (currentSlide.h) {
            case 0:
                setPreviousPage({ name: "Profile", url: "/about" });
                break;
            case 1:
                setPreviousPage({ name: "Accueil", url: "/" });
                break;
            case 2:
                setPreviousPage({ name: "Projets", url: "/works" });
                break;
            default:
                break;
        }
    }, [currentSlide.h]);

    return (
        <Link to={previousPage.url}>
            <div className="Sidebar Sidebar--left ">
                <span className="Sidebar__text">{previousPage.name}</span>
                <svg
                    className="Sidebar__arrow"
                    version="1.1"
                    width="50"
                    height="50"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M 631.9144,957.23013 C 613.53648,939.26478 556.425,883.13191 505,832.49041 453.575,781.84891 356.69712,686.48024 289.71582,620.56003 222.73451,554.63982 168.05951,500.37186 168.21582,499.96455 168.48646,499.25929 290.55883,378.4441 450.58845,220.5 521.77582,150.24035 637.56943,36.85807 656.74346,18.638045 l 9.24345,-8.7835508 3.25655,2.2648158 c 4.04878,2.815796 162.88576,161.05852 162.52121,161.91318 C 831.6191,174.37376 796.4,209.0303 753.5,251.04702 654.98722,347.53151 500.58329,499.32974 500.23849,500.03454 c -0.14384,0.294 28.88116,29.0821 64.5,63.97355 C 699.15014,695.67491 832,826.39955 832,826.9942 c 0,0.33938 -30.7125,31.21551 -68.25,68.61361 -62.05769,61.82723 -92.2832,91.00163 -96.76568,93.40058 -1.32571,0.7095 -8.31248,-5.62149 -35.06992,-31.77826 z" />
                </svg>
            </div>
        </Link>
    );
}
