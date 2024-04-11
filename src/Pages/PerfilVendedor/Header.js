import React, { useState } from "react";
import jsPDF from "jspdf";


function Header() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [notes, setNotes] = useState({});
  const [nombre, setNombre] = useState('');
  const [tipoJoya, setTipoJoya] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaCita, setFechaCita] = useState('');
  const [horaCita, setHoraCita] = useState('');

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

  // Función para manejar la acción de agendar cita
  const handleSchedule = () => {
    // Verificar si los campos requeridos están vacíos
    if (!nombre || !tipoJoya || !email || !telefono || !fechaCita || !horaCita) {
      // Mostrar alerta si algún campo está vacío
      alert("Por favor, complete todos los campos del formulario.");
      return; // Detener la ejecución de la función
    }
    // Resto de tu lógica para agendar la cita
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
    <section className="home">
      {/* navbar */}
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
      <div className="ventas" id="ventas">
        <h2 className="heading-1">
          {" "}
          <i className="bx bx-cart-alt icon"> Historial de ventas</i>
        </h2>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                   /* Estilos CSS */
                   
                   .Historial-ventas {
                     max-width: 800px;
                     margin: 0 auto;
                   }
               
                   .historial-ventas h1 {
                     text-align: center;
                   }
               
                   .historial-ventas table {
                     width: 100%;
                     border-collapse: collapse;
                     overflow-x: auto;
                     margin: auto;
                   }
               
                   .Historial-ventas tr, th, td {
                     padding: 8px;
                     text-align: left;
                     border-bottom: 1px solid #c7a17a;
                   }
               
                   
                   button{
                     margin-top: 20px;
                     padding: 10px;
                     background-color:  #c7a17a;
                     border: none;
                     border-radius: 5px;
                   }
                 `,
          }}
        />
        <div className="Historial-ventas">
          <h1>Historial de ventas</h1>
          <div style={{ overflowX: "auto" }}>
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
      <div className="citas" id="citas">
  <h2 className="heading-1"><i className="bx bx-detail icon">Citas por confirmar</i></h2>
  <section className="main">
    <div className="profile-card">
      <div className="image">
        <img src="images/Persona8.jpg" alt className="profile-pic" />
      </div>
      <div className="data">
        <h2>Olivia Gomez</h2>
        <span>olivia@gmail.com</span>
      </div>
      <div className="row">
        <div className="info">
          <h3>Fecha</h3>
          <span>21-06</span>
        </div>
        <div className="info">
          <h3>Hora</h3>
          <span>11:00 am</span>
        </div>
        <div className="info">
        <h3>Servicio</h3>
                          <span>Limpieza</span>
                        </div>
                      </div>
                      <div class="buttons">
                        <a href="#" class="btn">Aceptar</a>
                        <a href="#" class="btn">Rechazar</a>
                      </div>
                    </div>
                  </section>
            </div>
            
            <div className="garantias" id="pedidos">
        <h2 className="heading-1"><i className="bx bx-calendar icon"> Calendario de pedidos</i></h2>
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

      <div class="cita" id="cita">
  <h2 class="heading-1"><i class='bx bx-calendar-plus icon'>Agenda una cita</i></h2>
  <div class="container">
    <div class="title">Agenda tu cita</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Nombre completo</span>
            <input type="text" name="nombre" placeholder="Ingrese su nombre completo" required />
          </div>
          <div class="input-box">
            <span class="details">Tipo de joya</span>
            <input type="text" name="tipoJoya" placeholder="Ingrese el tipo de joya" required />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" name="email" placeholder="Ingrese su email" required />
          </div>
          <div class="input-box">
            <span class="details">Numero de teléfono</span>
            <input type="text" name="telefono" placeholder="Ingrese su numero de telefono" required />
          </div>
          <div class="input-box">
            <span class="details">Fecha en que desea la cita</span>
            <input type="date" name="fechaCita" placeholder="Ingrese la fecha" required />
          </div>
          <div class="input-box">
            <span class="details">Hora en que desea la cita</span>
            <input type="time" name="horaCita" placeholder="Ingrese la hora" required />
          </div>
        </div>
        <div class="gender-details">
    <span class="gender-title">Tipo de servicio</span>
    <div class="category">
        <input type="radio" name="tipoServicio" id="dot-1" />
        <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Limpieza</span>
        </label>
        <input type="radio" name="tipoServicio" id="dot-2" />
        <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Mantenimiento</span>
        </label>
        <input type="radio" name="tipoServicio" id="dot-3" />
        <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Reparación</span>
        </label>
    </div>
</div>
        <div class="button">
        <input type="button" onClick={handleSchedule} value="Agendar cita" />
        </div>
      </form>
    </div>
  </div>
</div>
    
      


  <div className="profil" id="profil">
    <h2 className="heading-1"> <i className="bx bx-cog icon"> Edita los datos de tu perfil </i></h2>
    <div className="container--profile">
      <div className="text">Edita tus datos</div>
      <form action="#">
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor>Nombre</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor>Apellido</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor>Email</label>
          </div>
          <div className="input-data">
            <input type="text" required />
            <div className="underline" />
            <label htmlFor>Numero de telefono</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows={8} cols={80} required defaultValue={""} />
            <br />
            <div className="underline" />
            <label htmlFor>Dirección</label>
            <br />
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner" />
                <input type="submit" id="VerAl" defaultValue="Guardar cambios" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>


</section>
         
  );
}

export default Header;

