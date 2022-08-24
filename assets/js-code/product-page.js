// custom product slider function
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("slide-thumbnail");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
console.log(slideIndex);

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // slides[i].style.display = "inline";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlider", "");
}
slides[slideIndex-1].style.display = "block";
// slides[slideIndex-1].style.display = "inline";
dots[slideIndex-1].className += " activeSlider";
}


function productDes(evt, productDetails) {
  var i, productTabcontent, productTablinks;
  productTabcontent = document.getElementsByClassName("productTabcontent");
  for (i = 0; i < productTabcontent.length; i++) {
    productTabcontent[i].style.display = "none";
  }
  productTablinks = document.getElementsByClassName("productTablinks");
  for (i = 0; i < productTablinks.length; i++) {
    productTablinks[i].className = productTablinks[i].className.replace(" productActive", "");
  }
  document.getElementById(productDetails).style.display = "block";
  evt.currentTarget.className += " productActive";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("productDefaultOpen").click();


// increment and decrement button
$('.add').click(function () {
  if ($(this).prev().val() < 100) {
  $(this).prev().val(+$(this).prev().val() + 1);
}
});
$('.sub').click(function () {
  if ($(this).next().val() > 1) {
  if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
}
});


// product similar slider show
$('.similarproductShow').slick({
  dots: false,
  infinite: false,
  speed: 300,
  centerPadding: '60px',
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow: '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


const fastShipping = document.getElementById("fastShipping");
const showShipping = document.getElementById("showShipping");
const closeShipping = document.getElementById("closeShipping");

showShipping.addEventListener("click", ()=> {
  fastShipping.style.display = "block";
});

closeShipping.addEventListener("click", ()=> {
  fastShipping.style.display = "none";
});


const returnPolicy = document.getElementById("returnPolicy");
const showReturn = document.getElementById("showReturn");
const closeReturn = document.getElementById("closeReturn");

showReturn.addEventListener("click", ()=> {
  returnPolicy.style.display = "block";
});

closeReturn.addEventListener("click", ()=> {
  returnPolicy.style.display = "none";
});

const covid = document.getElementById("covid");
const showCovid = document.getElementById("showCovid");
const closeCovid = document.getElementById("closeCovid");

showCovid.addEventListener("click", ()=> {
  covid.style.display = "block";
});

closeCovid.addEventListener("click", ()=> {
  covid.style.display = "none";
});



