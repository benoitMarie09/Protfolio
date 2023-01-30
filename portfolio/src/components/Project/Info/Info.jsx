import { useState } from "react";
import "../../TextTyper/TextTyper";
import TextTyper from "../../TextTyper/TextTyper";
import "./Info.scss";

/**
 * @param {*} props {
 * details => object {desc: string, technos: array[string], role: array[string], year: string, url: string, git: string }
 * pageVIndex => number}
 * @returns All information of a website project in TextTyper, website link and github link
 */
export default function Info(props) {
    var path = process.env.PUBLIC_URL;
    var image = "/images/github_icon.png";
    const { details, pageVIndex } = props;
    /* State to track the typing text cursor place */
    const [cursorIndex, setCursorIndex] = useState(0);

    return (
        <div className="info">
            <p className="info__description">
                <TextTyper
                    cursorIndex={cursorIndex}
                    setCursorIndex={setCursorIndex}
                    text={details.desc}
                    delay={pageVIndex === 0 ? 300 : 1500}
                    textIndex={0}
                    pageVIndex={pageVIndex}
                    pageHIndex={1}
                />
            </p>
            <table className="info__table">
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
                                        textIndex={1 + index}
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
                                            2 +
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
                                    3 +
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
            <footer className="info__links">
                <a href={details.url} target="_blank" rel="noopener noreferrer">
                    visit website
                </a>
                <a
                    className={`git-logo ${
                        details.git ? "" : "git-logo--inactive"
                    }`}
                    href={details.git}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={path + image} alt="github logo" />
                </a>
            </footer>
        </div>
    );
}
