import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  const darkMode = theme === 'dark'

  return (
    <div className="flex justify-between items-center h-full px-4 py-4">
      <div className="flex justify-center items-center gap-3 ">
        <h1 className="text-4xl font-bold text-center text-(--font-color-primary) ">
          Piggy Cat
        </h1>
        <h2 className="text-lg text-[#e2e8f0]">App Finanzas personales</h2>
      </div>

      <div className="flex ml-auto mr-10 ">
        <button
          onClick={toggleTheme}
          className={`w-16 h-8 rounded-full p-1 transition-all duration-300
          ${darkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center
            transition-all duration-300
            ${
              darkMode
                ? 'translate-x-8 bg-black text-white'
                : 'translate-x-0 bg-white text-black'
            }`}
          >
            {darkMode ? <Moon size={14} /> : <Sun size={14} />}
          </div>
        </button>
      </div>

      <div className="profile flex justify-end items-center gap-4 p-2">
        <div className=" flex flex-col items-center">
          <h2 className="text-xl font-semibold text-white/30">Usuario</h2>
          <p className="text-base font-bold text-[#e2e8f0]">Hola, Rodolfo Almada</p>
        </div>

        <img src="/profile.jpg" alt="profile" className="w-16 rounded-full" />
      </div>
    </div>
  )
}