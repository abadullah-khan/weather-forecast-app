# Weather Forecast App

This Weather Forecast Web App is a responsive application built using React and Typescript. It provides users with up-to-date weather information for their entered city name by fetching data from OpenWeatherMap api. The app utilizes packages such as axios and react-icons etc.

## Features

- **Weather Forecast**: Users can search for a city and receive detailed weather forecasts, including current conditions, 3hourly forecasts, and a 5days outlook.
- **Responsive Design**: The app is designed to work seamlessly on various devices, from desktop computers to mobile phones.

## Installation

1. Clone the repository: weather-forecast-app
2. Navigate to the project directory: cd weather-forecast-app
3. Install the dependencies: npm install
4. Create a **`.env`** file in the project root and add your API key for the weather data source: REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key-here

## Usage

1. Start the development server: npm start
2. Open your browser and visit: http://localhost:3000
3. Enter the the city name in the search bar and hit the search button

### API Integration

This app integrates with a weather data source using Axios to fetch weather information. You should obtain an API key from OpenWeatherMap and set it in the **`.env`** file as mentioned in the installation section.

### Dependencies

The app relies on the following dependencies:

- axios: Used for making HTTP requests retrieve weather data.
- react-icons: Provides a collection of icons for UI components.

### Contributing

Contributions are welcome! If you'd like to contribute to ths project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with clear and concise messages.
5. Push your changes to your fork on GitHub.
6. Create a pull request to the original repository.
