
 var map1 = document.getElementById("map1");
 var mapdiv = document.getElementById("mapdiv");
 var before = document.getElementById("before");
 var next = document.getElementById("next");
 
 mapdiv.addEventListener("mouseover", function (e) {
   
     gsap.to("#map1", {
       y : -300
     });
     gsap.to("#map2", {
       y : -300
     });
     gsap.to("#map3", {
       y : -1000
     });
     gsap.to("#map4", {
       
       y : -250
       
     });
     gsap.to("#map5", {
       x : -600,
       y : -300
       
     });
     gsap.to("#map6", {
      
       y : -700
       
     });
    
 });
 
 next.addEventListener("mouseover", function (e) {
   
   gsap.to("#map1", {
     y : 300
   });
   gsap.to("#map2", {
     y : 300
   });
   gsap.to("#map3", {
     y : -200
   });
   gsap.to("#map4", {
     
     y : 300
   });
   gsap.to("#map5", {
     y : 300
   });
   gsap.to("#map6", {
      
     y : 0
     
   });
 
 });
 before.addEventListener("mouseover", function (e) {
   
   gsap.to("#map1", {
     y : 300
   });
   gsap.to("#map2", {
     y : 300
   });
   gsap.to("#map3", {
     y : -200
   });
   gsap.to("#map4", {
     
     y : 300
   });
   gsap.to("#map5", {
     y : 300
   });
   gsap.to("#map6", {
      
     y : 0
     
   });
 });