# Weather Widget

A sample React app that pulls the weather from api.open-meteo.com. I also pull a random pic from picsum.photos to give things a dashboardy feel. Honestly, this is something that I started to build so that I could do a house dashboard on an old surface tablet. 

## Features

- Real-time weather data from Open-Meteo API for Tacoma Washingtion, geoCoding at some point.
- Live updating time display in Pacific Timezone (PST/PDT)
- Dynamic background images that change every 10 minutes
- Built with TypeScript and React Query

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weather-widget
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Technologies Used

- React 18
- TypeScript
- TanStack Query (React Query)
- CSS Modules
- Open-Meteo API
- Lorem Picsum API

## Project Structure

```
src/
├── components/
│   ├── BackgroundImage.tsx
│   ├── BackgroundImage.module.css
│   ├── Weather.tsx
│   └── Weather.module.css
├── services/
│   └── weatherService.ts
├── types/
│   ├── weather.ts
│   └── css.d.ts
├── App.tsx
├── App.css
└── index.tsx
```

## API Configuration

The weather widget uses the Open-Meteo API with the following default configuration:
- Latitude: 64.200844
- Longitude: -149.493668
- Temperature unit: Fahrenheit
- Current weather data only

## Customization

To change the location, modify the coordinates in `src/services/weatherService.ts`:

```typescript
const params = new URLSearchParams({
  latitude: '64.200844',  // Change this
  longitude: '-149.493668',  // Change this
  current_weather: 'true',
  temperature_unit: 'fahrenheit'
});
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` directory.

## License

This project is open source and available under the MIT License. 