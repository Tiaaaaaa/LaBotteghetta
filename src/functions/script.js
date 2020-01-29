function init() {

  slideshow();

}

let md = new MobileDetect(navigator.userAgent)

if(md.mobile() != null) {

  document.getElementById('mobile').style.display = "block";

}

function show(id) {

  for (var i = 0; i <= 100; i++) {

    setTimeout( function() {

      document.getElementById(id).style.opacity = i;

    },2000);

  }
}

function hide(id) {


  for (var i = 100; i >= 0; i++) {

    setTimeout( function() {

      document.getElementById(id).style.opacity = i;

    },2000);

  }

}

var slideIndex = 1;
function slideshow() { setInterval(function() {

  slideIndex += 1;

  if (slideIndex === 8) { slideIndex = 1; }
  if (slideIndex === 0) { slideIndex = 7; }

  var container = document.getElementById('foto');
  var content = '<img src="../images/' + slideIndex + '.jpg" id="slideshow">'

  container.innerHTML = content;

}, 3000); }
