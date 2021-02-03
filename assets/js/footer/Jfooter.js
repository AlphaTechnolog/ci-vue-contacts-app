/**
*
* Jfooter.js Java Script con la programación para el footer.
*
* Autor: Franklim Guerra
* Grupo Intuitivo
*
* Sección: Footer
*
*/

/* Inicio del Ready */
$(function()
{
    
    /**
    * Al hacer clic en el link_footer2 del footer
    */
    $("#link_footer2").on("click", function(){
        var seccion = $("#seccion2").offset().top;
        var alto_navbar = $("#barra_navegacion").height() + 15;
        $(window).scrollTop(seccion-alto_navbar);
    });
    
    /**
    * Al hacer clic en el link_footer2_1 del footer
    */
    $("#link_footer2_1").on("click", function(){
        var seccion = $("#seccion2").offset().top;
        var alto_navbar = $("#barra_navegacion").height() + 15;
        $(window).scrollTop(seccion-alto_navbar);
    });
    
    /**
    * Al hacer clic en el link_footer3 del footer
    */
    $("#link_footer3").on("click", function(){
        var seccion = $("#seccion3").offset().top;
        var alto = 100;
        $(window).scrollTop(seccion-alto);
    });
    
    /**
    * Al hacer clic en el link_footer3_1 del footer
    */
    $("#link_footer3_1").on("click", function(){
        var seccion = $("#servicio_item1").offset().top;
        var alto = 90;
        $(window).scrollTop(seccion-alto);
    });
    
    /**
    * Al hacer clic en el link_footer3_2 del footer
    */
    $("#link_footer3_2").on("click", function(){
        var seccion = $("#servicio_item2").offset().top;
        var alto = 100;
        $(window).scrollTop(seccion-alto);
    });

    /**
    * Al hacer clic en el link_footer3_3 del footer
    */
    $("#link_footer3_3").on("click", function(){
        var seccion = $("#servicio_item3").offset().top;
        var alto = 100;
        $(window).scrollTop(seccion-alto);
    });

});
/* Fin del Ready */
