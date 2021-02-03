/**
*
* Jlang.js Java Script con la programación para el manejo del lenguaje y la internacionalización.
*
* Autor: Franklim Guerra
* Grupo Intuitivo
*
* Sección: Internacionalización
*
*/

$(function()
{
    /**
    * Al hacer click en idioma spanish
    */
    $('#spanish').on('click', function() {
        base_url = $("#base_url").val();
        data = "spanish";
        $.post(base_url+"index.php/clanguage/actualizar",{ data: data },
            function(data_return)
            {
                $("#vidioma").submit();
            }
        );
    });

    /**
    * Al hacer click en idioma english
    */
    $('#english').on('click', function() {
        base_url = $("#base_url").val();
        data = "english";
        $.post(base_url+"index.php/clanguage/actualizar",{ data: data },
            function(data_return)
            {
                $("#vidioma").submit();
            }
        );
    });

});
