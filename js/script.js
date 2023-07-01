const flags = document.querySelectorAll('.fa-flag');
const progresSpan = document.querySelector('#progress');
const levelSpan = document.querySelector('#level');
const animationButtons = document.querySelectorAll('.animationButton');

function handleMouseMove(event) {
  const rect = event.target.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const rotateX = (mouseY / rect.height - 0.5) * -40; // Adjust rotation sensitivity
  const rotateY = (mouseX / rect.width - 0.5) * 40; // Adjust rotation sensitivity
  event.target.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

for (let b = 0; b < animationButtons.length; b++) {
  animationButtons[b].addEventListener('mousemove', handleMouseMove);
  animationButtons[b].addEventListener('mouseleave', (e) => {
    e.target.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
  });
}

const levelFinishButtons = document.querySelectorAll('.level-finish');
for (let f = 0; f < levelFinishButtons.length; f++) {
  levelFinishButtons[f].onclick = function () {
    let levelNumber = f + 1;
    let nextLevelClass = 'flag' + levelNumber;
    for (let x = 0; x < flags.length; x++) {
      flags[x].classList.remove('_marked');
      if (flags[x].classList.contains(nextLevelClass)) {
        flags[x].classList.add('_marked');
        localStorage.setItem('flagsNumber', x);
        break
      } else {
        localStorage.setItem('flagsNumber', 100);
      }
    }
    localStorage.setItem('progressNumber', 100);
    localStorage.setItem('levelNumber', levelNumber);

    progresSpan.innerText = 100;
    levelSpan.innerText = levelNumber;
  }
}





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


if (localStorage.getItem('flagsNumber')) {
  if (localStorage.getItem('flagsNumber') != 100) {
    flags[localStorage.getItem('flagsNumber')].classList.add('_marked');
    progresSpan.innerText = localStorage.getItem('progressNumber');
    levelSpan.innerText = localStorage.getItem('levelNumber');
  } else {
    for (let i = 0; i < flags.length; i++) {
      flags[i].classList.remove('_marked');
      progresSpan.innerText = localStorage.getItem('progressNumber');
      levelSpan.innerText = localStorage.getItem('levelNumber');
    }
  }
} else {
  flags[0].classList.add('_marked');
}

for (let i = 0; i < flags.length; i++) {
  flags[i].onclick = function () {
    for (let i = 0; i < flags.length; i++) {
      flags[i].classList.remove('_marked');
    }
    flags[i].classList.add('_marked');

    if (flags[i].classList.contains('flag0')) {
      let levelFlags = document.querySelectorAll('.flag0');
      let progressNumber = Math.floor((100 / (levelFlags.length)) * i);
      progresSpan.innerText = progressNumber;
      localStorage.setItem('flagsNumber', i);
      localStorage.setItem('progressNumber', progressNumber);
      localStorage.setItem('levelNumber', 1);

    } else if (flags[i].classList.contains('flag1')) {
      let levelFlags = document.querySelectorAll('.flag1');
      for (let y = 0; y < levelFlags.length; y++) {
        if (levelFlags[y].classList.contains('_marked')) {
          let progressNumber = Math.floor((100 / (levelFlags.length)) * y);
          progresSpan.innerText = progressNumber;
          localStorage.setItem('flagsNumber', i);
          localStorage.setItem('progressNumber', progressNumber);
          localStorage.setItem('levelNumber', 2);
        }
      }
    }

    progresSpan.innerText = localStorage.getItem('progressNumber');
    levelSpan.innerText = localStorage.getItem('levelNumber');


  }
}




// 
const iframes = document.querySelectorAll('iframe');
const loadSpan = document.querySelector('.load-box span');
let body = document.querySelector('body');
let loadedCount = 0;

function checkAllIframesLoaded() {
  if (loadedCount === iframes.length) {
    setTimeout(() => {
      body.classList.remove('scroll_none');
    }, 1000);
  }
}



iframes.forEach(iframe => {
  let iframeSRC = iframe.getAttribute('src');
  if (iframeSRC != '') {
    iframe.addEventListener('load', () => {
      loadedCount++;
      loadMove()
      checkAllIframesLoaded();
    });
  } else {
    loadedCount++;
    loadMove()
    checkAllIframesLoaded();
  }


  function loadMove() {
    let procent = 100 / iframes.length * loadedCount;
    loadSpan.style.width = procent + '%';
  }
});



