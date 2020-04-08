var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var img1 = document.getElementById("imgp1");
var img2 = document.getElementById("imgp2");
var img3 = document.getElementById("imgp3");
var img4 = document.getElementById("imgp4");

img1.addEventListener("mouseover", function() {
  img1.src = "images/heart-rate.gif";
});

img1.addEventListener("mouseout", function() {
  img1.src = "images/heart-rate.png";
});

img2.addEventListener("mouseover", function() {
  img2.src = "images/comment.gif";
});

img2.addEventListener("mouseout", function() {
  img2.src = "images/comment.png";
});

img3.addEventListener("mouseover", function() {
  img3.src = "images/light-bulb.gif";
});

img3.addEventListener("mouseout", function() {
  img3.src = "images/light-bulb.png";
});

img4.addEventListener("mouseover", function() {
  img4.src = "images/music.gif";
});

img4.addEventListener("mouseout", function() {
  img4.src = "images/music.png";
});


var bigimg = document.getElementById("bigimg");
var smallimg1 = document.getElementById("smallimg1");
var smallimg2 = document.getElementById("smallimg2");
var smallimg3 = document.getElementById("smallimg3");
var smallimg4 = document.getElementById("smallimg4");

smallimg1.addEventListener("click", function() {
  bigimg.src = "images/Schermafbeelding 2020-04-07 om 12.43.35.png";
});

smallimg2.addEventListener("click", function() {
  bigimg.src = "images/Schermafbeelding 2020-04-07 om 12.43.56.png";
});

smallimg3.addEventListener("click", function() {
  bigimg.src = "images/Schermafbeelding 2020-04-07 om 12.44.58.png";
});

smallimg4.addEventListener("click", function() {
  bigimg.src = "images/Schermafbeelding 2020-04-07 om 12.44.22.png";
});

