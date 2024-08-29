/*==================== js ================  */







/* ===================jq ===================*/
$(document).ready(function(){


// ex 4
AOS.init({
  offset: 100,
  delay: 50,
  duration: 500,
  easing: 'linear'

});
// ex 5
AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

//ex 6
var mixer = mixitup('#hellow', {
   
    animation: {
        duration: 300
    }
});

// ex 7

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })


});

 