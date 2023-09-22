$(document).ready(function () {


    $('.step1').on('input', function () {

        var input_type = $(this).prop('type');
        var allow_next = undefined;
        if (input_type == 'text') {
            validate_nombre();
        }
        if (input_type == 'tel') {
            validate_phone();
        }
        if (input_type == 'email') {
            validate_email();
        }


        var count_valid = $('#datos_personales input.is-valid').length;

        console.log(count_valid);

        if (count_valid == 3) {
            allow_next = true;
            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
        }
        else {
            allow_next = false;
            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');
        }

        return count_valid;

    });


    function validate_nombre() {
        var nombre = $('#datos_nombre').val();

        var regex = new RegExp('^([a-zA-Z áéíóúÁÉÍÓÚ]{3,})+(([a-zA-Z  áéíóúÁÉÍÓÚ])?[a-zA-Z]*)*$');
        var valid_phone = $('#datos_nombre').toggleClass('is-valid', regex.test(nombre));
        var valid_phone_2 = $('#datos_nombre').toggleClass('is-invalid', !regex.test(nombre));

    }

    function validate_phone() {

        var telefono = $('#datos_telefono').val();

        var regex = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
        var valid_phone = $('#datos_telefono').toggleClass('is-valid', regex.test(telefono));
        var valid_phone_2 = $('#datos_telefono').toggleClass('is-invalid', !regex.test(telefono));



    }

    function validate_email() {


        var correo = $('#datos_correo').val();


        var regex = new RegExp('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
            '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
            '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

        var valid_correo = $('#datos_correo').toggleClass('is-valid', regex.test(correo))
        var valid_correo_2 = $('#datos_correo').toggleClass('is-invalid', !regex.test(correo))



    }

    function validate_step_1() {
        validate_nombre();
        validate_phone();
        validate_email();

        var count_valid = $('#datos_personales input.is-valid').length;
        if (count_valid == 3) {
            allow_next = true;
            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
        }
        else {
            allow_next = false;
            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');
        }

    }

    function validate_step_2() {

        var count_checked = $('.step2:checked').length;
        var count_valid = $('#datos_contenedor input.is-valid').length;


        console.log(count_checked, count_valid);

        if (count_valid == count_checked && count_valid > 0) {
            allow_next = true;
            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
        }
        else {
            allow_next = false;
            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');
        }

    }

    function validate_step_3() {

        var count_valids = $('#inputs_traslado input.is-valid').length;

        var val = $('#traslado_cotizar_2').val();

        console.log(count_valids);

        if (count_valids == 2 || val == 2) {

            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
        }
        else {

            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');
        }
    }



    $('.step2').on('input', function () {

        var is_checkbox = $(this).prop('checked');

        var data = $(this).data('id');
        var data_num = $(this).data('num');
        var type = $(this).prop('type');
        var value = $(this).val();
        var id = $(this).attr('id');

        console.log(data);
        console.log(type);
        console.log(data_num);
        console.log(is_checkbox);

        if (type == 'checkbox') {
            $('#' + data).toggleClass('fade-in-e hide', !is_checkbox);
            $('#n' + data).prop('required', is_checkbox);

            if (is_checkbox == false) {
                $('#n' + data).val('');
                $('#n' + data).removeClass('is-valid');
                $('#n' + data).removeClass('is-invalid');

            }

        }



        if (type == 'number') {
            substep2(value, id);
        }


        var count_checked = $('.step2:checked').length;
        var count_valid = $('#datos_contenedor input.is-valid').length;


        console.log(count_checked, count_valid);

        if (count_valid == count_checked && count_valid > 0) {
            allow_next = true;
            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
        }
        else {
            allow_next = false;
            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');
        }




    });

    function substep2(value, id) {

        console.log("Paso: ", value, id)
        var is_filled;
        if (value > 0) {
            is_filled = true;

        }
        else {
            is_filled = false;
            $('#' + id).val('');
        }

        $('#' + id).toggleClass('is-valid', is_filled);
        $('#' + id).toggleClass('is-invalid', !is_filled);



    }




    $('#next-step').on('click', function () {

        var step = $(this).data('step');
        step = step + 1;
        $(this).data('step', step);

        console.log("Nuevo step:", $(this).data('step'));



        if (step == 1) {
            get_name();
            $('#datos_contenedor').show();
            $('#datos_personales').hide();
            $('#progreso').width('25%');
            $(this).addClass('disabled');
            $(this).removeClass('zoom-button');


        }
        if (step == 2) {
            $('#datos_contenedor').hide();
            $('#datos_traslado').show();
            $('#progreso').width('50%');
            $(this).addClass('disabled');
            $(this).removeClass('zoom-button');
        }
        if (step == 3) {
            $('#datos_traslado').hide();

            $('#datos_factura').show();
            $('#next-step').hide();
            $('#final-step').show();
            $('#progreso').width('75%');
            $(this).addClass('disabled');
            $(this).removeClass('zoom-button');
            $('html, body').animate({
                scrollTop: $("#contacto").offset().top
            }, 2000);
        }






    });
    /*
    $('#next-prev').on('click', function(){
     
      var step = $('#next-step').data('step');
      step = step-1;
       $('#next-step').data('step',step);
       $(this).data('step',step);
      console.log("Resta step: ",step);
      
      if(step==0){
        $('#next-prev').hide();
        $('#datos_contenedor').hide();
        $('#datos_personales').show();
        validate_step_1();
      }
    
    
      if(step==1){
        $('#datos_traslado').hide();
        $('#datos_contenedor').show();
        validate_step_2();
      }
    
      if(step==2){
        $('#datos_factura').hide();
        $('#datos_traslado').show();
        $('#next-step').show();
        $('#final-step').hide();
        validate_step_3();
    
      }
    
    });
    */

    $('.step3').on('input', function () {

        var value = $(this).val();
        var show = false;




        if (value == 1) {
            var show = true;
            $('#inputs_traslado').show();
            $('.step3-r').prop('required', show);
            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');


            var count_valids = $('#inputs_traslado input.is-valid').length;

            console.log(count_valids);

            if (count_valids == 2) {

                $('#next-step').removeClass('disabled');
                $('#next-step').addClass('zoom-button');
            }
            else {

                $('#next-step').addClass('disabled');
                $('#next-step').removeClass('zoom-button');
            }



        }
        if (value == 2) {
            $('#inputs_traslado').hide();
            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
            $('#traslado_codigo_postal').prop('required', false);
            $('#traslado_calle').prop('required', false);
        }
    });

    $('.step3-r').on('keyup', function () {
        var type = $(this).data('name');
        var value = $(this).val();


        if (type == 'postal') {
            validate_postal_code(value);
        }

        if (type == 'calle') {
            validate_street(value);
        }


        var count_valids = $('#inputs_traslado input.is-valid').length;

        console.log(count_valids);

        if (count_valids == 2) {

            $('#next-step').removeClass('disabled');
            $('#next-step').addClass('zoom-button');
        }
        else {

            $('#next-step').addClass('disabled');
            $('#next-step').removeClass('zoom-button');
        }


    });

    var postal_bool = undefined;
    var street_bool = undefined;

    function validate_postal_code(value) {

        console.log(value);
        if (value.length == 5 && $.isNumeric(value) == true) {
            postal_bool = true;

        }
        else {
            postal_bool = false;

        }
        $('#traslado_codigo_postal').toggleClass('is-valid', postal_bool);
        $('#traslado_codigo_postal').toggleClass('is-invalid', !postal_bool);
        $('#traslado_codigo_postal').prop('required', postal_bool);

    }


    function validate_street(value) {
        console.log(value);
        if (value.length > 5) {
            street_bool = true;

        }
        else {
            street_bool = false;
        }
        $('#traslado_calle').toggleClass('is-valid', street_bool);
        $('#traslado_calle').toggleClass('is-invalid', !street_bool);
        $('#traslado_calle').prop('required', street_bool);
    }



    $('#factura_constancia').on('change', function () {

        //this.files[0].size gets the size of your file.
        console.log(this.files[0].size);
        console.log(this.files[0].type);
        if (this.files[0].size > 1000000 || this.files[0].type != 'application/pdf') {
            alert("El archivo pesa mas del límite o no es PDF");
            $(this).val('');
            $(this).removeClass('is-valid');
            $(this).addClass('is-invalid');
            $('#final-step').addClass('disabled');
            $('#final-step').removeClass('zoom-button');
            $('#progreso').removeClass('bg-success');
            $('#progreso').addClass('bg-primary');
            $('#progreso').width('75%');

        }
        else {
            $(this).removeClass('is-invalid');
            $(this).addClass('is-valid');

            $('#final-step').removeClass('disabled');
            $('#final-step').addClass('zoom-button');
        }


    });


    $('.step4').on('change', function () {

        var value = $(this).val();
        var show = false;
        var type = $(this).prop('type');


        if (value == 1) {
            var show = true;

            console.log("Es true");
            $('#progreso').width('75%');
            $('#progreso').removeClass('bg-success');
            $('#progreso').addClass('bg-primary');
            $('#progreso').width('75%');
            $('#final-step').addClass('disabled');
            $('#final-step').removeClass('zoom-button');
            $('#factura_constancia').prop('required', show);

            check_file();


        }

        if (value == 2) {
            var show = false;
            console.log("Es false");
            $('#next-step').hide();
            $('#final-step').show();
            $('#final-step').removeClass('disabled');
            $('#final-step').addClass('zoom-button');
            $('#progreso').width('100%');
            $('#factura_constancia').prop('required', show);
            $('#progreso').addClass('bg-success');
        }

        if (type == 'file') {
            check_file();
        }




        $('#input_constancia').toggleClass('hide', !show);
        console.log(!show);








    });

    $('.step4i').on('change', function () {

        var b = $('#factura_constancia')[0].files.length;

        if (b == true) {

            $('#final-step').removeClass('disabled');
            $('#final-step').addClass('zoom-button');
            $('#progreso').removeClass('bg-primary');
            $('#progreso').addClass('bg-success');
            $('#progreso').width('100%');
        }
        else {

            $('#final-step').addClass('disabled');
            $('#final-step').removeClass('zoom-button');
            $('#progreso').removeClass('bg-bg-success');
            $('#progreso').addClass('bg-primary');
            $('#progreso').width('75%');
        }
    });



    function check_file() {
        var b = $('#factura_constancia')[0].files.length;

        if (b == true) {

            $('#final-step').removeClass('disabled');
            $('#final-step').addClass('zoom-button');
            $('#progreso').removeClass('bg-primary');
            $('#progreso').addClass('bg-success');
            $('#progreso').width('100%');
        }
        else {

            $('#final-step').addClass('disabled');
            $('#final-step').removeClass('zoom-button');

            $('#progreso').addClass('bg-primary');
            $('#progreso').width('75%');
        }
    }



    function get_name() {
        var a = $('#datos_nombre').val();
        const first = a.split(' ')[0]
        $('#nombre_cliente').text(first);
        console.log("Se cambio el nombre");

    }




    $('#final-step').on('click', function () {
        /*
          console.log("Hicisite click");
          var fd = new FormData();
                        var files = $('#factura_constancia')[0].files[0];
                        fd.append('file', files);
               
                        $.ajax({
                            url: 'upload.php',
                            type: 'post',
                            data: fd,
                            contentType: false,
                            processData: false,
                            success: function(response){
                                if(response != 0){
                                   alert('file uploaded');
                                }
                                else{
                                    alert('file not uploaded');
                                }
                            },
                        });*/
    });

    /*
    
    $("form").on("submit", function (e) {
      e.preventDefault();
    
     /*
    
      var data = $('form').serialize();
    
      const correo = $('#datos_correo').val();
      const nombre = $('#datos_nombre').val();
      const telefono = $('#datos_telefono').val();
    
    
      $.ajax({
        type: "POST",
        url: "function.php",
        data: data,
    
        success: function (data) {
    
        console.log(data);
       $('#datos_factura').hide();
        $('.card-footer').hide();
        $('.card-header').hide();
        $('#gracias').show();
    
        const folio = data;
        $('#folio').text(folio);
        $('#folio-correo').text(correo);
        $('#folio-telefono').text(telefono);
        $('#folio-nombre').text(nombre);
        console.log(folio);
        
      }
    *//*
    });
    */



    $(window).bind("pageshow", function () {
        var form = $('form');
        // let the browser natively reset defaults
        form[0].reset();
    });

}); 