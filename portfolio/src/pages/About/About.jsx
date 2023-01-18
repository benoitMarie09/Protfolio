import "./about.scss"
import ProfileSVG from "../../components/ProfileSVG/ProfileSVG";
import TextTyper from "../../components/TextTyper/TextTyper";
import { useState } from "react";

const About = () => {
  const [cursorIndex, setCursorIndex] = useState(0);
  return (
    <div className="about">
      <ProfileSVG />
      <p>Nom : <TextTyper
                    cursorIndex={cursorIndex}
                    setCursorIndex={setCursorIndex}
                    text={"Marie"}
                    delay={1500}
                    speed={70}
                    cursor={"\u2588"}
                    textIndex={0}
                    ready={true}
                /></p>
      <p>Prenom : Benoit</p>
      <p>Profession : développeur web</p>
      <p>Info : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates aliquam blanditiis nam saepe similique ullam sequi tempore consequatur minima, adipisci, accusantium veniam. Quos amet tempore, id voluptatum voluptate inventore.</p>
    </div>
  );
};

export default About;
