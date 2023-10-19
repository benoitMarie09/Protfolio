import React from "react";
import "./slideHeader.scss";

export function SlideHeader(props) {
    const {title, fullScreen, setFullScreen} = props

        return (
            <header className="slideHeader" >
                <h2>{title}</h2>
                {fullScreen ? 
                (<svg 
                    style={{zIndex:1000}}
                    className="slideHeader__icon"
                    onClick={() => setFullScreen(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <g>
                        <polygon className="st0" points="461.212,314.349 314.342,314.349 314.342,461.205 357.596,417.973 451.591,511.985 512,451.599 
                            417.973,357.581 	"/>
                        <polygon className="st0" points="50.788,197.667 197.659,197.667 197.659,50.797 154.42,94.043 60.394,0.025 0,60.417 94.027,154.428 	
                            "/>
                        <polygon className="st0" points="94.035,357.588 0.016,451.599 60.394,511.992 154.42,417.973 197.668,461.205 197.668,314.349 
                            50.788,314.349 	"/>
                        <polygon className="st0" points="417.99,154.428 512,60.401 451.591,0.008 357.58,94.035 314.342,50.797 314.342,197.651 
                            461.212,197.651 	"/>
                    </g>
                </svg>) : 
                (<svg 
                    className="slideHeader__icon"
                    onClick={() => setFullScreen(true)}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512">
                    <g>
                        <polygon className="st0" points="345.495,0 394.507,49.023 287.923,155.607 356.384,224.086 462.987,117.493 511.991,166.515 
                            511.991,0 	"/>
                        <polygon className="st0" points="155.615,287.914 49.022,394.507 0.009,345.494 0.009,512 166.515,512 117.493,462.978 
                            224.087,356.375 	"/>
                        <polygon className="st0" points="356.384,287.914 287.923,356.375 394.507,462.978 345.495,512 511.991,512 511.991,345.485 
                            462.977,394.507 	"/>
                        <polygon className="st0" points="166.505,0 0.009,0 0.009,166.506 49.022,117.493 155.615,224.086 224.087,155.607 117.501,49.023 	"/>
                    </g>
                </svg>)}
            </header>
        )
}