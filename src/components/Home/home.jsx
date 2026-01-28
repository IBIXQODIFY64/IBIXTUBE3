import "./home.css";
import { FaStar } from "react-icons/fa6";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
const categories = ["Recent Release", "Action", "Kids", "Comedy", "Horror"];

const ratingList = [
  { id: 1, label: "★★★★★ & Up", value: 5 },
  { id: 2, label: "★★★★☆ & Up", value: 4 },
  { id: 3, label: "★★★☆☆ & Up", value: 3 },
  { id: 4, label: "★★☆☆☆ & Up", value: 2 },
  { id: 5, label: "★☆☆☆☆ & Up", value: 1 },
];

const APIStatus = {
  INITIAL: "initial",
  SUCCESS: "success",
  FAILURE: "failure",
  LOADING: "loading",
};

const Home = () => {
  const [posters, setPosters] = useState([]);
  const [apiStatus, setApiStatus] = useState(APIStatus.INITIAL);
  const [movieSearch, setMovieSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchPosters = async () => {
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
          `https://ibixtubeserver.onrender.com/ibix/api/get-home-posters?category=${filterCategory}&rating=${rating}`,
          options,
        );
        const result = await response.json();

        if (response.ok) {
          setApiStatus(APIStatus.SUCCESS);
          setPosters(result);
        } else {
          setApiStatus(APIStatus.FAILURE);
        }
      } catch (error) {
        console.error(error);
        setApiStatus(APIStatus.FAILURE);
      }
    };

    fetchPosters();
  }, [filterCategory, rating]);

  const onSearchFilter = (event) => {
    setMovieSearch(event.target.value);
  };

  const updateFilter = (value) => {
    setFilterCategory(value);
  };

  const updateRating = (value) => {
    setRating(value);
  };

  const clearFilters = () => {
    setMovieSearch("");
    setFilterCategory("");
    setRating(0);
  };

  const renderFiltersLayout = () => (
    <div className="filter-container">
      <input
        type="search"
        placeholder="Search movies..."
        className="filter-search"
        value={movieSearch}
        onChange={onSearchFilter}
      />

      <div className="filters-container">
        <div className="filter-group">
          <p className="filter-title">Filter by Category</p>
          <ul className="filter-list">
            {categories.map((item) => (
              <li
                key={item}
                onClick={() => updateFilter(item)}
                className={filterCategory === item ? "active-filter" : null}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <p className="filter-title">Filter by Rating</p>
          <ul className="filter-stars">
            {ratingList.map((item) => (
              <li
                key={item.id}
                onClick={() => updateRating(item.value)}
                className={rating === item.value ? "active-filter" : null}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );

  const renderLayout = () => {
    return (
      <>
        <ul className="posters-container">
          {categories.map((category) => {
            const filteredPosters = posters.filter(
              (poster) =>
                poster.category === category &&
                poster.title
                  .toLowerCase()
                  .includes(movieSearch.toLocaleLowerCase()),
            );

            if (filteredPosters.length === 0) {
              return null;
            }

            return (
              <li key={category} className="category-section">
                <p className="category">{category}</p>

                <div className="poster-list">
                  {filteredPosters.map((poster) => (
                    <div key={poster.id} className="poster-card">
                      <Link to={`/show-details/${poster.id}`}>
                        <img
                          src={poster.posterImg}
                          alt={poster.title}
                          className="poster-img"
                        />
                      </Link>

                      <div className="rating-cont">
                        <p className="rating">
                          <FaStar className="rating-star" /> {poster.rating}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

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

  const renderHomePosterView = () => {
    switch (apiStatus) {
      case "loading":
        return loadingView();
      case "failure":
        return failureView();

      case "success":
        return renderLayout();

      default:
        return null;
    }
  };

  return (
    <div className="home-bg-container">
      <div className="poster-layout">
        {renderFiltersLayout()}
        {renderHomePosterView()}
      </div>
    </div>
  );
};

export default Home;
