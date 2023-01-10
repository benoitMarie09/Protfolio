import "./Work_detail.scss";
import { useState } from "react";
import "../TextTyper/TextTyper";
import TextTyper from "../TextTyper/TextTyper";

export default function Detail(props) {
    const [cursor, setCursor] = useState(0);
    const currentSlide = props.currentSlide;
    return (
        <div className="detail">
            <h2 className="detail__name">
                <TextTyper
                    curIndex={cursor}
                    indexSetter={setCursor}
                    text={props.details.name}
                    delay={props.pageIndex === 0 ? 300 : 1500}
                    speed={70}
                    cursor={"\u2588"}
                    index={0}
                    currentSlide={currentSlide}
                    pageIndex={props.pageIndex}
                />
            </h2>
            <p className="detail__description">
                <TextTyper
                    curIndex={cursor}
                    indexSetter={setCursor}
                    text={props.details.desc}
                    index={1}
                    currentSlide={currentSlide}
                    pageIndex={props.pageIndex}
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
                            {props.details.technos.map((tec, index) => (
                                <p key={index}>
                                    <TextTyper
                                        curIndex={cursor}
                                        indexSetter={setCursor}
                                        text={tec}
                                        delay={300}
                                        speed={30}
                                        cursor={"\u2588"}
                                        index={2 + index}
                                        currentSlide={currentSlide}
                                        pageIndex={props.pageIndex}
                                    />
                                </p>
                            ))}
                        </td>
                        <td>
                            {props.details.roles.map((role, index) => (
                                <p key={index}>
                                    <TextTyper
                                        curIndex={cursor}
                                        indexSetter={setCursor}
                                        text={role}
                                        delay={300}
                                        speed={30}
                                        cursor={"\u2588"}
                                        index={
                                            3 +
                                            props.details.technos.length +
                                            index -
                                            1
                                        }
                                        currentSlide={currentSlide}
                                        pageIndex={props.pageIndex}
                                    />
                                </p>
                            ))}
                        </td>
                        <td>
                            <TextTyper
                                curIndex={cursor}
                                indexSetter={setCursor}
                                text={props.details.year}
                                delay={300}
                                speed={30}
                                cursor={"\u2588"}
                                index={
                                    4 +
                                    props.details.technos.length +
                                    props.details.roles.length -
                                    2
                                }
                                currentSlide={currentSlide}
                                pageIndex={props.pageIndex}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href={props.details.url}>
                <button className="detail__button">visit website</button>
            </a>
            {props.children}
        </div>
    );
}
