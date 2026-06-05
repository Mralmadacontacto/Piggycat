import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  HandCoins,
  BanknoteX,
  ChartBarStacked,
  PiggyBank,
  LogOut,
  Settings
} from 'lucide-react'

export default function SideBar() {
  return (
    <aside className="flex flex-col  p-3 h-screen">
      <div className="flex justify-center px-2 pt-4 pb-6 ">
        <NavLink to="/dashboard">
          <img
            className="w-20 h-auto"
            src="/piggy-cat-logo.png"
            alt="piggycat-logo"
          />
        </NavLink>
      </div>

      <div className="pt-2 pb-8">
        <hr className="border-t-[rgba(255,255,255,0.15)]" />
      </div>

      <div className="flex flex-col gap-4 justify-start items-start p-4">
        <div className="flex justify items-start text-(--font-color-secondary) pb-4 ">
          <NavLink to="/dashboard" className="flex items-center gap-4">
            <LayoutDashboard className="w-6" /> Dashboard
          </NavLink>
        </div>
        <div className="flex justify-center items-start text-(--font-color-secondary) pb-4 ">
          <NavLink to="/ingresos" className="flex items-center gap-4">
          
            <HandCoins className="w-6" /> Ingresos </NavLink>
        </div>
        <div className="flex justify-center items-start text-(--font-color-secondary) pb-4 ">
          <NavLink to="/egresos" className="flex items-center gap-4">
            <BanknoteX className="w-6" />Egresos</NavLink>
        </div>
        <div className="flex justify-center items-start text-(--font-color-secondary) pb-4 ">
          <NavLink to="/categorias" className="flex items-center gap-4">
            <ChartBarStacked className="w-6" /> Categorias
          </NavLink>
        </div>
        <div className="flex justify-center items-start text-(--font-color-secondary) pb-4 ">
          <NavLink to="/ahorro" className="flex items-center gap-4">
            <PiggyBank className="w-6" /> Ahorro
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start text-(--font-color-secondary) pb-6 mt-auto gap-4">
        <NavLink to="/configuracion" className="flex items-center gap-4 pb-4">
          <Settings className="w-6" /> Configuracion
        </NavLink>
        <NavLink to="/ahorro" className="flex items-center gap-4">
          <LogOut className="w-6" /> Cerrar session
        </NavLink>
      </div>
    </aside>
  )
}
