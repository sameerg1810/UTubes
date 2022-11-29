// <!--menubutton animation-- >

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("mySidenav").classList.toggle("sidenav-open");
    document.getElementById("Mymenubar").classList.toggle("menubar-close");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function profile(event) {
    document.getElementById("mycenter").classList.toggle("show");
    event.stopPropagation();
}

function myMic(event) {
    document.getElementById("mic").classList.toggle("pulse-animation");

}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbutn')) {
        var dropdowns = document.getElementsByClassName("center");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
