import logo from "@/assets/g5-75.png"
import { ShoppingCart,} from "lucide-react";
import { Button } from "../components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-3 left-5 right-5 z-50 glass border-b border-border/50 rounded-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-light">Fon<span className="bg-gradient-primary bg-clip-text text-transparent">
            i
            </span>toStore</span>
            <img 
              src={logo} 
              alt="Logo FonitoStore" 
              className="w-4 h-6 object-contain" 
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-xl hover:text-primary transition-colors">
              Casa
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xl cursor-pointer hover:text-primary transition-colors"
            >
              Catálogo
            </a>
            <a href="#about" className="text-xl hover:text-primary transition-colors">
              ¿Quiénes somos?
            </a>
          </div>
          
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
