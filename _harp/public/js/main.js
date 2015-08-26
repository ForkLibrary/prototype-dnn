$(document).ready(function() {
  'use strict';

  $(document).foundation({
    offcanvas: {
      open_method: 'overlap'
    }
  });

  // do something

  function getQuote(){
    location.href = $('#e_1 option:selected').val() + '#quote/' + $('#e_2').val();
    return false;
  }

  $('#saveForm').click(function () { getQuote(); });

  $('#e_2').keypress(function(a) {
    if (a.keyCode === 13) {
      getQuote();
    }
  });

  $('#e_2').focus(function(){
    $(this).removeClass('hint').val('');
  });

});
