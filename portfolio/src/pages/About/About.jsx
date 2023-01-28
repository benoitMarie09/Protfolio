import "./about.scss";
import ProfileSVG from "../../components/ProfileSVG/ProfileSVG";
import TextTyper from "../../components/TextTyper/TextTyper";
import { useState } from "react";

const About = () => {
    const [cursorIndex, setCursorIndex] = useState(0);
    const [showSVG, setShowSVG] = useState(false);
    return (
        <div className="about">
            <div className="about__container">
                <header>
                    <h2>-- Profile --</h2>
                </header>
                <ProfileSVG showSVG={showSVG} />
                <div
                    className={`about__info ${
                        showSVG ? "" : "about__info--show"
                    }`}
                >
                    <p>
                        <b>Nom</b> :{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={"Marie"}
                            delay={1500}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={0}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                    <p>
                        <b>Prenom</b> :{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={"Benoit"}
                            delay={300}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={1}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                    <p>
                        <b>Profession</b> :{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={"développeur web"}
                            delay={300}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={2}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                    <p>
                        <b>Informations</b> :{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={
                                "Passionné de maths et d'informatiques, j'ai appris à programmer dans plusieurs langages (python, javascript, c) en développant des projets personnels (arduino, raspberry pi ) ainsi que des projets web en django et React."
                            }
                            delay={300}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={3}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                </div>
                <footer>
                    <button
                        className="button button__classic"
                        onClick={() => setShowSVG(true)}
                    >
                        voir image
                    </button>
                    <button
                        className="button button__classic"
                        onClick={() => setShowSVG(false)}
                    >
                        cacher image
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default About;
