"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {




    console.log("Hailun Li's Portfolio");
    

    
    // declare an anoymous function with named alias
    var replaceFirstParagraph = function() {
        console.log("inside replaceFirstParagraph function");
        
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "blah blah blah";
    }
    
        // text on bio page
    var replaceBio = function() {
        console.log("inside replaceBio function");
        
        var bio;

        bio = document.getElementById("bio");
        bio.innerHTML = "about me blah blah blah";
    }
    
    // call the function
    replaceBio();    
    
    // call the replaceFirstParagraph function
    replaceFirstParagraph();
    
    
})();


(function () {
   
    // text on bio page
    var replaceBio = function() {
        console.log("inside replaceBio function");
        
        var bio;

        bio = document.getElementById("bio");
        bio.innerHTML = "about me blah blah blah";
    }
    
    // call the function
    replaceBio();    
    
})();


