/* Cambiare stile CSS*/
$(document).ready(function(){
  $('#dadaicon').click(function(){
    $('#stylepage').attr('href', 'css/issuedada.css');
  });

  $('#topolinoicon').click(function(){
    $('#stylepage').attr('href', 'css/issue70.css');
  });
});

/*store the current style before changing page*/
function keepstyle(whichstyle){
  var style= document.getElementById('whichstyle').getAttribute("href").replace(/ourcss|our|style|css\/|\.css/g, ""); //adapt to our different filenames
  if (style == "issuedada"){
    style+="style";
  }
  sessionStorage.setItem("currentstyle", style);//store the current style
};

/*change style and take care of particularities for each style*/
function changestyle(name) {

  /*for the bauhaus style, add decorations for the headers of the articles*/
  if (name == "issuetopolino.css"){
    $(".img1art1").attr('src', 'imgs/70/calcio.png');
    }
  /*otherwise remove it*/
  else{
    $(".img1art1").attr('src', 'imgs/70/clang.png');
  };
  /*setting the style of the page depending on the button clicked by the user*/
  document.getElementById('whichstyle').setAttribute("href", "css/"+name);
  };
