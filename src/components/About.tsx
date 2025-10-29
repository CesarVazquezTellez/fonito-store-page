import { Shield, CheckCircle, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Seguros",
    description: "Todos nuestros teléfonos pasan por rigurosas pruebas de calidad"
  },
  {
    icon: CheckCircle,
    title: "Garantía Incluida",
    description: "Respaldamos la calidad de cada dispositivo con garantía"
  },
  {
    icon: Award,
    title: "Mejor Precio",
    description: "Precios competitivos sin comprometer la calidad"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            ¿Por qué <span className="text-primary">FonitoStore</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos tu mejor opción para adquirir teléfonos premium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 text-center space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
