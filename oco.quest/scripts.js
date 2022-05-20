function pageOne() {
    location.href = "whatIsCarbon.html";
}
  
function pageTwo() {
    location.href = "whyShouldIBeWorried.html";
}
  
function pageThree() {
    location.href = "whatCanIDo.html";
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function toTop() {
  location.href = "index.html";
}

var sq1 = document.getElementById("sq1");
var sq2 = document.getElementById("sq2");
var sq4 = document.getElementById("sq4");

function counterRotate(x) {
    if(x==1){
      sq2.style.transitionDelay = ".1s"
      sq4.style.transitionDelay = ".1s"
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(-45deg) scale(.8)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(-45deg) scale(.8)";
    }
    if(x==2){
      sq1.style.transitionDelay = ".1s"
      sq4.style.transitionDelay = ".1s"
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(-45deg) scale(.8)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(-45deg) scale(.8)";
    }
    if(x==4){
      sq1.style.transitionDelay = ".1s"
      sq2.style.transitionDelay = ".1s"
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(-45deg) scale(.8)";
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(-45deg) scale(.8)";
    }
    
}

function unRotate(x) {
    if(x==1){
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(0deg) scale(1)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(0deg) scale(1)";
    }
    if(x==2){
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(0deg) scale(1)";
      sq4.style.transformOrigin = "center";
      sq4.style.transformBox = "auto-fill";
      sq4.style.transform = "rotate(0deg) scale(1)";
    }
    if(x==4){
      sq1.style.transformOrigin = "center";
      sq1.style.transformBox = "auto-fill";
      sq1.style.transform = "rotate(0deg) scale(1)";
      sq2.style.transformOrigin = "center";
      sq2.style.transformBox = "auto-fill";
      sq2.style.transform = "rotate(0deg) scale(1)";
    }
}

var rg3 = document.getElementById("rg3");

function gradBlur() {
    var x = document.documentElement.scrollTop;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "scroll";
}
// When the user clicks anywhere outside of the modal, close it
