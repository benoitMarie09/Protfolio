import { useEffect, useState, useContext, useRef } from "react";
import { SlideContext } from "./index";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import About from "./pages/About/About";
import projects from "./data/works";
import HSlide from "./components/Slide/HSlide";
import "./App.scss";

/**
 * @returns 3 Horizontals slides Home, Projects, About and right and left sidebars.
 */
export default function App(event) {
    /* context state to track current slide (horizontal and vertical) */
    const { currentSlide, setCurrentSlide } = useContext(SlideContext);

    const navigate = useNavigate();
    const previous = useRef();
    const current = useRef();
    const next = useRef();
    const [touchPos, setTouchPos] = useState({
        originX: null,
        originY: null,
        distanceX: 0,
        distanceY: 0
    });

    const handleTouchStart = (event) => {
        event.preventDefault();
        setTouchPos({
            ...touchPos,
            originX: event.touches[0].clientX,
            originY: event.touches[0].clientY,
            distanceX: 0,
            distanceY: 0
        });
    };
    const handleTouchMove = (event) => {
        if (!event.target.classList.contains("about__info")) {
            event.preventDefault();
        }
        current.current.classList.add("transition-stopper");
        setTouchPos({
            ...touchPos,
            distanceX: event.touches[0].clientX - touchPos.originX,
            distanceY: event.touches[0].clientY - touchPos.originY
        });
    };

    const handleTouchEnd = (event) => {
        current.current.classList.remove("transition-stopper");
        if (touchPos.distanceX < -50) {
            nextPage();
        }
        if (touchPos.distanceX > 50) {
            previousPage();
        }
        if (currentSlide.h === 1) {
            console.log(currentSlide.v);
            console.log(projects.getProjects().length);
            if (touchPos.distanceY > 50 && currentSlide.v >= 1) {
                console.log(touchPos.distanceY);
                setCurrentSlide({ ...currentSlide, v: currentSlide.v - 1 });
            }
            if (
                touchPos.distanceY < -50 &&
                currentSlide.v < projects.getProjects().length - 1
            ) {
                console.log(touchPos.distanceY);
                setCurrentSlide({ ...currentSlide, v: currentSlide.v + 1 });
            }
        }
        setTouchPos({
            originX: null,
            originY: null,
            distanceX: 0,
            distanceY: 0
        });
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

    const previousPage = () => {
        switch (currentSlide.h) {
            case 0:
                navigate("/about");
                break;
            case 1:
                navigate("/");
                break;
            case 2:
                navigate("/works");
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
        document
            .getElementsByTagName("main")[0]
            .addEventListener("touchmove", handleTouchMove, false);

        return () => {
            window.removeEventListener("resize", handleResize);
            document
                .getElementsByTagName("main")[0]
                .removeEventListener("touchmove", handleTouchMove, false);
        };
    });

    useEffect(() => {
        switch (currentSlide.h) {
            case 0:
                previous.current = document.getElementById("about");
                current.current = document.getElementById("home");
                next.current = document.getElementById("projets");
                break;
            case 1:
                previous.current = document.getElementById("home");
                current.current = document.getElementById("projets");
                next.current = document.getElementById("about");
                break;
            case 2:
                previous.current = document.getElementById("projets");
                current.current = document.getElementById("about");
                next.current = document.getElementById("home");
                break;
            default:
                break;
        }
        current.current.style.transform = `translateX(${touchPos.distanceX}px)`;
        next.current.style.transform = `translateX(100%)`;
        previous.current.style.transform = `translateX(-100%)`;
    }, [touchPos.distanceX, currentSlide.h]);

    return (
        <main
            onTouchStart={(event) => handleTouchStart(event)}
            //onTouchMove={(event) => handleTouchMove(event)}
            onTouchEnd={(event) => handleTouchEnd(event)}
        >
            <SidebarLeft />
            <SidebarRight />
            <HSlide key={1} index={0} id={"home"}>
                <Home />
            </HSlide>
            <HSlide key={2} index={1} id={"projets"}>
                <ProjectsPage />
            </HSlide>
            <HSlide key={3} index={2} id={"about"}>
                <About />
            </HSlide>
            <Outlet />
        </main>
    );
}
