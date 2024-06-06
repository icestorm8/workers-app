import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = () => {
    var query = searchRef.current.value;
    query === ""
      ? navigate(`/`)
      : navigate(`/?search=${searchRef.current.value}`);
  };
  return (
    <div className="input-group w-25 container">
      <input
        ref={searchRef}
        type="text"
        placeholder="search by..."
        className="form-control"
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
