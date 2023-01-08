import "./Work_detail.scss";

export default function Detail({ details }) {
  return (
    <div className="detail">
      <h2 className="detail_name">{details.name}</h2>
      <p className="detail_description">{details.desc}</p>
      <div className="info">
        <div>
          <div>Technologies :</div>
          <ul>
            {details.technos.map((tec) => (
              <li key={tec}>{tec}</li>
            ))}
          </ul>
        </div>
        <div>
          <div>Role :</div>
          <ul>
            {details.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div>
          <div>Year :</div>
          <ul>
            <li>{details.year}</li>
          </ul>
        </div>
      </div>
      <button className="detail_button">visit website</button>
    </div>
  );
}
