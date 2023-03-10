import "./about.scss";
import ProfileSVG from "../../components/ProfileSVG/ProfileSVG";
import TextTyper from "../../components/TextTyper/TextTyper";
import { useState } from "react";

/**
 * About page to present myself
 * @returns A container buttons to switch between photo and profile info
 */
export default function About() {
    /* State to track the typing cursor place */
    const [cursorIndex, setCursorIndex] = useState(0);
    /* State to track if we see the photo or the text */
    const [showSVG, setShowSVG] = useState(false);
    return (
        <section className="about">
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
                        <b>Nom :</b>{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={"Marie"}
                            delay={1000}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={0}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                    <p>
                        <b>Prenom :</b>{" "}
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
                        <b>Profession :</b>{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={"D??veloppeur web"}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={2}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                    <p>
                        <b>Adresse mail :</b>{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={"benoit.marie09@proton.me"}
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={3}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                    <p>
                        <b>Informations :</b>{" "}
                        <TextTyper
                            cursorIndex={cursorIndex}
                            setCursorIndex={setCursorIndex}
                            text={
                                "Passionn?? de math??matiques et d'informatique, j'ai d??velopp?? mes comp??tences en programmation en utilisant Python, Javascript et C en d??veloppant des projets personnels tels qu'Arduino et Raspberry Pi, ainsi que des projets web en utilisant Django et React. Je suis enthousiaste ?? l'id??e de poursuivre mon parcours en tant que d??veloppeur web en mettant en pratique mes comp??tences acquises et en continuant ?? apprendre."
                            }
                            speed={70}
                            cursor={"\u2588"}
                            textIndex={4}
                            pageVIndex={0}
                            pageHIndex={2}
                        />
                    </p>
                </div>
                <footer className="buttons">
                    <button
                        className={`${showSVG && "active"}`}
                        onClick={() => setShowSVG(true)}
                    >
                        Photo
                    </button>
                    <button
                        className={`${!showSVG && "active"}`}
                        onClick={() => setShowSVG(false)}
                    >
                        Info
                    </button>
                </footer>
            </div>
        </section>
    );
}
