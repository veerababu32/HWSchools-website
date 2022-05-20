let navbarRightSection = document.getElementById("navbarRight");
let barIcon = document.getElementById("barIcon");
let crossIcon = document.getElementById("crossIcon");

function hamburgerSection(){
    crossIcon.classList.toggle("disable");
    barIcon.classList.toggle("disable");
    navbarRightSection.classList.toggle("banner__navbar-right");
    navbarRightSection.classList.toggle("right-section");
}

$('select').change(function(){
    var text = $(this).find('option:selected').text()
    var $aux = $('<select/>').append($('<option/>').text(text))
    $(this).after($aux)
    $(this).width($aux.width())
    $aux.remove()
}).change()

$('.schools__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:true,
    speed:800,
    prevArrow: '<i class="bi bi-arrow-left-short schools__left-arrow"></i>',
    nextArrow: '<i class="bi bi-arrow-right-short schools__right-arrow"></i>',
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 1
          }
        }
      ]
});

$('.testimonial_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    speed:800,
    dots:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      }
    ]
});

let valueContainerOne = document.querySelector(".lorem-progress-bars__value-one");
let valueContainerTwo = document.querySelector(".lorem-progress-bars__value-two");
let valueContainerThree = document.querySelector(".lorem-progress-bars__value-three");

let progressValueOne = 0;
let progressValueTwo = 0;
let progressValueThree = 0;
let progressEndValueOne = valueContainerOne.textContent;
let progressEndValueTwo = valueContainerTwo.textContent;
let progressEndValueThree = valueContainerThree.textContent;
let speed = 20;

let progressOne = setInterval(() => {
    progressValueOne++;
    valueContainerOne.textContent = `${progressValueOne}%`;
    if (progressValueOne == progressEndValueOne){
        clearInterval(progressOne);
    }
}, speed);

let progressTwo = setInterval(() => {
    progressValueTwo++;
    valueContainerTwo.textContent = `${progressValueTwo}%`;
    if (progressValueTwo == progressEndValueTwo){
        clearInterval(progressTwo);
    }
}, speed);

let progressThree = setInterval(() => {
    progressValueThree++;
    valueContainerThree.textContent = `${progressValueThree}%`;
    if (progressValueThree == progressEndValueThree){
        clearInterval(progressThree);
    }
}, speed);