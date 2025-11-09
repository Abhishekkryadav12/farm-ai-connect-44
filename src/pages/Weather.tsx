import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { CloudSun, Droplets, Wind, ThermometerSun, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Weather = () => {
  const weatherData = {
    current: {
      temperature: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      rainfall: 0,
    },
    forecast: [
      { day: "Monday", temp: "27°C", condition: "Sunny", icon: "☀️" },
      { day: "Tuesday", temp: "29°C", condition: "Partly Cloudy", icon: "⛅" },
      { day: "Wednesday", temp: "25°C", condition: "Rainy", icon: "🌧️" },
      { day: "Thursday", temp: "26°C", condition: "Cloudy", icon: "☁️" },
      { day: "Friday", temp: "30°C", condition: "Sunny", icon: "☀️" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Weather Alerts</h1>
            <p className="text-lg text-muted-foreground">
              Real-time weather updates for your farm location
            </p>
          </div>

          <Alert className="mb-8 border-destructive/50 bg-destructive/5 animate-fade-in">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-destructive">Storm Warning</AlertTitle>
            <AlertDescription>
              Heavy rainfall expected on Wednesday. Prepare your crops and secure equipment.
            </AlertDescription>
          </Alert>

          <Card className="p-8 mb-8 bg-gradient-accent animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CloudSun className="w-12 h-12 text-accent-foreground" />
                  <div>
                    <h2 className="text-3xl font-bold text-accent-foreground">
                      {weatherData.current.temperature}°C
                    </h2>
                    <p className="text-accent-foreground/80">{weatherData.current.condition}</p>
                  </div>
                </div>
                <p className="text-sm text-accent-foreground/70">Current Weather</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-accent-foreground" />
                    <span className="text-sm text-accent-foreground/80">Humidity</span>
                  </div>
                  <p className="text-2xl font-bold text-accent-foreground">
                    {weatherData.current.humidity}%
                  </p>
                </div>
                <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-accent-foreground" />
                    <span className="text-sm text-accent-foreground/80">Wind</span>
                  </div>
                  <p className="text-2xl font-bold text-accent-foreground">
                    {weatherData.current.windSpeed} km/h
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-6">5-Day Forecast</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {weatherData.forecast.map((day, index) => (
                <Card
                  key={day.day}
                  className="p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="font-semibold mb-2">{day.day}</p>
                  <div className="text-4xl mb-2">{day.icon}</div>
                  <p className="text-2xl font-bold text-primary mb-1">{day.temp}</p>
                  <p className="text-sm text-muted-foreground">{day.condition}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 mt-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ThermometerSun className="w-6 h-6 text-primary" />
              Farming Tips Based on Weather
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Optimal conditions for watering crops early morning
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Prepare drainage systems before Wednesday's rainfall
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Good week for applying pesticides (except Wednesday)
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Weather;
