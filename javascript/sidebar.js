
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
