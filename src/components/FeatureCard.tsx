import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  link: string;
  gradient?: string;
}

const FeatureCard = ({ title, description, icon: Icon, image, link, gradient }: FeatureCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${gradient || "bg-gradient-hero"}`}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link to={link}>
          <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
            Explore
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default FeatureCard;
