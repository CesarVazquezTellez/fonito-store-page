import ProductCard from "./ProductCard";
import iphone15 from "@/assets/iphone-15.png";
import iphone16 from "@/assets/iphone-16.png";
import iphone14Pro from "@/assets/iphone-14pro.png";
import iphoneAir from "@/assets/iphone-air.png";
import { Button } from "./ui/button";

const products = [
  {
    name: "iPhone 14 pro",
    storage: "128gb",
    condition: "Seminuevo",
    price: "$10,599",
    image: iphone15,
  },
  {
    name: "iPhone 14 pro",
    storage: "256gb",
    condition: "Seminuevo",
    price: "$10,599",
    image: iphone16,
  },
  {
    name: "iPhone 14 pro",
    storage: "512gb",
    condition: "Seminuevo",
    price: "$10,599",
    image: iphone14Pro,
  },
  {
    name: "iPhone 14 pro",
    storage: "1TB",
    condition: "Seminuevo",
    price: "$10,599",
    image: iphoneAir,
  },
  {
    name: "iPhone 14 pro",
    storage: "1TB",
    condition: "Seminuevo",
    price: "$10,599",
    image: iphoneAir,
  },
  {
    name: "iPhone 14 pro",
    storage: "1TB",
    condition: "Seminuevo",
    price: "$10,599",
    image: iphoneAir,
  },
];

const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Nuestro <span className="text-primary">Catálogo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de iPhones premium con garantía de calidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            size="lg" 
            className="font-light bg-primary hover:bg-primary/85 text-primary-foreground shadow-glow text-2xl"
            onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver mas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;