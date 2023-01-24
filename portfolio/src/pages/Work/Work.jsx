import { useContext } from "react";
import Cube from "../../components/Cube/Cube";
import VSlide from "../../components/Slide/VSlide";
import Detail from "../../components/Work_detail/Work_detail";
import { works } from "../../data/works";
import { SlideContext } from "../../index";
import "./Work.scss";

export default function Work(props) {
    const {currentSlide, setCurrentSlide } = useContext(SlideContext);
    const slidesNb = works.getWorks().length;
    const cubeClick = (key) => {setCurrentSlide({...currentSlide,v:key-1})}

    return (
        <>
        {works.getWorks().map((worksItems, index) => (
            <VSlide
                key={worksItems.key}
                index={index}
                slidesNb={slidesNb}
            >
                <div className="work">
                    <div className="work__cube">
                        <Cube
                            images={worksItems.images}
                            id={worksItems.key}
                            />
                    </div>
                    <img className="website-image" src={worksItems.images[0]} alt="website" />
                        <svg
                        className="double-arrow"
                            version="1.1"
                            width="522.89362"
                            height="522.89362"
                            viewBox="0 0 522.89362 522.89362"
                            xmlns="http://www.w3.org/2000/svg">
                             <path
                                d="m 386.47266,519.43713 c -8.66536,-4.03496 -12.22444,-10.57448 -11.46549,-21.06691 0.29536,-4.08326 1.20374,-7.05905 2.92344,-9.57698 1.3722,-2.00916 16.7189,-16.41382 34.10374,-32.01036 l 31.60882,-28.35735 -31.09818,-0.66142 c -37.7575,-0.80305 -55.29299,-2.85008 -81.84653,-9.5545 C 274.05943,403.90902 223.84806,374.72213 182.80492,332.24197 135.7175,283.50591 107.12667,224.17636 97.403761,155.02392 96.389504,147.81019 95.535898,131.64876 95.125038,111.88059 L 94.468086,80.271816 65.872341,112.1633 c -31.259955,34.86273 -32.519352,35.92181 -42.716552,35.92181 -14.2702732,0 -24.5772549,-11.05908 -22.74764566,-24.40753 C 0.74841808,121.195 1.8298317,117.89567 2.8112846,116.34572 3.7927377,114.79578 26.655319,89.059969 53.617022,59.155029 106.43334,0.57308736 105.88051,1.0868299 116.14954,1.0437059 c 10.77215,-0.0452369 9.36845,-1.33669664 62.80852,57.7859001 29.87932,33.056521 50.02442,56.165194 51.14333,58.667094 7.95156,17.77975 -9.22883,36.042 -27.38405,29.10845 -5.16427,-1.97224 -8.88633,-5.77615 -41.35564,-42.26498 -11.51489,-12.940368 -21.34833,-23.557504 -21.85208,-23.593632 -1.41469,-0.101454 0.11099,56.013162 1.86265,68.507932 4.66939,33.30753 13.30238,60.76032 28.08827,89.32038 41.72171,80.58861 120.66251,134.62263 210.93664,144.38355 13.90709,1.50371 61.83352,2.63722 61.74819,1.46042 -0.0371,-0.5112 -12.45543,-11.95924 -27.59637,-25.44009 -40.42511,-35.99283 -39.29622,-34.75549 -40.42805,-44.31199 -1.82333,-15.39511 16.36197,-28.38426 30.50529,-21.7889 2.07634,0.96826 28.37949,24.00414 58.45143,51.19087 43.85717,39.64933 55.13426,50.35988 56.99079,54.12766 2.89625,5.87785 3.08105,14.33847 0.43027,19.69789 -2.25021,4.54952 -110.1421,100.24718 -115.58522,102.52146 -5.22836,2.18455 -12.47349,1.80008 -18.44085,-0.97859 z"
                                />
                         </svg>
                    <span className="v-separator sep-1"></span>
                    <div className='icon-scroll'></ div>
                    <span className="v-separator sep-2"></span>
                    <div className="work__detail">
                        <Detail
                            details={worksItems.details}
                            pageVIndex={index}
                        />
                    </div>
                </div>
            </VSlide>
        ))}


        <nav className="projects_navigation">
                {works.getWorks().map((worksItems) => (
                    <div className="scene" key={worksItems.key}>
                        <div 
                            className={`cube cube--very-small 
                            ${currentSlide.v === worksItems.key - 1 ? "cube--active" : "cube--inactive "}`}
                            onClick={()=>{cubeClick(worksItems.key)}}
                        >
                            <div className="cube__front"></div>
                            <div className="cube__back">{worksItems.key}</div>
                            <div className="cube__top"></div>
                            <div className="cube__bottom"></div>
                            <div className="cube__left"></div>
                            <div className="cube__right"></div>
                        </div>
                    </div>
                ))}
        </nav>
        </>
    );
}
