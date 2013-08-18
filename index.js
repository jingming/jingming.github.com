window.onload = function() {
  $('li').mouseover(function(event, element) {
    $(event.currentTarget).children('.caption').removeClass('hidden');
  });

  $('li').mouseout(function(event, element) {
    $(event.currentTarget).children('.caption').addClass('hidden');
  });
}