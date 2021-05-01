import axios from "axios";
import { useEffect, useState } from "react";

import "./weather.css";

const convertTime = (time) => {
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=30.3829155&lon=76.7646585&exclude=minutely,hourly,alerts&units=metric&appid=1feee87821f0888ba39e189cf341b2d8`;
  useEffect(() => {
    axios
      .get(API_URL)
      .then(({ data }) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="weather-wrapper flex">
      {weatherData ? (
        <>
          <h2 className="location">Ambala Cantt IN</h2>
          <p className="today">Today</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`}
            alt="weather-icon"
          />
          <p style={{ textTransform: "capitalize" }}>
            {weatherData.current.weather[0].description}
          </p>
          <span className="temp">
            {weatherData.current.temp}{" "}
            <div className="celcius-icon">
              <svg x="0px" y="0px" width="110" viewBox="0 0 30 30">
                <path
                  d="M9.75,10.98c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28c0,0.5-0.18,0.93-0.53,1.28c-0.35,0.36-0.78,0.53-1.27,0.53c-0.5,0-0.93-0.18-1.28-0.53
	S9.75,11.48,9.75,10.98z M10.63,10.98c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.67s-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.28
	C10.72,10.49,10.63,10.72,10.63,10.98z M14.52,15.4c0,0.77,0.21,1.45,0.64,2.05c0.22,0.31,0.53,0.56,0.93,0.75
	c0.39,0.18,0.84,0.28,1.34,0.28c1.46,0,2.38-0.56,2.75-1.67c0.04-0.14,0.02-0.28-0.06-0.41c-0.08-0.13-0.19-0.2-0.33-0.23
	c-0.14-0.04-0.28-0.02-0.4,0.07c-0.12,0.08-0.2,0.19-0.23,0.34c0,0.01,0,0.02-0.01,0.05l-0.02,0.07c-0.11,0.19-0.26,0.34-0.45,0.45
	c-0.31,0.19-0.72,0.28-1.23,0.28c-0.31,0-0.59-0.05-0.83-0.16c-0.4-0.17-0.68-0.47-0.85-0.89c-0.11-0.27-0.17-0.6-0.17-0.97v-3.22
	c0-0.15,0.01-0.3,0.03-0.45c0.04-0.38,0.19-0.73,0.45-1.04c0.29-0.35,0.75-0.52,1.38-0.52c0.52,0,0.93,0.09,1.23,0.27
	c0.2,0.12,0.35,0.27,0.45,0.45c0.01,0.02,0.01,0.05,0.02,0.08c0.01,0.03,0.01,0.05,0.01,0.06c0.04,0.14,0.12,0.24,0.23,0.3
	c0.12,0.07,0.25,0.08,0.4,0.05c0.14-0.03,0.25-0.11,0.33-0.23c0.08-0.12,0.1-0.25,0.06-0.4v-0.01l-0.08-0.23
	c-0.05-0.11-0.14-0.26-0.28-0.43c-0.13-0.18-0.29-0.32-0.45-0.44c-0.21-0.15-0.48-0.27-0.82-0.38c-0.34-0.1-0.71-0.15-1.11-0.15
	c-0.51,0-0.95,0.09-1.35,0.27c-0.39,0.18-0.7,0.42-0.91,0.73c-0.43,0.59-0.65,1.28-0.65,2.07V15.4z"
                />
              </svg>
            </div>
          </span>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default Weather;