import './index.css'
import Contenedor from "./components/Contenedor";
import Modelo from "./components/Modelo.jsx"
import peliculas from "./data/peliculas.js";

function Largometrajes() {
  return (
    
    <Contenedor titulo="Intérpretes de películas destacadas">
      
      <p className="font-textopeque mt-4">
        Listado de disponibles:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        
          {peliculas.map((pelicula, index) =>
            <Modelo
              key={index}
              nombre={pelicula.nombre}
              foto={pelicula.imagen}
          >
            {pelicula.descripcion}
          </Modelo>
          )}

        </div>
    </Contenedor>
  )
}

export default Largometrajes