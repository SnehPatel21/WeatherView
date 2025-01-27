import React from 'react';
import { ThermometerSun, Droplets, Wind, Navigation, Clock, Eye, Cloud, Umbrella } from 'lucide-react';
import { WeatherStackResponse } from '../types/weather';

interface WeatherDisplayProps {
  weather: WeatherStackResponse;
  isCelsius: boolean;
  onToggleUnit: () => void;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weather,
  isCelsius,
  onToggleUnit,
}) => {
  const convertTemp = (temp: number) => {
    if (!isCelsius) {
      return ((temp * 9/5) + 32).toFixed(1) + '°F';
    }
    return temp.toFixed(1) + '°C';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">{weather.location.name}</h1>
              <p className="text-lg text-white/80">{weather.location.country}</p>
            </div>
            <button
              onClick={onToggleUnit}
              className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              {isCelsius ? '°C' : '°F'}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {weather.current.weather_icons?.[0] && (
              <img
                src={weather.current.weather_icons[0]}
                alt={weather.current.weather_descriptions[0]}
                className="w-32 h-32"
              />
            )}
            <div>
              <div className="text-6xl font-bold">
                {convertTemp(weather.current.temperature)}
              </div>
              <div className="text-xl capitalize">
                {weather.current.weather_descriptions[0]}
              </div>
            </div>
          </div>
          <div className="text-sm text-white/80">
            <Clock className="inline-block w-4 h-4 mr-2" />
            Local time: {weather.location.localtime}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <ThermometerSun className="w-6 h-6" />
              <span>Feels Like</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {convertTemp(weather.current.feelslike)}
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Droplets className="w-6 h-6" />
              <span>Humidity</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {weather.current.humidity}%
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Wind className="w-6 h-6" />
              <span>Wind</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {weather.current.wind_speed} km/h
            </div>
            <div className="text-sm text-white/80">
              {weather.current.wind_dir}
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span>Visibility</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {weather.current.visibility} km
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Cloud className="w-6 h-6" />
              <span>Cloud Cover</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {weather.current.cloudcover}%
            </div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Umbrella className="w-6 h-6" />
              <span>Precipitation</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {weather.current.precip} mm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};