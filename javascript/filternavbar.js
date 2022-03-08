
//Funzione Highlight section
// "this" nasce dallo <span onlick="higlight(this)"></span> messo sul ex. <input type="checkbox" class="form-check-input" active="0" id="covel">
function highlightSection(x, name){
var dict = {
"covell": "MarkCovelscase",
"diaz": "reportonDiazPertini",
"bolzaneto": "BolzanetoDistrict",
"outside": "theoutsideworld",
"next": "whathappenednext",
"intro": "2-intro",
"bad-apples": "2-badapples",
 "evidence-based": "2-evidencebased",
 "update-corrections": "updatesandcorrections2",
  "ref": "references2",
  "abstract": "abstract3",
  "introduction": "3-intro",
  "methods": "3-methods",
  "results": "3-results",
  "discussion": "3-discussion",
  "conclusion": "3-conclusions",
  "contact": "authorandarticleinfo3",
  "references": "references3"
};

var linkValue = document.getElementById('stylepage');
var hrefValue = $(linkValue).attr('href');
//cos'è this? l'elemento nel complesso? oppure l'id? per prendere solo l'id forse bisogna fare idthis = $this.getId...

for (key in dict) {  // "covell", "diaz", "bolzaneto", "outside", "next"
  if (key == name) {//ex. "covel"
    var value = dict[name]; //secondo il principio var value = dict[key] "MarkCovelscase", "reportonDiazPertini"...
      if ((hrefValue == "css/issuedada.css") || (hrefValue == "css/issuebasic.css")){

            if (x.checked == true){
              document.getElementById(value).style.backgroundColor = "red";
             }
            else if (x.checked == false) {
              document.getElementById(value).style.backgroundColor = "transparent";
            }
      }
      else if (hrefValue == "css/issue70.css"){

            if (x.checked == true){
             document.getElementById(value).style.border = 'red solid 0.5vh';
             }
            else if (x.checked == false) {
              document.getElementById(value).style.border = '0';
            }
      }
      $('#dadaicon').click(function(){
        alert('Before changing style, please deselect the checkboxs in the sidebar.')
        document.getElementById(value).style.border = '0'; });
      $('#topolinoicon').click(function(){
        alert('Before changing style, please deselect the checkboxs in the sidebar.')
        document.getElementById(value).style.backgroundColor = "transparent"; });
   }
 }
};


function myFunction(y) {
 var paragraph = document.getElementById(y);
  var top = paragraph.offsetTop;
  alert(top);
  $('#article1').animate({scrollTop: $(top).offset().top}, 800);
  $('#article1').scrollTop(top);
}


//  var selectedSection = document.getElementById(value);
//  for ($("p") in selectedSection) {
//      $("p").css('background-image', 'url("../imgs/70/sfondo rosa.png")');
//  }

  //selectedSection.querySelectorAll('p').css('background-image', 'url("../imgs/70/sfondo rosa.png")'); //style.backgroundColor = "red"; //css('background-image', 'url("../imgs/70/sfondo rosa.png")');
//$('#' + value).css('background', '#fff url("imgs/70/sfondo verde.png"');
 //document.getElementById(value).css('background', '#fff url("../imgs/70/sfondo bianco.png"');


// FUNZIONE UNDERLINE MENTIONS
function underline(item){
  //if (location.hash.length > 1){          // if there's something alredy underline ex. "The-Observatory-for-Justice/issuepopup.html#NickDavies"
  //  document.style.textDecoration = "none"; //delete the underline decoration
//  }
//  else {
//  alert(hashValue);
  var hrefValueName = $(item).attr('href'); // es. #NickDavies
  alert(hrefValueName);
  var newValueName = hrefValueName.replace('#', '');  // #NickDavies --> NickDavies
  alert(newValueName);
  $('[id^='+ newValueName +']').css("text-decoration", "solid underline red");
  alert($('[id^='+ newValueName +']'));
//  document.getElementById(newValueName).style.textDecoration = "solid underline red";
//  $('div[id^="list_"]')
};
