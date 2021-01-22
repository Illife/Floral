$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	smartSpeed: 1000
  	// navText: ["<img src='img/la.png'>", "<img src='img/ra.png'>"],
  	
  });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
    loop: true,
    smartSpeed: 1000,
    dots: true
    // nav: true,
    // navText: ["<img src='img/la.png'>", "<img src='img/ra.png'>"],
    
});
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})


   
  
    
    
    
     
      
  