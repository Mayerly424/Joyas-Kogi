import React, { useState } from "react";
import { Link } from "react-router-dom";

// Definición de los productos
export const productos = [
    {
        nombre: "Bandas Elasticas",
        precio: 32.594,
        imagen: "images/bandaelastica.png",
        descuento: 20,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Bicicleta estatica",
        precio: 999.999,
        imagen: "images/bicicletaestatica.jpg",
        descuento: 12,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Tapete",
        precio: 32.999,
        imagen: "images/tapete.jpg",
        descuento: 20,
        stars: [1, 1, 1, 1, 1]
    },
    {
        nombre: "Press de banca",
        precio: 590.000,
        imagen: "images/press.jpg",
        descuento: 13,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Prensa de pierna",
        precio: 890.876,
        imagen: "images/prensa.jpg",
        descuento: 30,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Polea Cruzada",
        precio: 888.999,
        imagen: "images/Polea.jpg",
        descuento: 19,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Pesas de 2 kilos",
        precio: 11.590,
        imagen: "images/pesas_2_kilos.webp",
        descuento: 18,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Maquina de aductor",
        precio: 999.999,
        imagen: "images/maquinaductor.webp",
        descuento: 35,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Caminadora",
        precio: 590.999,
        imagen: "images/caminadora.jpg",
        descuento: 25,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Maquina dorsalera",
        precio: 123.50,
        imagen: "images/dorsalera.jpg",
        descuento: 30,
        stars: [1, 1, 1, 1, 1]
    },
    {
        nombre: "Banco con espaldar",
        precio: 950.308,
        imagen: "images/banco.jpg",
        descuento: 20,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Caja ",
        precio: 20.590,
        imagen: "images/caja.webp",
        descuento: 50,
        stars: [1, 1, 1, 0, 0]
    }
];

// Componente Galeria
const Galeria = () => {
    // Estado para almacenar los productos agregados al carrito
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    // Función para calcular el total a pagar
    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.precio, 0);
    };

    return (
        <section className="container top-products">
            <h1 className="heading-1">Algunos descuentos</h1>
            <div className="container-options">
                <span>Destacados</span>
                <span>Más recientes</span>
            </div>
            <div className="container-products">
                {/* Mapear los productos */}
                {productos.map((producto, index) => (
                    <div className="card-product" key={index}>
                        <div className="container-img">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <span className="discount">-{producto.descuento}%</span>
                            <div className="button-group">
                                <span>
                                    <i className="fa-regular fas fa-eye" />
                                </span>
                                <span>
                                    <i className="fa-regular fas fa-heart" />
                                </span>
                            </div>
                        </div>
                        <div className="content-card-product">
                            <div className="stars">
                                <i class="fa-solid fas fa-star"></i>

                                <i class="fa-regular fas fa-star"></i>

                                {producto.stars.map((star, index) => (
                                    <i key={index} className={`fa-solid fas fa-star${star ? '' : '-blank'}`} />
                                ))}
                            </div>
                            <h3>{producto.nombre}</h3>
                            <span class="add-cart">
                                <button onClick={() => agregarAlCarrito(producto)}>
                                    <i class="fa-solid fas fa-shopping-cart" />
                                </button>
                            </span>
                            <p className="price">${producto.precio} <span>${producto.precio}</span></p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mostrar carrito */}
            <div className="carrito">
                <h2>Carrito de Compras</h2>
                <ul>
                    {carrito.map((producto, index) => (
                        <li key={index}>{producto.nombre} - ${producto.precio}</li>
                    ))}
                </ul>
                <p>Total a pagar: ${calcularTotal()}</p>
                {/* Enlace para finalizar la compra */}
                <Link to="/Iniciar_Sesion">Finalizar Compra</Link>
            </div>
        </section>
    );
};

export default Galeria;
