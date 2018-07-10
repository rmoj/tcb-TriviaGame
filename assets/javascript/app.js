'use strict';

$(document).ready(function() {
  $('#btnStart').on('click', function() {
    toggleView();
    console.log('clicked');
  });

  function toggleView() {
    $('.toggle').show();
    $('#btnStart').hide();
  }
});
