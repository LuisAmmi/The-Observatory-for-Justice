
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
          }
