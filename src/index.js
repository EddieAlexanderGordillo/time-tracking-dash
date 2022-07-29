const initApp = async () => {
  const cardsInfo = await getCardsInfo();
  const menuButtons = document.querySelectorAll('menu button');
  menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      menuButtons.forEach((button) => button.classList.remove('button-active'));
      const cardTimeFrame = document.querySelector('.card__time-frame');
      cardTimeFrame.innerHTML = '';
      renderCards(cardsInfo, button.name);
      button.classList.toggle('button-active');
    });
  });
  renderCards(cardsInfo);
};
const getCardsInfo = async () => {
  const response = await fetch('data.json');
  return response.json();
};

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
  iconEllipsis.src = '/src/assets/images/icon-ellipsis.svg';
  cardEllipsis.appendChild(iconEllipsis);

  const cardTime = document.createElement('p');
  cardTime.className = 'card__time';
  cardTime.textContent = `${cardData.timeframes[frecuency].current}hrs`;

  const cardLastTime = document.createElement('p');
  cardLastTime.className = 'card__last-time';
  cardLastTime.textContent = `${cardData.timeframes[frecuency].textPrevious} - ${cardData.timeframes[frecuency].previous}hrs`;

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
              <img src="./assets/images/icon-ellipsis.svg" alt="" />
            </div>
            <p class="card__time">${dataCard.timeframes[frecuency].current}hrs</p>
            <p class="card__last-time">${dataCard.timeframes[frecuency].textPrevious} - ${dataCard.timeframes[frecuency].previous}hrs</p>
          </div>
        </div>
      `;
  const cardTimeFrame = document.querySelector('.card__time-frame');
  cardTimeFrame.insertAdjacentHTML('beforeend', cardTemplate);
};
const renderCards = (cardsInfo, frecuency = 'daily') => {
  for (var i = 0; i < cardsInfo.length; i++) {
    createcard(cardsInfo[i], frecuency);
  }
};
initApp();
