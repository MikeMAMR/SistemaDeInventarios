$('.botonF1').hover(function(){
    $('.btn').addClass('animacionVer');
  })
  $('.contenedor').mouseleave(function(){
    $('.btn').removeClass('animacionVer');
  })

  $('.carousel').carousel({
    interval: 2000
  })