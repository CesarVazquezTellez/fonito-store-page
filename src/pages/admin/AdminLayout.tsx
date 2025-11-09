"use client" // Mantenemos el 'use client' de tu implementación anterior

import { useState } from "react"
// Lógica de autenticación que necesitas
import authService from '../../lib/authService.ts';
import { useNavigate } from 'react-router-dom'; // Asumiendo que sigues usando react-router-dom
// Iconos de Lucide y componentes de UI
import { Menu, X, LogOut } from "lucide-react"
import { Button } from "../../components/ui/button.tsx"

// Importamos los componentes del Layout y las Secciones
import { AdminHeader } from "../../components/admin/DashboardHeader.tsx"
import { AdminSidebar} from "../../components/admin/DashboardSidebar.tsx"
import { type Section } from "../../components/admin/AdminSidebar.ts";
import { DashboardHome } from "./dashboard-sections/DashboardHome.tsx"
import { ProductsManagement } from "./dashboard-sections/ProductsManagement.tsx"
import { VariantsManagement } from "./dashboard-sections/VariantsManagement.tsx"
import { UnitsManagement } from "./dashboard-sections/UnitsManagement.tsx"


// El componente principal (Layout)
export default function FonitoStoreDashboard() {
  const navigate = useNavigate(); // Hook de navegación
  const [activeSection, setActiveSection] = useState<Section>("casita")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Función de manejo de la navegación interna
  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    setIsMobileMenuOpen(false)
  }

  // Lógica de Cierre de Sesión (tomada de tu código anterior)
  const handleLogout = () => {
    authService.logout();
    // Redirige al login. La Sidebar usará esta función.
    navigate('/admin/login', { replace: true }); 
  };

  const renderSection = () => {
    switch (activeSection) {
      case "casita":
        return <DashboardHome />
      case "productos":
        return <ProductsManagement />
      case "variantes":
        return <VariantsManagement />
      case "unidades":
        return <UnitsManagement />
      default:
        return <DashboardHome />
    }
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Botón de menú móvil */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white/10 backdrop-blur-xl hover:bg-white/20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Overlay móvil */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Ahora pasa la función de logout */}
      <AdminSidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isMobileMenuOpen={isMobileMenuOpen}
        onLogout={handleLogout} // PASAMOS LA FUNCIÓN DE LOGOUT AQUÍ
      />

      <main className="flex-1 overflow-auto lg:pl-0">
        {/* Header */}
        <AdminHeader />

        <div className="p-6">
          {/* Renderizado de la sección activa */}
          {renderSection()}
        </div>
      </main>
    </div>
  )
}