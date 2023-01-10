import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { headerMenu } from "../../data/headerMenu";
import "./CubicMenu.scss";

const CubicMenu = ({ currentSlide, updateSlide }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    function burgerClick() {
        setMenuOpen(!isMenuOpen);
    }

    function menuClick(index) {
        burgerClick();
        updateSlide(index);
    }

    return (
        <>
            <nav className="nav" role="navigation">
                <div>
                    <div className="nav__logo">Logo</div>
                </div>
                <div className={`menu ${isMenuOpen ? "menu--show" : ""}`}>
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
                <div className="nav__container">
                    <div className="scene">
                        <div className="cube cube--small cube--green nav__cube">
                            <div className="cube__front"></div>
                            <div className="cube__back"></div>
                            <div className="cube__top"></div>
                            <div className="cube__bottom"></div>
                            <div className="cube__left"></div>
                            <div className="cube__right"></div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default CubicMenu;
