import { Button } from "../../../components/ui/button"

export function VariantsManagement() {
  const variantes = [
    { id: "1", producto: "iPhone 15 Pro Max", color: "Negro", almacenamiento: "128gb", precio: "$10,499" },
    { id: "2", producto: "iPhone 15 Pro Max", color: "Blanco", almacenamiento: "256gb", precio: "$11,999" },
    { id: "3", producto: "iPhone 14", color: "Azul", almacenamiento: "128gb", precio: "$6,500" },
    { id: "4", producto: "iPhone 13", color: "Rojo", almacenamiento: "128gb", precio: "$4,999" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Variantes</h2>
        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6">
          Agregar Variante +
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Producto</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Color</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Almacenamiento</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Precio</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {variantes.map((variante) => (
              <tr key={variante.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 text-sm">{variante.id}</td>
                <td className="py-4 px-4 text-sm font-medium">{variante.producto}</td>
                <td className="py-4 px-4 text-sm">
                  <span className="px-2 py-1 bg-white/10 rounded-md text-xs">{variante.color}</span>
                </td>
                <td className="py-4 px-4 text-sm">{variante.almacenamiento}</td>
                <td className="py-4 px-4 text-sm text-green-400">{variante.precio}</td>
                <td className="py-4 px-4 text-sm">
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-500/20">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-500/20">
                      Eliminar
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