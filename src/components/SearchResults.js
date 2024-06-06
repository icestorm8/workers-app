import React, { useEffect, useState } from "react";
import WorkerCard from "./WorkerCard";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [fetchedData, setFetchedData] = useState([]);
  const [searchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const doApi = async () => {
      try {
        const url = `https://randomuser.me/api/?results=10&seed=abc`;
        const seedQuery = searchParams.get("search") || "abc";
        const queryUrl = `https://randomuser.me/api/?results=10&seed=${seedQuery}`;
        const res = await fetch(queryUrl);
        const data = await res.json();
        setFetchedData(data.results);
      } catch (error) {
        console.error(error);
        setFetchedData([]);
        setErrorMsg(error.message);
      }
    };
    doApi();
  }, [searchParams]);
  return (
    <div className="">
      {searchParams.get("search") && (
        <h1 className="text-center lead">
          search for employees of: {searchParams.get("search")}
        </h1>
      )}
      <div className="container d-flex flex-wrap justify-content-center align-items-strech p-2">
        {fetchedData.length > 0 &&
          fetchedData.map((employee, index) => (
            <WorkerCard
              worker={employee}
              key={employee.login.uuid}
              index={index}
            />
          ))}
        {fetchedData.length == 0 && (
          <h1 className="text-danger">error: {errorMsg}</h1>
        )}
      </div>
    </div>
  );
}
