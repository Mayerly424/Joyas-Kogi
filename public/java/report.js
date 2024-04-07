// Datos reales de las ventas de tu joyería
const misVentas = [
    { fecha: '2023-06-01', producto: 'Anillo de diamantes', cantidad: 2, precio: 500 },
    { fecha: '2023-06-02', producto: 'Collar de perlas', cantidad: 1, precio: 300 },
    { fecha: '2023-06-03', producto: 'Pulsera de plata', cantidad: 4, precio: 150 },
  ];
  
  // Función para generar la tabla de ventas
  function generateSalesTable() {
    const tableBody = document.getElementById('sales-data');
  
    misVentas.forEach(sale => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${sale.fecha}</td>
        <td>${sale.producto}</td>
        <td>${sale.cantidad}</td>
        <td>${sale.precio}</td>
        <td>${sale.cantidad * sale.precio}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  
  
  
  // Función para exportar los datos a un archivo CSV
  function exportToCSV() {
    const csvContent = 'data:text/csv;charset=utf-8,';
    const rows = document.querySelectorAll('#sales-data tr');
  
    rows.forEach(row => {
      const rowData = Array.from(row.cells).map(cell => cell.innerText);
      const csvRow = rowData.join(',');
      csvContent += csvRow + '\n';
    });
  
    const encodedURI = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedURI);
    link.setAttribute('download', 'reporte_ventas.csv');
    document.body.appendChild(link);
    link.click();
  }
  
  // Generar la tabla de ventas al cargar la página
  window.onload = function() {
    generateSalesTable();
  };


  // Función para exportar los datos a un archivo PDF
function exportToPDF() {
    const doc = new jsPDF();
    const rows = document.querySelectorAll('#sales-data tr');
    
    const data = [];
    rows.forEach(row => {
      const rowData = Array.from(row.cells).map(cell => cell.innerText);
      data.push(rowData);
    });
    
    const header = ['Fecha', 'Producto', 'Cantidad', 'Precio', 'Total'];
    
    doc.autoTable({
      head: [header],
      body: data,
    });
    
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'reporte_ventas.pdf';
    link.target = '_blank';
    link.click();
  }