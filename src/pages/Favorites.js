import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import WorkerCard from "../components/WorkerCard";

export default function Favorites() {
  const { favs, removeFav, addFav } = useContext(AppContext);
  return (
    <div>
      <h1>Your favorite employees</h1>
      <div>
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
