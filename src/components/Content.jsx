import React from "react";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import axios from "axios";

const Content = () => {
  const { latitude, longitude } = usePosition();
  const [weather, setWeather] = useState();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_DATA;

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );
      setWeather(data);
      console.log(data);
    } catch (error) {
      alert("Veriler Çekilemedi");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className="h-[450px] bg-gray-600">
      <div className="flex flex-col justify-center items-center">
        <h2 className="bg-slate-50 w-full h-11 text-2xl text-zinc-700  flex justify-center items-center ">
          Bölgenizin Hava Durumu
        </h2>
        <div className="flex flex-col justify-center items-center mt-5 bg-slate-100 p-[100px]">
          <div className="text-2xl font-mono">
            <h3>Şehir:{weather.name}</h3>
            <h3>Hava sıcaklığı:{Math.floor(weather.main.temp - 273.15)}</h3>
            <h3>
              Hava Durumu: {weather.weather.map((data) => data.description)}
            </h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Content;
