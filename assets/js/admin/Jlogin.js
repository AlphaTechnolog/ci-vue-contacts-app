/**
 *
 * Jlogin.js Java Script con la programación para la validación de Login.
 *
 * Autor: Franklim Guerra
 * Grupo Intuitivo
 *
 * Sección: Login
 *
 */

/* Inicio */
$(document).ready(function() {

	/* Valida el formulario de login */
	$('#vlogin').validate(
    {
    rules: {
        email: {
            required: true,
            email: true,
            minlength: 2
        },
        password: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        email: "Por favor ingrese un correo valido",
        password: {
                required: "Por favor ingrese una clave",
                minlength: "Su clave debe contener al menos 5 caracteres"
        }
    },
    submitHandler: function() {
        email = $("#email").val();
        password = $("#password").val();
        base_url = $("#base_url").val();
        $.post(base_url+"index.php/cadmin/validar/", { email: email, password: password } ,
            function(data){
                if(data==true){
                    location.href=base_url+"gi_admin_home";
                }
                if(data == false){
                    /******************************************************************
                    * Error de Inicio de Sesión
                    ******************************************************************/
                    bootbox.alert({
                        title:"",
                        message: "Usuario o Clave incorrecta.",
                        size: 'small',
                        callback: function(){
                            location.href=base_url+'gi_admin';
                        }
                    });
                }
            });
		}
	});

});
