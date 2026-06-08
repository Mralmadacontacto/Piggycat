import Header from '../shared/components/Header.jsx'
import Sidebar from '../shared/components/SideBar.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="grid grid-cols-[200px_minmax(0,1fr)] grid-rows-[90px_1fr] min-h-screen overflow-hidden bg-(--bg-primary-color) p-4 gap-4">
      
      <aside className='row-span-2 bg-(--bg-secondary-color) rounded-2xl '>
        <Sidebar></Sidebar>
      </aside>

      <header className='bg-(--bg-secondary-color) rounded-2xl '>
        <Header></Header>
      </header>

      <main className="min-h-0 overflow-auto bg-(--bg-tertiary-color) rounded-2xl">
        <Outlet></Outlet>
      </main>
    </div>
  )
}
