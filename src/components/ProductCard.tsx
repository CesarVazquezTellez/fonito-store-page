import { Button } from "../components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  storage: string;
  condition: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, storage, condition, price, image }: ProductCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow group">
      <div className="relative mb-4">
        <div className="aspect-square rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-bold">{name}</h3>
        
        <div className="space-y-1 text-sm text-muted-foreground">
          <p>Almacenamiento: {storage}</p>
          <p>Estado: {condition}</p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground ml-1">mx</span>
          </div>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Llevar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
