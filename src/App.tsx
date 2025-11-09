import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 🚨 IMPORTACIONES DE ADMINISTRACIÓN 🚨
import LoginPage from "../src/pages/admin/LoginPages";
import AdminDashboard from "./pages/admin/AdminLayout";
import AdminRouteGuard from "./lib/AdminRouteGuard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Routes>
          {/* RUTA PÚBLICA PRINCIPAL */}
          <Route path="/" element={<Index />} />
          
          {/* 1. RUTA PÚBLICA DE LOGIN DE ADMINISTRADOR */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* 2. RUTAS PROTEGIDAS POR ADMINROUTEGUARD */}
          {/* Este Route envuelve todas las rutas de administración */}
          <Route path="/admin" element={<AdminRouteGuard />}>
            {/* RUTA: /admin (Índice del Dashboard) */}
            <Route index element={<AdminDashboard />} /> 
            
            {/* Ejemplo de subruta protegida (próximo paso) */}
            <Route path="productos" element={<div>Formulario de Gestión de Productos</div>} />
            
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;