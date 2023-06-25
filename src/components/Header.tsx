import React, { useState } from "react";
import style from "../styles/header.module.css";
import { HandleFetchData } from "../types";

type Prop = {
  handleFetchData: HandleFetchData;
};

const Header = ({ handleFetchData }: Prop) => {
  const [city, setCity] = useState("");
  return (
    <div className={style.header}>
      <input
        type="search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={() => handleFetchData(city)}>Search</button>
    </div>
  );
};

export default Header;
