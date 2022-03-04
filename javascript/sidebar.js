
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
            if ($(this).checked = true)
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
