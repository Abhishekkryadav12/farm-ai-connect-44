import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, User, LogOut } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isAuth = location.pathname === "/auth";

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "AI Analytics", path: "/ai-crop" },
    { label: "Delivery", path: "/delivery" },
    { label: "Weather", path: "/weather" },
    { label: "Finance", path: "/finance" },
  ];

  if (isAuth) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold text-xl group">
          <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
            <Sprout className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="bg-gradient-hero bg-clip-text text-transparent">FarmerSmart</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <User className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
