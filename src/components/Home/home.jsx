import "./home.css";

import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const categories = ["Recent Release", "Action", "Kids", "Comedy", "Horror"];

const ratingList = [
  { id: 1, label: "★★★★★ & Up", value: 5 },
  { id: 2, label: "★★★★☆ & Up", value: 4 },
  { id: 3, label: "★★★☆☆ & Up", value: 3 },
  { id: 4, label: "★★☆☆☆ & Up", value: 2 },
  { id: 5, label: "★☆☆☆☆ & Up", value: 1 },
];

const Home = () => {
  const [posters, setPosters] = useState([]);

  const renderFiltersLayout = () => (
    <div className="filter-container">
      <input
        type="search"
        placeholder="Search movies..."
        className="filter-search"
      />

      <div className="filters-container">
        <div className="filter-group">
          <p className="filter-title">Filter by Category</p>
          <ul className="filter-list">
            {categories.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <p className="filter-title">Filter by Rating</p>
          <ul className="filter-stars">
            {ratingList.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className="clear-btn">Clear Filters</button>
    </div>
  );

  const renderLayout = () => {
    return (
      <>
        <ul className="posters-container">
          {categories.map((category) => {
            const filteredPosters = posters.filter(
              (poster) => poster.category === category,
            );

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
                        <p className="rating">⭐ {poster.rating}</p>
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

  const token = Cookies.get("jwtToken");
  if (token === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="home-bg-container">
        <div className="poster-layout">
          {renderFiltersLayout()}
          {renderLayout()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
