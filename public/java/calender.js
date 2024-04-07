// Obtener elementos del calendario
var calendar = document.getElementById('calendar');
var monthDropdown = document.getElementById('month-dropdown');
var goButton = document.getElementById('go-button');

// Obtener la fecha actual
var currentDate = new Date();

// Función para obtener el número de días en un mes específico
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Función para agregar ceros al inicio si el número es menor a 10
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

// Función para obtener el día de la semana de una fecha específica
function getWeekday(year, month, day) {
    return new Date(year, month, day).getDay();
}

// Función para mostrar el calendario
function showCalendar(year, month) {
    var firstDay = getWeekday(year, month, 1);
    var daysInMonth = getDaysInMonth(year, month);

    // Limpiar el contenido del calendario
    calendar.innerHTML = '';

    // Agregar días de la semana
    var weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    for (var i = 0; i < weekdays.length; i++) {
        var weekday = document.createElement('div');
        weekday.classList.add('day');
        weekday.textContent = weekdays[i];
        calendar.appendChild(weekday);
    }

    // Agregar días del mes
    for (var i = 0; i < firstDay; i++) {
        var emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
    }

    for (var i = 1; i <= daysInMonth; i++) {
        var day = document.createElement('div');
        day.classList.add('day');
        day.textContent = i;

        var tasksContainer = document.createElement('div');
        tasksContainer.classList.add('tasks');

        // Obtener las tareas almacenadas para este día
        var storedTasks = JSON.parse(localStorage.getItem(year + '-' + addLeadingZero(month + 1) + '-' + addLeadingZero(i))) || [];

        // Agregar las tareas almacenadas al contenedor
        storedTasks.forEach(function(task) {
            var taskElement = document.createElement('div');
            taskElement.classList.add('task');

            var taskCheckbox = document.createElement('input');
            taskCheckbox.type = 'checkbox';

            var taskText = document.createElement('span');
            taskText.textContent = task;

            taskElement.appendChild(taskCheckbox);
            taskElement.appendChild(taskText);
            tasksContainer.appendChild(taskElement);

            // Marcar la tarea como completada al hacer clic en el checkbox
            taskCheckbox.addEventListener('click', function(e) {
                taskText.classList.toggle('completed');
            });
        });

        // Agregar el contenedor de tareas al día
        day.appendChild(tasksContainer);

        // Agregar el evento click para agregar una tarea
        day.addEventListener('click', function(e) {
            var selectedDay = e.target.textContent;
            var taskText = prompt('Ingrese una tarea:');
            if (taskText) {
                var taskElement = document.createElement('div');
                taskElement.classList.add('task');

                var taskCheckbox = document.createElement('input');
                taskCheckbox.type = 'checkbox';

                var taskTextElement = document.createElement('span');
                taskTextElement.textContent = taskText;

                taskElement.appendChild(taskCheckbox);
                taskElement.appendChild(taskTextElement);
                tasksContainer.appendChild(taskElement);

                // Marcar la tarea como completada al hacer clic en el checkbox
                taskCheckbox.addEventListener('click', function(e) {
                    taskTextElement.classList.toggle('completed');
                });

                // Guardar la tarea en el almacenamiento local
                var storedTasks = JSON.parse(localStorage.getItem(year + '-' + addLeadingZero(month + 1) + '-' + addLeadingZero(selectedDay))) || [];
                storedTasks.push(taskText);
                localStorage.setItem(year + '-' + addLeadingZero(month + 1) + '-' + addLeadingZero(selectedDay), JSON.stringify(storedTasks));
            }
        });

        // Agregar el día al calendario
        calendar.appendChild(day);
    }
}

// Mostrar el calendario para el mes actual
showCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Crear opciones para el menú desplegable de meses
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
months.forEach(function(month, index) {
    var option = document.createElement('option');
    option.value = index;
    option.textContent = month;
    monthDropdown.appendChild(option);
});

// Evento click para ir al mes seleccionado
goButton.addEventListener('click', function() {
    var selectedMonth = monthDropdown.value;
    showCalendar(currentDate.getFullYear(), selectedMonth);
});

