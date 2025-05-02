import { WeatherData } from '../types/weather';

const API_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeather = async (): Promise<WeatherData> => {
  const params = new URLSearchParams({
    latitude: '47.244843',
    longitude: '-122.42593',
    current_weather: 'true',
    temperature_unit: 'fahrenheit',
    timezone: 'America/Los_Angeles'
  });

  const response = await fetch(`${API_URL}?${params}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return response.json();
}; 