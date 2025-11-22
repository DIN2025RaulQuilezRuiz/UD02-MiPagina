import { Link } from 'react-router-dom';

function Perfume({ indexPerfume, foto, nombre, children }) { 
    return (
        <Link 
            to={`/tienda/detalle/${indexPerfume}`} 
            className="no-underline text-inherit"
            aria-label={`Ver detalles del perfume ${nombre}`}
        > 
            <article
                tabIndex="0" 
                className="card-layout secondary-bg" 
            >
                <figure className="perfume-imagen-contenedor"> 
                    <img
                        src={foto}
                        alt={`Botella de perfume ${nombre}`}
                        loading="lazy"
                        className="perfume-imagen"
                    /> 
                    <figcaption className="sr-only">Botella de perfume {nombre}: {children}</figcaption>
                </figure>

                <header>
                    <h2 className="perfume-titulo-card"> 
                        <strong>{nombre}</strong>
                    </h2>
                </header>
                
                <p className="perfume-descripcion-texto">
                    {children} 
                </p>
            </article>

        </Link> 
    );
}

export default Perfume;

