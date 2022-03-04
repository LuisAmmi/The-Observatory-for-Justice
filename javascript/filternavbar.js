
//Funzione Highlight section
// "this" nasce dallo <span onlick="higlight()"></span> messo sul ex. <input type="checkbox" class="form-check-input" active="0" id="covel">
function highlightSection(x){
var dict = {
"covel": "MarkCovelscase",
"diaz": "reportonDiazPertini",
"bolzaneto": "BolzanetoDistrict",
"outside": "theoutsideworld",
"next": "whathappenednext"
};
//  : "2-intro", : "2-badapples", : "2-evidencebased", : "updatesandcorrections2", : "references2", : "abstract3",  : "3-intro",  : "3-methods",  : "3-results", : "3-discussion", : "3-conclusions", : "authorandarticleinfo3", : "references3"
//cos'è this? l'elemento nel complesso? oppure l'id? per prendere solo l'id forse bisogna fare idthis = $this.getId...

for (var key in dict) {  // "covel", "diaz", "bolzaneto", "outside", "next"
  if (key == x) {//ex. "covel"
    var value = dict[x]; //secondo il principio var value = dict[key] "MarkCovelscase", "reportonDiazPertini"...
  //  const selectedParagraph = document.querySelectorAll(value); //associa l'id del paragrafo ("value") al paragrafo, selezionato = tutto salvato in una variabile
      if (x.checked == true){
        alert("i found");
         document.getElementById(value).style.backgroundColor = "white";
       }
      else if (x.checked == false) {
        document.getElementById(value).style.backgroundColor = "transparent";
      }
  //      selectedParagraph.style.backgroundColor = "transparent";
  // do something with "key" and "value" variables
   }
 }
}
// fine funzione Highlight section
