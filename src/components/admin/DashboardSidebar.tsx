"use client"
import { Home, CircleDot, Layers, Box, LogOut } from "lucide-react"
import { type Section } from "./AdminSidebar"
import logo from "@/assets/g5-75.png"
import logo2 from "../../assets/OIP (4).webp"
// Definimos el Type/Interface aquí (o en un archivo separado como AdminSidebar.ts si lo tienes)


interface AdminSidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  isMobileMenuOpen: boolean;
  onLogout: () => void; // Asegúrate de que termina con punto y coma si estás siguiendo un estilo estricto.
}

// LÍNEA CLAVE: Asegúrate de que las props se desestructuran correctamente con comas.
export function AdminSidebar({ activeSection, onSectionChange, isMobileMenuOpen, onLogout }: AdminSidebarProps) {
  const navItems = [
    { name: "Casita", icon: Home, section: "casita" as Section, color: "text-red-400", gradient: "from-red-500/30 to-orange-500/30" },
    { name: "Productos", icon: CircleDot, section: "productos" as Section, color: "text-purple-400", gradient: "from-purple-500/30 to-pink-500/30" },
    { name: "Variantes", icon: Layers, section: "variantes" as Section, color: "text-blue-400", gradient: "from-blue-500/30 to-cyan-500/30" },
    { name: "Unidades", icon: Box, section: "unidades" as Section, color: "text-green-400", gradient: "from-green-500/30 to-emerald-500/30" },
  ]

  return (
    <aside
      className={`
        w-[300px] border-r border-white/10 flex flex-col bg-[#0a0a0a]
        fixed lg:static inset-y-0 left-0 z-40
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10 flex items-center gap-2">
          <span className="text-2xl font-light">
            Fon<span className="bg-gradient-primary bg-clip-text text-transparent">i</span>toStore
          </span>
          <img 
            src={logo} 
            alt="Logo FonitoStore" 
            className="w-6 h-6 object-contain"
          />
        </div>


      {/* User Profile Section */}
      <div className="p-6 border-b border-white/10">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={logo2} // Asegúrate de que esta ruta sea correcta
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs">🖋️</span>
            </div>
          </div>
          <h3 className="mt-4 font-semibold text-base">Cesar Vazquez Tellez</h3>
          <p className="text-xs text-white/60 mt-1">cesarvazqueztellezs09@gmail.com</p>
          <span className="mt-2 px-3 py-1 bg-red-500/20 text-red-500 text-xs rounded-full border border-red-500/30">
            Administrador
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        {navItems.map(item => (
          <button
            key={item.section}
            onClick={() => onSectionChange(item.section)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-300 ${
              activeSection === item.section
                ? `${item.gradient} backdrop-blur-xl border border-white/10 shadow-lg`
                : "hover:bg-white/5"
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeSection === item.section ? item.color : "text-white/60"}`} />
            <span className={`font-medium ${activeSection === item.section ? item.color : "text-white/80"}`}>
              {item.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/10">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 transition-all duration-300"
        >
          <LogOut className="w-5 h-5 text-red-400" />
          <span className="font-medium text-red-400">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  )
}