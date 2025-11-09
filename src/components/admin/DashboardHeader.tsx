import { Search, Bell } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"


export function AdminHeader() {
  return (
    <header className="border-b border-white/10 p-6">
      <div className="flex items-center justify-between">
        {/* Logo + Nombre */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-light">
            Mi Dashboard
          </span>
        </div>

        {/* Notificaciones + Buscador */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Bell className="w-5 h-5" />
          </Button>
          <div className="relative w-96 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              placeholder="Buscar..."
              className="pl-10 bg-white/5 border-red-500/30 focus:border-red-500 text-white placeholder:text-white/40"
            />
          </div>
        </div>
      </div>
    </header>
  )
}