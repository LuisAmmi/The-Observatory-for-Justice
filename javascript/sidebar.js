

  function highlightSection(){
    if (document.getElementById("covel").checked = true)
    {
      $('#MarkCovelscase').css({"background-color": "#fff"});
      $('article1').scrollTo('#MarkCovelscase');
    }
    else {
      $('#MarkCovelscase').css({"background-color": "none"});
    }
  }
