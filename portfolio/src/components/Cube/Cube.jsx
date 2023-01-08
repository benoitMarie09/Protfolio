import React, { useState, useEffect } from "react";
import "./Cube.scss";

export default function Cube(props) {
  const [onMotion, setOnMotion] = useState(false);
  const [rotation, setRotation] = useState({
    originX: 0,
    originY: 0,
    originZ: 0,
    X: 0,
    Y: 0,
    Z: 0,
  });
  const [mouseOrigin, setMouseOrigin] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  const handleMouseDown = (event) => {
    setOnMotion(true);
    setMouseOrigin({
      mouseX: event.clientX,
      mouseY: event.clientY,
    });
  };

  const handleMouseUp = () => {
    setOnMotion(false);
    setMouseOrigin({ mouseX: 0, mouseY: 0 });
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
      Z: newOriginZ,
    });
  };
  console.log("X:", Math.trunc(rotation.X / 90) % 4);
  const handleMouseMove = (event) => {
    if (onMotion) {
      var deltaX = mouseOrigin.mouseX - event.clientX;
      var deltaY = mouseOrigin.mouseY - event.clientY;
      if (Math.trunc(rotation.originX / 90) % 4 === 0) {
        setRotation((prev) => ({
          ...prev,
          X: rotation.originX + deltaY / 3,
          Y: rotation.originY - deltaX / 3,
        }));
      } else if (
        Math.trunc(rotation.originX / 90) % 4 === 1 ||
        Math.trunc(rotation.originX / 90) % 4 === -3
      ) {
        setRotation((prev) => ({
          ...prev,
          X: rotation.originX + deltaY / 3,
          Z: rotation.originZ + deltaX / 3,
        }));
      } else if (
        Math.trunc(rotation.originX / 90) % 4 === 2 ||
        Math.trunc(rotation.originX / 90) % 4 === -2
      ) {
        setRotation((prev) => ({
          ...prev,
          X: rotation.originX + deltaY / 3,
          Y: rotation.originY + deltaX / 3,
        }));
      } else if (
        Math.trunc(rotation.originX / 90) % 4 === -1 ||
        Math.trunc(rotation.originX / 90) % 4 === 3
      ) {
        setRotation((prev) => ({
          ...prev,
          X: rotation.originX + deltaY / 3,
          Z: rotation.originZ - deltaX / 3,
        }));
      }
    }
  };

  useEffect(() => {
    var scene = document.getElementById(`scene${props.id}`);
    if (onMotion) {
      scene.style.transition = "all 0s";
    } else {
      scene.style.transition = "all 0.5s";
    }

    scene.style.transform = `rotateX(${rotation.X}deg) rotateY(${rotation.Y}deg) rotateZ(${rotation.Z}deg)`;
  }, [onMotion, rotation.X, rotation.Y, rotation.Z, props.id]);

  return (
    <div>
      <div
        className="layout"
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => handleMouseUp(e)}>
        <div className="scene" id={`scene${props.id}`}>
          <div className="cube cube-medium cube-green">
            <div className="cube__front">
              <img className="cube__image" src={props.images[0]} alt="images" />
            </div>
            <div className="cube__back">
              <img className="cube__image" src={props.images[1]} alt="images" />
            </div>
            <div className="cube__top">
              <img className="cube__image" src={props.images[2]} alt="images" />
            </div>
            <div className="cube__bottom">
              <img className="cube__image" src={props.images[3]} alt="images" />
            </div>
            <div className="cube__left">
              <img className="cube__image" src={props.images[4]} alt="images" />
            </div>
            <div className="cube__right">
              <img className="cube__image" src={props.images[5]} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
