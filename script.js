 jQuery(document).ready(function($){

 	$('.drop-search').click(function(){
 		$('ul.drop-down-search').slideToggle();

 	});

 	$('.mobile-menu span.bars').click(function(){
 		$('.mobile-menu ul').slideToggle();

 	});

 	
    $('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    autoplay: true,
    autoplayTimeout:6000,
    autoplaySpeed:2000,
    autoplayHoverPause:true,  
  });

    $('.testimonial-sl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        726:{
            items:2
        },
        1000:{
            items:2
        }
    },
    autoplay: false,
    autoplayTimeout:6000,
    autoplaySpeed:2000,
    autoplayHoverPause:true,  
  });

  $('.video-play-btn').magnificPopup({
      type:'video',
  });



  $('.project-filter li').on('click',function(){

    $('.project-filter li').removeClass('active');
    $(this).addClass('active');

    var slctr = $(this).attr('data-filter');

     $('.project-list').isotope({
        filter: slctr,
     });

  });
   
  $('.project-list').isotope();

  $('.counter').counterUp({
      delay:50,
      time:4000,
  });



});
