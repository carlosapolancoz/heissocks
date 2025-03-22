$(document).ready(function () {
  $("#btnreclamo").click(function () {
    var errores = "";

    // Validado Establecimiento ==============================
    if ($("#establecimiento").val() == "") {
      errores += "<p>Escriba un establecimiento</p>";
      $("#establecimiento").css("border-bottom-color", "#F14B4B");
    } else {
      $("#establecimiento").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Nombre ==============================
    if ($("#nombrecliente").val() == "") {
      errores += "<p>Escriba su nombre completo</p>";
      $("#nombrecliente").css("border-bottom-color", "#F14B4B");
    } else {
      $("#nombrecliente").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Apellido paterno ==============================
    if ($("#apellidopaterno").val() == "") {
      errores += "<p>Escriba su apellido paterno</p>";
      $("#apellidopaterno").css("border-bottom-color", "#F14B4B");
    } else {
      $("#apellidopaterno").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Apellido materno ==============================
    if ($("#apellidomaterno").val() == "") {
      errores += "<p>Escriba su apellido materno</p>";
      $("#apellidomaterno").css("border-bottom-color", "#F14B4B");
    } else {
      $("#apellidomaterno").css("border-bottom-color", "#d1d1d1");
    }

    // Validado dirección ==============================
    if ($("#direccioncliente").val() == "") {
      errores += "<p>Escriba su dirección</p>";
      $("#direccioncliente").css("border-bottom-color", "#F14B4B");
    } else {
      $("#direccioncliente").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Tipo de documento ==============================
    if ($("#tipodocumento").val() == "") {
      errores += "<p>Seleccione un tipo de documento</p>";
      $("#tipodocumento").css("border-bottom-color", "#F14B4B");
    } else {
      $("#tipodocumento").css("border-bottom-color", "#d1d1d1");
    }

    // Validado número de documento ==============================
    if ($("#documentoidentidad").val() == "") {
      errores += "<p>Dígite su número de documento</p>";
      $("#documentoidentidad").css("border-bottom-color", "#F14B4B");
    } else {
      $("#documentoidentidad").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Telefono ==============================
    if ($("#telefonocliente").val() == "") {
      errores += "<p>Dígite su número de telefono</p>";
      $("#telefonocliente").css("border-bottom-color", "#F14B4B");
    } else {
      $("#telefonocliente").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Correo ==============================
    if ($("#emailcliente").val() == "") {
      errores += "<p>Escriba su correo electrónico</p>";
      $("#emailcliente").css("border-bottom-color", "#F14B4B");
    } else {
      $("#emailcliente").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Edad ==============================
    if ($("#edadcliente").val() == "") {
      errores += "<p>coloque su edad</p>";
      $("#edadcliente").css("border-bottom-color", "#F14B4B");
    } else {
      $("#edadcliente").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Tipo de bien ==============================
    if ($("#tipo-compra").val() == "") {
      errores += "<p>Elija un tipo</p>";
      $("#tipo-compra").css("border-bottom-color", "#F14B4B");
    } else {
      $("#tipo-compra").css("border-bottom-color", "#d1d1d1");
    }

    // Validado moneda ==============================
    if ($("#tipomoneda").val() == "") {
      errores += "<p>Selecione una moneda</p>";
      $("#tipomoneda").css("border-bottom-color", "#F14B4B");
    } else {
      $("#tipomoneda").css("border-bottom-color", "#d1d1d1");
    }

    // Validado importe==============================
    if ($("#importecompra").val() == "") {
      errores += "<p>Escriba la cantidad de importe</p>";
      $("#importecompra").css("border-bottom-color", "#F14B4B");
    } else {
      $("#importecompra").css("border-bottom-color", "#d1d1d1");
    }

    // Validado descripción ==============================
    if ($("#descripcionreclamo").val() == "") {
      errores += "<p>Escriba sobre el producto</p>";
      $("#descripcionreclamo").css("border-bottom-color", "#F14B4B");
    } else {
      $("#descripcionreclamo").css("border-bottom-color", "#d1d1d1");
    }

    // Validado reclamo/queja ==============================
    if ($("#reclamo-queja").val() == "") {
      errores += "<p>Seleccione un tipo</p>";
      $("#reclamo-queja").css("border-bottom-color", "#F14B4B");
    } else {
      $("#reclamo-queja").css("border-bottom-color", "#d1d1d1");
    }
    
    // Validado detalle reclamo ==============================
    if ($("#detallereclamo").val() == "") {
      errores += "<p>Escriba sobre el reclamo seleccionado</p>";
      $("#detallereclamo").css("border-bottom-color", "#F14B4B");
    } else {
      $("#detallereclamo").css("border-bottom-color", "#d1d1d1");
    }

    // Validado detalle pedido ==============================
    if ($("#detallepedido").val() == "") {
      errores += "<p>Escriba sobre el pedido a su reclamo</p>";
      $("#detallepedido").css("border-bottom-color", "#F14B4B");
    } else {
      $("#detallepedido").css("border-bottom-color", "#d1d1d1");
    }

    // ENVIANDO MENSAJE ============================
    // if ((errores == "") == false) {
    //   var mensajeModal =
    //     '<div class="modal_wrap">' +
    //     '<div class="mensaje_modal">' +
    //     "<h3>Errores encontrados</h3>" +
    //     errores +
    //     '<span id="btnClose">Cerrar</span>' +
    //     "</div>" +
    //     "</div>";

    //   $("#body-reclamo").append(mensajeModal);
    // }

    // CERRANDO MODAL ==============================
    // $("#btnClose").click(function () {
    //   $(".modal_wrap").remove();
    // });
  });
});