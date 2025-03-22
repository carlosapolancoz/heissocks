$(document).ready(function() {   
   $('#carac').click(function(){
        $('#carac').text("Caracteristicas"); 
        $('#color').html("<img src='img/iconos/brocha.png'>"); 
        $('#talla').html("<img src='img/iconos/media.png'>"); 
        $('#uso').html("<img src='img/iconos/check.png'>"); 
        $('#tec').html("<img src='img/iconos/tec.png'>"); 
        $('#cont').attr('src' , 'img/carousel_productos/Work_Dry_tech/caracteristicas.jpg');
    });
    $('#color').click(function(){
        $('#carac').html("<img src='img/iconos/estrella.png'>"); 
        $('#color').text("Colores"); 
        $('#talla').html("<img src='img/iconos/media.png'>"); 
        $('#uso').html("<img src='img/iconos/check.png'>"); 
        $('#tec').html("<img src='img/iconos/tec.png'>"); 
        $('#cont').attr('src' , 'img/carousel_productos/Work_Dry_tech/colores.jpg');
    });
    $('#talla').click(function(){
        $('#carac').html("<img src='img/iconos/estrella.png'>"); 
        $('#color').html("<img src='img/iconos/brocha.png'>"); 
        $('#talla').text("Tallas"); 
        $('#uso').html("<img src='img/iconos/check.png'>"); 
        $('#tec').html("<img src='img/iconos/tec.png'>"); 
        $('#cont').attr('src' , 'img/carousel_productos/Work_Dry_tech/tallas.jpg');
    });
    $('#uso').click(function(){
        $('#carac').html("<img src='img/iconos/estrella.png'>"); 
        $('#color').html("<img src='img/iconos/brocha.png'>"); 
        $('#talla').html("<img src='img/iconos/media.png'>"); 
        $('#uso').text("Usos"); 
        $('#tec').html("<img src='img/iconos/tec.png'>"); 
        $('#cont').attr('src' , 'img/carousel_productos/Work_Dry_tech/usos.jpg');
    });
    $('#tec').click(function(){
        $('#carac').html("<img src='img/iconos/estrella.png'>"); 
        $('#color').html("<img src='img/iconos/brocha.png'>"); 
        $('#talla').html("<img src='img/iconos/media.png'>"); 
        $('#uso').html("<img src='img/iconos/check.png'>"); 
        $('#tec').text("Tecnologia"); 
        $('#cont').attr('src' , 'img/carousel_productos/Work_Dry_tech/tecnologia.jpg');
    });
    $('#caracmix').click(function(){
        $('#caracmix').text("Caracteristicas"); 
        $('#colormix').html("<img src='img/iconos/brocha.png'>"); 
        $('#tallamix').html("<img src='img/iconos/media.png'>"); 
        $('#usomix').html("<img src='img/iconos/check.png'>");         
        $('#cont').attr('src' , 'img/carousel_productos/Color_mix/caracteristicas.jpg');
    });
    $('#colormix').click(function(){
        $('#caracmix').html("<img src='img/iconos/estrella.png'>"); 
        $('#colormix').text("Colores"); 
        $('#tallamix').html("<img src='img/iconos/media.png'>"); 
        $('#usomix').html("<img src='img/iconos/check.png'>");         
        $('#cont').attr('src' , 'img/carousel_productos/Color_mix/colores.jpg');
    });
    $('#tallamix').click(function(){
        $('#caracmix').html("<img src='img/iconos/estrella.png'>"); 
        $('#colormix').html("<img src='img/iconos/brocha.png'>"); 
        $('#tallamix').text("tallas"); 
        $('#usomix').html("<img src='img/iconos/check.png'>");         
        $('#cont').attr('src' , 'img/carousel_productos/Color_mix/tallas.jpg');
    });
    $('#usomix').click(function(){
        $('#caracmix').html("<img src='img/iconos/estrella.png'>"); 
        $('#colormix').html("<img src='img/iconos/brocha.png'>"); 
        $('#tallamix').html("<img src='img/iconos/media.png'>"); 
        $('#usomix').text("Usos");         
        $('#cont').attr('src' , 'img/carousel_productos/Color_mix/usos.jpg');
    });
    $('#caracwork').click(function(){
        $('#caracwork').text("Caracteristicas"); 
        $('#colorwork').html("<img src='img/iconos/brocha.png'>"); 
        $('#tallawork').html("<img src='img/iconos/media.png'>"); 
        $('#usowork').html("<img src='img/iconos/check.png'>");         
        $('#cont').attr('src' , 'img/carousel_productos/work_classic/caracteristicas.jpg');
    });
    $('#colorwork').click(function(){
        $('#caracwork').html("<img src='img/iconos/estrella.png'>"); 
        $('#colorwork').text("Colores"); 
        $('#tallawork').html("<img src='img/iconos/media.png'>"); 
        $('#usowork').html("<img src='img/iconos/check.png'>");         
        $('#cont').attr('src' , 'img/carousel_productos/work_classic/colores.jpg');
    });
    $('#tallawork').click(function(){
        $('#caracwork').html("<img src='img/iconos/estrella.png'>"); 
        $('#colorwork').html("<img src='img/iconos/brocha.png'>"); 
        $('#tallawork').text("tallas"); 
        $('#usowork').html("<img src='img/iconos/check.png'>");         
        $('#cont').attr('src' , 'img/carousel_productos/work_classic/tallas.jpg');
    });
    $('#usowork').click(function(){
        $('#caracwork').html("<img src='img/iconos/estrella.png'>"); 
        $('#colorwork').html("<img src='img/iconos/brocha.png'>"); 
        $('#tallawork').html("<img src='img/iconos/media.png'>"); 
        $('#usowork').text("Usos");         
        $('#cont').attr('src' , 'img/carousel_productos/work_classic/usos.jpg');
    });
});

    
    
   