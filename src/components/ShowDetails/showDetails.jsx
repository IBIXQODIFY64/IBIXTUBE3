import { Link } from "react-router-dom";
import "./showDetails.css";

const ShowDetails = () => {
  return (
    <>
      <div className="show-details-cont">
        <img src={""} className="show-details-banner-img" />
        <div className="show-des">
          <h2>{""}</h2>

          <p>
            <span>Cast: </span>
            {""}
          </p>

          <span>About</span>
          <ul>
            <li>
              Duration: <span>{""}</span>
            </li>
            <li>
              Released: <span>{""}</span>
            </li>
            <li>
              Type: <span>{""}</span>
            </li>
          </ul>

          <p className="about-show">{""}</p>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
