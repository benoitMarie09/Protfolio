import "./about.scss"
import ProfileSVG from "../../components/ProfileSVG/ProfileSVG";
import TextTyper from "../../components/TextTyper/TextTyper";
import { useState } from "react";

const About = () => {
  const [cursorIndex, setCursorIndex] = useState(0);
  return (
    <div className="about">
      
      <div className="about__info">
      <ProfileSVG />
      <p><b>Nom</b> : <TextTyper
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
      <p><b>Prenom</b> : <TextTyper
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
      <p><b>Profession</b> : <TextTyper
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
      <p><b>Informations</b> : <TextTyper
                    cursorIndex={cursorIndex}
                    setCursorIndex={setCursorIndex}
                    text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates aliquam blanditiis nam saepe similique ullam sequi tempore consequatur minima, adipisci, accusantium veniam. Quos amet tempore, id voluptatum voluptate inventore."}
                    delay={300}
                    speed={70}
                    cursor={"\u2588"}
                    textIndex={3}
                    pageVIndex={0}
                    pageHIndex={2}
                    
                />
      </p>
      </div>
    </div>
  );
};

export default About;
