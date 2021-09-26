/**
 * Javascript for functional UI
 * Author: Mahabub (mahabub72)
 */

// working elements
var usrBtn = document.getElementById('usr_btn');
var usrMenu = document.getElementById('usr_menu');

// toggle usrMenu
usrBtn.addEventListener('click', function(){
    usrMenu.classList.toggle('hidden');
});
// disable on click other targets
