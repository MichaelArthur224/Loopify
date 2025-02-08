import React, { useState } from "react";
import "./styles/home.css";
import Player from "./Player.jsx";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="home-container">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/slatt.mp4" type="video/mp4" />
        </video>
        {/* Black Overlay */}
        <div className="overlay"></div>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Player Component (Now directly under Search Box) */}
      <div className="player-container">
        <Player />
      </div>
    </div>
  );
};

export default Home;




