var slideIndex = 0;
showSlides(slideIndex);

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}




