import './assets/index.css'
import Contenedor from "./components/Contenedor";
import Modelo from "./components/Perfume.jsx"
import perfumes from "./data/perfumes.js";

function App() {
  return (
    
    <Contenedor titulo="Intérpretes de películas destacadas">
      
      <p className="font-textopeque mt-4">
        Listado de  disponibles:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        
          {perfumes.map((perfumes) =>
            <Modelo
              nombre={perfumes.nombre}
              foto={perfumes.imagen}
          >
            {perfumes.descripcion}
          </Modelo>
          )}

        </div>
    </Contenedor>
  )
}

export default App
