containermultimedia
/* Cambiare stile CSS nella homepage*/
$(document).ready(function(){
  $('#topolinoicon').click(function(){
    $('#stylepage').attr('href', 'css/home70.css');
        $("#videohomepage").remove();
  });

  $('#dadaicon').click(function(){
    $('#stylepage').attr('href', 'css/homedada.css');
        $("#videohomepage").remove();
  });
});
