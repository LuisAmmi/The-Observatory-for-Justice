/* const videohomepage= document.getElementById('videohomepage');

videohomepage.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', function(){
  let posY = window.scrollY;
  if posY > 0{

  }
  else {

  }
})

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});


$(document).ready(function(){
  $("#videohomepage").mouseover(function(){
    $(this).click(function(){
      $(window).scrollY();
    });
  });
});

function scroll_to(id) {
  $('html,body').animate({
    scrollTop: $('#'+id).offset().top
  },'slow');
}
/*
jQuery Scroll to ID
*/
/* $(document).ready(function(){
  $('#specialedition').hover(function(){
    $(this).hide();
  }
}) */

/* Cambiare stile CSS nella homepage*/
$(document).ready(function(){
  $('#1970').click(function(){
    $('#stylepage').attr('href', '../The Observatory for Justice/css/my70issue.css');
  });
});
