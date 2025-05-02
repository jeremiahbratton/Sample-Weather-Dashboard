import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Weather from './components/Weather';
import BackgroundImage from './components/BackgroundImage';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BackgroundImage />
        <header className="App-header">
          <Weather />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App; 