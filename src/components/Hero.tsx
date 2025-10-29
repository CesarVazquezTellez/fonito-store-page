import { Button } from "./ui/button";
import { ChevronDown, Glasses } from "lucide-react";
import heroImage from "@/assets/iPhone_14_vs_13.png";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
    {/* Fondo */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-background to-primary/5" />

    {/* Elementos decorativos */}
    <div className="absolute top-20 left-10 animate-float">
      <Glasses className="w-12 h-12 text-primary/30"/>
    </div>
    <div className="absolute bottom-18 right-12 animate-float" style={{ animationDelay: '1s' }}>
      <Glasses className="w-12 h-12 text-primary/30" />
    </div>

    {/* Contenido principal */}
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-4xl space-y-6 animate-slide-up pl-20">
        <div className="inline-flex items-center space-x-2 bg-rose-500/10 px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-red-300 rounded-full animate-glow" />
          <span className="text-3xl text-primary font-semibold">Teléfonos Premium & Seguros</span>
        </div>

        <h1 className="text-5xl lg:text-8xl font-medium leading-tight text-glow">
          Encuentra tu próximo{" "}
          <span className="text-primary bg-gradient-primary bg-clip-text text-transparent text-glow">
            Fonito
          </span> ya mismo!
        </h1>

        <p className="text-4xl font-normal text-muted-foreground">
            Teléfonos como nuevos, 100% funcionales y al <p></p>mejor precio.{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
            ¿Cuál te quedas?
            </span>
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button 
            size="lg" 
            className="font-light bg-primary hover:bg-primary/85 text-primary-foreground shadow-glow text-2xl"
            onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Catálogo
          </Button>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce" style={{ bottom: '-60px' }}>
        <ChevronDown className="w-8 h-8 text-muted-foreground"/>
        <p className="text-sm text-muted-foreground mt-2">Ver más</p>
      </div>
    </div>

    {/* Imagen fuera del container para que toque los bordes */}
    <div className="absolute bottom-0 right-0 w-[400px] lg:w-[450px] animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <img 
          src={heroImage} 
          alt="iPhone 14 Pro" 
          className="relative w-full h-auto scale-110"
        />
      </div>
    </div>
  </section>
  );
};

export default Hero;
