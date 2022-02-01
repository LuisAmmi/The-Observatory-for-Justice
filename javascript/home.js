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

$(document).ready(function(){
  $("#sources").click(function(){
    $("#panelsource").slideToggle("slow");
  });

  $("#fonts").click(function(){
    $("#panelfonts").slideToggle("slow");
  });

  $("#layout").click(function(){
    $("#panellayout").slideToggle("slow");
  });

  $("#colors").click(function(){
    $("#panelcolors").slideToggle("slow");
  });
});
