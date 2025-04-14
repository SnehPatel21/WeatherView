# [WeatherView - Modern Weather Application](https://weatherviewpro.netlify.app)

A sleek and intuitive weather application that provides real-time weather information for cities worldwide. Built with React, TypeScript, and powered by the WeatherStack API.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.0.0-blue)](https://vitejs.dev/)

## ✨ Features

- **Real-Time Weather Data**

  - Current temperature and conditions
  - Weather icons for visual representation
  - Humidity and wind information
  - Feels-like temperature
  - Precipitation probability

- **Location Search**

  - Search for any city worldwide
  - Autocomplete suggestions
  - Recent searches history
  - Default location setting

- **Temperature Units**

  - Toggle between Celsius and Fahrenheit
  - Automatic unit conversion
  - Remember user preference

- **User Experience**
  - Responsive design for all devices
  - Dynamic weather backgrounds
  - Loading states and error handling
  - Offline capability
  - Dark/Light mode support

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Weather Data:** WeatherStack API
- **Type Checking:** TypeScript
- **Code Quality:** ESLint, Prettier

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/SnehPatel21/weatherview.git
cd weatherview
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

   - Create a `.env` file in the root directory
   - Add your WeatherStack API key:

   ```env
   VITE_WEATHERSTACK_API_KEY=your_api_key_here
   ```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔑 API Setup

1. Sign up for a free API key at [WeatherStack](https://weatherstack.com/)
2. Copy your API key from the dashboard
3. Add the key to your `.env` file as shown above

Note: The free tier of WeatherStack includes:

- 1000 API calls per month
- Real-time weather data
- HTTPS encryption (premium feature)
- 7-day forecast (premium feature)

## 🔧 Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- WeatherStack API key
- Basic knowledge of TypeScript and React

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler checks
- `npm run format` - Format code with Prettier

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

## 🔍 Project Structure

```
weatherview/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   └── WeatherDisplay.tsx
│   ├── hooks/
│   │   └── useWeather.ts
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── weather.ts
│   └── utils/
│       └── time.ts
├── App.tsx
├── index.css
├── main.tsx
├── vite-env.d.ts
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and type checks:
   ```bash
   npm run type-check
   npm test
   ```
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

## 🚀 Future Enhancements

- Multi-day weather forecast
- Weather alerts and notifications
- Multiple locations management
- Historical weather data
- Weather maps integration
- PWA support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- Project Link: [https://github.com/SnehPatel21/weatherview](https://github.com/SnehPatel21/weatherview)
- Report bugs or request features through GitHub issues

---

Made with ❤️ by Sneh Patel
