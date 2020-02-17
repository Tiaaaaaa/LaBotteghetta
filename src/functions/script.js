function init() {

  slideshow();

}

let md = new MobileDetect(navigator.userAgent)

if(md.mobile() != null) {

  document.getElementById('mobile').style.display = "block";

}

console.log(md.mobile());

function show(id) {

  for (let i = 0; i <= 100; i++) {

    setTimeout( function() {

      document.getElementById(id).style.opacity = i;

    },2000);

  }
}

function hide(id) {


  for (let i = 100; i >= 0; i++) {

    setTimeout( function() {

      document.getElementById(id).style.opacity = i;

    },2000);

  }

}

let slideIndex = 1;
function slideshow() { setInterval(function() {

  slideIndex += 1;

  if (slideIndex === 8) { slideIndex = 1; }
  if (slideIndex === 0) { slideIndex = 7; }

  let container = document.getElementById('foto');
  let content = '<img src="../images/' + slideIndex + '.jpg" id="slideshow">'

  container.innerHTML = content;


}, 3000); }
