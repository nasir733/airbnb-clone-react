import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1> Show Date Picker</h1>}
        <Button
          variant="outline"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="banner__searchButton"
        >
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Lorem ipsum dolor sit.</h1>
        <h5>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          ducimus ipsum, consequatur dolorum aliquid incidunt magnam ut?
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
