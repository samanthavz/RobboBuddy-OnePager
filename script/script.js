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