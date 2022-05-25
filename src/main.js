import "./styles/main.scss"
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import prevArrow from './assets/images/prev.svg'
import nextArrow from './assets/images/next.svg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const header = $('header');

function headerScrolled() {
    if($(window).scrollTop() > 50) {
        header.addClass('scrolled')
    } else {
        header.removeClass('scrolled')
    }
}

$(document).ready(function(){
    headerScrolled()

    // ANYTHING ON SCROLL
    $(window).scroll(() => {
        // Add class to header and button inside
        headerScrolled()
    })

    // Slick Slider
    $('.carousel-slides').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<figure class="slick-prev slick-arrow"><img src="'+ prevArrow +'" alt="Previous"></figure>',
        nextArrow: '<figure class="slick-next slick-arrow"><img src="'+ nextArrow +'" alt="Next"></figure>',
        nav: false,

        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1
                }
              }
          ]
    });

    // GSAP

    // DevOps Solved
    let tl = gsap.timeline({
        scrollTrigger: {trigger: '#devops-solved', start: "10% bottom"}
      })
      
      tl.from("#devops-solved .container--small h2", { y: 20, opacity: 0, duration: 0.7})
        .from("#devops-solved .container--small p", { y: 20, opacity: 0, duration: 0.7}, "-=0.3")
        .from("#devops-solved .devops-benefits .devops-benefit", { y: 20, opacity: 0, duration: 1, stagger: 0.3}, "-=0.1")
      
      // About Us
      let tl1 = gsap.timeline({
        scrollTrigger: {trigger: '#about-us', start: "center bottom"}
      })
      
    //  tl1.to(".about-us_content-left figure", {xPercent: -100, ease:Power2.out, duration: 1.5})
        .from(".about-us_content-right h2", { y: 30, opacity: 0, duration: 1}, "-=1.3")
        .from(".about-us_content-right p", { y: 30, opacity: 0, duration: 1}, "-=1")
          
      // DevOps Standards
      let tl2 = gsap.timeline({
        scrollTrigger: {trigger: '#devops-standards', start: "10% bottom"}
      })
  
      tl2.from("#devops-standards .container--small h2", { y: 20, opacity: 0, duration: 0.7})
         .from("#devops-standards .container--small p", { y: 20, opacity: 0, duration: 0.7}, "-=0.3")
         .from("#devops-standards .container--small a", { y: 40, opacity: 0, duration: 0.7}, "-=0.5")
         .from("#devops-standards .slick-slider .slick-slide", { y: 20, opacity: 0, duration: 1, stagger: 0.25}, "-=0.5")
      
      // Learn More
      let tl3 = gsap.timeline({
        scrollTrigger: {trigger: '#learn__more', start: "30% bottom"}
      })
  
      tl3.from("#learn__more h2", {opacity: 0, duration: 0.7})
         .from("#learn__more p", {opacity: 0, duration: 0.7}, "-=0.3")
         .from("#learn__more a", {opacity: 0, duration: 0.7}, "-=0.3")

    // Change year in the footer dynamically
    $('.year').text(new Date().getFullYear());

});