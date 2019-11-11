var imageStorage = [];
var randomImages = [];
var clickCounter = 0;
var MAX_CLICK_COUNTER = 10;

function getRandomImageIndex() {
  return Math.floor(Math.random() * (imageStorage.length));
}

function select3ImagesAndRender() {
  randomImages = [];

  while (randomImages.length < 3) {
    var nextRandomValue = getRandomImageIndex();

    if (!randomImages.includes(nextRandomValue)) {
      randomImages.push(nextRandomValue);
    }
  }
}

var AllImages = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timesShown = 0; // hint hint ;). You may need to use this for your app ;)

  this.markClick = function () {
    this.timesClicked++;
  };

  this.render = function (domReference) {
    domReference.src = picture;
  };
  imageStorage.push(this);
};

var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');
// Invariants:
// randomGoats has 3 goats!

select3ImagesAndRender();


imageStorage[randomImages[0]].render(placeholder0);
imageStorage[randomImages[1]].render(placeholder1);
imageStorage[randomImages[2]].render(placeholder2);

var bag = new AllImages('bag', './images/bag.jpg');
var banana = new AllImages('banana', './images/banana.jpg');
var bathroom = new AllImages('bathroom', './images/bathroom.jpg');
var boots = new AllImages('boots', './images/boots.jpg');
var breakfast = new AllImages('breakfast', './images/breakfast.jpg');
var bubblegum = new AllImages('bubblegum', './images/bubblegum.jpg');
var chair = new AllImages('chair', './images/chair.jpg');
var cthulhu = new AllImages('cthulhu', './images/cthulhu.jpg');
var dogDuck = new AllImages('dog duck', './images/dog-duck.jpg');
var dragon = new AllImages('dragon', './images/dragon.jpg');
var pen = new AllImages('pen', './images/pen.jpg');
var petSweep = new AllImages('pet sweep', './images/pet-sweep.jpg');
var scissors = new AllImages('scissors', './images/scissors.jpg');
var shark = new AllImages('shark', './images/shark.jpg');
var sweep = new AllImages('sweep', './images/sweep.jpg');
var tauntaun = new AllImages('tauntaun', './images/tauntaun.jpg');
var unicorn = new AllImages('unicorn', './images/unicorn.jpg');
var usb = new AllImages('usb', './images/usb.jpg');
var waterCan = new AllImages('water can', './images/water-can.jpg');
var wineGlass = new AllImages('wine glass', './images/wine-glass.jpg');

function clickManager(event) {
  clickCounter++;
  if (clickCounter < MAX_CLICK_COUNTER) {
    var imageIndex;

    if (event.target.id === 'placeholder-0') {
      imageIndex = 0;
    } else if (event.target.id === 'placeholder-1') {
      imageIndex = 1;
    } else {
      imageIndex = 2;
    }
    var clickedImage = imageStorage[randomImages[imageIndex]];
    clickedImage.markClick();

    select3ImagesAndRender();
  } else {
    alert('game over');
  }
}



placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);
