
$('.container-links1 a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 0
  }, 700);
});    


$('.link-top a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 0
  }, 700);
});    
