$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#enviarCorreo').click(function () {
    alert('El correo fue enviado correctamente...');
})

$("#Ingredientes").dblclick(function () {
    $(this).css({
        "color": "red"
    });
});

$("#preparacion").dblclick(function () {
    $(this).css({
        "color": "red"
    });
});
    
$(document).ready(function () {
    $(".card-title").on("click", function () {
        $('.card-text').toggle();
    });
});