import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { AppContext } from "../context/Context";
const starStyle = {
  fontSize: "40px",
  color: "orange",
};
export default function MoreInfo() {
  const { addFav, removeFav, isSaved, favs } = useContext(AppContext);
  const [isFav, setIsFav] = useState(false);
  const [searchParams] = useSearchParams();
  var index = searchParams.get("index");
  var company = searchParams.get("company");
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const doApi = async () => {
      try {
        const queryUrl = `https://randomuser.me/api/?results=10&seed=${company}`;
        const res = await fetch(queryUrl);
        const data = await res.json();
        setEmployee(data.results[index]);
        // console.table(employee[index]);
      } catch (error) {
        console.error(error);
        setEmployee(null);
      }
    };

    if (window.location.pathname.includes("favorites")) {
      setEmployee(favs[index]);
    } else {
      doApi();
    }
  }, [company, favs, index]);

  useEffect(() => {
    if (employee != null) {
      setIsFav(isSaved(employee.login.uuid));
    }
  }, [employee, isSaved]);
  const goBack = () => {
    navigate(`/?search=${company}`);
  };

  return (
    <div className="container">
      {employee != null && (
        <div>
          <h1>
            Info about: {employee.name.first} {employee.name.last}{" "}
            {isFav ? (
              <FaStar
                style={starStyle}
                onClick={() => {
                  setIsFav(false);
                  removeFav(employee.login.uuid);
                }}
              />
            ) : (
              <FaRegStar
                style={starStyle}
                onClick={() => {
                  setIsFav(true);
                  addFav(employee);
                }}
              />
            )}
          </h1>
          <img
            src={employee.picture.large}
            width={200}
            height={200}
            className="object-fit-cover p-1"
            style={{ borderRadius: "3%" }}
            alt={employee.name.first}
          ></img>

          <h6>Age: {employee.dob.age}</h6>
          <h6>Country: {employee.location.country}</h6>
          <h6>City: {employee.location.city}</h6>
          <h6>Email: {employee.email}</h6>
          <h6>Phone: {employee.phone}</h6>
          <button onClick={goBack} className="btn btn-primary">
            back
          </button>

          <MapContainer
            center={[
              employee.location.coordinates.latitude,
              employee.location.coordinates.longitude,
            ]}
            zoom={4} // beacuse coordinates are mostly sea
            scrollWheelZoom={true}
          >
            <Marker
              key="11"
              position={[
                employee.location.coordinates.latitude,
                employee.location.coordinates.longitude,
              ]}
            >
              <Popup>
                {employee.location.country}, {employee.location.city},{" "}
                {employee.location.postcode}, {employee.location.street.name}
              </Popup>
            </Marker>

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
}
