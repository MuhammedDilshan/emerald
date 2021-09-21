$(document).ready(function(){
    var wow = new WOW(
        {
          boxClass:     'wow',      
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,       
          live:         true,       
          callback:     function(box) {
            
          },
          scrollContainer: null 
        }
      );
      wow.init();

    $('.slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed:1000,     
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplaySpeed:1000,
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
        }
    })
     
})

function showMenu(){
  $("body").addClass("active")
}
function hideMenu(){
  $("body").removeClass("active")
}