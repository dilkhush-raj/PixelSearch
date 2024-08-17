// src/Geolocation.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Logo = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountry(response.data.country_name);
      } catch (error) {
        console.error("Error fetching geolocation data:", error);
      }
    };

    fetchGeolocation();
  }, []);

  return (
    <>
      {country.toLowerCase() === "india" ? (
        <Link to={"/"}>
          <div className="font-bold text-green-500 ">PhotoPixel</div>
        </Link>
      ) : (
        <Link to={"/"}>
          <div className="font-bold text-red-500 ">PhotoPixel</div>
        </Link>
      )}
    </>
  );
};

export default Logo;
