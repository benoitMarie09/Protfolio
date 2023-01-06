import Cube from "../../components/cube/Cube";
import Detail from "../../components/work_detail";
import "./Work.scss";

export default function Work(props) {
    return (
        <div className="work_page">
            <Cube images = {props.images}/>
            <span className="v-separator"></span>
            <Detail />

        </div>
    )
}
