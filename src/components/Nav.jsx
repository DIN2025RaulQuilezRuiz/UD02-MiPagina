    import { NavLink } from "react-router-dom";
    import {useState} from "react";

    function Navigate() {
        const [open, setOpen] = useState(false);
        const closeMenu = () => setOpen(false);

        return(
            <div className="nav-container-movil"> 
                <button 
                    className="burger-button" 
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="main-navigation"
                    aria-label={open ? "Cerrar menú principal" : "Abrir menú principal"}
                >
                    ☰
                </button>
                
                <nav 
                    id="main-navigation"
                    className={`nav-links ${open ? "nav-mobile-open" : ""}`}
                >
                    <NavLink to='/inicio' onClick={closeMenu}>Inicio</NavLink>
                    <NavLink to='/tienda' onClick={closeMenu}>Tienda</NavLink>
                    <NavLink to='/admin' onClick={closeMenu}>Admin</NavLink>
                </nav>
            </div>
        );
    }

    export default Navigate

