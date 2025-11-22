import './assets/index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contenedor from './components/Contenedor';
import Inicio from './pages/Inicio';
import Tienda from './pages/Tienda';
import Detalle from './pages/Detalle';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route element={<Contenedor/>}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/inicio' element={<Navigate to='/'/>} />
          <Route path='/tienda' element={<Tienda/>}/>
          <Route path='/tienda/detalle/:id' element={<Detalle/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Route>

        <Route
          path="*"
          element={
        <Contenedor titulo="Página no encontrada">
          <p>La ruta no existe</p>
        </Contenedor>
          }
        /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
