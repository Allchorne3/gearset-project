import "./styles/main.scss"
import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel'

$(document).ready(function(){
  
    const header = $('header');

    // ANYTHING ON SCROLL
    $(window).scroll(() => {

        // Add class to header and button inside
        if($(window).scrollTop() > 50) {
            header.addClass('scrolled')
        } else {
            header.removeClass('scrolled')
        }

    })

    // Slick Slider
    $('.slick-slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    // Change year in the footer dynamically
    $('.year').text(new Date().getFullYear());

});