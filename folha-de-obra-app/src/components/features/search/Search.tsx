import { useState } from "react";
import callSearch from "./Helper";

const Search = () => {
  let [searchResult, setSearchResult] = useState("");

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchResult(callSearch(e.target.value))}
          />
        </form>
        <div>{searchResult}</div>
      </nav>
    </>
  );
};

export default Search;
