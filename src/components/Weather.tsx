import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../services/weatherService';
import styles from './Weather.module.css';

const Weather: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [timezone, setTimezone] = useState<string>('PST');
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
    refetchInterval: 60 * 60 * 1000, // Update every hour
  });

  useEffect(() => {
    if (data?.current_weather.temperature) {
      document.title = `${data.current_weather.temperature}°F - Weather Widget`;
    }
  }, [data]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));

      // Check if daylight savings time is in effect
      const isDST = pstTime.getTimezoneOffset() < 0;
      setTimezone(isDST ? 'PDT' : 'PST');

      setCurrentTime(pstTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };

    // Update time immediately and then every second
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading weather data...</div>;
  if (error) return <div>Error loading weather data</div>;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Good Luck to Us All...</h2>
      <div className={styles.info}>
        <p className={styles.time}>{currentTime}
          <span className={styles.timezone}>({timezone})</span>
        </p>
        <p className={styles.temperature}>{data?.current_weather.temperature}<span className={styles.fahrenheit}>°F</span></p>
      </div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={styles.screenReader}
      >
        {`Current temperature is ${data?.current_weather.temperature} degrees Fahrenheit`}
      </div>
    </section>
  );
};

export default Weather; 