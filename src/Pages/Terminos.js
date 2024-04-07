import React, { useState } from "react";
import { Link } from "react-router-dom";

const Terminos = () => {
    const [aceptado, setAceptado] = useState(false);

    const handleAceptar = () => {
        setAceptado(true);
    };

    return (
        <section>
            <div className="container--modifier">
                <p>
                    <strong>Términos y Condiciones</strong>
                </p>
                {/* 1. Propiedad y Operación */}
                <p><strong>1. Propiedad y Operación:</strong>
                    Esta página web es propiedad y está operada por Ana Victoria Gamboa Aguilar, Mayerly Andrea Monroy
                    Malagón, Valeria Montenegro López y Cristian David Moreno Solano.
                </p>
                {/* 2. Objetivo y Oferta de Productos */}
                <p><strong>2. Objetivo y Oferta de Productos:</strong>
                    Ofrecemos una amplia gama de productos y servicios relacionados con la joyería artesanal colombiana.
                    Nuestro objetivo es brindar una experiencia única y satisfactoria a aquellos que buscan adquirir piezas
                    de joyería únicas y auténticas, y promover el arte y la cultura colombiana. En nuestra tienda en línea,
                    encontrarás una cuidadosa selección de joyas artesanales colombianas, con información detallada sobre
                    los procesos de fabricación, materiales y la historia cultural detrás de cada diseño.
                </p>
                {/* 3. Asesoramiento Personalizado */}
                <p><strong>3. Asesoramiento Personalizado:</strong>
                    Además de ofrecer productos, proporcionamos asesoramiento personalizado a través de nuestro servicio de
                    atención al cliente para ayudarte a encontrar la pieza perfecta que se adapte a tus gustos y
                    necesidades.
                </p>
                {/* 4. Invitación a Explorar */}
                <p><strong>4. Invitación a Explorar:</strong>
                    Te invitamos a explorar nuestra página web y descubrir la belleza y la artesanía excepcional de la
                    joyería artesanal colombiana.
                </p>
                {/* 5. Aprobación de Términos */}
                <p><strong>5. Aprobación de Términos:</strong>
                    Al acceder o usar la página web de nuestro servicio, usted aprueba que haya leído, entendido y aceptado
                    estar sujeto a estos Términos.
                </p>
                {/* 6. Requisitos de Uso */}
                <p><strong>6. Requisitos de Uso:</strong>
                    Para usar nuestra página web y/o recibir nuestros servicios, debes tener al menos 18 años de edad y
                    poseer la autoridad legal para participar en estos Términos como un acuerdo vinculante.
                </p>
                {/* 7. Compra de Artículos */}
                <p><strong>7. Compra de Artículos:</strong>
                    Al comprar un artículo, aceptas la responsabilidad de leer el listado completo del artículo antes de
                    comprometerte a comprarlo. Celebras un contrato legalmente vinculante para comprar un artículo al
                    comprometerte a comprarlo y completar el proceso de check-out.
                </p>
                {/* 8. Precios y Cambios */}
                <p><strong>8. Precios y Cambios:</strong>
                    Los precios que cobramos por nuestros servicios/productos se enumeran en la página web. Nos reservamos
                    el derecho de cambiar los precios en cualquier momento y corregir errores de precios. La información
                    adicional sobre precios e impuestos está disponible en la página de pagos.
                </p>
                {/* 9. Costos Adicionales */}
                <p><strong>9. Costos Adicionales:</strong>
                    El costo por servicios y otros cargos se aplicarán al precio de cada producto individualmente y se
                    cobrarán al momento de realizar la compra.
                </p>
                {/* 10. Política de Devoluciones */}
                <p><strong>10. Política de Devoluciones:</strong>
                    Para productos no dañados, se requiere un estudio y evaluación por parte de nuestro equipo antes de una
                    devolución. Comunícate con nuestro servicio de atención al cliente dentro de los 14 días posteriores a
                    la recepción del producto para iniciar el proceso.
                </p>
                {/* 11. Garantía de Productos */}
                <p><strong>11. Garantía de Productos:</strong>
                    Cuando recibimos un reclamo de garantía válido, evaluaremos y determinaremos la solución adecuada, que
                    puede incluir reparación, reemplazo o reembolso.
                </p>
                {/* 12. Responsabilidad y Limitación */}
                <p><strong>12. Responsabilidad y Limitación:</strong>
                    No seremos responsables por daños indirectos, incidentales, especiales o consecuentes que surjan del uso
                    del servicio.
                </p>
                {/* 13. Modificaciones y Notificaciones */}
                <p><strong>13. Modificaciones y Notificaciones:</strong>
                    Nos reservamos el derecho de modificar estos términos. Cambios importantes serán notificados. El uso
                    continuado después de cambios constituye la aceptación de los nuevos términos.
                </p>
                {/* 14. Comunicaciones y Promociones */}
                <p><strong>14. Comunicaciones y Promociones:</strong>
                    Aceptas recibir nuestros mensajes y materiales de promoción ocasionalmente.
                </p>
                {/* 15. Ley Aplicable y Jurisdicción */}
                <p><strong>15. Ley Aplicable y Jurisdicción:</strong>
                    Estos términos se rigen por las leyes internas de Colombia, y cualquier disputa se resolverá en
                    tribunales de Bogotá, Colombia.
                </p>
                {/* 16. Contacto */}
                <p><strong>16. Contacto:</strong>
                    Para asistencia, contáctanos a través de nuestro servicio de atención al cliente.
                </p>
                {/* Aceptar Términos */}
                <div className="tc-container">
                    <input type="checkbox" name="tc" id="tc" required onChange={handleAceptar} />
                    Acepto los términos y condiciones.
                </div>

                {/* Botón para ir a la página de inicio de sesión */}
                {aceptado && (
                    <Link to="/Iniciar_Sesion" className="button-container">
                    <button className="iniciar-sesion-btn">Iniciar Sesión</button>
                </Link>
                )}
            </div>
        </section>
    );
};

export default Terminos;