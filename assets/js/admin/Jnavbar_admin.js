/**
*
* Jnavbar.js Java Script con la programación para la animación del Navbar.
*
* Autor: Franklim Guerra
* Grupo Intuitivo
*
* Sección: header
*
*/

/*
* active_link: función que permite activar el enfoques del hipervínculo seleccionado en el Navbar
*/
function active_link(link){
    $("#navbarNav a").each(function(){
        $(this).removeClass("active");
    });
    $('#'+link).addClass("active");
}

/* Inicio del Ready */
$(function()
{
    /* Se aplican los estilos según el XML */
    var color_seleccionado1 = $("#color_seleccionado1").val();
    var color_seleccionado2 = $("#color_seleccionado2").val();

    /* Color del Navbar */
    $(".navbar_color").css("background-color", color_seleccionado1);

    /* Color del Link del Navbar activo */
    $(".nav-link.active").css("border-bottom-color", color_seleccionado2);

    /* Color del hover del Link del Navbar activo */
    $(".nav-link").hover(function(){
        $(this).css("color", color_seleccionado2);
        }, function(){
        $(this).css("color", "white");
    });

    /* Color del botón */
    $(".boton-color").css("background-color", color_seleccionado2);
    $(".boton-color-admin").css("background-color", color_seleccionado2);


    /* Al activar el Scroll con un alto de 650px */
    $(window).scroll(function(){
        var alto_navbar = 100;
        var seccion2 = $("#seccion2").offset().top - alto_navbar;
        var seccion3 = $("#seccion3").offset().top - alto_navbar;
        var seccion4 = $("#seccion4").offset().top - alto_navbar;
        var seccion5 = $("#seccion5").offset().top - alto_navbar;
        var seccion6 = $("#seccion6").offset().top - alto_navbar;

        /* Inicio de programación para activar selección del hipervinculo del Navbar */

        if ($(this).scrollTop() < seccion2)
            active_link("link1");
        else
            if ($(this).scrollTop() < seccion3)
                active_link("link2");
            else
                if ($(this).scrollTop() < seccion4)
                    active_link("link3");
                else
                    if ($(this).scrollTop() < seccion5)
                        active_link("link4");
                    else
                        if ($(this).scrollTop() < seccion6)
                            active_link("link5");
                        else
                            active_link("link6");

        /* Fin de programación para activar selección del hipervinculo del Navbar */
        $(".nav-link.active").css("border-bottom-color", color_seleccionado2);
    });

    /**
    * Al desplegar las opciones de la barra de menú en dispositivos
    * de resolución menor a 991px de ancho
    */
    $("#barras").on("click", function(){
        if($(".navbar").height() < 200)
            $('.navbar_color').addClass("solido");
        else
            $(".navbar_color").removeClass("solido");

    });

    $(window).resize(function() {
      var ventana_ancho = $(window).width();
      if (ventana_ancho > 991){
          $(".navbar_color").removeClass("solido");
      }
      else{
          if($(".navbar").height() > 200)
              $(".navbar_color").addClass("solido");
      }
    });

});
/* Fin del Ready */
