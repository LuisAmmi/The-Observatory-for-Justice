
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
      if (hrefValue == "css/issuebasic.css"){

            if (x.checked == true){
              document.getElementById(value).style.backgroundColor = "yellow";
             }
            else if (x.checked == false) {
              document.getElementById(value).style.backgroundColor = "transparent";
            }
      }
      else if (hrefValue == "css/issuedada.css"){

            if (x.checked == true){
              document.getElementById(value).style.backgroundColor = "#C0555F";
             }
            else if (x.checked == false) {
              document.getElementById(value).style.backgroundColor = "transparent";
            }
      }
      //(hrefValue == "css/issue70.css")
      else {
            if (x.checked == true){
             document.getElementById(value).style.border = 'red solid 0.5vh';
             }
            else if (x.checked == false) {
              document.getElementById(value).style.border = '0';
            }
      }
      $('#dadaicon').click(function(){
        document.getElementById(value).style.border = '0'; });
      $('#topolinoicon').click(function(){
        document.getElementById(value).style.backgroundColor = "transparent"; });

   }
 }
};

// FUNZIONE UNDERLINE MENTIONS
function underline(item, id){
  var hrefValueName = $(item).attr('href'); // es. #NickDavies
  var newValueName = hrefValueName.replace('#', '');  // #NickDavies --> NickDavies
  $('[id^='+newValueName+']').css("text-decoration", "underline solid 0.5vh #C0533E"); // also take id of items that appears more than once
  $('#'+id).css("display", "inline");   //show the eraser symbol for each underlined element
  //$('.fa-eraser').css("display", 'inline');
};
//FUNZIONE ERASE MENTIONS
function erase(item, id){
  var hrefValue = $(item).attr('href'); // es. #NickDavies
  var newValue = hrefValue.replace('#', '');  // #NickDavies --> NickDavies
  $('[id^='+newValue+']').css("text-decoration", "none"); // also take id of items that appears more than once
  $('#'+id).css("display", "none");   //show the eraser symbol for each underlined element
}
