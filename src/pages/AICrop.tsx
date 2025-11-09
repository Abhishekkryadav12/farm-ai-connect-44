import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const AICrop = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = () => {
    setAnalyzing(true);
    setProgress(0);
    setResult(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          setResult({
            crop: "Wheat",
            health: "Healthy",
            confidence: 95,
            recommendations: [
              "Continue current watering schedule",
              "Apply nitrogen-based fertilizer next week",
              "Monitor for aphids in coming weeks",
            ],
          });
          toast({
            title: "Analysis Complete!",
            description: "Your crop has been successfully analyzed.",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">AI Crop Analytics</h1>
            <p className="text-lg text-muted-foreground">
              Upload or capture crop images for instant AI-powered health analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 hover:shadow-large transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center group-hover:shadow-glow transition-all">
                  <Camera className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Open Camera</h3>
                <p className="text-muted-foreground">
                  Take a live photo of your crop for instant analysis
                </p>
                <Button variant="hero" onClick={handleAnalyze}>
                  Open Camera
                </Button>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-large transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center group-hover:shadow-glow transition-all">
                  <Upload className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Upload Image</h3>
                <p className="text-muted-foreground">
                  Select an existing photo from your device
                </p>
                <Button variant="default" onClick={handleAnalyze}>
                  Choose File
                </Button>
              </div>
            </Card>
          </div>

          {analyzing && (
            <Card className="p-8 mb-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center animate-pulse">
                    <Leaf className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Analyzing Crop...</h3>
                    <p className="text-sm text-muted-foreground">AI is processing your image</p>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-center text-muted-foreground">{progress}%</p>
              </div>
            </Card>
          )}

          {result && (
            <Card className="p-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">Analysis Results</h2>
                    <p className="text-muted-foreground">
                      Based on AI analysis of your crop image
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-gradient-card">
                    <div className="text-sm text-muted-foreground mb-1">Crop Type</div>
                    <div className="text-2xl font-bold text-primary">🌾 {result.crop}</div>
                  </Card>
                  <Card className="p-4 bg-gradient-card">
                    <div className="text-sm text-muted-foreground mb-1">Health Status</div>
                    <div className="text-2xl font-bold text-primary">💚 {result.health}</div>
                  </Card>
                  <Card className="p-4 bg-gradient-card">
                    <div className="text-sm text-muted-foreground mb-1">Confidence</div>
                    <div className="text-2xl font-bold text-primary">{result.confidence}%</div>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-semibold text-primary">{index + 1}</span>
                        </div>
                        <span className="flex-1 text-muted-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="hero" className="w-full">
                  Analyze Another Crop
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICrop;
