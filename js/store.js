const lessonsStore = [
  lessonsBlockOneStore = [
    {
      lessonsName: '№1 Знакомство с HTML',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.1/f1.1.html'
    },
    {
      lessonsName: '№2 Новые теги',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.2/f1.2.html'
    },
    {
      lessonsName: '№3 Знакомство с CSS',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.3/f1.3.html'
    },
    {
      lessonsName: '№4 Секции',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.4/f1.4.html'
    },
    {
      lessonsName: '№5 Фото-фон',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.5/f1.5.html'
    },
    {
      lessonsName: '№6 Шрифты',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.6/f1.6.html'
    },
    {
      lessonsName: '№7 GitHub',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.7/f1.7.html'
    },
    {
      lessonsName: '№8 Многостраничность',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.8/f1.8.html'
    },
  ],

  lessonsBlockTwoStore = [
    {
      lessonsName: 'Урок №1',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.1/f1.1.html'
    },
    {
      lessonsName: 'Урок №2',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.2/f1.2.html'
    },
    {
      lessonsName: 'Урок №3',
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.2/f1.2.html'
    },
  ],
]


const lessonsListOneDiv = document.querySelector('.oneBlok .lessons__list');
const lessonsListTwoDiv = document.querySelector('.twoBlok .lessons__list');

render(lessonsListOneDiv, 0);
render(lessonsListTwoDiv, 1);

function render(lessonsList, numberStoreBlock){
  console.log(lessonsStore[numberStoreBlock]);
  for (let i = 0; i < lessonsStore[numberStoreBlock].length; i++) {
    let lessonsItemDiv = document.createElement('div');
    lessonsItemDiv.setAttribute('class', 'lessons__item');
  
    let lessonsNameDiv = document.createElement('div');
    lessonsNameDiv.setAttribute('class', 'lessons__name');
  
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-flag');
  
    let lessonsNameH3 = document.createElement('h3');
    lessonsNameH3.innerText = lessonsStore[numberStoreBlock][i].lessonsName;
  
    let lessonsVideoIframe = document.createElement('iframe');
    lessonsVideoIframe.setAttribute('allowfullscreen', 'true')
    lessonsVideoIframe.setAttribute('src', lessonsStore[numberStoreBlock][i].lessonsLinkVideo);
  
    let lessonsSampleA = document.createElement('a');
    lessonsSampleA.setAttribute('class', '_sample');
    lessonsSampleA.setAttribute('target', '_blank');
    lessonsSampleA.setAttribute('href', lessonsStore[numberStoreBlock][i].lessonsLinkSample);
    lessonsSampleA.innerText = 'Образец';
  
    lessonsNameDiv.appendChild(icon);
    lessonsNameDiv.appendChild(lessonsNameH3);
    lessonsItemDiv.appendChild(lessonsNameDiv);
    lessonsItemDiv.appendChild(lessonsVideoIframe);
    lessonsItemDiv.appendChild(lessonsSampleA);
  
    lessonsList.appendChild(lessonsItemDiv);
  }
};