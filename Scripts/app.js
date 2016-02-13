"use strict";

// setup IIFE


(function () {
   
    
    var replaceBio = function() {
        // declare variable
        var bio;

        bio = document.getElementById("bio");
        bio.innerHTML = "I'm Hailun Li, an international student studying Web design and development. " +
        " This is my fourth year in Ontario, Canada. " +
        " I was previously studying Cognitive science and Computer science. I have some experience"+
        " with programming languages such as python, java, html, php, etc";
    }
    
    // execute the function
    replaceBio();    
    
})();





