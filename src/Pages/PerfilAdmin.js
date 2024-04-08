import React, { useEffect } from 'react';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function PerfilAdmin() {
    useEffect(() => {
        function handleLogout() {
            alert('Se ha cerrado sesión correctamente!');
        }

        document.getElementById("logout-link").addEventListener("click", handleLogout);

        return () => {
            document.getElementById("logout-link").removeEventListener("click", handleLogout);
        };
    }, []);

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

    return (
        <div className="perfil-admin">
            <nav className="perfil-admin-nav">
                <div className="logo-name">
                    <div className="logo-image">
                        <img src="images/Logo.jpg" alt="" />
                    </div>
                    <span className="logo_name">JoyasKogi</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <a href="#dash-content">
                                <i className="uil uil-estate"></i>
                                <span className="link-name">Actividad usuarios</span>
                            </a>
                        </li>
                        <li>
                            <a href="#colecciones">
                                <i className="uil uil-files-landscapes"></i>
                                <span className="link-name">Colecciones</span>
                            </a>
                        </li>
                        <li>
                            <a href="#report">
                                <i className="uil uil-chart"></i>
                                <span className="link-name">Reportes</span>
                            </a>
                        </li>
                        {/* Agrega más enlaces de navegación aquí si es necesario */}
                    </ul>
                    <ul className="logout-mode">
                        <li>
                            <a href="Sesión.html" id="logout-link">
                                <i className="uil uil-signout"></i>
                                <span className="link-name">Cerrar sesión</span>
                            </a>
                        </li>
                        <li className="mode">
                            <a href="#">
                                <i className="uil uil-moon"></i>
                                <span className="link-name">Modo oscuro</span>
                            </a>
                            <div className="mode-toggle">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="perfil-admin-container">
                {/* Sección de actividades de usuarios */}
                <section className="dashboard">
                    <div className="top">
                        <i className="uil uil-bars sidebar-toggle" />
                        <div className="search-box">
                            <i className="uil uil-search" />
                            <input type="text" placeholder="Busque aqui..." />
                        </div>
                        <img src="images/Persona4.jpg" alt />
                    </div>
                    <div className="dash-content" id="dash-content">
                        {/* Contenido de la actividad de usuarios */}
                    </div>
                </section>

                {/* Sección de colecciones */}
                <section className="colecciones">
                    <div className="dash-content" id="colecciones">
                        {/* Contenido de las colecciones */}
                    </div>
                </section>

                {/* Sección de reportes */}
                <section className="report">
                    <div className="dash-content" id="report">
                        <div className="overview">
                            <div className="title">
                                <i className="uil uil-analysis"></i>
                                <span className="text">Reporte de ventas</span>
                            </div>
                            <h1>Reporte de Ventas - Joyería</h1>
                            <style dangerouslySetInnerHTML={{ __html: "\n.report table {\n  width: 100%;\n  border-collapse: collapse;\n  overflow-x: auto;\n}\n.report th, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}\n.report button {\n  margin-top: 20px;\n}\n" }} />

                            <table>
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Tipo de Joya</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {generateSalesTable()}
                                </tbody>
                            </table>
                            <div>
                                <button onClick={exportToPDF}>Exportar a PDF</button>
                                <button onClick={exportToCSV}>Exportar a CSV</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PerfilAdmin;
