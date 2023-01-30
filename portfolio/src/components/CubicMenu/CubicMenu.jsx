import { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { headerMenu } from "../../data/headerMenu";
import "./CubicMenu.scss";
import { SlideContext } from "../../index";

/**
 * @returns A small cube to open the primary navigation menu
 */
const CubicMenu = () => {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);
    /* State to track if the menu is open or not */
    const [isMenuOpen, setMenuOpen] = useState(false);

    /**
     * handle click on menu link and close menu
     * @param {number} index of the clicked link
     */
    function menuClick(index) {
        setMenuOpen(false);
        setCurrentSlide({ ...currentSlide, h: index });
    }

    return (
        <>
            <nav
                className={`nav ${isMenuOpen ? "nav--menu" : ""}`}
                role="navigation"
            >
                <div className={`menu ${isMenuOpen ? "menu--open" : ""}`}>
                    <ul className="menu__links">
                        {headerMenu.getHeaderMenu().map((menuItem) => (
                            <li key={menuItem.key}>
                                <Link
                                    className={
                                        menuItem.key === currentSlide.h
                                            ? "active"
                                            : ""
                                    }
                                    to={menuItem.slug}
                                    onClick={() => {
                                        menuClick(menuItem.key);
                                    }}
                                >
                                    {menuItem.key === currentSlide.h
                                        ? "- " + menuItem.label + " -"
                                        : menuItem.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="scene">
                    <div
                        className={`cube--small cube--green nav__cube 
                         ${isMenuOpen ? "cube--menu" : ""}`}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <div className="cube__front"></div>
                        <div className="cube__back">
                            <svg
                                className="x"
                                version="1.1"
                                viewBox="0 0 28 28"
                                width="28"
                                height="28"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m 23.08114,0 c -0.843103,0 -1.050728,0.01742767 -1.478292,0.13314161 -1.454537,0.38742736 -1.982694,0.7114328 -3.389724,2.08800019 -1.870077,1.827709 -3.936057,4.4360047 -7.064191,8.9299912 -0.374192,0.532284 -0.694719,0.965998 -0.718472,0.965998 -0.04751,0 -0.6173071,-0.896578 -2.8733054,-4.5114243 C 5.1944128,3.8228607 4.1674297,2.3308519 3.3184611,1.457426 2.7307816,0.8559992 2.5228605,0.74028257 1.8818086,0.65342569 1.0152448,0.52628319 0.42140447,0.75200031 0.14838538,1.3071416 L 0,1.6137149 0.45102694,2.2499978 C 3.6448496,6.7788412 5.9304806,9.9194232 8.4295862,13.227699 l 0.6469172,0.856003 -0.8548354,1.283995 c -2.2023329,3.31999 -5.7762272,8.987998 -7.31375476,11.590847 -0.10674422,0.185143 -0.10674073,0.185145 0.0475106,0.44543 0.17213976,0.283427 0.36216936,0.427996 0.72433736,0.54371 0.2850423,0.09257 0.9381193,0.058 1.3712546,-0.06942 0.9618713,-0.277713 1.9055674,-1.700582 5.1885395,-7.837135 1.9055607,-3.562847 2.2084987,-4.10657 2.2618707,-4.10657 0.02375,0 0.350439,0.381714 0.718472,0.855998 2.671245,3.395133 5.526671,6.61114 7.260385,8.178564 1.620518,1.45771 2.421987,1.914571 3.900278,2.221141 0.688559,0.144572 1.893542,0.144572 2.451604,0 1.917582,-0.491427 3.247195,-2.058856 3.164204,-3.736279 -0.05337,-1.052854 -0.676829,-1.764288 -1.798815,-2.05343 -0.457182,-0.115714 -1.288266,-0.11 -1.828439,0.0057 -0.74809,0.162 -1.104398,0.364287 -1.650436,0.948571 -0.546038,0.584283 -0.736066,0.717143 -1.127853,0.804 -0.92023,0.202285 -2.32111,-0.561142 -4.268312,-2.319423 -1.780928,-1.607996 -3.34222,-3.430004 -5.134878,-5.992282 l -0.575952,-0.827142 0.700585,-1.13943 c 1.775063,-2.8859911 3.31876,-4.8642829 5.206433,-6.6802776 1.733421,-1.6657092 2.938403,-2.2439938 3.852767,-1.8451376 0.172141,0.075143 0.474784,0.3008574 0.765691,0.5842851 0.718471,0.6939976 1.258644,0.8965671 2.39852,0.8965671 1.015244,0 1.804688,-0.2894283 2.31524,-0.8445694 C 27.213089,4.597996 27.355609,4.1988518 27.355609,3.5685679 27.349744,2.7011418 27.005467,1.9548526 26.257379,1.2145691 25.782308,0.7402848 25.212509,0.39342549 24.53568,0.16199761 24.090228,0.01171234 23.995504,0.00571427 23.08114,0 Z" />
                            </svg>
                        </div>
                        <div className="cube__top"></div>
                        <div className="cube__bottom"></div>
                        <div className="cube__left"></div>
                        <div className="cube__right"></div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default CubicMenu;
