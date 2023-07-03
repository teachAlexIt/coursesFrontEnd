window.scrollTo(0, 0);
if (performance.navigation.type === 1) {
  window.scrollTo(0, 0);
  window.location.hash = 'start';
  // history.replaceState({}, document.title, window.location.pathname + window.location.search);
}


const lessonsStore = [
  lessonsBlockOneStore = [
    {
      lessonsName: '№1.1 Знакомство с HTML',
      lessonsLinkVideo: 'https://www.youtube.com/embed/0-IkfGFdd20',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.1/f1.1.html'
    },
    {
      lessonsName: '№1.2 Новые теги',
      lessonsLinkVideo: 'https://www.youtube.com/embed/niJX2Xo2sTM',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.2/f1.2.html'
    },
    {
      lessonsName: '№1.3 Знакомство с CSS',
      lessonsLinkVideo: 'https://www.youtube.com/embed/YSnl9oLsXW8',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.3/f1.3.html'
    },
    {
      lessonsName: '№1.4 Секции',
      lessonsLinkVideo: 'https://www.youtube.com/embed/LkVUVprFl2I',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.4/f1.4.html'
    },
    {
      lessonsName: '№1.5 Фото-фон',
      lessonsLinkVideo: 'https://www.youtube.com/embed/DDtcV3QTVww',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.5/f1.5.html'
    },
    {
      lessonsName: '№1.6 Шрифты',
      lessonsLinkVideo: 'https://www.youtube.com/embed/5FyoPMWW5y8',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.6/f1.6.html'
    },
    {
      lessonsName: '№1.7 GitHub',
      lessonsLinkVideo: 'https://www.youtube.com/embed/sq_xrDK9c0E',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.7/f1.7.html'
    },
    {
      lessonsName: '№1.8 Многостраничность',
      lessonsLinkVideo: 'https://www.youtube.com/embed/GMAXIdvKRzQ',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.8/f1.8.html'
    },
  ],

  lessonsBlockTwoStore = [
    {
      lessonsName: 'Урок №2.1',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.2',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.3',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.4',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.5',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.6',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.7',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.8',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.9',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.10',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.11',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.12',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.13',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.14',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.15',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
    {
      lessonsName: 'Урок №2.16',
      lessonsLinkVideo: '',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/404.html'
    },
  ],
]


const lessonsListOneDiv = document.querySelector('.oneBlok .lessons__list');
const lessonsListTwoDiv = document.querySelector('.twoBlok .lessons__list');

render(lessonsListOneDiv, 0);
render(lessonsListTwoDiv, 1);

function render(lessonsList, numberStoreBlock) {
  for (let i = 0; i < lessonsStore[numberStoreBlock].length; i++) {
    let lessonsItemDiv = document.createElement('div');
    lessonsItemDiv.setAttribute('class', 'lessons__item');

    let lessonsNameDiv = document.createElement('div');
    lessonsNameDiv.setAttribute('class', 'lessons__name');

    let icon = document.createElement('i');
    let test = 'flag' + numberStoreBlock;
    icon.setAttribute('class', 'fa-solid fa-flag ' + test);

    let lessonsNameH3 = document.createElement('h3');
    lessonsNameH3.innerText = lessonsStore[numberStoreBlock][i].lessonsName;

    let lessonsVideoIframe = document.createElement('iframe');
    lessonsVideoIframe.setAttribute('allowfullscreen', 'true')
    lessonsVideoIframe.setAttribute('src', lessonsStore[numberStoreBlock][i].lessonsLinkVideo);
    lessonsVideoIframe.cookie = "cookieName=cookieValue; SameSite=Lax";

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