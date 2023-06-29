const button = document.querySelector('.animationButton');

function handleMouseMove(event) {
  const rect = button.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const rotateX = (mouseY / rect.height - 0.5) * -40; // Adjust rotation sensitivity
  const rotateY = (mouseX / rect.width - 0.5) * 40; // Adjust rotation sensitivity
  button.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

button.addEventListener('mousemove', handleMouseMove);
button.addEventListener('mouseleave', () => {
  button.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
});





// 
const lessonsItems = document.querySelectorAll('.lessons__item');

for (let i = 0; i < lessonsItems.length; i++) {
  lessonsItems[i].onclick = function (e) {
    if (e.target.tagName != 'I') {
      classRemove(lessonsItems[i]);
      lessonsItems[i].classList.toggle('_active');
      chengeHeight(lessonsItems[i]);
    }
  }
}
function classRemove(item) {
  for (let i = 0; i < lessonsItems.length; i++) {
    if (lessonsItems[i] != item) {
      lessonsItems[i].classList.remove('_active');
      chengeHeight(lessonsItems[i]);
    }
  }
}
function chengeHeight(item) {
  let itemVideo = item.querySelector('iframe');
  if (item.classList.contains('_active')) {
    itemVideo.style.opacity = '1';
    item.style.height = item.scrollHeight + "px";
  } else {
    itemVideo.style.opacity = '0';
    item.style.height = 50 + "px";
  }
}



// 
const flags = document.querySelectorAll('.fa-flag');
const progresSpan = document.querySelector('#progress');

if (localStorage.getItem('flagsNumber')) {
  flags[localStorage.getItem('flagsNumber')].classList.add('_marked');
  progresSpan.innerText = Math.floor((100 / flags.length) * localStorage.getItem('flagsNumber'));
}else{
  flags[0].classList.add('_marked');
}

for (let i = 0; i < flags.length; i++) {
  flags[i].onclick = function () {
    for (let i = 0; i < flags.length; i++) {
      flags[i].classList.remove('_marked');
    }
    flags[i].classList.add('_marked');
    progresSpan.innerText = Math.floor((100 / flags.length) * i);
    localStorage.setItem('flagsNumber', i);
  }
}




// 
// Select all the iframes on your page
const iframes = document.querySelectorAll('iframe');
const loadSpan = document.querySelector('.load-box span');
let body = document.querySelector('body');
// Counter to keep track of loaded iframes
let loadedCount = 0;

// Function to check if all iframes have loaded
function checkAllIframesLoaded() {
  if (loadedCount === iframes.length) {
    // All iframes have loaded, do something here
    setTimeout(() => {
      body.classList.remove('scroll_none');
    }, 1000);
  }
}

// Loop through each iframe and add an event listener for the 'load' event
iframes.forEach(iframe => {
  iframe.addEventListener('load', () => {
    // Increment the loaded count
    loadedCount++;
    loadMove()
    // Check if all iframes have loaded
    checkAllIframesLoaded();
  });

  function loadMove(){
    let procent = 100 / iframes.length * loadedCount;
    loadSpan.style.width = procent + '%';
  }
});
