$(document).ready(function() {

  $("form#heightform").submit(function(event) {

  var height = parseInt($('#height').val());

  if (height >= 60){
    $('.ride').removeClass('border');
    $('#canride').addClass('border');

  } else if (height >= 40) {
    $('.ride').removeClass('border');
    $('#cantride').addClass('border');

  } else if (height >= 30) {
    $('.ride').removeClass('border');
    $('#restricted').addClass('border');

  } else {
    $('.ride').removeClass('border');
    $('#smallest').addClass('border');
    
  }

  event.preventDefault();
  });

});
