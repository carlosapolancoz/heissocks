$(document).ready(function () {
  $("#btnSend").click(function () {
    var errores = "";

    // Validado Asunto ==============================
    if ($("#asunto_ipt").val() == "") {
      errores += "<p>Elija un asunto</p>";
      $("#asunto_ipt").css("border-bottom-color", "#F14B4B");
    } else {
      $("#asunto_ipt").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Nombre ==============================
    if ($("#names").val() == "") {
      errores += "<p>Escriba un nombre</p>";
      $("#names").css("border-bottom-color", "#F14B4B");
    } else {
      $("#names").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Correo ==============================
    if ($("#email").val() == "") {
      errores += "<p>Ingrese un correo</p>";
      $("#email").css("border-bottom-color", "#F14B4B");
    } else {
      $("#email").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Telefono ==============================
    if ($("#tel").val() == "") {
      errores += "<p>Ingrese su número de celular</p>";
      $("#tel").css("border-bottom-color", "#F14B4B");
    } else {
      $("#tel").css("border-bottom-color", "#d1d1d1");
    }

    // Validado Mensaje ==============================
    if ($("#mensaje").val() == "") {
      errores += "<p>Escriba un mensaje</p>";
      $("#mensaje").css("border-bottom-color", "#F14B4B");
    } else {
      $("#mensaje").css("border-bottom-color", "#d1d1d1");
    }

    // ENVIANDO MENSAJE ============================
    if ((errores == "") == false) {
      var mensajeModal =
        '<div class="modal_wrap">' +
        '<div class="mensaje_modal">' +
        "<h3>Errores encontrados</h3>" +
        errores +
        '<span id="btnClose">Cerrar</span>' +
        "</div>" +
        "</div>";

      $("#correo2, #formventas").append(mensajeModal);
    }

    // CERRANDO MODAL ==============================
    $("#btnClose").click(function () {
      $(".modal_wrap").remove();
    });
  });

  $("#correo1").click(function () {
    $("#correo2").toggle({ display: "contents" });
  });

  $(".close").click(function () {
    $("#correo2").css({ display: "none" });
  });

  $("#mailventas").click(function () {
    $("#rowventas").toggle({ display: "contents" });
  });

  // FUNCION PARA VALIDAR QUE CHECK BOX ESTA MARCADO
  // function marcado(){
  //     if (document.form.termin.checked) {
  //     document.form.submit();
  //          }
  //          else{
  //          alert("Debes esta de acuerdo con la poíticas de privacidad de la página");
  //           document.form.termin.focus();
  //            return false;
  //          }

  //     }
});