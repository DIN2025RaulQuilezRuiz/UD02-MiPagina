function Perfume(props) {
    const { foto, nombre } = props;
    return (
        <article
            tabIndex="0" // Permite navegar con Tab
            className="flex flex-col items-start gap-3 p-4 m-5 rounded-lg secondary-bg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            {/* Imagen del intérprete con figcaption oculto para lectores de pantalla */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height)`}
                >
                    {/* Nombre del intérprete */}
                    <strong>{nombre}</strong>
                </h2>
            </header>
            {/* Biografía o descripción */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>

    );
}

export default Perfume;


