import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="top-bar flex flex-col p-4 h-full ">
      {/* Barra superior con titulo y calendario */}
      <div className="top-bar flex justify-between items-center p-2 mb-6 text-[--font-color-secondary] ">
        <h2 className="text-4xl font-bold ">Dashboard</h2>

        <div className="calendar flex items-center gap-4">
          <div className="btn flex justify-center items-center border border-white/20 rounded-lg px-4 py-2 gap-2">
            <button className="px-2 cursor-pointer">
              <ArrowBigLeft size={20} />
            </button>
          </div>
          <button className="date border border-white/20 rounded-lg px-4 py-2">
            <p>11 de Agosto 2024</p>
          </button>

          <div className="border border-white/20 rounded-lg px-4 py-2 gap-2 flex justify-center items-center">
            <button className="px-2 cursor-pointer">
              <ArrowBigRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Cards de estadísticas */}
      <div className="stats-grid flex justify-between gap-6 p-4">
        <div className="flex flex-col  items-center bg-(--bg-card-color) rounded-sm p-12 gap-4 border border-white/20 flex-1">
          <h2 className="text-lg font-bold border-b border-white/20 pb-2">
            Capital neto
          </h2>
          <span className="text-xl font-bold text-(--font-color-secondary)">
            $0.00
          </span>
        </div>

        <div className=" card-inversion flex flex-col  items-center bg-(--bg-card-color) rounded-sm p-12 gap-4 border border-white/20 flex-1">
          <h2 className="text-lg font-bold border-b border-white/20 pb-2">
            Ingresos del mes
          </h2>
          <span className="text-xl font-bold text-(--font-color-secondary)">
            $0.00
          </span>
        </div>

        <div className=" card-ganancia flex flex-col  items-center bg-(--bg-card-color) rounded-sm p-12 gap-4 border border-white/20 flex-1">
          <h2 className="text-lg font-bold border-b border-white/20 pb-2">
            Egresos del mes
          </h2>
          <span className="text-xl font-bold text-(--font-color-secondary)">
            $0.00
          </span>
        </div>

        <div className=" card-ganancia flex flex-col  items-center bg-(--bg-card-color) rounded-sm p-12 gap-4 border border-white/20 flex-1">
          <h2 className="text-lg font-bold border-b border-white/20 pb-2">
            Gastos del dia
          </h2>
          <span className="text-xl font-bold text-(--font-color-secondary)">
            $0.00
          </span>
        </div>
      </div>

      {/* Sección de gráficos */}
      <div className="flex justify-between gap-6 p-4 flex-1">
        {/* Gráfico de Ingresos */}
        <div className="flex flex-col justify-center items-center bg-(--bg-card-color) rounded-sm p-12 gap-4 border border-white/20 w-lg h-full flex-1">
          <h2 className="text-2xl font-bold border-b border-white/20 pb-2">
            Estadísticas del mes
          </h2>
          <div className="chart-placeholder w-full h-full bg-white/10 rounded-lg flex justify-center items-center">
            <p className="text-white/50">Aquí irá un gráfico de barras</p>
          </div>
        </div>
        <div className="chart-2 flex flex-col justify-center items-center bg-(--bg-card-color) rounded-sm p-12 gap-4 border border-white/20 w-lg h-full flex-1">
          <h2 className="text-2xl font-bold border-b border-white/20 pb-2">
            ¿En que se va mi dinero?
          </h2>
          <div className="chart-placeholder w-full h-full bg-white/10 rounded-lg flex justify-center items-center">
            <p className="text-white/50">Aquí irá un gráfico de pastel</p>
          </div>
        </div>
      </div>
    </div>
  )
}
