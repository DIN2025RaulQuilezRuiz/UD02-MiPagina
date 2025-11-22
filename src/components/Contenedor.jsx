import { Outlet } from "react-router-dom";

function Contenedor() { 
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="main-contenedor primary-bg"
    >
      <section
        className="inner-section"
      >
        <Outlet/>
      </section>
    </main>
  );
}

export default Contenedor;