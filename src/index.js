const cardsInfo = [
  {
    backgroundColor: 'hsl(16, 98%, 68%)',
    icon: '../src/assets/images/icon-work.svg',
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    backgroundColor: 'hsl(195, 74%, 62%)',
    icon: '../src/assets/images/icon-play.svg',
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    backgroundColor: 'hsl(348, 100%, 68%)',
    icon: '../src/assets/images/icon-study.svg',
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    backgroundColor: 'hsl(145, 58%, 55%)',
    icon: '../src/assets/images/icon-exercise.svg',
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    backgroundColor: 'hsl(264, 64%, 52%)',
    icon: '../src/assets/images/icon-social.svg',
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    backgroundColor: 'hsl(43, 84%, 65%)',
    icon: '../src/assets/images/icon-self-care.svg',
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

window.addEventListener('load', () => {
  const menuButtons = document.querySelectorAll('menu button');
  menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      menuButtons.forEach((button) => button.classList.remove('button-active'));
      const cardTimeFrame = document.querySelector('.card__time-frame');
      cardTimeFrame.innerHTML = '';
      renderCards(button.name);
      button.classList.toggle('button-active');
    });
  });
});
// Using DOM
const renderCard = (cardData, frecuency) => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardLogo = document.createElement('div');
  cardLogo.className = 'card__logo';
  cardLogo.style.backgroundColor = cardData.backgroundColor;

  const imagenCard = document.createElement('img');
  imagenCard.src = cardData.icon;
  cardLogo.appendChild(imagenCard);

  const cardInfo = document.createElement('div');
  cardInfo.className = 'card__info';

  const cardTittle = document.createElement('p');
  cardTittle.className = 'card__title';

  cardTittle.textContent = cardData.title;

  const cardEllipsis = document.createElement('div');
  cardEllipsis.className = 'card__ellipsis-icon';

  const iconEllipsis = document.createElement('img');
  iconEllipsis.src = '../src/assets/images/icon-ellipsis.svg';
  cardEllipsis.appendChild(iconEllipsis);

  const cardTime = document.createElement('p');
  cardTime.className = 'card__time';
  cardTime.textContent = `${cardData.timeframes[frecuency].current}hrs`;

  const cardLastTime = document.createElement('p');
  cardLastTime.className = 'card__last-time';
  cardLastTime.textContent = `Last ${frecuency} - ${cardData.timeframes[frecuency].previous}hrs`;

  const cardTimeFrame = document.querySelector('.card__time-frame');
  cardInfo.append(cardTittle, cardEllipsis, cardTime, cardLastTime);
  card.append(cardLogo, cardInfo);
  cardTimeFrame.appendChild(card);
};

// using template literals to create card html
const createcard = (dataCard, frecuency) => {
  const cardTemplate = `
        <div class="card">
          <div class="card__logo" style="background-color: ${dataCard.backgroundColor};">
            <img src="${dataCard.icon}" alt="" />
          </div>
          <div class="card__info">
            <p class="card__title">${dataCard.title}</p>
            <div class="card__ellipsis-icon">
              <img src="../src/assets/images/icon-ellipsis.svg" alt="" />
            </div>
            <p class="card__time">${dataCard.timeframes[frecuency].current}hrs</p>
            <p class="card__last-time">Last week - ${dataCard.timeframes[frecuency].previous}hrs</p>
          </div>
        </div>
      `;
  const cardTimeFrame = document.querySelector('.card__time-frame');
  cardTimeFrame.insertAdjacentHTML('beforeend', cardTemplate);
};
const renderCards = (frecuency = 'daily') => {
  for (var i = 0; i < cardsInfo.length; i++) {
    // renderCard(cardsInfo[i], frecuency);
    createcard(cardsInfo[i], frecuency);
  }
};
renderCards();
