import { useState } from "react";
import Header from "../Header/header";
import { FaStar } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import "./favorites.css";

const MyFavorites = () => {
  const [favList, setFavList] = useState([]);

  const clearAll = () => {};

  const removeFavorite = () => {
  };

  return (
    <>
      <div className="favorites-container">
        <div className="fav-head">
          <h1 className="favorites-title">❤️ My Favorites</h1>
          <button className="clear-all-btn" onClick={clearAll}>
            Clear All
          </button>
        </div>

        <ul className="favorites-grid">
          {favList.map((item) => (
            <li className="favorite-card" key={item.id}>
              <img
                src={item.posterImg}
                alt={item.title}
                className="favorite-poster"
              />

              <div className="favorite-info">
                <h3 className="favorite-name">{item.title}</h3>

                <div className="favorite-bottom">
                  <div className="favorite-rating">
                    <FaStar className="star-icon" />
                    <span>{item.rating}</span>
                  </div>

                  <IoHeartSharp className="fav-heart" />
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFavorite(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyFavorites;
