import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherDisplay } from './components/WeatherDisplay';
import { useWeather } from './hooks/useWeather';
import { getTimeOfDay } from './utils/time';

function App() {
  const { city, weather, loading, error, fetchWeather } = useWeather('London');
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
        <div className="animate-spin text-white">
          <Cloud className="w-12 h-12" />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-1000 bg-gradient-to-br 
      ${getTimeOfDay() === 'morning' ? 'from-orange-400 to-blue-500' :
        getTimeOfDay() === 'afternoon' ? 'from-blue-400 to-indigo-600' :
        getTimeOfDay() === 'evening' ? 'from-purple-500 to-pink-600' :
        'from-indigo-900 to-purple-900'}`}>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <SearchBar onSearch={fetchWeather} initialCity={city} />

          {error && (
            <div className="bg-red-500/10 backdrop-blur-md rounded-3xl p-8 text-white mb-8">
              <p className="text-center">{error}</p>
            </div>
          )}

          {weather && (
            <WeatherDisplay
              weather={weather}
              isCelsius={isCelsius}
              onToggleUnit={() => setIsCelsius(!isCelsius)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;