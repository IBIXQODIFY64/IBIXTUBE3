import { Link, useParams } from "react-router-dom";
import "./showDetails.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
const APIStatus = {
  INITIAL: "initial",
  SUCCESS: "success",
  FAILURE: "failure",
  LOADING: "loading",
};

const ShowDetails = () => {
  const { posterId } = useParams();
  const [posterDetails, setPosterDetails] = useState({});
  const [apiStatus, setApiStatus] = useState(APIStatus.INITIAL);

  useEffect(() => {
    const fetchPosterDetails = async () => {
      const token = Cookies.get("jwtToken");

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        setApiStatus(APIStatus.LOADING);
        const response = await fetch(
          `https://ibixtubeserver.onrender.com/ibix/api/get-poster-details/${posterId}`,
          options,
        );

        const result = await response.json();

        if (response.ok) {
          setApiStatus(APIStatus.SUCCESS);
          setPosterDetails(result.data);
        }
      } catch (error) {
        setApiStatus(APIStatus.FAILURE);
        console.error(error);
      }
    };

    fetchPosterDetails();
  }, []);

  const loadingView = () => {
    return (
      <div className="loading-container">
        <ThreeDots height="80" width="80" color="#c9291b" />
      </div>
    );
  };

  const failureView = () => {
    return (
      <div>
        <h2>Data Not Found!</h2>
      </div>
    );
  };

  const successView = () => {
    const { bannerImg, cast, description, duration, title, type, released } =
      posterDetails;
    return (
      <>
        <img src={bannerImg} className="show-details-banner-img" />
        <div className="show-des">
          <h2>{title}</h2>

          <p>
            <span>Cast: </span>
            {cast}
          </p>

          <span>About</span>
          <ul>
            <li>
              Duration: <span>{duration}</span>
            </li>
            <li>
              Released: <span>{released}</span>
            </li>
            <li>
              Type: <span>{type}</span>
            </li>
          </ul>

          <p className="about-show">{description}</p>
          <Link to="/">
            <button className="back-btn">Back</button>
          </Link>
        </div>
      </>
    );
  };

  const renderPosterDetails = () => {
    switch (apiStatus) {
      case "loading":
        return loadingView();

      case "failure":
        return failureView();

      case "success":
        return successView();

      default:
        return null;
    }
  };

  return <div className="show-details-cont">{renderPosterDetails()}</div>;
};

export default ShowDetails;
