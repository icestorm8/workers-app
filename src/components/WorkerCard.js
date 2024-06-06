import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const starStyle = {
  fontSize: "40px",
  color: "orange",
  position: "absolute",
  top: "5%",
  right: "2%",
};
export default function WorkerCard({ worker }) {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="card  d-flex flex-row  m-1" style={{ width: "40%" }}>
      <img
        src={worker.picture.large}
        width={200}
        height={200}
        className="object-fit-cover p-1"
        style={{ borderRadius: "3%" }}
      ></img>
      <div className="col-7 p-3">
        <h4 className="text-break col-7">
          {worker.name.first} {worker.name.last}
        </h4>
        <h6>age: {worker.dob.age}</h6>
        <h6>country: {worker.location.country}</h6>
        <button className="btn btn-secondary">more info</button>
        {isFav ? (
          <FaStar style={starStyle} onClick={() => setIsFav(!isFav)} />
        ) : (
          <FaRegStar style={starStyle} onClick={() => setIsFav(!isFav)} />
        )}
      </div>
    </div>
  );
}
