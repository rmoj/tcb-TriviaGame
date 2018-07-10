'use strict';

$(document).ready(function() {
  var timeLeft = 15;
  var countdown;

  function startClock() {
    clearInterval(countdown);
    countdown = setInterval(decrement, 1000);
  }
  function decrement() {
    if (timeLeft > 0) {
      timeLeft--;
      $('#clock').text(timeLeft);
    } else {
      reset();
    }
  }
  function reset() {
    clearInterval(countdown);
    timeLeft = 15;
  }

  $('#btnStart').on('click', function() {
    toggleView();
  });

  function toggleView() {
    $('.toggle').show();
    $('#btnStart').hide();
  }

  startClock();
});
