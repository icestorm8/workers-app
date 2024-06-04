import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <SearchResults />
    </div>
  );
}
