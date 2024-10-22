function esEmailValido(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


document.getElementById('personaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const email = document.getElementById('email').value.trim();

    ocultarErrores();

    let esValido = true;

    
    if (nombre === "") {
        document.getElementById('errorNombre').style.display = 'block';
        esValido = false;
    }
    if (edad === "") {
        document.getElementById('errorEdad').style.display = 'block';
        esValido = false;
    }

    if (email === "") {
        document.getElementById('errorEmail').style.display = 'block';
        esValido = false;
    } else if (!esEmailValido(email)) {
        document.getElementById('errorEmailInvalido').style.display = 'block';
        esValido = false;
    }
    if (esValido) {
        agregarPersona(nombre, edad, email);
        limpiarFormulario();
    }
});

function ocultarErrores() {
    document.getElementById('errorNombre').style.display = 'none';
    document.getElementById('errorEdad').style.display = 'none';
    document.getElementById('errorEmail').style.display = 'none';
    document.getElementById('errorEmailInvalido').style.display = 'none';
}


function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('email').value = '';
}

function agregarPersona(nombre, edad, email) {
    const tabla = document.getElementById('tablaPersonas').querySelector('tbody');
    const nuevaFila = document.createElement('tr');

   
    const celdaEliminar = document.createElement('td');
    const celdaNombre = document.createElement('td');
    const celdaEdad = document.createElement('td');
    const celdaEmail = document.createElement('td');

    celdaNombre.textContent = nombre;
    celdaEdad.textContent = edad;
    celdaEmail.textContent = email;

    
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('eliminar');
    botonEliminar.addEventListener('click', function () {
    nuevaFila.remove(); 
    });

    celdaEliminar.appendChild(botonEliminar);

    nuevaFila.appendChild(celdaEliminar);
    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaEdad);
    nuevaFila.appendChild(celdaEmail);
    tabla.appendChild(nuevaFila);
}


