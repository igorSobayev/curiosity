$( function() {
    var draggables = $( ".draggable" ).draggable();

    // Guardo el valor actual del elemento
    draggables.mousedown(function() {
        draggable_actual = $(this).attr("id");
        console.log(draggable_actual);
    })

    // Compruebo antes de cambiar si es correcta la respuesta
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        droppable_actual = $(this).attr("id");
        console.log($(this).attr("id"));
        switch(draggable_actual) {
            case droppable_actual:
                $(this).css("background-image", "url(imagenes/correcto.png)");
        }/*
        if (droppable_actual == draggable_actual) {
            alert("WASUUUUUUU");
        }*/

        /*
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "#curiosity" )
        .html( "¡Genial, es Curiosity!" );*/
      }
    });
  } );