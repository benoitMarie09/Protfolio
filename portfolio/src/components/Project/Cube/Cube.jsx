/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import "./Cube.scss";

export default function Cube(props) {
    // Status qui définit quand le cube est en rotation
    const [autoRotation, setAutoRtation] = useState(true);
    const [onMotion, setOnMotion] = useState(false);
    const [rotation, setRotation] = useState({
        originX: 0,
        originY: 0,
        originZ: 0,
        // Angles de rotation de départ
        X: 0,
        Y: 0,
        Z: 0
    });
    const [mouseOrigin, setMouseOrigin] = useState({
        // Positions x et y de la souris (enregistre quand on clique  gauche)
        mouseX: 0,
        mouseY: 0
    });

    const autoRotationOn = () => {
        setAutoRtation(true);
    };
    const autoRotationOff = () => {
        setAutoRtation(false);
    };

    const handleMouseDown = (event) => {
        //Fonction qui enregistre la position de la souris quand on clique gauche
        setOnMotion(true);
        setMouseOrigin({
            mouseX: event.clientX,
            mouseY: event.clientY
        });
    };

    const handleMouseUp = () => {
        setOnMotion(false);
        // Réinitialisation de la position de la souris
        setMouseOrigin({ mouseX: 0, mouseY: 0 });
        // Mise à jour de l'angle d'origine arrondi au quart de tour
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

    const handleMouseMove = (event) => {
        if (onMotion) {
            // Distance x et y entre l'endroit cliqué et l'emplacement de la souris
            var deltaX = mouseOrigin.mouseX - event.clientX;
            var deltaY = mouseOrigin.mouseY - event.clientY;

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
            console.log("X :", Math.trunc(rotation.originX / 90) % 4);
            console.log("Y :", Math.trunc(rotation.originY / 90) % 4);
            console.log("Z :", Math.trunc(rotation.originZ / 90) % 4);
        }
    };

    useEffect(() => {
        var scene = document.getElementById(`scene${props.id}`);
        if (onMotion) {
            scene.style.transition = "all 0s";
        } else {
            scene.style.transition = "all 0.5s cubic-bezier(0,.71,.27,1.38)";
        }

        scene.style.transform = `rotateX(${rotation.X}deg) rotateY(${rotation.Y}deg) rotateZ(${rotation.Z}deg)`;
    }, [onMotion, rotation.X, rotation.Y, rotation.Z, props.id]);

    return (
        <>
            <div
                className={`layout ${onMotion ? "layout--grab--onMotion" : ""} ${
                    !autoRotation ? "layout--grab" : ""
                }`}
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
                    id={`scene${props.id}`}
                >
                    <div className="cube cube--flexible cube--green">
                        <div className="cube__front">
                            <img
                                className="cube__image"
                                src={props.images[0]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__back">
                            <img
                                className="cube__image"
                                src={props.images[1]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__top">
                            <img
                                className="cube__image"
                                src={props.images[2]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__bottom">
                            <img
                                className="cube__image"
                                src={props.images[3]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__left">
                            <img
                                className="cube__image"
                                src={props.images[4]}
                                alt="images"
                            />
                        </div>
                        <div className="cube__right">
                            <img
                                className="cube__image"
                                src={props.images[5]}
                                alt="images"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="buttons">
                <button
                    className={`${autoRotation && "active"}`}
                    onClick={autoRotationOn}
                >
                    rotation auto
                </button>
                <button
                    className={`${!autoRotation && "active"}`}
                    onClick={autoRotationOff}
                >
                    {" "}
                    rotation manuelle
                </button>
            </footer>
        </>
    );
}
