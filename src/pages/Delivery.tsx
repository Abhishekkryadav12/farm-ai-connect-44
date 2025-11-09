import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, Package, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Delivery = () => {
  const deliveries = [
    {
      id: "DEL001",
      crop: "Wheat",
      quantity: "500 kg",
      status: "In Transit",
      progress: 65,
      estimatedTime: "2 hours",
      from: "Farm A",
      to: "Market Hub",
    },
    {
      id: "DEL002",
      crop: "Rice",
      quantity: "300 kg",
      status: "Pending",
      progress: 0,
      estimatedTime: "5 hours",
      from: "Farm B",
      to: "Processing Unit",
    },
    {
      id: "DEL003",
      crop: "Corn",
      quantity: "450 kg",
      status: "Delivered",
      progress: 100,
      estimatedTime: "Completed",
      from: "Farm C",
      to: "Storage Facility",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "text-accent";
      case "Pending":
        return "text-muted-foreground";
      case "Delivered":
        return "text-primary";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Smart Delivery Tracking</h1>
            <p className="text-lg text-muted-foreground">
              Track your crop deliveries in real-time with live location updates
            </p>
          </div>

          <div className="mb-8">
            <Button variant="hero" size="lg">
              <Truck className="w-5 h-5 mr-2" />
              Book New Delivery
            </Button>
          </div>

          <div className="space-y-6">
            {deliveries.map((delivery, index) => (
              <Card
                key={delivery.id}
                className="p-6 hover:shadow-large transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center">
                      {delivery.status === "Delivered" ? (
                        <CheckCircle2 className="w-10 h-10 text-accent-foreground" />
                      ) : (
                        <Truck className="w-10 h-10 text-accent-foreground" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          Delivery #{delivery.id}
                        </h3>
                        <p className="text-muted-foreground">
                          {delivery.crop} - {delivery.quantity}
                        </p>
                      </div>
                      <div
                        className={`px-4 py-2 rounded-full font-semibold ${getStatusColor(
                          delivery.status
                        )} bg-accent/10`}
                      >
                        {delivery.status}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">From</p>
                          <p className="font-medium">{delivery.from}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Package className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">To</p>
                          <p className="font-medium">{delivery.to}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">ETA</p>
                          <p className="font-medium">{delivery.estimatedTime}</p>
                        </div>
                      </div>
                    </div>

                    {delivery.status !== "Delivered" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{delivery.progress}%</span>
                        </div>
                        <Progress value={delivery.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        View on Map
                      </Button>
                      <Button variant="ghost" size="sm">
                        Contact Driver
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-8 bg-gradient-card animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Delivery Statistics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24</div>
                <p className="text-muted-foreground">Total Deliveries</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <p className="text-muted-foreground">In Progress</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
