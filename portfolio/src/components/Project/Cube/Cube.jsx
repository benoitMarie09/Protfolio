/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import "./Cube.scss";

/**
 *
 * @param {*} props {
 * images => array[string]
 * id => number}
 * @returns A css 3d cube we can manualy or automatically rotate
 */
export default function Cube(props) {
    const { images, id } = props;
    /* State to track manual or automatic rotation */
    const [autoRotation, setAutoRtation] = useState(true);
    /* State to track when the cube is manualy moving */
    const [onMotion, setOnMotion] = useState(false);
    /* State to track the cube current rotation angles */
    const [rotation, setRotation] = useState({
        // Origin angles on click release
        originX: 0,
        originY: 0,
        originZ: 0,
        // Actual angles
        X: 0,
        Y: 0,
        Z: 0
    });
    const [mouseOrigin, setMouseOrigin] = useState({
        // x and y positions of mouse origin click
        mouseX: 0,
        mouseY: 0
    });

    /**
     * handle mouseOrigin state on click
     * @param {Object} event
     */
    const handleMouseDown = (event) => {
        setOnMotion(true);
        setMouseOrigin({
            mouseX: event.clientX,
            mouseY: event.clientY
        });
    };

    /**
     * handle cube position on click release
     */
    const handleMouseUp = () => {
        setOnMotion(false);
        // mouse position reset
        setMouseOrigin({ mouseX: 0, mouseY: 0 });
        // Update origin angles rounded to quarter turn
        var newOriginX =
            rotation.X >= 0
                ? Math.trunc((rotation.X + 45) / 90) * 90
                : Math.trunc((rotation.X - 45) / 90) * 90;
        var newOriginY =
            rotation.Y >= 0
                ? Math.trunc((rotation.Y + 45) / 90) * 90
                : Math.trunc((rotation.Y - 45) / 90) * 90;
        var newOriginZ =
            rotation.Z >= 0
                ? Math.trunc((rotation.Z + 45) / 90) * 90
                : Math.trunc((rotation.Z - 45) / 90) * 90;
        setRotation({
            originX: newOriginX,
            originY: newOriginY,
            originZ: newOriginZ,
            X: newOriginX,
            Y: newOriginY,
            Z: newOriginZ
        });
    };

    /**
     * handle cube rotation while mouse is moving and 3d reference changes
     * @param {Object} event
     */
    const handleMouseMove = (event) => {
        /**
         * TODO : 
         * fix bugs with 3d reference changes
         */
        if (onMotion) {
            // x and y distances between mouse and clicked position
            var deltaX = mouseOrigin.mouseX - event.clientX;
            var deltaY = mouseOrigin.mouseY - event.clientY;

            /**
             * handle 3 reference changes(swap axis)
             */
            switch (Math.trunc(rotation.originX / 90) % 4) {
                case 0: //X
                    setRotation((prev) => ({
                        ...prev,
                        X: rotation.originX + deltaY / 3, // X --> X
                        Y: rotation.originY - deltaX / 3 // Y --> Y
                    }));
                    break;

                case 1: //X
                case -3: //X
                    switch (Math.trunc(rotation.originY / 90) % 4) {
                        case 0: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Z: rotation.originZ + deltaX / 3 // Y --> Z
                            }));
                            break;

                        case 1: //Y
                        case -3: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Y: rotation.originY + deltaX / 3 // Y --> Z
                            }));
                            break;

                        case 2: //Y
                        case -2: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Z: rotation.originZ + deltaX / 3 // Y --> Z
                            }));
                            break;

                        case -1: //Y
                        case 3: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Y: rotation.originY - deltaX / 3 // Y --> Z
                            }));
                            break;
                    }
                    break;

                case 2: //X
                case -2: //X
                    setRotation((prev) => ({
                        ...prev,
                        X: rotation.originX + deltaY / 3, // X --> X
                        Y: rotation.originY + deltaX / 3 // Y --> -Y
                    }));
                    break;

                case -1: //X
                case 3: //X
                    switch (Math.trunc(rotation.originY / 90) % 4) {
                        case 0: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Z: rotation.originZ - deltaX / 3 // Y --> -Z
                            }));
                            break;

                        case 1: //Y
                        case -3: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Z: rotation.originZ - deltaX / 3 // Y --> Z
                            }));
                            break;

                        case 2: //Y
                        case -2: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Z: rotation.originZ + deltaX / 3 // Y --> Z
                            }));
                            break;

                        case -1: //Y
                        case 3: //Y
                            setRotation((prev) => ({
                                ...prev,
                                X: rotation.originX + deltaY / 3, // X --> X
                                Y: rotation.originY + deltaX / 3 // Y --> Z
                            }));
                            break;
                    }
                    break;
            }
        }
    };

    /*effectuate css rotation on state changes */
    useEffect(() => {
        var scene = document.getElementById(`scene${id}`);
        //set transition on mouse release
        if (onMotion) {
            scene.style.transition = "all 0s";
        } else {
            scene.style.transition = "all 0.5s cubic-bezier(0,.71,.27,1.38)";
        }

        scene.style.transform = `rotateX(${rotation.X}deg) rotateY(${rotation.Y}deg) rotateZ(${rotation.Z}deg)`;
    }, [onMotion, rotation.X, rotation.Y, rotation.Z, id]);

    return (
        <>
            <div
                className={`layout ${
                    onMotion ? "layout--grab--onMotion" : ""
                } ${!autoRotation ? "layout--grab" : ""}`}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUp={(e) => handleMouseUp(e)}
                onMouseOut={(e) => handleMouseUp(e)}
            >
                <div
                    className={`scene ${
                        autoRotation || window.innerWidth < 768
                            ? "scene--autoRotation"
                            : ""
                    }`}
                    id={`scene${id}`}
                >
                    <div className="cube cube--flexible cube--green">
                        <div className="cube__front">
                            <img
                                className="cube__image"
                                src={images[0]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__back">
                            <img
                                className="cube__image"
                                src={images[1]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__top">
                            <img
                                className="cube__image"
                                src={images[2]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__bottom">
                            <img
                                className="cube__image"
                                src={images[3]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__left">
                            <img
                                className="cube__image"
                                src={images[4]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__right">
                            <img
                                className="cube__image"
                                src={images[5]}
                                alt="images"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="buttons">
                <button
                    className={`${autoRotation && "active"}`}
                    onClick={() => setAutoRtation(true)}
                >
                    rotation auto
                </button>
                <button
                    className={`${!autoRotation && "active"}`}
                    onClick={() => setAutoRtation(false)}
                >
                    {" "}
                    rotation manuelle
                </button>
            </footer>
        </>
    );
}
