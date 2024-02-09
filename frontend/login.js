function limpiarCamposRegistroCliente() {
    document.getElementById('nombre').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('email').value = '';
    document.getElementById('contrasena').value = '';
}

function registrarCliente() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var cedula = document.getElementById('cedula').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;

    fetch('http://localhost:3000/insertar_cliente', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, cedula, email, contrasena }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        console.log('Cliente guardado exitosamente:', data);
        limpiarCamposRegistroCliente(); // Limpia los campos del formulario después de registrar
    })
    .catch(error => console.error('Error al guardar cliente:', error));
}
function verificarCredenciales() {
    // Valores predefinidos
    const usuarioPredefinido = 'admin';
    const contrasenaPredefinida = 'admin';

    // Obtener los valores del formulario
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    // Verificar las credenciales
    if (usuario === usuarioPredefinido && contrasena === contrasenaPredefinida) {
        // Redirigir a un nuevo archivo HTML (puedes cambiar 'nuevoArchivo.html' por el nombre de tu archivo)
        window.location.href = 'index_admin.html';
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}