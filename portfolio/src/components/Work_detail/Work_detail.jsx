import "./Work_detail.scss";
import { useState } from "react";
import "../TextTyper/TextTyper";
import TextTyper from "../TextTyper/TextTyper";

export default function Detail(props) {
    var path = process.env.PUBLIC_URL;
    var image = "/images/github_icon.png";
    const {details, pageVIndex} = props
    const [cursorIndex, setCursorIndex] = useState(0);

    return (
        <div className="detail">
            <h2 className="detail__name">
                <TextTyper
                    cursorIndex={cursorIndex}
                    setCursorIndex={setCursorIndex}
                    text={details.name}
                    delay={pageVIndex === 0 ? 300 : 1500}
                    speed={70}
                    cursor={"\u2588"}
                    textIndex={0}
                    pageVIndex={pageVIndex}
                    pageHIndex={1}
                />
            </h2>
            <p className="detail__description">
                <TextTyper
                    cursorIndex={cursorIndex}
                    setCursorIndex={setCursorIndex}
                    text={details.desc}
                    textIndex={1}
                    pageVIndex={pageVIndex}
                    pageHIndex={1}
                />
            </p>
            <table className="detail__info">
                <thead>
                    <tr>
                        <th className="col_1">Technologies</th>
                        <th className="col_2">Roles</th>
                        <th className="col_3">Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {details.technos.map((tec, index) => (
                                <p key={index}>
                                    <TextTyper
                                        cursorIndex={cursorIndex}
                                        setCursorIndex={setCursorIndex}
                                        text={tec}
                                        delay={300}
                                        speed={30}
                                        cursor={"\u2588"}
                                        textIndex={2 + index}
                                        pageVIndex={pageVIndex}
                                        pageHIndex={1}
                                    />
                                </p>
                            ))}
                        </td>
                        <td>
                            {details.roles.map((role, index) => (
                                <p key={index}>
                                    <TextTyper
                                        cursorIndex={cursorIndex}
                                        setCursorIndex={setCursorIndex}
                                        text={role}
                                        delay={300}
                                        speed={30}
                                        cursor={"\u2588"}
                                        textIndex={
                                            3 +
                                            details.technos.length +
                                            index -
                                            1
                                        }
                                        pageVIndex={pageVIndex}
                                        pageHIndex={1}
                                    />
                                </p>
                            ))}
                        </td>
                        <td>
                            <TextTyper
                                cursorIndex={cursorIndex}
                                setCursorIndex={setCursorIndex}
                                text={details.year}
                                delay={300}
                                speed={30}
                                cursor={"\u2588"}
                                textIndex={
                                    4 +
                                    details.technos.length +
                                    details.roles.length -
                                    2
                                }
                                pageVIndex={pageVIndex}
                                pageHIndex={1}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="detail__links">
                <a href={details.url} target="_blank" rel="noopener noreferrer">
                    <button className="button button__green">visit website</button>
                </a>
                {details.git && 
                <a href={details.git} target="_blank" rel="noopener noreferrer">
                    <img className="detail__git-logo" src={path + image} alt="github logo"/>
                </a>}
            </div>
        </div>
    );
}
