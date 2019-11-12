(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $(".radio-list label").click(function(){
        	$(".radio-list label").removeClass("active");
        	$(this).addClass("active");
        });

      // $(".blog-list").owlCarousel({
      //       items: 2,
      //       autoplay: true,
      //       loop: true,
      //       nav: true,
      //       margin:30,
      //       navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      //   });

        $(".radio-list").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            nav: false,
            margin:0,
        });


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	