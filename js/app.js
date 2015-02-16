jQuery(document).ready(function($) {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
  playHadouken();
  $('.ryu-ready').hide();
  $('.ryu-throwing').show();
  $('.hadouken').finish().show()
  .animate(
    {'left': '300px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '-212px');
    }
  );
})
  .mouseup(function() {
    console.log('mouseup');
    //ryu back to ready position
    $('.ryu-throwing').hide();
    $('ryu-ready').show();
  })
});

jQuery(document).keydown(function(e){
    console.log(e+" button pressed")
    if(e.keyCode == 88){
        $('.ryu-ready').hide();
        $('.ryu-still').hide();
        $('.ryu-cool').show();
    }
});

jQuery(document).keyup(function(e){
    console.log(e+" button pressed")
    if(e.keyCode == 88){
        $('.ryu-still').show();
        $('.ryu-cool').hide();
    }
});

function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}