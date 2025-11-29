import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const Weather = () => {
  const [weatherData, setweather] = useState(false);
  const [errorMsg, setError] = useState("");
  const showError = (msg) => {
    setError(msg);

    setTimeout(() => {
      setError("");
    }, 2100);
  };
  const inputRef = useRef();
  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": drizzle,
    "09n": drizzle,
    "10d": rain,
    "10n": rain,
    "11d": rain,
    "11n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    if (city === "") {
      showError("Enter A City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        showError("Wrong City Name");
        return;
      }
      const icon = allIcons[data.weather[0].icon] || clear;
      setweather({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setweather(false);
      console.error(error);
    }
  };

  useEffect(() => {
    search("New York");
  }, []);

  return (
    <div className="flex justify-center items-center place-self-center p-10 rounded-lg bg-linear-60 from-[#2f4680] to-[#500ae4] flex-col max-[433px]:w-full max-[433px]:h-screen max-[433px]:rounded-none max-[433px]:justify-around max-[390px]:p-5 max-[350px]:p-0">
      <div className="flex justify-center items-center space-x-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="h-12 border-none outline-none rounded-4xl pl-6 text-[#626262] bg-[#ebfffc] text-xl max-[328px]:pl-1"
        />

        <img
          src={search_icon}
          alt=""
          className="w-12 p-3.5 rounded-4xl bg-[#ebfffc] cursor-pointer transition-all duration-75 ease-in-out active:scale-95"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <div className="text-red-600">{errorMsg}</div>
      <img src={weatherData.icon} alt="" className="w-36- my-8" />
      <p className="text-white text-7xl leading-20">
        {weatherData.temperature}°c
      </p>
      <p className="text-white text-5xl">{weatherData.location}</p>
      <div className="w-full mt-10 text-white flex justify-around">
        <div className="flex items-start space-x-8">
          <img src={humidity} alt="" className="w-7 mt-2.5" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span className="block text-[15px] max-[405px]:text-[14px]">
              Humidity
            </span>
          </div>
          <div className="flex items-start space-x-8">
            <img src={wind} alt="" className="w-7 mt-2.5" />
            <div>
              <p>{weatherData.windSpeed} km/h</p>
              <span className="block text-[15px] max-[405px]:text-[14px]">
                Wind Speed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
