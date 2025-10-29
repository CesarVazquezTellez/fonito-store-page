import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Catalog from "../components/Catalog";
import About from "../components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Catalog />
      <About />
      
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 FonitoStore. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;