export interface WeatherData {
  current_weather: {
    temperature: number;
    time: string;
    weathercode: number;
    windspeed: number;
    winddirection: number;
    temperature_unit: string;
  };
} 