import { Button } from "../../../components/ui/button"

export function UnitsManagement() {
  const unidades = [
    { id: "1", variante: "iPhone 15 Pro Max - Negro 128gb", estado: "Disponible", condicion: "89%" },
    { id: "2", variante: "iPhone 14 - Azul 128gb", estado: "Vendido", condicion: "93%" },
    { id: "3", variante: "iPhone 13 - Rojo 128gb", estado: "Disponible", condicion: "85%" },
    { id: "4", variante: "iPhone 12 - Blanco 64gb", estado: "Disponible", condicion: "82%" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Unidades</h2>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6">
          Agregar Unidad +
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Variante</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Estado</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Condición</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {unidades.map((unidad) => (
              <tr key={unidad.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 text-sm">{unidad.id}</td>
                <td className="py-4 px-4 text-sm font-medium">{unidad.variante}</td>
                <td className="py-4 px-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      unidad.estado === "Disponible"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {unidad.estado}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm">
                  <span className="text-blue-400">{unidad.condicion}</span>
                </td>
                <td className="py-4 px-4 text-sm">
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/20">
                      Ver
                    </Button>
                    <Button size="sm" variant="ghost" className="text-yellow-400 hover:bg-yellow-500/20">
                      Editar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}