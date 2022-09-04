/*login registro */
$(document).ready(function () {
    validarDatosContacto();
});
function validarDatosContacto() {
    $("#form-contacto").submit(function (e) {
        if ($("#nombre-contacto").val() == "") {
            e.preventDefault();
            $("#error-nombre-contacto").fadeIn();
            $("#nombre-contacto").change(function () {
                $("#error-nombre-contacto").fadeOut();
            });
        } else if ($("#email-contacto").val() == "") {
            e.preventDefault();
            $("#error-email-contacto").fadeIn();
            $("#email-contacto").change(function () {
                $("#error-email-contacto").fadeOut();
            });
        } else if ($("#telefono-contacto").val() == "") {
            e.preventDefault();
            $("#error-telefono-contacto").fadeIn();
            $("#telefono-contacto").change(function () {
                $("#error-telefono-contacto").fadeOut();
            });
        } else if ($("#mensaje-contacto").val() == "") {
            e.preventDefault();
            $("#error-mensaje-contacto").fadeIn();
            $("#mensaje-contacto").change(function () {
                $("#error-mensaje-contacto").fadeOut();
            });
        } else {
            e.preventDefault();

            let datosContacto = [];
            datosContacto.push($("#nombre-contacto").val());
            datosContacto.push($("#email-contacto").val());
            datosContacto.push($("#telefono-contacto").val());
            
           let datosContactoJSON = JSON.stringify(datosContacto);
            enviarDatos(datosContactoJSON);
             Swal.fire({
                icon: 'success',
                title: 'Recibimos tus datos',
                text: 'Nos contactaremos a la brevedad',
                confirmButtonColor: "#444444"
            });
           $(".entrada-contacto").val('');
        };
    });
};
function enviarDatos(datos) {
    const URLPOST = "https://jsonplaceholder.typicode.com/posts";
      $.post(URLPOST, datos).done(function(respuesta, estado) {
        console.log(respuesta);
        console.log(estado);
    })
}