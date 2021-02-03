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



/* Inicio del Ready */
$(function()
{
    base_url = $("#base_url").val();

    $("#color1").on("change",function(){
        var sel_color = $("#color1").val();
        $("#sel_color1").html('<center>Color 1: '+sel_color+'</center>');
    }
    );

    $("#color2").on("change",function(){
        var sel_color = $("#color2").val();
        $("#sel_color2").html('<center>Color 2: '+sel_color+'</center>');
    }
    );

    /* Valida el formulario de administración General */
	$('#formulario_general').validate(
    {
    rules: {
        empresa: {
            required: true,
            minlength: 2
        },
        logo: {
            required: true,
            minlength: 2
        },
        color1: {
            required: true,
            minlength: 2
        },
        color2: {
            required: true,
            minlength: 2
        },
        link1_xml: {
            required: true,
            minlength: 2
        },
        link2_xml: {
            required: true,
            minlength: 2
        },
        link3_xml: {
            required: true,
            minlength: 2
        },
        link4_xml: {
            required: true,
            minlength: 2
        },
        link5_xml: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        empresa: "Por favor ingrese un correo valido",
        logo: {
                required: "Por favor ingrese una clave",
                minlength: "Su clave debe contener al menos 5 caracteres"
        },
        color1: "Por favor ingrese un color valido",
        color2: "Por favor ingrese un color valido",
        link1_xml: "Por favor ingrese un link valido",
        link2_xml: "Por favor ingrese un link valido",
        link3_xml: "Por favor ingrese un link valido",
        link4_xml: "Por favor ingrese un link valido",
        link5_xml: "Por favor ingrese un link valido",
    },
    submitHandler: function() {
        empresa = $("#empresa").val();
        logo = $("#logo").val();
        color1 = $("#color1").val();
        color2 = $("#color2").val();
        color2 = $("#color2").val();
        link1_xml = $("#link1_xml").val();
        link2_xml = $("#link2_xml").val();
        link3_xml = $("#link3_xml").val();
        link4_xml = $("#link4_xml").val();
        link5_xml = $("#link5_xml").val();
        base_url = $("#base_url").val();
        data: $("#formulario_general").serialize();
        $.post(base_url+"index.php/cadmin/xml_general/", { empresa: empresa, logo: logo, color1: color1, color2: color2, link1_xml: link1_xml, link2_xml: link2_xml, link3_xml: link3_xml, link4_xml: link4_xml, link5_xml: link5_xml } ,
            function(data){
                if(data==1){
                    location.href=base_url+"gi_admin_home";
                }
                if(data == 0){
                    /******************************************************************
                    * Error de Inicio de Sesión
                    ******************************************************************/
                    bootbox.alert({
                        title:"",
                        message: "Error al Guardar los datos.",
                        size: 'small',
                        callback: function(){
                            location.href=base_url+'gi_admin_home';
                        }
                    });
                }
            });
		}
	});

    /* click en el boton valores por defecto de la configuración General */
    $("#general_defaul").on("click",function(){
        $.post(base_url+"index.php/cadmin/xml_general_defaul/", {  } ,
            function(data){
                if(data == 1){
                    /*location.href=base_url+"gi_admin_home";*/
                }
                if(data == 0){
                    /******************************************************************
                    * Error de Inicio de Sesión
                    ******************************************************************/
                    bootbox.alert({
                        title:"",
                        message: "Error al Guardar los datos.",
                        size: 'small',
                        callback: function(){
                            location.href=base_url+'gi_admin_home';
                        }
                    });
                }
            });
    });


    /* Valida el formulario de administración Carrucel */
	$('#formulario_carrucel').validate(
    {
    rules: {
        imagen1: {
            required: true,
            minlength: 2
        },
        texto1: {
            required: true,
            minlength: 2
        },
        texto2: {
            required: true,
            minlength: 2
        },
        imagen1_smartphone: {
            required: true,
            minlength: 2
        },
        texto1_smartphone: {
            required: true,
            minlength: 2
        },
        texto2_smartphone: {
            required: true,
            minlength: 2
        },


        imagen2: {
            required: true,
            minlength: 2
        },
        texto3: {
            required: true,
            minlength: 2
        },
        texto4: {
            required: true,
            minlength: 2
        },
        imagen2_smartphone: {
            required: true,
            minlength: 2
        },
        texto3_smartphone: {
            required: true,
            minlength: 2
        },
        texto4_smartphone: {
            required: true,
            minlength: 2
        },


        imagen3: {
            required: true,
            minlength: 2
        },
        texto5: {
            required: true,
            minlength: 2
        },
        texto6: {
            required: true,
            minlength: 2
        },
        imagen3_smartphone: {
            required: true,
            minlength: 2
        },
        texto5_smartphone: {
            required: true,
            minlength: 2
        },
        texto6_smartphone: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        imagen1: "Por favor ingrese una imagen valida",
        texto1: "Por favor ingrese un texto valido",
        texto2: "Por favor ingrese un texto valido",
        imagen1_smartphone: "Por favor ingrese una imagen valida",
        texto1_smartphone: "Por favor ingrese un texto valido",
        texto2_smartphone: "Por favor ingrese un texto valido",
        imagen2: "Por favor ingrese una imagen valida",
        texto3: "Por favor ingrese un texto valido",
        texto4: "Por favor ingrese un texto valido",
        imagen2_smartphone: "Por favor ingrese una imagen valida",
        texto3_smartphone: "Por favor ingrese un texto valido",
        texto4_smartphone: "Por favor ingrese un texto valido",
        imagen3: "Por favor ingrese una imagen valida",
        texto5: "Por favor ingrese un texto valido",
        texto6: "Por favor ingrese un texto valido",
        imagen3_smartphone: "Por favor ingrese una imagen valida",
        texto5_smartphone: "Por favor ingrese un texto valido",
        texto6_smartphone: "Por favor ingrese un texto valido",
    },
    submitHandler: function() {
        imagen1 = $("#imagen1").val();
        texto1 = $("#texto1").val();
        texto2 = $("#texto2").val();
        imagen1_smartphone = $("#imagen1_smartphone").val();
        texto1_smartphone = $("#texto1_smartphone").val();
        texto2_smartphone = $("#texto2_smartphone").val();
        imagen2 = $("#imagen2").val();
        texto3 = $("#texto3").val();
        texto4 = $("#texto4").val();
        imagen2_smartphone = $("#imagen2_smartphone").val();
        texto3_smartphone = $("#texto3_smartphone").val();
        texto4_smartphone = $("#texto4_smartphone").val();
        imagen3 = $("#imagen3").val();
        texto5 = $("#texto5").val();
        texto6 = $("#texto6").val();
        imagen3_smartphone = $("#imagen3_smartphone").val();
        texto5_smartphone = $("#texto5_smartphone").val();
        texto6_smartphone = $("#texto6_smartphone").val();

        base_url = $("#base_url").val();
        $.post(base_url+"index.php/cadmin/xml_carrucel/", {
            imagen1: imagen1, texto1: texto1, texto2: texto2, imagen1_smartphone: imagen1_smartphone, texto1_smartphone: texto1_smartphone, texto2_smartphone: texto2_smartphone,
            imagen2: imagen2, texto3: texto3, texto4: texto4, imagen2_smartphone: imagen2_smartphone, texto3_smartphone: texto3_smartphone, texto4_smartphone: texto4_smartphone,
            imagen3: imagen3, texto5: texto5, texto6: texto6, imagen3_smartphone: imagen3_smartphone, texto5_smartphone: texto5_smartphone, texto6_smartphone: texto6_smartphone
        } ,
            function(data){
                if(data==1){
                    location.href=base_url+"gi_admin_home";
                }
                if(data == 0){
                    /******************************************************************
                    * Error de Inicio de Sesión
                    ******************************************************************/
                    bootbox.alert({
                        title:"",
                        message: "Error al Guardar los datos.",
                        size: 'small',
                        callback: function(){
                            location.href=base_url+'gi_admin_home';
                        }
                    });
                }
            });
		}
	});

});
/* Fin del Ready */
