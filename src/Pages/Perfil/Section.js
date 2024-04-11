import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Section = ({ darkMode }) => {
    const handleSave = () => {
        // Obtener referencias a los campos del formulario
        const tipoJoya = document.getElementById('tipoJoya');
        const tamaño = document.getElementById('tamaño');
        const materialExtra = document.getElementById('materialExtra');
        const direccion = document.getElementById('direccion');
        const tipoMetal = document.getElementById('tipoMetal');
        const tipoPiedra = document.getElementById('tipoPiedra');
        const descripcion = document.getElementById('descripcion');
        const imagen = document.getElementById('imagen');

        // Verificar si los campos obligatorios están llenos
        if (
            !tipoJoya.value ||
            !tamaño.value ||
            !materialExtra.value ||
            !direccion.value ||
            !tipoMetal.value ||
            !tipoPiedra.value ||
            !descripcion.value ||
            !imagen.value
        ) {
            alert('Por favor, completa todos los campos obligatorios');
            return;
        }

        // Aquí puedes continuar con la lógica para guardar la personalización

        alert('¡Personalización guardada exitosamente!');
    };

    const handleSchedule = async () => {
        // Obtener referencias a los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const tipoJoya = document.getElementById('tipoJoya').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        // Verificar si los campos obligatorios están llenos
        if (!nombre || !tipoJoya || !email || !telefono || !fecha || !hora) {
            alert('Cita agendada con exito');
            return;
        }

        // Construir el objeto con los datos de la cita
        const citaData = {
            nombre,
            tipoJoya,
            email,
            telefono,
            fecha,
            hora
        };

        try {
            // Enviar los datos de la cita al servidor
            const response = await fetch('/api/agendar-cita', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(citaData)
            });

            if (response.ok) {
                alert('Cita agendada correctamente');
                // Limpiar los campos del formulario después de agendar la cita
                document.getElementById('nombre').value = '';
                document.getElementById('tipoJoya').value = '';
                document.getElementById('email').value = '';
                document.getElementById('telefono').value = '';
                document.getElementById('fecha').value = '';
                document.getElementById('hora').value = '';
            } else {
                throw new Error('Error al agendar la cita');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al agendar la cita. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    const handleSaveChanges = () => {
        // Obtener referencias a los campos del formulario
        const nombre = document.getElementById('nombrePerfil');
        const apellido = document.getElementById('apellidoPerfil');
        const email = document.getElementById('emailPerfil');
        const telefono = document.getElementById('telefonoPerfil');
        const direccion = document.getElementById('direccionPerfil');

        // Verificar si los campos obligatorios están llenos
        if (!nombre.value || !apellido.value || !email.value || !telefono.value || !direccion.value) {
            alert('Por favor, completa todos los campos obligatorios');
            return;
        }

        // Aquí puedes continuar con la lógica para guardar los cambios en el perfil
        alert('Campos llenos. Guardando cambios en el perfil...');
    };

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [notes, setNotes] = useState({});

    const generateCalendar = (year, month) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const calendar = [];

        let currentDate = new Date(year, month, 1);
        let week = [];

        for (let i = 0; i < currentDate.getDay(); i++) {
            week.push(<td key={`empty-${i}`}></td>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const isSelected = selectedDays.includes(date.toISOString().split('T')[0]);

            week.push(
                <td
                    key={i}
                    onClick={() => handleDayClick(date.toISOString().split('T')[0])}
                    className={isSelected ? 'selected' : ''}
                >
                    <div>{i}</div>
                    <div className="note">{notes[date.toISOString().split('T')[0]]}</div>
                </td>
            );

            if (currentDate.getDay() === 6 || i === daysInMonth) {
                calendar.push(<tr key={`week-${i / 7}`}>{week}</tr>);
                week = [];
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return calendar;
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
        setSelectedDays([]);
    };

    const handleDayClick = (date) => {
        const task = prompt("Ingrese la tarea para este día:");
        if (task !== null) {
            setSelectedDays((prevSelectedDays) => {
                if (prevSelectedDays.includes(date)) {
                    return prevSelectedDays.filter((d) => d !== date);
                } else {
                    return [...prevSelectedDays, date];
                }
            });
            setNotes((prevNotes) => ({
                ...prevNotes,
                [date]: task,
            }));
        }
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        const table = document.querySelector(".Historial-ventas table");
        doc.autoTable({ html: table });
        doc.save("historial_compras.pdf");
    };

    const exportToCSV = () => {
        const table = document.querySelector(".Historial-ventas table");
        let csv = [];
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            let rowData = [];
            for (let j = 0; j < row.cells.length; j++) {
                rowData.push(row.cells[j].textContent);
            }
            csv.push(rowData.join(","));
        }

        const csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "historial_compras.csv");
        document.body.appendChild(link);
        link.click();
    };

    return (
        <section className={`home ${darkMode ? 'dark-mode' : ''}`}>
            {/* Contenido de la sección */}
            <nav className="navbar">
                <div className="logo_item">
                    {/*<i class="bx bx-menu" id="sidebarOpen"></i>
    <img src="images/logo.png" alt=""></i>CodingNepal*/}
                </div>
                {/*<div class="search_bar">
    <input type="text" placeholder="Search" />
  </div>*/}
                <div className="navbar_content">
                    <i className="bx bx-grid" />
                    <i className="bx bx-bell" />
                    <img src="images/Persona10.jpg" alt className="profile" />

                </div>
            </nav>
            <h1>Información en el perfil</h1>
            <div className="compras" id="compras">
                <h2 className="heading-1"> <i className="bx bx-cart-alt icon"> Historial de compras</i></h2>
                <style dangerouslySetInnerHTML={{ __html: "\n                    /* Estilos CSS */\n                    \n                    .Historial-ventas {\n                      max-width: 800px;\n                      margin: 0 auto;\n                    }\n                \n                    .historial-ventas h1 {\n                      text-align: center;\n                    }\n                \n                    .historial-ventas table {\n                      width: 100%;\n                      border-collapse: collapse;\n                      overflow-x: auto;\n                      margin: auto;\n                    }\n                \n                    .Historial-ventas tr, th, td {\n                      padding: 8px;\n                      text-align: left;\n                      border-bottom: 1px solid #c7a17a;\n                    }\n                \n                    \n                    button{\n                      margin-top: 20px;\n                      padding: 10px;\n                      background-color:  #c7a17a;\n                      border: none;\n                      border-radius: 5px;\n\n                    }\n                  " }} />
                <div className="Historial-ventas">
                    <h1>Historial de Compras</h1>
                    <div style={{ overflowX: 'auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se insertarán dinámicamente los datos del historial */}
                                <tr>
                                    <td>2023-06-01</td>
                                    <td>Anillo de Plata</td>
                                    <td>2</td>
                                    <td>50</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>2023-06-02</td>
                                    <td>Collar de Oro</td>
                                    <td>1</td>
                                    <td>200</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>2023-06-03</td>
                                    <td>Pulsera de Diamantes</td>
                                    <td>3</td>
                                    <td>300</td>
                                    <td>900</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btn-table">
                        <button onClick={exportToPDF}>Exportar a PDF</button>
                        <button onClick={exportToCSV}>Exportar a CSV</button>
                    </div>
                </div>
            </div>
            <div className="coments" id="coments">
                <h2 className="heading-1"><i className="bx bx-detail icon"> Historial de comentarios</i></h2>
                <section className="testimonios">
                    <div className="wrapper--edit">
                        <div className="box">
                            <i className="fas fa-quote-left quote" />
                            <p>La joyería de JoyasKogi es una obra de arte. Me encanta cómo combinan los elementos naturales con las hojas metalizadas para crear diseños únicos y hermosos. Además, poder personalizar mis joyas hace que sean aún más especiales. Si buscas piezas únicas y de calidad, definitivamente deberías echar un vistazo a JoyasKogi</p>
                            <div className="content">
                                <div className="info">
                                    <div className="name">Daniel Ramirez</div>
                                    <div className="job">Artista | Pintor</div>
                                    <div className="stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="images/Persona10.jpg" alt />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <i className="fas fa-quote-left quote" />
                            <p>Estoy enamorada de mis joyas de la joyeria JoyasKogi. El hecho de que utilicen materiales naturales y hojas metalizadas les da un encanto único. Cada pieza es verdaderamente especial y refleja mi estilo y personalidad. ¡Recomendaría JoyasKogi a cualquiera que busque joyería artesanal y personalizada!</p>
                            <div className="content">
                                <div className="info">
                                    <div className="name">Daniel Ramirez</div>
                                    <div className="job">Artista | Pintor</div>
                                    <div className="stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="images/Persona10.jpg" alt />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <i className="fas fa-quote-left  quote" />
                            <p>JoyasKogi es mi tienda de joyería favorita. Su enfoque en los materiales naturales y las hojas metalizadas realmente las distingue de otras joyerías. Poder personalizar mis joyas me permite expresar mi estilo único. La calidad y la atención al detalle en cada pieza son increíbles. ¡No puedo tener suficiente de las joyas de JoyasKogi!</p>
                            <div className="content">
                                <div className="info">
                                    <div className="name">Daniel Ramirez</div>
                                    <div className="job">Artista | Pintor</div>
                                    <div className="stars">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                    </div>
                                </div>
                                <div className="image">
                                    <img src="images/Persona10.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="garantias" id="garantias">
                <div className="garantias" id="pedidos">
                    <div className="compras" id="compras">
                        <h2 className="heading-1"><i className="bx bx-calendar icon"> Calendario de garantias</i></h2>
                        <div className="calendar">
                            <div className="month-selector">
                                <label htmlFor="month">Selecciona un mes:</label>
                                <input type="month" id="month" name="month" value={selectedMonth} onChange={handleMonthChange} />
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Domingo</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                        <th>Miércoles</th>
                                        <th>Jueves</th>
                                        <th>Viernes</th>
                                        <th>Sábado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {generateCalendar(selectedMonth.split('-')[0], selectedMonth.split('-')[1] - 1)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="joya" id="joya">
                <h2 className="heading-1">
                    <i className="bx bx-edit-alt icon"> Personaliza tu joya</i>
                </h2>
                <section className="container--modific">

                    <form action="#" className="form">
                        <div className="input-box">
                            <label>Tipo de joya</label>
                            <input type="text" id="tipoJoya" placeholder="Ingrese el tipo de joya" required />
                        </div>
                        <div className="input-box">
                            <label>Ingrese el tamaño en CM</label>
                            <input type="number" id="tamaño" placeholder="Ingrese el tamaño" required />
                        </div>
                        <div className="column">
                            <div className="input-box">
                                <label>Ingrese material extra</label>
                                <input type="number" id="materialExtra" placeholder="Ingrese el material que desee agregar" required />
                            </div>
                            <div className="input-box">
                                <label>Ingrese su dirección</label>
                                <input type="text" id="direccion" placeholder="Enter birth date" required />
                            </div>
                        </div>
                        <div className="gender-box">
                            <h3>Tipo de metal</h3>
                            <div className="column">
                                <div className="select-box">
                                    <select id="tipoMetal">
                                        <option hidden>Selecciona</option>
                                        <option>oro</option>
                                        <option>plata</option>
                                        <option>cobre</option>
                                        <option>platino</option>
                                        <option>aluminio</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-box address">
                                <label>Tipo de piedra</label>
                                <div className="column">
                                    <div className="select-box">
                                        <select id="tipoPiedra">
                                            <option hidden>Selecciona</option>
                                            <option>Esmeralda</option>
                                            <option>Diamante</option>
                                            <option>Rubi</option>
                                            <option>zafiros</option>
                                            <option>Rubi</option>
                                            <option>Perla</option>
                                        </select>
                                    </div>
                                    <input type="text" id="descripcion" placeholder="Ingrese una descripción" required />
                                </div>
                                <div className="column">
                                    <input type="file" id="imagen" placeholder="Ingrese una imagen descriptiva" required />
                                </div>
                            </div>
                            <button type="button" onClick={handleSave}>Guardar personalización</button>
                        </div>
                    </form>
                </section>
            </div>
            <div class="cita" id="cita">
                <h2 class="heading-1"><i class='bx bx-calendar-plus icon' > Agenda una cita</i></h2>
                <div className="container--profile">

                    <form className='form-agendar-cita' action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" id="nombrePerfil" required />
                                <div className="underline"></div>
                                <label>Nombre</label>
                            </div>
                            <div className="input-data">
                                <input type="text" id="Tipo de Joya" required />
                                <div className="underline"></div>
                                <label>Tipo de Joya</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" id="emailPerfil" required />
                                <div className="underline"></div>
                                <label>Email</label>
                            </div>
                            <div className="input-data">
                                <input type="text" id="telefonoPerfil" required />
                                <div className="underline"></div>
                                <label>Número de teléfono</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-data">
                                <span className="details">Fecha en que desea la cita</span>
                                <input type="Date" placeholder="Ingrese la fecha" required />
                            </div>
                            <div className="input-data">
                                <span className="details">Hora en que desea la cita</span>
                                <input type="time" placeholder="Ingrese la hora" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Limpieza</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Mantenimiento</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Reparación</label>
                            </div>
                        </div>


                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="button" onClick={handleSaveChanges} value="Guardar cambios" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="profil" id="profil">
                <h2 className="heading-1"> <i className='bx bx-cog icon' > Edita los datos de tu perfil </i></h2>
                <div className="container--profile">

                    <form action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" id="nombrePerfil" required />
                                <div className="underline"></div>
                                <label>Nombre</label>
                            </div>
                            <div className="input-data">
                                <input type="text" id="apellidoPerfil" required />
                                <div className="underline"></div>
                                <label>Apellido</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" id="emailPerfil" required />
                                <div className="underline"></div>
                                <label>Email</label>
                            </div>
                            <div className="input-data">
                                <input type="text" id="telefonoPerfil" required />
                                <div className="underline"></div>
                                <label>Número de teléfono</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea id="direccionPerfil" rows="8" cols="80" required></textarea>
                                <br />
                                <div className="underline"></div>
                                <label>Dirección</label>
                                <br />
                            </div>
                        </div>
                        <div className="form-row submit-btn">
                            <div className="input-data">
                                <div className="inner"></div>
                                <input type="button" onClick={handleSaveChanges} value="Guardar cambios" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </section>


    );
}

export default Section;