import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { headerMenu } from "../../data/headerMenu";
import "./CubicMenu.scss";

const CubicMenu = ({ currentSlide, updateSlide }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function cubeClick() {
        setMenuOpen(!isMenuOpen);
    }

    function menuClick(index) {
        cubeClick();
        updateSlide(index);
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
                                        menuItem.key === currentSlide
                                            ? "active"
                                            : ""
                                    }
                                    to={menuItem.slug}
                                    onClick={() => {
                                        menuClick(menuItem.key);
                                    }}
                                >
                                    {menuItem.key === currentSlide
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
                        onClick={cubeClick}
                    >
                        <div className="cube__front"></div>
                        <div className="cube__back">
                        <img src="images/X.png" alt="" />
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
