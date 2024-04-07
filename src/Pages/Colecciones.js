import React, { useEffect } from "react";


const Colecciones = () => {
    useEffect(() => {
        // Script para el filtrado de colecciones
        const filterScript = document.createElement("script");
        filterScript.src = "java/jquery.mixitup.min.js";
        document.body.appendChild(filterScript);

        // Script para funcionalidades adicionales
        const additionalScript = document.createElement("script");
        additionalScript.src = "";
        document.body.appendChild(additionalScript);

        return () => {
            document.body.removeChild(filterScript);
            document.body.removeChild(additionalScript);
        };
    }, []);

    return (
        <main className="cd-main-content">
            <div className="cd-tab-filter-wrapper">
                <div className="cd-tab-filter">
                    <ul className="cd-filters">
                        <li className="placeholder">
                            <a data-type="all" href="#0">Todo</a>
                        </li>
                        <li className="filter"><a className="selected" href="#0" data-type="all">Todo</a></li>
                        <li className="filter" data-filter=".primavera"><a href="#0" data-type="color-1">Colección Primavera</a></li>
                        <li className="filter" data-filter=".verano"><a href="#0" data-type="color-2">Colección verano</a></li>
                        <li className="filter" data-filter=".otoño"><a href="#0" data-type="color-2">Colección otoño</a></li>
                        <li className="filter" data-filter=".invierno"><a href="#0" data-type="color-2">Colección invierno</a></li>
                    </ul>
                </div>
            </div>

            <section className="cd-gallery">
                <ul>
                    <div>
                        <li className="mix primavera aretes oro diamante"><img src="images/Aretesorquideas.png" alt="Image 1" /></li>
                        <li className="mix verano collares plata esmeralda"><img src="images/Cadenahoja.png" alt="Image 2" /></li>
                        <li className="mix otoño pulceras platino zafiro"><img src="images/Pulseras.png" alt="Image 3" /></li>
                        <li className="mix invierno argollas cobre rubie"><img src="images/Pulseraplata.png" alt="Image 4" /></li>
                        <li className="mix primavera cadenas acero perla"><img src="images/IMG-20230321-WA0015.jpg" alt="Image 5" /></li>
                        <li className="mix verano complementos titanio diamante"><img src="images/IMG-20230321-WA0030.jpg" alt="Image 6" /></li>
                        <li className="mix otoño aretes oro esmeralda"><img src="images/Aretesverdenegro.jpg" alt="Image 7" /></li>
                        <li className="mix invierno collares plata zafiro"><img src="images/Collarpiedrasverdes.png" alt="Image 8" /></li>
                        <li className="mix primavera pulceras platino rubie"><img src="images/Collarraro.jpg" alt="Image 9" /></li>
                        <li className="mix verano argollas cobre perla"><img src="images/AnilloBlanco.jpg" alt="Image 10" /></li>
                        <li className="mix otoño cadenas acero diamante"><img src="images/Collarhojsplateadas.jpg" alt="Image 11" /></li>
                        <li className="mix invierno complementos titanio esmeralda"><img src="images/Mariguanita.png" alt="Image 12" /></li>
                        <li className="mix primavera aretes oro zafiro"><img src="images/IMG-20230321-WA0006.jpg" alt="Image 13" /></li>
                        <li className="mix verano collares plata rubie"><img src="images/Collarhoja.png" alt="Image 14" /></li>
                        <li className="mix otoño pulceras platino perla"><img src="images/Collarverdeconhoja.jpg" alt="Image 15" /></li>
                        <li className="mix invierno argollas cobre diamante"><img src="images/Aretescafe.jpg" alt="Image 16" /></li>
                        <li className="mix primavera cadenas acero esmeralda"><img src="images/Aretescafe.jpg" alt="Image 17" /></li>
                        
                    </div>
                </ul>
                <div className="cd-fail-message">No se encontraron resultados</div>
            </section>

            <div className="cd-filter">
                <form>
                    <div className="cd-filter-block">
                        <h4>Buscar</h4>
                        <div className="cd-filter-content">
                            <input type="search" placeholder="Intenta collar.." />
                        </div>
                    </div>

                    {/* Resto de los filtros */}

                </form>
                <a href="#0" className="cd-close">Cerrar</a>
            </div>
            <a href="#0" className="cd-filter-trigger">...</a>
        </main>
    );
};

export default Colecciones;
