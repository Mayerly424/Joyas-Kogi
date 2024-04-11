import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Section() {
    const [productos, setProductos] = useState([]);
    const [productoActual, setProductoActual] = useState({
        id: null,
        nombre: "",
        tipo: "",
        material: "",
        precio: "",
        garantia: "",
        descripcion: "",
        imagen: ""
    });
    const [modoEdicion, setModoEdicion] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar si se muestra la alerta

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos'));
        if (productosGuardados) {
            setProductos(productosGuardados);
        }
    }, []);

    const handleAgregarProducto = (event) => {
        event.preventDefault();
        const nombre = event.target.elements.name.value;
        const tipo = event.target.elements.gender.value;
        const material = event.target.elements.phone.value;
        const precio = event.target.elements.price.value;
        const garantia = event.target.elements.warranty.value;
        const descripcion = event.target.elements.message.value;
        const imagen = URL.createObjectURL(event.target.elements.image.files[0]);

        const nuevoProducto = {
            id: Math.floor(Math.random() * 10000),
            nombre,
            tipo,
            material,
            precio,
            garantia,
            descripcion,
            imagen
        };


        window.showAlert = (message) => {
            const alertElement = document.createElement("div");
            alertElement.classList.add("alert");
            alertElement.textContent = message;
            document.body.appendChild(alertElement);

            // Ocultar la alerta después de 3 segundos
            setTimeout(() => {
                alertElement.remove();
            }, 3000);
        };


        setProductos([...productos, nuevoProducto]);
        setShowAlert(true); // Mostrar la alerta
        event.target.reset();
    };
    const showSuccessAlert = () => {
        window.showAlert("Producto agregado exitosamente");
    };

    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(productos));
    }, [productos]);

    const handleEditarProducto = (id) => {
        const producto = productos.find((producto) => producto.id === id);
        setModoEdicion(true);
        setProductoActual({
            id: producto.id,
            nombre: producto.nombre,
            tipo: producto.tipo,
            material: producto.material,
            precio: producto.precio,
            garantia: producto.garantia,
            descripcion: producto.descripcion,
            imagen: producto.imagen
        });
    };

    const handleActualizarProducto = (id, productoActualizado) => {
        setModoEdicion(false);
        setProductos(
            productos.map((producto) =>
                producto.id === id ? productoActualizado : producto
            )
        );
    };

    const handleEliminarProducto = (id) => {
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    // Función para guardar los productos en el almacenamiento local cada vez que se actualizan
    useEffect(() => {
        localStorage.setItem('productos', JSON.stringify(productos));
    }, [productos]);

    const salesData = [
        { fecha: '2023-06-01', tipoJoya: 'Anillo', cantidad: 5, precio: 100 },
        { fecha: '2023-06-02', tipoJoya: 'Collar', cantidad: 3, precio: 150 },
        { fecha: '2023-06-03', tipoJoya: 'Pulsera', cantidad: 2, precio: 200 },
    ];

    const generateSalesTable = () => {
        return salesData.map(sale => (
            <tr key={sale.fecha}>
                <td>{sale.fecha}</td>
                <td>{sale.tipoJoya}</td>
                <td>{sale.cantidad}</td>
                <td>{sale.precio}</td>
                <td>{sale.cantidad * sale.precio}</td>
            </tr>
        ));
    };

    const exportToPDF = () => {
        setTimeout(() => {
            const doc = new jsPDF();
            doc.autoTable({ html: '.report table' });
            doc.save('reporte_ventas.pdf');
        }, 100); // Espera 100 milisegundos antes de generar el PDF
    };

    const exportToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        salesData.forEach((sale) => {
            const row = Object.values(sale).join(",");
            csvContent += row + "\r\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "reporte_ventas.csv");
        document.body.appendChild(link);
        link.click();
    };
    const images = [
        { id: 1, src: 'images/Orquideasdenuevo.png', description: 'Orquideas baño en oro', collection: 'Otoño 2022' },
        { id: 3, src: 'images/Pulseradoradaotravez.jpg', description: 'Anillo de hoja en oro', collection: 'Verano 2023' },
        { id: 5, src: 'images/Anilloplateado.jpg', description: 'Anillo plateado', collection: 'Invierno 2021' },
        { id: 6, src: 'images/Caparazonarete.png', description: 'Arete caparazon de oro', collection: 'Otoño 2022' },
        { id: 7, src: 'images/Collarsolido.png', description: 'Collar de baño rosa', collection: 'Verano 2023' },
        { id: 8, src: 'images/Collarflor.png', description: 'Collar de flor en oro', collection: 'Invierno 2021' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Muestra tres imágenes a la vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="dashboard">
            <div className="top">
            <i class="uil uil-files-landscapes"></i>
                <div className="search-box">
                    <i className="uil uil-search" />
                    <input type="text" placeholder="Busque aqui..." />
                </div>
                <img src="images/Persona4.jpg" alt />
            </div>
            <div className="dash-content" id="dash-content">
                <div className="overview">
                    <div className="title">
                        <i className="uil uil-tachometer-fast-alt" />
                        <span className="text">Actividad de usuarios</span>
                    </div>
                    <div className="boxes">
                        <div className="box box1">
                            <i className="uil uil-users-alt" />
                            <span className="text">Total usuarios</span>
                            <span className="number">50,120</span>
                        </div>
                        <div className="box box2">
                            <i className="uil uil-comments" />
                            <span className="text">Opiniones</span>
                            <span className="number">20,120</span>
                        </div>
                        <div className="box box3">
                            <i className="uil uil-shopping-cart-alt" />
                            <span className="text">Compras mensuales</span>
                            <span className="number">10,120</span>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="title">
                        <i className="uil uil-clock-three" />
                        <span className="text">Actividad reciente</span>
                    </div>
                    <div className="activity-data">
                        <div className="data names">
                            <span className="data-title">Nombre</span>
                            <span className="data-list">Prem Shahi</span>
                            <span className="data-list">Deepa Chand</span>
                            <span className="data-list">Manisha Chand</span>
                            <span className="data-list">Pratima Shahi</span>
                            <span className="data-list">Man Shahi</span>
                            <span className="data-list">Ganesh Chand</span>
                            <span className="data-list">Bikash Chand</span>
                        </div>
                        <div className="data email">
                            <span className="data-title">Email</span>
                            <span className="data-list">premshahi@gmail.com</span>
                            <span className="data-list">deepachand@gmail.com</span>
                            <span className="data-list">prakashhai@gmail.com</span>
                            <span className="data-list">manishachand@gmail.com</span>
                            <span className="data-list">pratimashhai@gmail.com</span>
                            <span className="data-list">manshahi@gmail.com</span>
                            <span className="data-list">ganeshchand@gmail.com</span>
                        </div>
                        <div className="data joined">
                            <span className="data-title">Registrado</span>
                            <span className="data-list">2022-02-12</span>
                            <span className="data-list">2022-02-12</span>
                            <span className="data-list">2022-02-13</span>
                            <span className="data-list">2022-02-13</span>
                            <span className="data-list">2022-02-14</span>
                            <span className="data-list">2022-02-14</span>
                            <span className="data-list">2022-02-15</span>
                        </div>
                        <div className="data type">
                            <span className="data-title">Ultima compra</span>
                            <span className="data-list">2022-02-12</span>
                            <span className="data-list">2022-02-12</span>
                            <span className="data-list">2022-02-13</span>
                            <span className="data-list">2022-02-13</span>
                            <span className="data-list">2022-02-14</span>
                            <span className="data-list">2022-02-14</span>
                            <span className="data-list">2022-02-15</span>
                        </div>
                        <div className="data status">
                            <span className="data-title">Estado</span>
                            <span className="data-list">Activo</span>
                            <span className="data-list">Inactivo</span>
                            <span className="data-list">Activo</span>
                            <span className="data-list">Activo</span>
                            <span className="data-list">Inactivo</span>
                            <span className="data-list">Activo</span>
                            <span className="data-list">Activo</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="colecciones">
                <div className="dash-content" id="colecciones">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-files-landscapes" />
                            <span className="text">Colecciones</span>
                        </div>
                        <div className="wrapper">
                            <header>{modoEdicion ? "Editar producto" : "Agregar nuevo producto"}</header>
                            <form onSubmit={modoEdicion ? null : handleAgregarProducto}>
                                <div className="dbl-field">
                                    <div className="field">
                                        <input type="text" name="name" placeholder="Ingrese el nombre del producto" defaultValue={modoEdicion ? productoActual.nombre : ""} />
                                        <i className="fas fa-user" />
                                    </div>
                                    <div className="field">
                                        <input type="radio" id="check-otono" name="gender" value="Otoño" defaultChecked />
                                        <label htmlFor="check-otono">Otoño</label>
                                        <input type="radio" id="check-verano" name="gender" value="Verano" />
                                        <label htmlFor="check-verano">Verano</label>
                                        <input type="radio" id="check-Invierno" name="gender" value="Invierno" />
                                        <label htmlFor="check-Invierno">Invierno</label>
                                        <input type="radio" id="check-Primavera" name="gender" value="Primavera" />
                                        <label htmlFor="check-Primavera">Primavera</label>
                                    </div>
                                </div>
                                {/* Resto de los campos del formulario */}
                                <div className="dbl-field">
                                    <div className="field">
                                        <input type="text" name="phone" placeholder="Ingrese el tipo de joya" defaultValue={modoEdicion ? productoActual.material : ""} />
                                        <i className="fas fa-globe" />
                                    </div>
                                    <div className="field">
                                        <input type="text" name="material" placeholder="Ingrese el material" defaultValue={modoEdicion ? productoActual.material : ""} />
                                        <i className="fas fa-globe" />
                                    </div>
                                </div>
                                <div className="dbl-field">
                                    <div className="field">
                                        <input type="number" name="price" placeholder="Ingrese el precio" defaultValue={modoEdicion ? productoActual.precio : ""} />
                                        <i className="fas fa-globe" />
                                    </div>
                                    <div className="field">
                                        <input type="text" name="warranty" placeholder="Ingrese tiempo de garantía" defaultValue={modoEdicion ? productoActual.garantia : ""} />
                                        <i className="fas fa-globe" />
                                    </div>
                                </div>
                                <div className="message">
                                    <textarea placeholder="Añada una descripción del producto" name="message" defaultValue={modoEdicion ? productoActual.descripcion : ""} />
                                    <i className="material-icons" />
                                </div>
                                <div>
                                    <input type="file" name="image" placeholder="Ingrese una imagen del producto" />
                                    <i className="fas fa-globe" />
                                </div>
                                <div className="button-area">
                                    <button type="submit">{modoEdicion ? "Actualizar producto" : "Añadir producto"}</button>
                                    <span />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                {/* Tabla de productos */}
                <div className="dash-content" id="productos">
                    <div className="tienda" id="tienda">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-shop" />
                                <span className="text">Tienda</span>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Tipo</th>
                                        <th>Material</th>
                                        <th>Precio</th>
                                        <th>Garantía</th>
                                        <th>Descripción</th>
                                        <th>Imagen</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((producto, index) => (
                                        <tr key={index}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.tipo}</td>
                                            <td>{producto.material}</td>
                                            <td>{producto.precio}</td>
                                            <td>{producto.garantia}</td>
                                            <td>{producto.descripcion}</td>
                                            <td><img src={producto.imagen} alt="Producto" style={{ maxWidth: "100px", maxHeight: "100px" }} /></td>
                                            <td>
                                                <button onClick={() => handleEditarProducto(producto.id)}>Editar</button>
                                                <button onClick={() => handleEliminarProducto(producto.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="favoritos">
                <div className="dash-content" id="favoritos">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-thumbs-up" />
                            <span className="text">Articulos preferidos del mes</span>
                        </div>
                        <div className="favs">
                            <div className="container swiper">
                                <div className="slide-container">
                                    <div className="card-wrapper swiper-wrapper">
                                        <div className="card swiper-slide">
                                            <div className="image-box">
                                                <img src="images\Orquideasdenuevo.png" alt />
                                            </div>
                                            <div className="profile-details">
                                                <img src="images/Verano.jpg" alt />
                                                <div className="name-job">
                                                    <h3 className="name">Orquideas baño en oro</h3>
                                                    <h4 className="job">Colección verano de 2022</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card swiper-slide">
                                            <div className="image-box">
                                                <img src="images/Pulseradoradaotravez.jpg" alt />
                                            </div>
                                            <div className="profile-details">
                                                <img src="images/Verano.jpg" alt />
                                                <div className="name-job">
                                                    <h3 className="name">Pulcera en oro dorada</h3>
                                                    <h4 className="job">Coleccion verano de 2023</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card swiper-slide">
                                            <div className="image-box">
                                                <img src="images/Anilloplateado.jpg" alt />
                                            </div>
                                            <div className="profile-details">
                                                <img src="images/Invierno.jpg" alt />
                                                <div className="name-job">
                                                    <h3 className="name">Anillo de hoja recubierta en plata</h3>
                                                    <h4 className="job">Colección invierno 2022</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card swiper-slide">
                                            <div className="image-box">
                                                <img src="images/Caparazonarete.png" alt />
                                            </div>
                                            <div className="profile-details">
                                                <img src="images/Otoño.jpg" alt />
                                                <div className="name-job">
                                                    <h3 className="name">Arete caparazon en oro</h3>
                                                    <h4 className="job">Colección otoño 2023</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card swiper-slide">
                                            <div className="image-box">
                                                <img src="images/Collarsolido.png" alt />
                                            </div>
                                            <div className="profile-details">
                                                <img src="images/Otoño.jpg" alt />
                                                <div className="name-job">
                                                    <h3 className="name">Collar de hoja solida en oro rosado </h3>
                                                    <h4 className="job">Colección otoño 2023</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next swiper-navBtn" />
                                <div className="swiper-button-prev swiper-navBtn" />
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Contactanos">
                <div className="dash-content" id="contactanos">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-thumbs-up" />
                            <span className="text">Datos de contacto</span>
                        </div>
                        <div className="body-contact">
                            <section className="container--modific">
                                <header>Editar datos de contacto</header>
                                <form action="#" className="form">
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input type="text" placeholder="Ingresar email nuevo" required />
                                    </div>
                                    <div className="column">
                                        <div className="input-box">
                                            <i className="fas fa-phone" />
                                            <input type="number" placeholder="Ingresar número de teléfono" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-phone" />
                                            <input type="number" placeholder="Ingresa otro número de teléfono" required />
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-map-marker-alt" />
                                        <input type="text" placeholder="Ingresar dirección nueva" required />
                                    </div>
                                    <div className="input-box address">
                                        <i className="fas fa-city" />
                                        <div className="column">
                                            <div className="select-box">
                                                <select>
                                                    <option hidden>Selecciona</option>
                                                    <option>Bogotá</option>
                                                    <option>Medellín</option>
                                                    <option>Barranquilla</option>
                                                    <option>Cali</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button id="AlertaVer">Guardar</button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
}

export default Section;