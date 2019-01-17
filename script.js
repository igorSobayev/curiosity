$(function () {

  /* Codigo JavaScript y jQuery UI
  Primero guardamos en una variable todos los elementos draggables de la página y les aplicamos
  dos propiedades, la del containment para que solo pueda estar en su contenedor principal y la de revert
  que devuelve la imagen seleccionada a su origen. */
  var draggables = $(".draggable").draggable({ containment: ".contenedor-juego", revert: true });

  /* Utilizo la variable de antes para darle un evento cuando pulsas sobre una imagen
  y la mueves, el evento consiste en guardar el id del elemento seleccionado y el elemento total
  en una variable para luego utilizarlo en el droppable en la comparacion */
  draggables.mousedown(function () {
    draggable_actual = $(this).attr("id");
    draggable = $(this);

  })

  /* Aplico el droppable a todos los elementos
  Una vez aplicado el droppable utilizo drop para actuar sobre el elemento en el que coloco la foto
  compruebo si el elemento que tengo agarrado tiene el mismo id que el droppable (id recogido en la variable droggable_actual)
  si el id coincide cambio la imagen de fondo y aplico un visibility para el elemento draggable
  si lo suelto y no coincide el elemento vuelve a su posicion */
  $(".droppable").droppable({
    drop: function (event, ui) {

      droppable_actual = $(this).attr("id");

      if (droppable_actual == draggable_actual) {
        $(this).css("background-image", "url(imagenes/correcto.png)");
        draggable.css("visibility", "hidden");
      }
    }


  });

  /* Codigo para crear el tabs en el index que permite navegar por diferentes paginas,
  le aplico collapsible: true para que cuando pulses otra vez sobre una etiqueta abierta se cierre */
  $("#tabs").tabs({
    collapsible: true
  });


  /* Codigo para el acordeon que esta localizado en la pagina de pasado
  Cada parte del acordeon contiene un invento con informacion sobre tu su autor y el invento,
   empezando por el mas antiguo
   Finalmente hay botones de navegacion a la siguiente pagina y al index
   Codigo extraido de la web de JQuery UI */
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
  };
  $("#accordion").accordion({
    icons: icons,
    heightStyle: "content",
    collapsible: true
  });
  $("#toggle").button().on("click", function () {
    if ($("#accordion").accordion("option", "icons")) {
      $("#accordion").accordion("option", "icons", null);
    } else {
      $("#accordion").accordion("option", "icons", icons);
    }
  });

  /* Codigo para el elemento JQuery sortable en presente al final de la pagina,
  consiste simplemente en ordenar las palabras en el orden que tu prefieras
  Codigo extraido de JQuery UI*/
  $("#sortable").sortable({
    placeholder: "ui-state-highlight"
  });
  $("#sortable").disableSelection();



  // Codigo giro al pulsar realizado por mi
  /*
  $(".girar").click(function() {
    $(".giro-futuro > .front").css("transform", "perspective( 800px) rotateY( -180deg)");
    $(".giro-futuro > .back").css("transform", "perspective( 800px) rotateY( 0deg)");
  });

  $(".volver").click(function() {
    $(".giro-futuro > .back").css("transform", "perspective( 800px) rotateY( 180deg)");
    $(".giro-futuro > .front").css("transform", "perspective( 800px) rotateY( 0deg)");
  });*/



  /* Codigo facilitado por el profesor para girar la tarjeta al pulsar,
  consiste en recoger el click del boton y guardar su contenedor padre para luego
  aplicarle el estilo correspondiente añadiendo o quitando clase dependiendo del elemento
  al que le des click */

  $(".girar").click(function () {
    var $parent = $(this).closest(".giro-futuro");

    $parent.children(".front").toggleClass(" rotate-card-front");
    $parent.children(".back").toggleClass(" rotate-card-back");
  });


  /* Codigo extraido de la pagina de Jquery para hacer funcionar el menu implementado
  en una de las tarjetas de la pagina de futuro*/
  $( "#menu" ).menu({
    items: "> :not(.ui-widget-header)"
  });


  /* Codigo extraido de la web de JQuery para utilizar en una de las tarjetas y hacer que aparezca
  un dialogo al pulsar sobre una imagen */
  $( "#dialog" ).dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });

});
