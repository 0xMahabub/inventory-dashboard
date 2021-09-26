/**
 * Javascript for functional UI
 * Author: Mahabub (mahabub72)
 */

// working elements
var usrBtn = document.getElementById('usr_btn');
var usrMenu = document.getElementById('usr_menu');
var sideBtn = document.getElementById('sideBtn');
var sdTxt = document.getElementsByClassName('sd-txt');
var navbar = document.getElementById('navbar');
var sideNav = document.getElementById('sidenav');
var clsNav = document.getElementById('closeNav');

// toggle usrMenu
usrBtn.addEventListener('click', function(){
    usrMenu.classList.toggle('hidden');
});
// disable on click other targets
// document.addEventListener('click', function(event) {
//     if (usrMenu !== event.target && !usrMenu.classList.contains('hidden')){
//         usrMenu.classList.add('hidden');
//     }
// });

// responsive sidenav menu
sideBtn.addEventListener('click', function(){
    sideNav.classList.toggle('hidden');
});
clsNav.addEventListener('click', function(){
    sideNav.classList.add('hidden');
});