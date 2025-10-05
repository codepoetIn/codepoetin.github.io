import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/codepoet-logo.jpeg";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="CodePoet Logo" className="h-10 w-10 rounded-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover:glow-effect" />
            <span className="text-xl font-bold group-hover:text-primary transition-colors">CODE<span className="text-primary">POET</span></span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="font-medium hover:scale-110 transition-all duration-300"
              >
                Home
              </Button>
            </Link>
            <Link to="/blog">
              <Button
                variant={isActive("/blog") ? "default" : "ghost"}
                className="font-medium hover:scale-110 transition-all duration-300"
              >
                Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
