import { useEffect, useState, useContext } from "react";
import { SlideContext } from "./index";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import About from "./pages/About/About";
import HSlide from "./components/Slide/HSlide";
import "./App.scss";

/**
 * @returns 3 Horizontals slides Home, Projects, About and right and left sidebars.
 */
export default function App(event) {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide } = useContext(SlideContext);

    const navigate = useNavigate();

    const [touchPos, setTouchPos] = useState({
        originX: null,
        originY: null
    });

    const handleTouchStart = (event) => {
        setTouchPos({
            originX: event.touches[0].clientX,
            originY: event.touches[0].clientY
        });
    };
    const handleTouchMove = (event) => {
        if (event.touches[0].clientX - touchPos.originX > 200) {
        }
        if (event.touches[0].clientX - touchPos.originX < -200) {
            nextPage();
        }
        if (event.touches[0].clientX - touchPos.originY > 200) {
        }
        if (event.touches[0].clientX - touchPos.originY < -200) {
        }
    };

    const nextPage = () => {
        switch (currentSlide.h) {
            case 0:
                navigate("/works");
                break;
            case 1:
                navigate("/about");
                break;
            case 2:
                navigate("/");
                break;
            default:
                break;
        }
    };

    /**
     * function to stop css trasition during the window rezize
     */
    function handleResize() {
        let resizeTimer;
        document.body.classList.add("resize-transition-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-transition-stopper");
        }, 400);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
    return (
        <main
            onTouchStart={(event) => handleTouchStart(event)}
            onTouchMove={(event) => handleTouchMove(event)}
        >
            <SidebarLeft />
            <SidebarRight />
            <HSlide key={1} index={0}>
                <Home />
            </HSlide>
            <HSlide key={2} index={1}>
                <ProjectsPage />
            </HSlide>
            <HSlide key={3} index={2}>
                <About />
            </HSlide>
            <Outlet />
        </main>
    );
}
