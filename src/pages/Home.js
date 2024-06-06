import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function Home() {
  return (
    <div className="d-flex flex-column gap-2 p-4">
      <SearchBar />
      <SearchResults />
    </div>
  );
}
