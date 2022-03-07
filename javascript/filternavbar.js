
//Funzione Highlight section
// "this" nasce dallo <span onlick="higlight(this)"></span> messo sul ex. <input type="checkbox" class="form-check-input" active="0" id="covel">
function highlightSection(x, name){
var dict = {
"covell": "MarkCovelscase",
"diaz": "reportonDiazPertini",
"bolzaneto": "BolzanetoDistrict",
"outside": "theoutsideworld",
"next": "whathappenednext"
};
var linkValue = document.getElementById('stylepage');
var hrefValue = $(linkValue).attr('href');
//  : "2-intro", : "2-badapples", : "2-evidencebased", : "updatesandcorrections2", : "references2", : "abstract3",  : "3-intro",  : "3-methods",  : "3-results", : "3-discussion", : "3-conclusions", : "authorandarticleinfo3", : "references3"
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
             document.getElementById(value).style.backgroundColor = "transparent";
             }
            else if (x.checked == false) {
              document.getElementById(value).style.border = '0';
            }
      }
   }
 }
};

//  var selectedSection = document.getElementById(value);
//  for ($("p") in selectedSection) {
//      $("p").css('background-image', 'url("../imgs/70/sfondo rosa.png")');
//  }

  //selectedSection.querySelectorAll('p').css('background-image', 'url("../imgs/70/sfondo rosa.png")'); //style.backgroundColor = "red"; //css('background-image', 'url("../imgs/70/sfondo rosa.png")');
//$('#' + value).css('background', '#fff url("imgs/70/sfondo verde.png"');
 //document.getElementById(value).css('background', '#fff url("../imgs/70/sfondo bianco.png"');
