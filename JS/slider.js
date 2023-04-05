//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.jl-current-slide');
var totalSlide = document.querySelector('.jl-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.jl-item-navigator a');
var navCounter = document.querySelector('.jl-navigator-counter span');

//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + 'px';
  var sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';

//Fazendo animaçao do Slider onClick

//HANDLERS

//Next Slider Animação
var nextSlideAnim = function () {
  var lastItem = sliderListWidth - containerWidth;

  if (-1 * sliderPos === lastItem) {
    return;
  }

  sliderPos -= containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
  });
};

//Prev Slider Animação
var prevSlideAnim = function () {
  if (sliderPos === 0) {
    return;
  }

  sliderPos += containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
  });
};

//Counter Formater
var counterFormatter = function (n) {
  if (n < 10) {
    return '0' + n;
  } else {
    return n;
  }
};

//Counter ADD

var counterAdd = function () {
  if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Counter Remove

var counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatter(currentCounter);
  }
};

//Set Active Nav

var setActiveNav = function () {
  for (var nv = 0; nv < navItems.length; nv++) {
    let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
    if (myNavNum === currentCounter) {
      navItems[nv].classList.add('jl-item-active');
      anime({
        targets: '.jl-item-active',
        width: 90,
      });
    }
  }
};

var changeActive = function () {
  for (var rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove('jl-item-active');
    anime({
      targets: navItems[rm],
      width: 20,
    });
  }

  setActiveNav();
};

//Actions
anime({
  targets: '.jl-item-active',
  width: 90,
});

totalSlide.innerHTML = counterFormatter(sliderTotalItems);

nextItem.addEventListener('click', function () {
  nextSlideAnim();
  counterAdd();
  changeActive();
});

prevItem.addEventListener('click', function () {
  prevSlideAnim();
  counterRemove();
  changeActive();
});
