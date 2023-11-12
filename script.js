function cargarDatos() {
    // Crear una instancia del objeto XMLHttpRequest
    var xhttp = new XMLHttpRequest();

    // Configurar la solicitud con el método HTTP y la URL del servidor
    xhttp.open("GET", "datos.txt", true);

    // Definir la función que se ejecutará cuando la solicitud se complete
    xhttp.onreadystatechange = function () {
        // Verificar si la solicitud se completó con éxito (estado 4) y el código de estado HTTP es 200 (OK)
        if (this.readyState == 4 && this.status == 200) {
            // Actualizar el contenido del contenedor con los datos recibidos del servidor
            document.getElementById("datos-container").innerHTML = this.responseText;
        }
    };

    // Enviar la solicitud al servidor
    xhttp.send();
}
