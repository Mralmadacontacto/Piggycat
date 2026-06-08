import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Layout  from '../../pages/DashboardLayout.jsx'
import Dashboard from '../../features/dashboard/Dashboard.jsx'
import Ingresos from "../../features/ingresos/ingresos.jsx"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/dashboard"  element={<Dashboard/>}/>
        <Route path= "/ingresos" element={<Ingresos/>}/>
        </Route>   
      </Routes>   
    </BrowserRouter>
  )
}
