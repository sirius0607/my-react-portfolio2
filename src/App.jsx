import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faBars, faCheck, faDownload, faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import $ from 'jquery';

library.add(fab, faDownload, faCheck, faMobileAlt, faEnvelope, faMapMarkerAlt, faAngleUp, faBars);

function App() {

  useEffect(() => {
        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (
            window.location.pathname.replace(/^\//, "") ===
              this.pathname.replace(/^\//, "") &&
            window.location.hostname === this.hostname
          ) {
            var target = $(this.hash);
            target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
              $("html, body").animate(
                {
                  scrollTop: target.offset().top - 54
                },
                1000,
                "easeInOutExpo"
              );
              return false;
            }
          }
        });
    
        // Closes responsive menu when a scroll trigger link is clicked
        $(".js-scroll-trigger").click(function() {
          $(".navbar-collapse").collapse("hide");
        });
    
        // Activate scrollspy to add active class to navbar items on scroll
        $("body").scrollspy({
          target: "#mainNav",
          offset: 56
        });
    
        // Collapse Navbar
        var navbarCollapse = function() {
          if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
          } else {
            $("#mainNav").removeClass("navbar-shrink");
          }
        };
        // Collapse now if page is not at top
        navbarCollapse();
        // Collapse the navbar when page is scrolled
        $(window).scroll(navbarCollapse);
    
        // Scroll to top button appear
        $(document).scroll(function() {
          var scrollDistance = $(this).scrollTop();
          if (scrollDistance > 100) {
            $(".scroll-to-top").fadeIn();
          } else {
            $(".scroll-to-top").fadeOut();
          }
        });
  });

  return (
    <>
     <Home/>
    </>
  )
}

export default App
