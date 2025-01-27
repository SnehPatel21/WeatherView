import { WeatherStackResponse } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHERSTACK_API_KEY;
const BASE_URL = 'https://api.weatherstack.com';

export const fetchWeatherData = async (city: string): Promise<WeatherStackResponse> => {
  const url = `${BASE_URL}/current?access_key=${API_KEY}&query=${encodeURIComponent(city)}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.info || 'Failed to fetch weather data');
    }
    
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch weather data');
  }
};