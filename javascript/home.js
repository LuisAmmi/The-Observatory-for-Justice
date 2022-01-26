containermultimedia
/* Cambiare stile CSS nella homepage*/
$(document).ready(function(){
  $('#topolinoicon').click(function(){
    $('#stylepage').attr('href', 'css/home70.css');
    $("#videohomepage").remove();
    $('#containermultimedia').html('<img id="comicshomepage"  alt="comics about police brutality" src="./imgs/70/Homepage70/collage5.jpg">');

  });

  $('#dadaicon').click(function(){
    $('#stylepage').attr('href', 'css/homedada.css');
        $("#videohomepage").remove();
          $('#containermultimedia').html('<img id="collagedada"  alt="collage dada style" src="./Documentation/dada/Home collage/collage homepage-cutout.png">');
  });
});
