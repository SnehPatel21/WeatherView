import { useState, useCallback } from 'react';
import { WeatherStackResponse } from '../types/weather';
import { fetchWeatherData } from '../services/api';

export const useWeather = (initialCity: string) => {
  const [city, setCity] = useState(initialCity);
  const [weather, setWeather] = useState<WeatherStackResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (searchCity?: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWeatherData(searchCity || city);
      setWeather(data);
      if (searchCity) {
        setCity(searchCity);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [city]);

  return {
    city,
    setCity,
    weather,
    loading,
    error,
    fetchWeather
  };
};