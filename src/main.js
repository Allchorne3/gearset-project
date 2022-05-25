import "./styles/main.scss"

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

    // Change year in the footer dynamically
    $('.year').text(new Date().getFullYear());

});