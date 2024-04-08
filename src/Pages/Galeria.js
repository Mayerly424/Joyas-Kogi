import React, { useState } from "react";
import { Link } from "react-router-dom";

// Definición de los productos
export const productos = [
    {
        nombre: "Collar",
        precio: 4.60,
        imagen: "images/IMG-20230321-WA0028.jpg",
        descuento: 13,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Collar hoja",
        precio: 5.70,
        imagen: "images/IMG-20230321-WA0017.jpg",
        descuento: 22,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Collar de hoja",
        precio: 3.20,
        imagen: "images/IMG-20230321-WA0015.jpg",
        descuento: 13,
        stars: [1, 1, 1, 1, 1]
    },
    {
        nombre: "Anillo de zafiro",
        precio: 5.60,
        imagen: "images/Anillobaige.jpg",
        descuento: 13,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Anillo perlado",
        precio: 10.50,
        imagen: "images/Anilloblanco.jpg",
        descuento: 15,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Anillo esmeralda",
        precio: 8.90,
        imagen: "images/Anillonegroconverde.jpg",
        descuento: 10,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Conjunto Hojal",
        precio: 11.20,
        imagen: "images/Combonaranja.jpg",
        descuento: 18,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Conjunto perlado",
        precio: 15.80,
        imagen: "images/Conjunto.png",
        descuento: 20,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Conjunto Full plata",
        precio: 20.00,
        imagen: "images/Combopalta.jpg",
        descuento: 25,
        stars: [1, 1, 1, 0, 0]
    },
    {
        nombre: "Pulcera dorada",
        precio: 12.50,
        imagen: "images/Piedranaranja.png",
        descuento: 30,
        stars: [1, 1, 1, 1, 1]
    },
    {
        nombre: "Pulcera tejida",
        precio: 15.30,
        imagen: "images/Manillaoro.jpg",
        descuento: 20,
        stars: [1, 1, 1, 1, 0]
    },
    {
        nombre: "Pulcera tejida en plata",
        precio: 20.00,
        imagen: "images/Manillapalata.png",
        descuento: 25,
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
