// app.js was created by Hailun Li for COMP1073 assignment 1, 
//  a mini portfolio web project. This file contains JavaScript
//  functions that replace texts on bio page.

"use strict";

// setup IIFE
(function () {
   
    if (document.getElementById("homepage") != null) {
        console.log("Home page");
    }   else if (document.getElementById("biopage") != null) {
        console.log("Bio page");
    }   else if (document.getElementById("contactpage") != null) {
        console.log("Contact page");
        // declare variables
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var comments = document.getElementById("comments")
        var contactSubmit = document.getElementById("contactSubmit");
        contactSubmit.pre 
        // output values to the console
        contactSubmit.addEventListener("click", function(event){
            event.preventDefault();
            console.log("Name: " + name.value);
            console.log("Email: " + email.value);
            console.log("Tel: " + phone.value);
            console.log("Messages: " + comments.value);
        }); // end of addEventListener function
    }   // end of contactpage else if
    
    // text replacement on bio page
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





