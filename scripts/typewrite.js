var typed = $(".typed");

$(function() {
var strings = 'Full Stack Web, Software Engineer'
strings = $('.typed-items').data('typed-person') + ',' + strings;
strings = strings.split(',');

typed.typed({
  strings: strings,
  typeSpeed: 100,
  loop: true,
});
});