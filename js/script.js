$(document).ready(function () {


  ////////////////////////Evitar cierre en el menu desplegable
  $(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  });




  if ($('[data-toggle="tooltip"]').length > 0) {  // comprobar si existe el elemento
    $('[data-toggle="tooltip"]').tooltip()
  } // end if


});

