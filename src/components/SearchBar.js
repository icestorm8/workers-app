import React from "react";

export default function SearchBar() {
  return (
    <div className="input-group w-25 container">
      <input type="text" placeholder="search by..." className="form-control" />
      <button className="btn btn-primary">Search</button>
    </div>
  );
}
