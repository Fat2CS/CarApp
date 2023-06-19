"use client";

import { useState } from "react";
import SearchStylesArt from "./SearchStylesArt";

const SearchBar = () => {
  const [stylesArt, setStylesArt] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchStylesArt stylesArt={stylesArt} setStylesArt={setStylesArt} />
      </div>
    </form>
  );
};

export default SearchBar;
