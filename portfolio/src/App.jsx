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
        originY: null,
        distanceX:0,
        distanceY:0
    });

    const handleTouchStart = (event) => {
        event.preventDefault()
        setTouchPos({
            ...touchPos,
            originX: event.touches[0].clientX,
            originY: event.touches[0].clientY,
            distanceX:0,
            distanceY:0
        });
    };
    const handleTouchMove = (event) => {
        event.preventDefault()
        setTouchPos({
            ...touchPos,
            distanceX : event.touches[0].clientX - touchPos.originX,
            distanceY : event.touches[0].clientY - touchPos.originY
        });        
    };

    const handleTouchEnd = (event) => {
        if(touchPos.distanceX < -150){
            nextPage()
        }
        if(touchPos.distanceX > 150){
            previousPage()
        }
        setTouchPos({
            originX: null,
            originY: null,
            distanceX:0,
            distanceY:0
        })
    }

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
        return () => window.removeEventListener("resize", handleResize);
    });

    useEffect(()=>{
        switch (currentSlide.h) {
            case 0:
                var previous = document.getElementById("about");
                var current = document.getElementById("home");
                var next = document.getElementById("projets");
                break;
            case 1:
                var previous = document.getElementById("home");
                var current = document.getElementById("projets");
                var next = document.getElementById("about");
                break;
            case 2:
                var previous = document.getElementById("projets");
                var current = document.getElementById("about");
                var next = document.getElementById("home");
                break;
            default:
                break;
        }
        previous.style.transform = `translateX(-100%)`
        current.style.transform = `translateX(${touchPos.distanceX}px)`
        next.style.transform = `translateX(100%)`
        },
    [touchPos.distanceX, currentSlide.h]
    )

    return (
        <main
            onTouchStart={(event) => handleTouchStart(event)}
            onTouchMove={(event) => handleTouchMove(event)}
            onTouchEnd={(event)=>handleTouchEnd(event)}
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
