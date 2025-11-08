/* 
  script.js
  Hamburger menu function for Strike a Chord
  Author: Jordan Martinez
  Date: (today)
*/

// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
