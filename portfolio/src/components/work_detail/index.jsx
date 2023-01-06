import "./style.scss";

export default function Detail(props){
    
    return (
        <div className="detail">
            <h1 className="detail_name">{props.name}</h1>
            <p className="detail_description">{props.desc}</p>
            <button className="detail_button" ></button>
        </div>
    )
}