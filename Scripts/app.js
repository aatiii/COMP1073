"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function(){
   
  console.log("App Started..."); 
    
   var firstParagraph;
    
   firstParagraph = document.getElementById("firstParagraph");
   firstParagraph.innerHTML = "My New Paragraph Data";
})();