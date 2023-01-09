import "./Work_detail.scss";
import { useState } from "react";
import "../TextTyper/TextTyper";
import TextTyper from "../TextTyper/TextTyper";

export default function Detail({ details }) {
  const [cursor, setCursor] = useState(0);
  return (
    <div className="detail">
      <h2 className="detail_name">
        <TextTyper
          curIndex={cursor}
          indexSetter={setCursor}
          text={details.name}
          delay={1000}
          speed={100}
          cursor={"\u2588"}
          index={0}
        />
      </h2>
      <p className="detail_description">
        <TextTyper
          curIndex={cursor}
          indexSetter={setCursor}
          text={details.desc}
          delay={1000}
          speed={50}
          cursor={"\u2588"}
          index={1}
        />
      </p>
      <div className="info">
        <div>
          <div>
            <TextTyper
              curIndex={cursor}
              indexSetter={setCursor}
              text="Technologies :"
              delay={1000}
              speed={100}
              cursor={"\u2588"}
              index={2}
            />
          </div>
          <ul>
            {details.technos.map((tec) => (
              <li key={tec}>
                <TextTyper
                  curIndex={cursor}
                  indexSetter={setCursor}
                  text={tec}
                  delay={1000}
                  speed={100}
                  cursor={"\u2588"}
                  index={3}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <TextTyper
              curIndex={cursor}
              indexSetter={setCursor}
              text="Role :"
              delay={1000}
              speed={100}
              cursor={"\u2588"}
              index={4}
            />
          </div>
          <ul>
            {details.roles.map((role) => (
              <li key={role}>
                <TextTyper
                  curIndex={cursor}
                  indexSetter={setCursor}
                  text={role}
                  delay={1000}
                  speed={100}
                  cursor={"\u2588"}
                  index={5}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <TextTyper
              curIndex={cursor}
              indexSetter={setCursor}
              text="Year :"
              delay={1000}
              speed={100}
              cursor={"\u2588"}
              index={6}
            />
          </div>
          <ul>
            <li>
              <TextTyper
                curIndex={cursor}
                indexSetter={setCursor}
                text={details.year}
                delay={1000}
                speed={100}
                cursor={"\u2588"}
                index={7}
              />
            </li>
          </ul>
        </div>
      </div>
      <button className="detail_button">visit website</button>
    </div>
  );
}
