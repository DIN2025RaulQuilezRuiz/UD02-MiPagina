function Contenedor({ children, titulo }) {
  return (
    // <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
    //   {children}
    // </div>
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br primary-bg flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="contenedor__h1"
          >
            {titulo}
          </h1>
        )}

        {children}
      </section>
    </main>
  );
}

export default Contenedor;