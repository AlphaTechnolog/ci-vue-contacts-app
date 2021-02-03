/**
 *
 * Jcontacto.js Java Script con la programación para respuestas durante el envio de correo.
 *
 * Autor: Jaisfel Cedeño
 * Grupo Intuitivo
 *
 * Sección: Contacto
 *
 */

/*
 * Inicio
 */

base_url = $("#base_url").val();

$(function() {


    $("#formulario-contacto").submit(function() {
	$.ajax({
        type: 'POST',
        url: base_url+'index.php/Ccontacto/envia_correo',
        data: $(this).serialize(),
        success: function(data){
            if (data == '1') {
                bootbox.alert({
                    title: " ",
                    message: "<div class='text-azul-con-borde'>Correo Enviado</div>",
                    size: 'small',
                    callback: function() {
                        $("#formulario-contacto")[0].reset();
                    }
                });
            } else {
                bootbox.alert({
                    title: " ",
                    message: "<div class='text-azul-con-borde'>Correo no Enviado</div>",
                    size: 'small',
                    callback: function() {
                        $("#formulario-contacto")[0].reset();
                    }
                });
            }
        }

    });


/*
        $.post(base_url + 'index.php/Ccontacto/envia_correo', '', function(data) {

            var ventana;
            if (data == '1') {
                bootbox.alert({
                    title: " ",
                    message: "<div class='text-azul-con-borde'>Correo Enviado</div>",
                    size: 'small',
                    callback: function() {
                        $("#formulario-contacto")[0].reset();
                    }
                });
            } else {
                bootbox.alert({
                    title: " ",
                    message: "<div class='text-azul-con-borde'>Correo no Enviado</div>",
                    size: 'small',
                    callback: function() {
                        $("#formulario-contacto")[0].reset();
                    }
                });
            }
            $("#formulario-contacto")[0].reset();
        });
*/
        return false;
    });

});
