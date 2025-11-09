import { TrendingUp } from "lucide-react";

const MarketPricesTicker = () => {
  const prices = [
    { crop: "Rice", price: "₹2,100", unit: "100kg", icon: "🌾", trend: "+2.5%" },
    { crop: "Wheat", price: "₹1,800", unit: "100kg", icon: "🌾", trend: "+1.8%" },
    { crop: "Maize", price: "₹1,400", unit: "100kg", icon: "🌽", trend: "-0.5%" },
    { crop: "Cotton", price: "₹6,500", unit: "100kg", icon: "🌸", trend: "+3.2%" },
    { crop: "Sugarcane", price: "₹350", unit: "100kg", icon: "🎋", trend: "+1.2%" },
    { crop: "Soybeans", price: "₹4,200", unit: "100kg", icon: "🫘", trend: "+2.1%" },
  ];

  // Duplicate the prices array to create seamless loop
  const duplicatedPrices = [...prices, ...prices];

  return (
    <div className="bg-gradient-hero rounded-lg overflow-hidden shadow-elegant">
      <div className="px-6 py-3 bg-primary/10 backdrop-blur-sm flex items-center gap-2 border-b border-primary/20">
        <TrendingUp className="w-5 h-5 text-primary-foreground" />
        <h3 className="font-semibold text-primary-foreground">Live Market Prices</h3>
        <span className="text-xs text-primary-foreground/70 ml-auto">Updated just now</span>
      </div>
      
      <div className="relative overflow-hidden py-4">
        <div className="flex animate-scroll-ticker">
          {duplicatedPrices.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 flex items-center gap-3 min-w-[280px]"
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary-foreground">{item.crop}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.trend.startsWith('+') 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {item.trend}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl font-bold text-primary-foreground">{item.price}</span>
                  <span className="text-sm text-primary-foreground/70">/ {item.unit}</span>
                </div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPricesTicker;
