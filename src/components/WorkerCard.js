import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const starStyle = {
  fontSize: "40px",
  color: "orange",
  position: "absolute",
  top: "5%",
  right: "2%",
};
export default function WorkerCard() {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="card  d-flex flex-row  m-1" style={{ width: "40%" }}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1572711304319-K2K7Y2PKAW0QVJLQGVW7/Atlanta-Professional-Headshots-1.jpg"
        width={300}
        height={300}
        className="object-fit-cover p-1"
        style={{ borderRadius: "3%" }}
      ></img>
      <div className="col-7 p-3">
        <h4>First Last</h4>
        <h6>age: </h6>
        <h6>country: </h6>
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
