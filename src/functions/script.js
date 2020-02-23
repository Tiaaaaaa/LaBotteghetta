function init() {

  slideshow();

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
