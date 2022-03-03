


    $('#covel').click(function(){
          if ($(this).prop("checked") == true)
            {
              $('#MarkCovelscase').css({"background-color": "#fff"});
              $('#MarkCovelscase').scrollTop();
            }
          else if ($(this).prop("checked") == false)
           {
            $('#MarkCovelscase').css({"background-color": "transparent"});
           }
      });
