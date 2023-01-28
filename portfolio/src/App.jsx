import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SidebarRight, SidebarLeft } from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import About from "./pages/About/About";
import HSlide from "./components/Slide/HSlide";
import "./App.scss";

export default function App() {
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
        <main>
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
