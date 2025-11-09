import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Finance = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: `Your ${type} application has been received. We'll contact you soon.`,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Finance & Insurance</h1>
            <p className="text-lg text-muted-foreground">
              Easy access to farming loans and crop insurance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Interest Loans</h3>
              <p className="text-muted-foreground text-sm">Starting from 4% per annum</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Crop Insurance</h3>
              <p className="text-muted-foreground text-sm">Protect your harvest</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Subsidies</h3>
              <p className="text-muted-foreground text-sm">Government schemes available</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Apply for Loan</h2>
              </div>
              <form onSubmit={(e) => handleSubmit(e, "loan")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loan-name">Full Name</Label>
                  <Input id="loan-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-email">Email</Label>
                  <Input id="loan-email" type="email" placeholder="farmer@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-phone">Phone Number</Label>
                  <Input id="loan-phone" type="tel" placeholder="+91 1234567890" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <Input id="loan-amount" type="number" placeholder="100000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loan-purpose">Loan Purpose</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="equipment">Equipment Purchase</SelectItem>
                      <SelectItem value="seeds">Seeds & Fertilizers</SelectItem>
                      <SelectItem value="land">Land Development</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Card>

            <Card className="p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Crop Insurance</h2>
              </div>
              <form onSubmit={(e) => handleSubmit(e, "insurance")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="insurance-name">Full Name</Label>
                  <Input id="insurance-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insurance-email">Email</Label>
                  <Input id="insurance-email" type="email" placeholder="farmer@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insurance-phone">Phone Number</Label>
                  <Input id="insurance-phone" type="tel" placeholder="+91 1234567890" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="crop-type">Crop Type</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="land-area">Land Area (acres)</Label>
                  <Input id="land-area" type="number" placeholder="10" required />
                </div>
                <Button type="submit" variant="default" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Insurance Quote"}
                </Button>
              </form>
            </Card>
          </div>

          <Card className="p-8 mt-8 bg-gradient-card animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Benefits of Our Financial Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Quick approval within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Flexible repayment options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Minimal documentation required</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Comprehensive coverage options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Government-backed schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Expert financial advisory support</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Finance;
