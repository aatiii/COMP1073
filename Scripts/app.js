// app.js was created by Hailun Li for COMP1073 assignment 1, 
//  a mini portfolio web project. This file contains JavaScript
//  functions that replace texts on bio page.

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





