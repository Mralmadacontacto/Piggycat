import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Layout  from '../components/layout/Layout.jsx'
import Dashboard from '../Pages/dashboard/Dashboard.jsx'
import Ingresos from "../Pages/ingresos/ingresos.jsx"

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
