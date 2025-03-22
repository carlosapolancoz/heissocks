$(document).ready(function() {
// BOTONENES DEL CARRUCEL DE PRODUCTOS CON JAVASCRIPT

// function cambiar1() {
//     document.getElementById("carac").innerHTML="Caracteristicas";
//     document.getElementById("color").innerHTML="<img src='img/iconos/brocha.png'>";
//     document.getElementById("talla").innerHTML="<img src='img/iconos/media.png'>";    
//     document.getElementById("uso").innerHTML="<img src='img/iconos/check.png'>";
//     document.getElementById("tec").innerHTML="<img src='img/iconos/tec.png'>";
//     document.getElementById("cont").innerHTML="<img src='img/carousel_productos/Work_Dry_tech/caracteristicas.jpg' class='d-block w-100' alt='CALCETÍNES HEISS DRY TECH WORK'>";
// }
// document.getElementById("carac").onclick = function(){
//     cambiar1();
// }

// function cambiar2() {
//     document.getElementById("carac").innerHTML="<img src='img/iconos/estrella.png'>";
//     document.getElementById("color").innerHTML="Colores";
//     document.getElementById("talla").innerHTML="<img src='img/iconos/media.png'>";    
//     document.getElementById("uso").innerHTML="<img src='img/iconos/check.png'>";
//     document.getElementById("tec").innerHTML="<img src='img/iconos/tec.png'>";
//     document.getElementById("cont").innerHTML="<img src='img/carousel_productos/Work_Dry_tech/colores.jpg' class='d-block w-100' alt='CALCETÍNES HEISS DRY TECH WORK'>";
// }
// document.getElementById("color").onclick = function(){
//     cambiar2();
// }

// function cambiar3() {
//     document.getElementById("carac").innerHTML="<img src='img/iconos/estrella.png'>";
//     document.getElementById("color").innerHTML="<img src='img/iconos/brocha.png'>";
//     document.getElementById("talla").innerHTML="Tallas";    
//     document.getElementById("uso").innerHTML="<img src='img/iconos/check.png'>";
//     document.getElementById("tec").innerHTML="<img src='img/iconos/tec.png'>";
//     document.getElementById("cont").innerHTML="<img src='img/carousel_productos/Work_Dry_tech/tallas.jpg' class='d-block w-100' alt='CALCETÍNES HEISS DRY TECH WORK'>";
// }
// document.getElementById("talla").onclick = function(){
//     cambiar3();
// }

// function cambiar4() {
//     document.getElementById("carac").innerHTML="<img src='img/iconos/estrella.png'>";
//     document.getElementById("color").innerHTML="<img src='img/iconos/brocha.png'>";
//     document.getElementById("talla").innerHTML="<img src='img/iconos/media.png'>";    
//     document.getElementById("uso").innerHTML="Usos";
//     document.getElementById("tec").innerHTML="<img src='img/iconos/tec.png'>";
//     document.getElementById("cont").innerHTML="<img src='img/carousel_productos/Work_Dry_tech/usos.jpg' class='d-block w-100' alt='CALCETÍNES HEISS DRY TECH WORK'>";
// }
// document.getElementById("uso").onclick = function(){
//     cambiar4();
// }

// function cambiar5() {
//     document.getElementById("carac").innerHTML="<img src='img/iconos/estrella.png'>";
//     document.getElementById("color").innerHTML="<img src='img/iconos/brocha.png'>";
//     document.getElementById("talla").innerHTML="<img src='img/iconos/media.png'>";    
//     document.getElementById("uso").innerHTML="<img src='img/iconos/check.png'>";
//     document.getElementById("tec").innerHTML="Tecnologia";
//     document.getElementById("cont").innerHTML="<img src='img/carousel_productos/Work_Dry_tech/tecnologia.jpg' class='d-block w-100' alt='CALCETÍNES HEISS DRY TECH WORK'>";
// }
// document.getElementById("tec").onclick = function(){
//     cambiar5();
// }

// NUEVOS BOTONES DEL CARRUCEL CON JQUERY

$('#carac').click(function(){
    $('#carac').children('img').css({"display":"none"}); 
    $('#carac').children('p').css({"display":"contents"});
    $('#color').html("<img src='img/iconos/brocha.png'><p>Colores</p>"); 
    $('#talla').html("<img src='img/iconos/media.png'><p>Tallas</p>"); 
    $('#uso').html("<img src='img/iconos/check.png'><p>Usos</p>"); 
    $('#tec').html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
    $('#usx').html("<img src='img/iconos/unisex.png'><p>Unisex</p>"); 
 

});
$('#color').click(function(){
    $('#carac').html("<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"); 
    $('#color').children('img').css({"display":"none"}); 
    $('#color').children('p').css({"display":"contents"});
    $('#talla').html("<img src='img/iconos/media.png'><p>Tallas</p>"); 
    $('#uso').html("<img src='img/iconos/check.png'><p>Usos</p>"); 
    $('#tec').html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
    $('#usx').html("<img src='img/iconos/unisex.png'><p>Unisex</p>"); 
  

});
$('#talla').click(function(){
    $('#carac').html("<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"); 
    $('#color').html("<img src='img/iconos/brocha.png'><p>Colores</p>"); 
    $('#talla').children('img').css({"display":"none"}); 
    $('#talla').children('p').css({"display":"contents"});    
    $('#uso').html("<img src='img/iconos/check.png'><p>Usos</p>"); 
    $('#tec').html("<img src='img/iconos/tec.png'><p>Tecnología</p>"); 
    $('#usx').html("<img src='img/iconos/unisex.png'><p>Unisex</p>"); 


});
$('#uso').click(function(){
    $('#carac').html("<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"); 
    $('#color').html("<img src='img/iconos/brocha.png'><p>Colores</p>"); 
    $('#talla').html("<img src='img/iconos/media.png'><p>Tallas</p>"); 
    $('#uso').children('img').css({"display":"none"}); 
    $('#uso').children('p').css({"display":"contents"});
    $('#tec').html("<img src='img/iconos/tec.png'><p>Tecnología</p>");
    $('#usx').html("<img src='img/iconos/unisex.png'><p>Unisex</p>"); 
 

});
$('#tec').click(function(){
    $('#carac').html("<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"); 
    $('#color').html("<img src='img/iconos/brocha.png'><p>Colores</p>"); 
    $('#talla').html("<img src='img/iconos/media.png'><p>Tallas</p>"); 
    $('#uso').html("<img src='img/iconos/check.png'><p>Usos</p>"); 
    $('#tec').children('img').css({"display":"none"});
    $('#tec').children('p').css({"display":"contents"});
    $('#usx').html("<img src='img/iconos/unisex.png'><p>Unisex</p>"); 

    
});
$('#usx').click(function(){
    $('#carac').html("<img src='img/iconos/estrella.png'><p>Caracteristicas</p>"); 
    $('#color').html("<img src='img/iconos/brocha.png'><p>Colores</p>"); 
    $('#talla').html("<img src='img/iconos/media.png'><p>Tallas</p>"); 
    $('#uso').html("<img src='img/iconos/check.png'><p>Usos</p>");
    $('#tec').html("<img src='img/iconos/tec.png'><p>Tecnología</p>"); 
    $('#usx').children('img').css({"display":"none"});
    $('#usx').children('p').css({"display":"contents"});
    

    
});

});