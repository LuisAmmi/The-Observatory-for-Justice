
  function highlightSection("covel"){
    var firstsection = document.getElementById("covel");
    if (firstsection.checked = true)
    {
      $('#MarkCovelscase').css({"background-color": "#fff"});
      $('article1').scrollTo('#MarkCovelscase');
    }
    else {
      $('#MarkCovelscase').css({"background-color": "none"});
    }
  }

// QUELLA CHE FUNZIONA
  $('#covel').click(function(){
        if ($(this).prop("checked") == true)
          {
            $('#MarkCovelscase').css({"background-color": "#fff"});
            $('#article1').scrollTop();
          }
        else if ($(this).prop("checked") == false)
         {
          $('#MarkCovelscase').css({"background-color": "transparent"});
         }
    });
  // FINE

      $('#covel').click(function(){
            if ($(this).checked == true)
              {
                $('#MarkCovelscase').css({"background-color": "#fff"});
                $('#article1').scrollTop('');
              }
            else if($(this).prop("checked") == false)
             {
              $('#MarkCovelscase').css({"background-color": "transparent"});
             }
        });

  $('#covel').click(function(){
        const nodeList = document.querySelectorAll("#MarkCovelscase");
        for (let i = 0; i < nodeList.length; i++)
        if ($(this).prop("checked") == true)
          {
          nodeList[i].style.backgroundColor = "#fff";
          }
        else if ($(this).prop("checked") == false)
          {
            nodeList[i].style.backgroundColor = "transparent";
          }  $('#covel').click(function(){
                  const nodeList = document.querySelectorAll("#MarkCovelscase");
                  for (let i = 0; i < nodeList.length; i++)
                  if ($(this).prop("checked") == true)
                    {
                    nodeList[i].style.backgroundColor = "#fff";
                    }
                  else if ($(this).prop("checked") == false)
                    {
                      nodeList[i].style.backgroundColor = "transparent";
                    }
//
//  Funzione per vedere gli articoli singolarmente
$(document).ready(function(){
  $('#zoomin').click(function(){
      $("#article1").hover(function(){
      alert( "article1" );
        $(".col-4").switchClass("col-4", "col-12", '500');
        $('#article2', '#article3').css({
          "display": "none"
        });
    });
      $("#article2").hover(function(){
      alert( "article2" );
        $(".col-4").switchClass("col-4", "col-12", '500');
        $('#article1', '#article3').css({
          "display": "none"
        });
    });
      $("#article3").hover(function(){
      alert( "article3" );
        $(".col-4").switchClass("col-4", "col-12", '500');
        $('#article2', '#article1').css({
          "display": "none"
        });
    });
  });

  $('#zoomout').click(function(){
    $(".col-12").switchClass("col-12", "col-4", '500');
    $('#article2', '#article3', '#article1').css({
        "display": "inherit"
      });
    });
});
