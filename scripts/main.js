(function(){
  'use strict';

  $(document).ready(function(){
    $('.section-category').hide(); //hide contents of list on page load
  });

  // $('.section-heading').click(function() {
  //   $(this).addClass('active');
  //   $(this).siblings('.section-categories').slideUp("slow", function(){});
  //   $(this).next().slideDown("slow", function(){});
  //    });


   $('.section-heading').click(function(){
     $(this).toggleClass('active');
    $(".section-categories").siblings(".section-categories").slideToggle(350,function(){});
    $(this).next().slideToggle(350,function(){});
  });

  // });


  // $(this).parent().next().slideToggle()
  //                 .siblings('.section-heading').slideUp();
  //          return false;

})();
