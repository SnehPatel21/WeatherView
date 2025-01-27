import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  initialCity: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialCity }) => {
  const [inputValue, setInputValue] = useState(initialCity);

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSearch();
    }
  };

  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button 
        onClick={handleSearch}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <Search className="w-6 h-6" />
      </button>
    </div>
  );
};