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
      lessonsLinkVideo: 'https://www.youtube.com/embed/2BBxEBNo45Q',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.1/f1.1.html'
    },
    {
      lessonsName: '№1.2 Новые теги',
      lessonsLinkVideo: 'https://www.youtube.com/embed/niJX2Xo2sTM',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.2/f1.2.html'
    },
    {
      lessonsName: '№1.3 Знакомство с CSS',
      lessonsLinkVideo: 'https://www.youtube.com/embed/345P4oJlnkU',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.3/f1.3.html'
    },
    {
      lessonsName: '№1.4 Секции',
      lessonsLinkVideo: 'https://www.youtube.com/embed/GTdZrzxMkKs',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.4/f1.4.html'
    },
    {
      lessonsName: '№1.5 Фото-фон',
      lessonsLinkVideo: 'https://www.youtube.com/embed/e4CV9qFDFnM',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.5/f1.5.html'
    },
    {
      lessonsName: '№1.6 Шрифты',
      lessonsLinkVideo: 'https://www.youtube.com/embed/_EUchkdlC-M',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.6/f1.6.html'
    },
    {
      lessonsName: '№1.7 GitHub',
      lessonsLinkVideo: 'https://teachalexit.github.io/foto/img/1.svg',
      lessonsLinkSample: 'https://teachalexit.github.io/manuals/frontend/f1.7/f1.7.html'
    },
    {
      lessonsName: '№1.8 Многостраничность',
      lessonsLinkVideo: 'https://teachalexit.github.io/foto/img/1.svg',
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