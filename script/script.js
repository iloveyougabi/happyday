

function typeWr(title, msg) {
  let both = [title, msg];
  
  let arrTitle = both[0].textContent.split('');
  let arrMsg = both[1].textContent.split('');

  console.log(arrTitle);
  console.log(msg);

  msg.textContent = '';
  title.textContent = '';


  arrTitle.forEach((element, i) => {
        setTimeout(() => title.textContent += element, 200 * i);
  });
  setTimeout( () => {
    arrMsg.forEach((element, i) => {
      setTimeout(() => msg.textContent += element, 65 * i);
    })
  },3500);
}

const feliz =  document.querySelector('.header-title');
const msg = document.querySelector('.header-subtitle');
typeWr(feliz, msg);