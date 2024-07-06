document.addEventListener ("DOMContentLoaded", function(){
    var mad = document.querySelectorAll (".plus");

    mad.forEach(function(plus) {
        plus.addEventListener("click", function() {
            var content = this.parentElement.nextElementSibling;
            content.classList.toggle('show');
            toggleMenuIcon(content,plus);

        });
    });

    function toggleMenuIcon(content, plus) {
        var isContentExpanded = content.classList.contains('show');
    
        if (isContentExpanded) {
          plus.innerText = "-"; 
        } else {
          plus.innerText = "+"; 
        }
      }
});

// opening and clocing menu
var menuOpenButton = document.getElementById("menuopen"); 
var navList = document.querySelector(".nav-list");
var center = document.querySelector(".center");
var menuIcon = document.querySelector(".menuicon");

function openMenu() {
  navList.style.opacity = "1";
  center.style.height = "50vh";
  menuIcon.innerHTML = '<path fill-rule="evenodd" d="M7.5 12.5L2 7l1.5-1.5 4 4 4-4L14 7l-5.5 5.5zM3 5h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>';
  menuOpenButton.removeEventListener("click", openMenu);
  menuOpenButton.addEventListener("click", closeMenu);
}

function closeMenu() {
  navList.style.opacity = "0";
  center.style.height = "0vh";
  menuIcon.innerHTML = '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>';
  menuOpenButton.removeEventListener("click", closeMenu);
  menuOpenButton.addEventListener("click", openMenu);
}

menuOpenButton.addEventListener("click", openMenu);

