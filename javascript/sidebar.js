
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
