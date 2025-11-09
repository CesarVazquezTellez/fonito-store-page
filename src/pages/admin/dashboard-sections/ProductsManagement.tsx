import { Button } from "../../../components/ui/button"

export function ProductsManagement() {
  const productos = [
    { id: "1", nombre: "iPhone 15 Pro Max", marca: "Apple", precio: "$10,499", stock: "15" },
    { id: "2", nombre: "iPhone 14", marca: "Apple", precio: "$6,500", stock: "23" },
    { id: "3", nombre: "iPhone 13", marca: "Apple", precio: "$4,999", stock: "45" },
    { id: "4", nombre: "iPhone 12", marca: "Apple", precio: "$2,999", stock: "12" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Productos</h2>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6">
          Agregar Producto +
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">ID</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Nombre</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Marca</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Precio</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Stock</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-white/80">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 text-sm">{producto.id}</td>
                <td className="py-4 px-4 text-sm font-medium">{producto.nombre}</td>
                <td className="py-4 px-4 text-sm">{producto.marca}</td>
                <td className="py-4 px-4 text-sm text-green-400">{producto.precio}</td>
                <td className="py-4 px-4 text-sm">{producto.stock}</td>
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