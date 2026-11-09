let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".referenssi1, .referenssi2, .referenssi3");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

function puhelinnavi() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function initAccordion() {
  var palvelut = document.querySelectorAll('.palvelu1, .palvelu2, .palvelu3, .palvelu4');

  palvelut.forEach(function(palvelu) {
    var otsikko = palvelu.querySelector('h2');
    if (otsikko) {
      otsikko.addEventListener('click', function() {
        if (window.innerWidth > 768) return; 

        var onAuki = palvelu.classList.contains('accordion-open');

        palvelut.forEach(function(p) {
          p.classList.remove('accordion-open');
        });

        if (!onAuki) {
          palvelu.classList.add('accordion-open');
        }
      });
    }
  });
}

initAccordion();