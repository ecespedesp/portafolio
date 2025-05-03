document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const respuesta = document.getElementById("respuesta");
  
    if (nombre === "" || email === "" || mensaje === "") {
      respuesta.textContent = "Por favor llena todos los campos.";
      respuesta.style.color = "yellow";
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      respuesta.textContent = "Correo inválido.";
      respuesta.style.color = "red";
      return;
    }
  
    respuesta.textContent = "¡Mensaje enviado con éxito!";
    respuesta.style.color = "lightgreen";
  
    // Aquí podrías limpiar el formulario si quieres
    document.getElementById("form-contacto").reset();
  });
  