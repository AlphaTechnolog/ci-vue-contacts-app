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
    $("#navbarNav span").each(function(){
        $(this).removeClass("active");
    });
    $('#'+link).addClass("active");
}

/*
* active_link: función que permite activar el enfoques del hipervínculo seleccionado en el Navbar
*/

function aparecer_izq(seccion){
    var seccion_aux = $("#"+seccion).offset().top;
    var alto = $("#"+seccion).height();
    var ventana_alto = $(window).height();
    seccion_aux = seccion_aux - alto - ventana_alto + 100;
    if ($(this).scrollTop() > seccion_aux){
        $("#"+seccion).removeClass("oculto");
      $("#"+seccion).addClass("int_aparecer_izq");
    }
}

/*
* active_link: función que permite activar el enfoques del hipervínculo seleccionado en el Navbar
*/

function aparecer_der(seccion){
    var seccion_aux = $("#"+seccion).offset().top;
    var alto = $("#"+seccion).height();
    var ventana_alto = $(window).height();
    seccion_aux = seccion_aux - alto - ventana_alto + 100;
    if ($(this).scrollTop() > seccion_aux){
        $("#"+seccion).removeClass("oculto");
      $("#"+seccion).addClass("int_aparecer_der");
    }
}

/*
* active_link: función que permite activar el enfoques del hipervínculo seleccionado en el Navbar
*/

function aparecer(seccion){
    var seccion_aux = $("#"+seccion).offset().top;
    var alto = $("#"+seccion).height();
    var ventana_alto = $(window).height();
    seccion_aux = seccion_aux - alto - ventana_alto + 100;
    if ($(this).scrollTop() > seccion_aux){
        $("#"+seccion).removeClass("oculto");
        $("#"+seccion).addClass("int_aparecer");
    }
}

/* Inicio del Ready */
$(function()
{

    /* Se aplican los estilos según el XML */
    var color_seleccionado1 = $("#color_seleccionado1").val();
    var color_seleccionado2 = $("#color_seleccionado2").val();

    /* Color del Navbar */
    /*$(".navbar_color").css("background-color", color_seleccionado1);*/

    /* Color del Link del Navbar activo */
    /*$(".nav-link.active").css("border-bottom-color", color_seleccionado2);*/

    /* Color del hover del Link del Navbar activo */
    /*$(".nav-link").hover(function(){
        $(this).css("color", color_seleccionado2);
        }, function(){
        $(this).css("color", "white");
    });*/

    /* Color del botón */
    /*$(".boton-color").css("background-color", color_seleccionado2);*/

    /* Al activar el Scroll con un alto de 650px */
    $(window).scroll(function(){
        var alto_navbar = $("#barra_navegacion").height() + 100;
        var seccion2 = $("#seccion2").offset().top - alto_navbar;
        var seccion3 = $("#seccion3").offset().top - alto_navbar;
        var seccion4 = $("#seccion4").offset().top - alto_navbar;
        var seccion5 = $("#seccion5").offset().top - alto_navbar;

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
                        active_link("link5");

        /* Fin de programación para activar selección del hipervinculo del Navbar */

        /* Animaciones para la sección de Empresa */

        aparecer_der("empresa_linea1");
        aparecer_der("empresa_linea2");
        aparecer_der("empresa_linea3");
        aparecer_izq("empresa_linea4");

        /* Animaciones para la sección de Servicios */

        aparecer_izq("servicio_item1");
        aparecer_der("servicio_item2");
        aparecer_izq("servicio_item3");

        /* Animaciones para la sección de Fugas */

        aparecer_izq("fugas_num_1");
        aparecer_der("fugas_num_2");
        aparecer("fugas_num_3");
        aparecer_izq("fugas_num_4");
        aparecer_der("fugas_num_5");
        aparecer_izq("fugas_linea_izq");
        aparecer_der("fugas_linea_der");

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

    /**
    * Al hacer clic en el link4 Fugas
    */
    $("#link1").on("click", function(){
        $("#navbarNav").removeClass("show");
        var seccion = $("#seccion1").offset().top;
        var alto_navbar = $("#barra_navegacion").height() + 100;
        $(window).scrollTop(seccion-alto_navbar);
    });

    /**
    * Al hacer clic en el link4 Fugas
    */
    $("#link2").on("click", function(){
        $("#navbarNav").removeClass("show");
        var seccion = $("#seccion2").offset().top;
        var alto_navbar = $("#barra_navegacion").height() + 15;
        $(window).scrollTop(seccion-alto_navbar);
    });

    /**
    * Al hacer clic en el link4 Fugas
    */
    $("#link3").on("click", function(){
        $("#navbarNav").removeClass("show");
        var seccion = $("#seccion3").offset().top;
        var alto_navbar = $("#barra_navegacion").height() + 40;
        $(window).scrollTop(seccion-alto_navbar);
    });

    /**
    * Al hacer clic en el link4 Fugas
    */
    $("#link4").on("click", function(){
        $("#navbarNav").removeClass("show");
        var seccion = $("#seccion4").offset().top;
        var alto_navbar = $("#barra_navegacion").height();
        $(window).scrollTop(seccion-alto_navbar);
        aparecer_izq("fugas_num_1");
        aparecer_der("fugas_num_2");
        aparecer("fugas_num_3");
    });

    /**
    * Al hacer clic en el link4 Fugas
    */
    $("#link5").on("click", function(){
        $("#navbarNav").removeClass("show");
        var seccion = $("#seccion5").offset().top;
        var alto_navbar = $("#barra_navegacion").height() + 40;
        $(window).scrollTop(seccion-alto_navbar);
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
