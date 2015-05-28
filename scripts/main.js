(function(){
  'use strict';

  $(document).ready(function(){
    $('.section-category').hide();
  });

  $(".section-heading").click(function() {
    $('.section-heading').siblings('.section-categories').slideUp("slow", function(){});
    $(this).next().slideDown("slow", function(){});
  });

})();
