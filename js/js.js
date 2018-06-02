
var cont = 0;
var ficheros = ["1.json", "2.json"];


$(document).ready( function() {
    
    $("#boton").click(function () {
        cargarNoticias();

    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height() && $('#cargarNews')[0].checked ) {
          cargarNoticias();
        }
    });
    
	
	$("#facebook").click(function () {
        var shareurl = window.location.href;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + escape(shareurl), document.title,
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

    $("#twitter").click(function () {
        var shareurl = window.location.href;
        window.open('http://twitter.com/share?text=' + document.title + '&url=' + escape(shareurl), document.title,
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

    $("#google").click(function () {
        var shareurl = window.location.href;
        window.open('https://plus.google.com/share?url=' + escape(shareurl), document.title,
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });
  
});


function agregar(json) {
    $.each(json, function (i, noticia) {
        $("#noticias").append("<div class='main-container col-sm-8 well noticia' >" +
                "<h1><strong>" + noticia.titulo + "</strong></h1>" +
                "<br>"
                + "<p>" + noticia.descripcion + "</p>"
                +"<br><br>"
                + '<img src="' + noticia.imgbig + '"' + "alt='imagen'" + "class='img-responsive'>"+
                
                "<br>"+
               " <p class='text-right'>"+noticia.data+"</p>"
                +"<br>"
                + "</div>"
                );
    });
    
};

function cargarNoticias() {

    if (cont < ficheros.length) {

        var nombre = ficheros[cont];
        cont++;
        $.getJSON( "https://rawgit.com/collami/programacion2/master/data/" + nombre, function (aux) {
            agregar(aux); });
    }
    else {
        
        $('#boton').text('No hay más noticias');
        $('#boton').class="btn btn-info disabled";
    }
};






