
/* Cambiare stile CSS nella homepage*/
$(document).ready(function(){
  $('#topolinoicon').click(function(){
    $('#stylepage').attr('href', 'css/home70.css');
    $("#videohomepage").remove();
    $('#containermultimedia').html('<img id="comicshomepage"  alt="comics about police brutality" src="./imgs/70/Homepage70/collage5.jpg">');
    $('#ingranaggio').hide();
  });

  $('#dadaicon').click(function(){
    $('#stylepage').attr('href', 'css/homedada.css');
        $("#videohomepage").remove();
          $('#containermultimedia').html('<img id="collagedada"  alt="collage dada style" src="./Documentation/dada/Home collage/collage homepage-cutout.png">');
          $(".project").html('<h2 class="section_heading" id="about">About</h2><hr> <h2 class="section_heading" id="theproject">The project</h2> <p>The Observatory for Justice is a project realized for the examination of the course of Information modelling and web technologies held by Fabio Vitali within the Master Degree in Digital Humanities and Digital Knowledge of the University of Bologna. According to the guideline, the purpose of the website is to display three articles dealing with the same theme/main topic. The scopes of the site are displaying articles through different styles and layouts which should be influenced by real typographic movements, achievable through a cross-analysis of textual metadata. So, let&rsquo;s explore the different styling taste from the past. Thanks to the style timeline, in the Filter section of the navbar, the user can access to this first number of the magazine switching from a very basic and contemporary style to one inspired by the Dada movement of 1920 and to 70’s style, shaped on the famous “Topolino” comic book (“Mickey Mouse” in English). </p> <img id="ingranaggio" src="imgs/dada/ingranaggio.png">');
          $("#specialedition").html('<p class="question" id="specialtext"><span class="wh">Who</span> do you call <span class="wh">when</span> people <span class="wh">who</span> <span class="finalpart">should protect you are the <span id="abusers">abusers</span><span id="questionmark">?</span></span></p> <img id="hurrahurra" src="imgs/dada/hurrahurra.png">');
          $("#referencemagazine").html('<div id="referencemagazine"><img id="fork" src="imgs/dada/fork.png"><img id="hand" src="imgs/dada/pointingfinger.png"><h3 id="sources">The reference magazine</h3></div>');
          $(".designer").html('<div class="designer"> <img class="fotodesigner" src="imgs/designer.jpg"><h2 class="section_heading">The designer</h2><p>I graduated in February 2020 in Humanities (Modern Curriculum) at Federico II in Naples with a thesis in Romance Philology. I’m currently attending “Digital Humanities and Digital Knowledge” (LM-43 Master degree) at the Alma Mater Studiorum University in Bologna. I am a huge fan of photography: after studying and practicing digital photography (and postproduction in Photoshop) for years, I have also extended my knowledge to analogic photography.  The image-based modelling, the 3d modelling and the graphic design represent fields of knowledge that I would have a sincere pleasure to deepen.</p><img id="spoon" src="imgs/dada/spoon.png"></div>');
  });
});
$(document).ready(function(){
  $("#referencemagazine").click(function(){
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
