import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import WorkerCard from "../components/WorkerCard";

export default function Favorites() {
  const { favs } = useContext(AppContext);
  return (
    <div>
      <h1 className="text-center display-6">Your favorite employees</h1>
      <div className="container d-flex flex-wrap justify-content-center align-items-strech p-2">
        {favs.map((employee, index) => (
          <WorkerCard
            worker={employee}
            key={employee.login.uuid}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
