import React, { useEffect, useState } from "react";
import WorkerCard from "./WorkerCard";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const doApi = async () => {
      const url = `https://randomuser.me/api/?results=10&seed=abc`;
      const seedQuery = searchParams.get("search") || "abc";
      const queryUrl = `https://randomuser.me/api/?results=10&seed=${seedQuery}`;
      const res = await fetch(queryUrl);
      const data = await res.json();
      setFetchedData(data.results);
    };
    doApi();
  });
  return (
    <div className="container d-flex flex-wrap justify-content-center align-items-strech">
      {fetchedData &&
        fetchedData.map((employee) => <WorkerCard worker={employee} />)}
    </div>
  );
}
