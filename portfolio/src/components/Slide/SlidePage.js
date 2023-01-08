import "./SlidePage.scss";

function SlidePage(props) {
  const { image } = props;
  return (
    <div className="page" style={{ backgroundImage: `url(${image})` }}>
      {props.children}
    </div>
  );
}

export default SlidePage;
