$(function () {
  $("#desc").click(function () {
    $("#desc").children("img").css({ display: "none" });
    $("#desc").children("p").css({ display: "contents" });
    $("#carac").html(
      "<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"
    );
    $("#color").html("<img src='img/iconos/brocha.png'><p>Colores</p>");
    $("#talla").html("<img src='img/iconos/media.png'><p>Tallas</p>");
    $("#uso").html("<img src='img/iconos/check.png'><p>Usos</p>");
    $("#tec").html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
  });
  $("#carac").click(function () {
    $("#desc").html("<img src='img/iconos/descripcion.png'><p>Descripción</p>");
    $("#carac").children("img").css({ display: "none" });
    $("#carac").children("p").css({ display: "contents" });
    $("#color").html("<img src='img/iconos/brocha.png'><p>Colores</p>");
    $("#talla").html("<img src='img/iconos/media.png'><p>Tallas</p>");
    $("#uso").html("<img src='img/iconos/check.png'><p>Usos</p>");
    $("#tec").html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
  });
  $("#color").click(function () {
    $("#desc").html("<img src='img/iconos/descripcion.png'><p>Descripción</p>");
    $("#carac").html(
      "<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"
    );
    $("#color").children("img").css({ display: "none" });
    $("#color").children("p").css({ display: "contents" });
    $("#talla").html("<img src='img/iconos/media.png'><p>Tallas</p>");
    $("#uso").html("<img src='img/iconos/check.png'><p>Usos</p>");
    $("#tec").html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
  });
  $("#talla").click(function () {
    $("#desc").html("<img src='img/iconos/descripcion.png'><p>Descripción</p>");
    $("#carac").html(
      "<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"
    );
    $("#color").html("<img src='img/iconos/brocha.png'><p>Colores</p>");
    $("#talla").children("img").css({ display: "none" });
    $("#talla").children("p").css({ display: "contents" });
    $("#uso").html("<img src='img/iconos/check.png'><p>Usos</p>");
    $("#tec").html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
  });
  $("#uso").click(function () {
    $("#desc").html("<img src='img/iconos/descripcion.png'><p>Descripción</p>");
    $("#carac").html(
      "<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"
    );
    $("#color").html("<img src='img/iconos/brocha.png'><p>Colores</p>");
    $("#talla").html("<img src='img/iconos/media.png'><p>Tallas</p>");
    $("#uso").children("img").css({ display: "none" });
    $("#uso").children("p").css({ display: "contents" });
    $("#tec").html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
  });
  $("#tec").click(function () {
    $("#desc").html("<img src='img/iconos/descripcion.png'><p>Descripción</p>");
    $("#carac").html(
      "<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"
    );
    $("#color").html("<img src='img/iconos/brocha.png'><p>Colores</p>");
    $("#talla").html("<img src='img/iconos/media.png'><p>Tallas</p>");
    $("#uso").html("<img src='img/iconos/check.png'><p>Usos</p>");
    $("#tec").children("img").css({ display: "none" });
    $("#tec").children("p").css({ display: "contents" });
  });

  // let modalheiss = $('#modal-video-heiss')
  // modalheiss.modal('show')
  //
  // modalheiss.on('hide.bs.modal', function (event) {
  //     document.getElementById('video-heiss').pause()
  // });

  // PARA HACER CLIC EN EL LOGO + Y MOSTRAR LOGO
  // $('#dropdown-marcas').on('click',function (){
  //     $('.item-logo-marca').toggle('slow')
  // })

  // $('#dropdown-marcas').hover(function(){
  //     $('.item-logo-marca').toggle('slow')
  // })

  let fotos = {
    altos: {
      imgs: [
        "descripcion.jpg",
        "caracteristicas.jpg",
        "colores.jpg",
        "tallas.jpg",
        "usos.jpg",
        "tecnologia.jpg",
      ],
    },
    medios: {
      imgs: [
        "descripcion.jpg",
        "caracteristicas.jpg",
        "color.jpg",
        "tallas.jpg",
        "usos.jpg",
        "tecnologia.jpg",
      ],
    },
    cortos: {
      imgs: [
        "descripcion.jpg",
        "caracteriscas.jpg",
        "colores.jpg",
        "talla.jpg",
        "usos.jpg",
        "tecnologia.jpg",
      ],
    },
  };
  let carousellineas = $(
    "#carousellinedetalles>.carousel-inner>.linea-content-img"
  );
  let conta = 0;
  let boton1 = $("#btn_img_altas").on("click", function () {
    for (const carousellinea of carousellineas) {
      // console.log(carousellinea.childNodes[1])
      carousellinea.childNodes[1].setAttribute(
        "src",
        "img/carousel_productos/Sport_Dry_tech/caña%20alta/" +
          fotos.altos.imgs[conta]
      );
      conta++;
    }
    conta = 0;
  });
  let boton2 = $("#btn_img_tobillera").on("click", function () {
    for (const carousellinea of carousellineas) {
      // console.log(carousellinea.childNodes[1])
      carousellinea.childNodes[1].setAttribute(
        "src",
        "img/carousel_productos/Sport_Dry_tech/tobillera/" +
          fotos.medios.imgs[conta]
      );
      conta++;
    }
    conta = 0;
  });
  let boton3 = $("#btn_img_corta").on("click", function () {
    for (const carousellinea of carousellineas) {
      // console.log(carousellinea.childNodes[1])
      carousellinea.childNodes[1].setAttribute(
        "src",
        "img/carousel_productos/Sport_Dry_tech/corta/" +
          fotos.cortos.imgs[conta]
      );
      conta++;
    }
    conta = 0;
  });

  // $('.card-img-top').on('mouseenter', function () {
  //     fotoanterior = $(this).attr('src')
  //     $(this).attr('src', 'img/FOTOS/M blancas.jpg')
  //
  // })
  // $('.card-img-top').on('mouseout', function () {
  //     $(this).attr('src', fotoanterior)
  // })

  // let secondarySlider = new Splide('#secondary-slider', {
  //     fixedWidth: 100,
  //     height: 100,
  //     gap: 10,
  //     cover: true,
  //     isNavigation: true,
  //     focus: 'center',
  //     pagination: false,
  //     breakpoints: {
  //         '400': {
  //             fixedWidth: 60,
  //             height: 60,
  //         }
  //     },
  // }).mount();
  // let primarySlider = new Splide('#primary-slider', {
  //     fixedWidth: 400,
  //     height: 400,
  //     type: 'fade',
  //     heightRatio: 0.5,
  //     pagination: false,
  //     arrows: false,
  //     cover: true,
  //     breakpoints: {
  //         '400': {
  //             fixedWidth: 320,
  //             height: 320,
  //         }
  //     }
  // }); // do not call mount() here.
  //
  // primarySlider.sync(secondarySlider).mount();

  // panning.set('speedX',-30)

  // Update the animation speed & direction based on a cursor position
  //     element.addEventListener('mousemove', function (event) {
  //         console.log(event.pageX - offset.left - panning.width / 2)
  //         panning.set('speedX', event.pageX - offset.left - panning.width / 2);
  //         panning.set('speedY', event.pageY - offset.top - panning.height / 2);
  //     });

  // $('#btn_cotizar').on('click',function(){
  //     $('#modal_cotizar').modal();
  // });

    $("#scroll_icon").click(function()
	{
		jQuery('html,body').animate({scrollTop:0},2000);
	})
});