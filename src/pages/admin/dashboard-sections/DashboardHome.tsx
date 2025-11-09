import { Button } from "../../../components/ui/button"
// Nota: Aquí podrías crear componentes pequeños y reutilizables como StatCard, RecentActivityTable, RecentlyAddedList
// y moverlos a 'src/components/admin' si se vuelven más complejos.

export function DashboardHome() {
  const stats = [
    { title: "Total de Marcas", value: "2", gradient: "from-blue-400 to-blue-200" },
    { title: "Total de Productos", value: "8", gradient: "from-purple-400 to-pink-300" },
    { title: "Total de Variantes", value: "20", gradient: "from-red-400 via-orange-400 to-yellow-400" },
    { title: "Total de Unidades", value: "25", gradient: "from-pink-400 to-pink-300" },
  ]

  const recentActivity = [
    { id: "24", nombre: "Iphone 15", almacenamiento: "128 gb", precio: "$10499", color: "Negro", clicks: "67" },
    { id: "12", nombre: "Iphone 13", almacenamiento: "128 gb", precio: "$4999", color: "Rojo", clicks: "52" },
    { id: "9", nombre: "Iphone 13 Pro", almacenamiento: "256 gb", precio: "$6299", color: "Blanco", clicks: "49" },
    { id: "7", nombre: "Iphone 12", almacenamiento: "64 gb", precio: "$2999", color: "Blanco", clicks: "43" },
    { id: "1", nombre: "Iphone 14", almacenamiento: "128 gb", precio: "$6500", color: "Azul", clicks: "26" },
    { id: "45", nombre: "Iphone 13", almacenamiento: "128 gb", precio: "$4999", color: "Rosa", clicks: "15" },
    { id: "14", nombre: "Iphone 16", almacenamiento: "256 gb", precio: "$13999", color: "Morado", clicks: "13" },
    { id: "3", nombre: "Iphone 14", almacenamiento: "128 gb", precio: "$6999", color: "Blanco", clicks: "7" },
  ]

  const recentlyAdded = [
    { id: "1", nombre: "Iphone 13 128gb", percentage: "89%" },
    { id: "15", nombre: "Iphone 15 256 gb", percentage: "93%" },
    { id: "90", nombre: "Iphone 12 128gb", percentage: "82%" },
    { id: "6", nombre: "Iphone 13 128gb", percentage: "84%" },
    { id: "2", nombre: "Iphone 14 128gb", percentage: "89%" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Add Product Button */}
      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6">
          Agregar Producto +
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-2xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl shadow-xl`}>
            <h3 className="text-white/90 text-xl font-medium mb-2">{stat.title}</h3>
            <p className="text-4xl font-medium text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white/5 rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold mb-4">Actividad reciente</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-2 text-sm font-medium text-white/80">ID</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-white/80">Nombre</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-white/80">Almacenamiento</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-white/80">Precio</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-white/80">Color</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-white/80">Clicks</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-2 text-sm">{item.id}</td>
                    <td className="py-3 px-2 text-sm">{item.nombre}</td>
                    <td className="py-3 px-2 text-sm">{item.almacenamiento}</td>
                    <td className="py-3 px-2 text-sm">{item.precio}</td>
                    <td className="py-3 px-2 text-sm">{item.color}</td>
                    <td className="py-3 px-2 text-sm">{item.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recently Added */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Agregados recientemente</h2>
            <span className="text-2xl">📌</span>
          </div>
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {recentlyAdded.map((item) => (
              <div key={item.id} className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm">
                  ID: {item.id}, {item.nombre} {item.percentage}
                  <span className="text-green-400 ml-1">📊</span>
                </p>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4 text-white hover:bg-white/10">
            Ver todo
          </Button>
        </div>
      </div>
    </div>
  )
}