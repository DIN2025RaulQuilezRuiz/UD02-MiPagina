import '../assets/index.css'
import Perfume from "../components/Perfume.jsx"
import perfumes from "../data/perfumes.js";

function Tienda() {
    return (
        <section aria-labelledby="tienda-title">
            <h1 id="tienda-title" className="contenedor__h1 mt-4">
                Perfumes
            </h1>
            
            <p className="font-textopeque">
                Listado de disponibles:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
                
                {perfumes.map((perfume, index) =>
                    <Perfume
                        key={index}
                        indexPerfume={index}
                        nombre={perfume.nombre}
                        foto={perfume.imagen}
                    >
                        {perfume.descripcion}
                    </Perfume>
                )}

            </div>
        </section>
    )
}

export default Tienda;