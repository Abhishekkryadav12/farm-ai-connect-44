import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import MarketPricesTicker from "@/components/MarketPricesTicker";
import { Brain, Truck, CloudSun, DollarSign, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFarm from "@/assets/hero-farm.jpg";
import aiCropIcon from "@/assets/ai-crop-icon.jpg";
import deliveryIcon from "@/assets/delivery-icon.jpg";
import weatherIcon from "@/assets/weather-icon.jpg";

const Dashboard = () => {
  const features = [
    {
      title: "AI Crop Analytics",
      description: "Detect crop health and diseases using AI-powered image analysis.",
      icon: Brain,
      image: aiCropIcon,
      link: "/ai-crop",
      gradient: "bg-gradient-hero",
    },
    {
      title: "Smart Delivery",
      description: "Track your crop deliveries in real-time with live location updates.",
      icon: Truck,
      image: deliveryIcon,
      link: "/delivery",
      gradient: "bg-gradient-accent",
    },
    {
      title: "Weather Alerts",
      description: "Get real-time weather forecasts and storm warnings for your area.",
      icon: CloudSun,
      image: weatherIcon,
      link: "/weather",
      gradient: "bg-gradient-accent",
    },
    {
      title: "Finance & Insurance",
      description: "Access farming loans and crop insurance with ease.",
      icon: DollarSign,
      link: "/finance",
      gradient: "bg-gradient-hero",
    },
    {
      title: "Live Market Prices",
      description: "Real-time updates on crop prices and market trends.",
      icon: TrendingUp,
      link: "#",
    },
    {
      title: "Government Schemes",
      description: "Latest agricultural schemes and subsidies available.",
      icon: Award,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroFarm})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </div>
        
        <div className="container relative z-10 h-full flex items-center px-4">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="bg-gradient-hero bg-clip-text text-transparent">FarmerSmart</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your AI-powered companion for modern farming. Manage crops, track deliveries, 
              and make smarter decisions with real-time insights.
            </p>
            <div className="flex gap-4">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Prices Ticker */}
      <section className="container px-4 py-8">
        <div className="animate-fade-in">
          <MarketPricesTicker />
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-16">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Smart Farming Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your farm efficiently and profitably
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
