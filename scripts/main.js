(function(){
  'use strict';

  $(document).ready(function(){
    $('.section-category').hide(); //hide contents of list on page load
  });

  $('.section-heading').click(function() {
    $(this).addClass('active');
    // $('.section-heading').siblings('.section-categories').slideUp("slow", function(){});
    // $(this).next().slideDown("slow", function(){});
  });

})();
