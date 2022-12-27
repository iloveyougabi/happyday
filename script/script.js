

function typeWr(title, msg) {
  let both = [title, msg];
  
  let arrTitle = both[0].textContent.split('');
  let arrMsg = both[1].textContent.split('');

  console.log(arrTitle);
  console.log(arrMsg);

  msg.textContent = '';
  title.textContent = '';


  arrTitle.forEach((element, i) => {
        setTimeout(() => title.textContent += element, 200 * i);
  });
  setTimeout( () => {
    arrMsg.forEach((element, i) => {
      setTimeout(() => msg.textContent += element, 50 * i);
    })
  },4200);
}

const feliz =  document.querySelector('.header-title');
const msg = document.querySelector('.header-subtitle');
typeWr(feliz, msg); 



function coriShow() {
  const coBox = document.querySelector('div')

  var pixels = [
    'transparent', 'transparent', 'red', 'transparent', 'transparent', 'transparent', 'red', 'transparent', 'transparent', 'transparent',
    'transparent', 'red', 'red', 'red', 'transparent', 'red', 'red', 'red', 'transparent', 'red',
    'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
    'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',
    'transparent', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'transparent', 'red',
    'transparent', 'transparent', 'red', 'red', 'red', 'red', 'red', 'transparent', 'transparent', 'red',
    'transparent', 'transparent', 'transparent', 'red', 'red', 'red', 'transparent', 'transparent', 'transparent', 'red',
    'transparent', 'transparent', 'transparent', 'transparent', 'red', 'transparent', 'transparent', 'transparent', 'transparent', 'red'
  ];
  
  var canvas = document.getElementById('canvas');
  
  for (var i = 0; i < pixels.length; i++) {
    if ((i+1) % 10 == 0) {
      canvas.innerHTML += '<br>';
    } else {
      canvas.innerHTML += '<div class="pixel" style="background-color: ' + pixels[i] + ';"></div>';
    }
  }
  
  var elements = document.querySelectorAll('.pixel');
  
  function type(elementY) {
    setTimeout( () => {
      for(let i = 0; i < elementY.length; i++){
        setTimeout(() => elementY[i].classList.add('visible'), 50 * i);
      }
    },45000);
  
  }
  type(elements);
}

coriShow();

