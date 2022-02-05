
/* Cambiare stile CSS nella homepage*/
$(document).ready(function(){
  $('#topolinoicon').click(function(){
    $('#stylepage').attr('href', 'css/home70.css');
    $("#videohomepage").remove();
    $('#containermultimedia').html('<img id="comicshomepage"  alt="comics about police brutality" src="./imgs/70/Homepage70/collage5.jpg">');
    $('#ingranaggio').remove();
    $('#hand').remove();
    $('#fork').remove();
    $('#spoon').remove();
    $('#hurrahurra').remove();
    $(".magazine").html('<img id="paperino" src="./imgs/70/paperino.jpg"><h2 id="magazinetitle">The magazine</h2><p id="magazineparagraph">Founded in 2022, The Observer for Justice is a monthly magazine that reports about forms of iniquity and violence which victimize social communities all over the world. Our motto is ‘Fight injustice trough information’ and we decide to devote our first release to 20 years of chronic police abuse: from the 27th G8 summit, held in Genoa in 2001, marked by violent clashes between anti-globalization protesters and police, to the "Black Lives Matter" movement, boomed after the murder of George Floyd and other episodes of racial hatred perpetuated by white officers. </p>');
    $(".issue").html('<h2 id="issuetitle">The issue</h2><p>In the <a href="issue.html">Issue</a> section, you will find three selected insights on the topic. <span id="first">The first one is a detailed and unvarnished chronicle of what happened during those painful days of Genoa, due to which the European Court of Human Rights found Italy guilty of torture.</span> <span id="second">The second is a recent analysis on data about racial bias and police brutality in United States.</span> <span id="third">The last insight is a scientific article that highlight how intense and numerically significant are the contacts between police and people suffering from mental disorders.</span> </p><img id="issuetopolino" src="./imgs/70/issuetopolino.jpeg">');
    $(".designer").html('<img class="fotodesigner" src="imgs/70/designer70.png"><h2 class="section_heading" id="designertitle">The designer</h2><p id="designerparagraph">I graduated in February 2020 in Humanities (Modern Curriculum) at Federico II in Naples with a thesis in Romance Philology. I’m currently attending “Digital Humanities and Digital Knowledge” (LM-43 Master degree) at the Alma Mater Studiorum University in Bologna. I am a huge fan of photography: after studying and practicing digital photography (and postproduction in Photoshop) for years, I have also extended my knowledge to analogic photography.  The image-based modelling, the 3d modelling and the graphic design represent fields of knowledge that I would have a sincere pleasure to deepen. </p>');
  });

  $('#dadaicon').click(function(){
    $('#stylepage').attr('href', 'css/homedada.css');
        $("#videohomepage").remove();
          $('#containermultimedia').html('<img id="collagedada"  alt="collage dada style" src="./Documentation/dada/Home collage/collage homepage-cutout.png">');
        $(".project").html('<h2 class="section_heading" id="about">About</h2><hr> <h2 class="section_heading" id="theproject">The project</h2> <p>The Observatory for Justice is a project realized for the examination of the course of Information modelling and web technologies held by Fabio Vitali within the Master Degree in Digital Humanities and Digital Knowledge of the University of Bologna. According to the guideline, the purpose of the website is to display three articles dealing with the same theme/main topic. The scopes of the site are displaying articles through different styles and layouts which should be influenced by real typographic movements, achievable through a cross-analysis of textual metadata. So, let&rsquo;s explore the different styling taste from the past. Thanks to the style timeline, in the Filter section of the navbar, the user can access to this first number of the magazine switching from a very basic and contemporary style to one inspired by the Dada movement of 1920 and to 70’s style, shaped on the famous “Topolino” comic book (“Mickey Mouse” in English). </p> <img id="ingranaggio" src="imgs/dada/ingranaggio.png">');
        $("#specialedition").html('<p class="question" id="specialtext"><span class="wh">Who</span> do you call <span class="wh">when</span> people <span class="wh">who</span> <span class="finalpart">should protect you are the <span id="abusers">abusers</span><span id="questionmark">?</span></span></p> <img id="hurrahurra" src="imgs/dada/hurrahurra.png">');
        $("#referencemagazine").html('<div id="referencemagazine"><img id="fork" src="imgs/dada/fork.png"><img id="hand" src="imgs/dada/pointingfinger.png"><h3 id="sources">The reference magazine</h3></div>');
        $(".fotodesigner").remove();
        $(".designer").html('<img class="fotodesigner" src="imgs/dada/designerdada.png"><h2 class="section_heading" id="designertitle"><span id="upper">T</span><span id="lower">h</span><span id="upper">e</span> <span id="lower">d</span><span id="upper">e</span><span id="lower">s</span><span id="upper">i</span><span id="lower">g</span><span id="upper">n</span><span id="lower">e</span><span id="upper">r</span></h2><p id="designerparagraph">I graduated in February 2020 in Humanities (Modern Curriculum) at Federico II in Naples with a thesis in Romance Philology. I’m currently attending “Digital Humanities and Digital Knowledge” (LM-43 Master degree) at the Alma Mater Studiorum University in Bologna. I am a huge fan of photography: after studying and practicing digital photography (and postproduction in Photoshop) for years, I have also extended my knowledge to analogic photography.  The image-based modelling, the 3d modelling and the graphic design represent fields of knowledge that I would have a sincere pleasure to deepen.</p><img id="spoon" src="imgs/dada/spoon.png"></div>');
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
