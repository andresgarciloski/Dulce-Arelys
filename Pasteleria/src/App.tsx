import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Nav from "./components/Nav"
import Cotiza from "./pages/Cotiza"
import Tienda from "./pages/Tienda"
import Perfil from "./pages/Perfil"

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Cotiza" element={<Cotiza/>}/>
        <Route path="/Tienda" element={<Tienda/>}/>
        <Route path="/Perfil" element={<Perfil/>}/>
      </Routes>
    </Router>
  )
}

export default App
