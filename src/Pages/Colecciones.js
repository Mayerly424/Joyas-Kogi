import React, { useState } from 'react';


const Colecciones = () => {
    const [images, setImages] = useState([
        { src: 'images/IMG-20230321-WA0024.jpg', alt: 'Imagen 1', temporada: 'verano', tipoJoya: 'collar', tipoMetal: 'oro', piedra: 'rubi' },
        { src: 'images/Cadenahoja.png', alt: 'Imagen 2', temporada: 'invierno', tipoJoya: 'collar', tipoMetal: 'plata', piedra: 'zafiro' },
        { src: 'images/Brasalete.png', alt: 'Imagen 3', temporada: 'otoño', tipoJoya: 'pulsera', tipoMetal: 'platino', piedra: 'rubie' },

        { src: 'images/IMG-20230321-WA0058.jpg', alt: 'Imagen 4', temporada: 'verano', tipoJoya: 'collar', tipoMetal: 'plata', piedra: 'diamante' },
        { src: 'images/Anillobaige.jpg', alt: 'Imagen 5', temporada: 'invierno', tipoJoya: 'anillo', tipoMetal: 'oro', piedra: 'zafiro' },
        { src: 'images/Pulseras.png', alt: 'Imagen 6', temporada: 'primavera', tipoJoya: 'pulsera', tipoMetal: 'platino', piedra: 'zafiro' },

        { src: 'images/IMG-20230321-WA0032.jpg', alt: 'Imagen 7', temporada: 'verano', tipoJoya: 'aretes', tipoMetal: 'oro', piedra: 'zafiro' },
        { src: 'images/Anillonegroconverde.jpg', alt: 'Imagen 8', temporada: 'otoño', tipoJoya: 'anillo', tipoMetal: 'oro', piedra: 'esmeralda' },
        { src: 'images/Pulseradoradaotravez.jpg', alt: 'Imagen 9', temporada: 'otoño', tipoJoya: 'pulsera', tipoMetal: 'oro', piedra: 'rubie' },

        { src: 'images/Aretesorquideas.png', alt: 'Imagen 10', temporada: 'verano', tipoJoya: 'aretes', tipoMetal: 'oro', piedra: 'diamante' },
        { src: 'images/Anilloplateado.jpg', alt: 'Imagen 11', temporada: 'invierno', tipoJoya: 'anillo', tipoMetal: 'platino', piedra: 'diamante' },
        { src: 'images/Collarraro.jpg', alt: 'Imagen 12', temporada: 'primavera', tipoJoya: 'collar', tipoMetal: 'platino', piedra: 'rubie' },

        { src: 'images/Collardorado2.png', alt: 'Imagen 13', temporada: 'verano', tipoJoya: 'collar', tipoMetal: 'oro', piedra: 'rubie' },
        { src: 'images/Pulseraplata.png', alt: 'Imagen 14', temporada: 'invierno', tipoJoya: 'anillo', tipoMetal: 'plata', piedra: 'plata' },
        { src: 'images/Pulsera.png', alt: 'Imagen 15', temporada: 'primavera', tipoJoya: 'pulsera', tipoMetal: 'oro', piedra: 'zafiro' },

        { src: 'images/Aretesverdenegro.jpg', alt: 'Imagen 16', temporada: 'inivierno', tipoJoya: 'aretes', tipoMetal: 'oro', piedra: 'esmeralda' },
        { src: 'images/OtroOtroanillo.jpg', alt: 'Imagen 17', temporada: 'otoño', tipoJoya: 'anillo', tipoMetal: 'acero', piedra: 'perlaa' },
        { src: 'images/Piedranaranja.png', alt: 'Imagen 18', temporada: 'primavera', tipoJoya: 'pulsera', tipoMetal: 'oro', piedra: 'oro' },
        // Agrega más imágenes con sus propiedades
        { src: 'images/Combonaranja.jpg', alt: 'Imagen 19', temporada: 'inivierno', tipoJoya: 'complemento', tipoMetal: 'oro', piedra: 'zafiro' },
        { src: 'images/Combopalta.jpg', alt: 'Imagen 20', temporada: 'otoño', tipoJoya: 'complemento', tipoMetal: 'acero', piedra: 'diamante' },
        { src: 'images/IMG-20230321-WA0057.jpg', alt: 'Imagen 21', temporada: 'primavera', tipoJoya: 'complemento', tipoMetal: 'oro', piedra: 'perla' },
        // Agrega más imágenes con sus propiedades
    ]);

    const [temporadaFilter, setTemporadaFilter] = useState('');
    const [tipoJoyaFilter, setTipoJoyaFilter] = useState('');
    const [tipoMetalFilter, setTipoMetalFilter] = useState('');
    const [piedraFilter, setPiedraFilter] = useState('');

    const handleTemporadaChange = (e) => {
        setTemporadaFilter(e.target.value);
    };

    const handleTipoJoyaChange = (e) => {
        setTipoJoyaFilter(e.target.value);
    };

    const handleTipoMetalChange = (e) => {
        setTipoMetalFilter(e.target.value);
    };

    const handlePiedraChange = (e) => {
        setPiedraFilter(e.target.value);
    };

    const filteredImages = images.filter(image =>
        (temporadaFilter === '' || image.temporada === temporadaFilter) &&
        (tipoJoyaFilter === '' || image.tipoJoya === tipoJoyaFilter) &&
        (tipoMetalFilter === '' || image.tipoMetal === tipoMetalFilter) &&
        (piedraFilter === '' || image.piedra === piedraFilter)
    );

    return (
        <div className="container">

            <div className="filters">
                <label>Temporada:</label>
                <select value={temporadaFilter} onChange={handleTemporadaChange}>
                    <option value="">Todos</option>
                    <option value="invierno">Invierno</option>
                    <option value="verano">Verano</option>
                    <option value="otoño">Otoño</option>
                    <option value="primavera">Primavera</option>
                </select>
                <label>Tipo de joya:</label>
                <select value={tipoJoyaFilter} onChange={handleTipoJoyaChange}>
                    <option value="">Todos</option>
                    <option value="collar">Collar</option>
                    <option value="aretes">Aretes</option>
                    <option value="anillo">Anillo</option>
                    <option value="pulsera">Pulsera</option>
                    <option value="complemento">Complemento</option> {/* Nueva opción */}
                </select>
                <label>Tipo de metal:</label>
                <select value={tipoMetalFilter} onChange={handleTipoMetalChange}>
                    <option value="">Todos</option>
                    <option value="oro">Oro</option>
                    <option value="plata">Plata</option>
                    <option value="platino">Platino</option>
                    <option value="cobre">Cobre</option>
                    <option value="acero">Acero</option>
                </select>
                <label>Piedras:</label>
                <select value={piedraFilter} onChange={handlePiedraChange}>
                    <option value="">Todas</option>
                    <option value="esmeral">Esmeralda</option>
                    <option value="diamante">Diamante</option>
                    <option value="zafiro">Zafiro</option>
                    <option value="rubie">Rubí</option>
                    <option value="perla">Perla</option>
                </select>
            </div>
            <div className="image-container">
                {filteredImages.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.src} alt={image.alt} className="image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colecciones;
