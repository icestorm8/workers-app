import React, { useContext, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/Context";

const starStyle = {
  fontSize: "40px",
  color: "orange",
  position: "absolute",
  top: "5%",
  right: "2%",
};
export default function WorkerCard({ worker, index }) {
  const { addFav, removeFav, isSaved } = useContext(AppContext);
  const [isFav, setIsFav] = useState(isSaved(worker.login.uuid));
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const viewInfo = (index) => {
    var company = searchParams.get("search") || "abc";
    if (isFav) {
      navigate(`employee?index=${index}`);
    } else {
      navigate(`employee?company=${company}&index=${index}`);
    }
  };

  return (
    <div className="card d-flex flex-row m-1 col-lg-4 col-md-6 col-xs-12 overflow-hidden text-wrap align-self-stretch">
      <img
        src={worker.picture.large}
        className="p-1 col-lg-6 col-md-6 col-sm-3 col-xs-1"
        style={{
          borderRadius: "3%",
          objectFit: "cover",
        }}
        alt={worker.name.first}
      ></img>
      <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 p-3">
        <h4 className="text-break col-7">
          {worker.name.first} {worker.name.last}
        </h4>
        <h6>age: {worker.dob.age}</h6>
        <h6>country: {worker.location.country}</h6>
        <button className="btn btn-secondary" onClick={() => viewInfo(index)}>
          more info
        </button>
        {isFav ? (
          <FaStar
            style={starStyle}
            onClick={() => {
              setIsFav(false);
              removeFav(worker.login.uuid);
            }}
          />
        ) : (
          <FaRegStar
            style={starStyle}
            onClick={() => {
              setIsFav(true);
              addFav(worker);
            }}
          />
        )}
      </div>
    </div>
  );
}
