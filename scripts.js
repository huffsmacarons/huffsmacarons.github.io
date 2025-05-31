const FORECASTS = {
  images: [
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/1.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/2.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/3.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/4.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/5.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/6.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/7.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/8.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/9.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/10.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/11.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/12.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/13.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/14.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/15.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/16.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/17.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/18.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/19.png',
    'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/20.png',
        'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/23.png',
        'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/22.png',
        'https://raw.githubusercontent.com/huffsmacarons/huffsmacarons.github.io/refs/heads/main/21.png'
  ],
};

let shownIndices = [];

const getRandomIndex = () => Math.floor(Math.random() * FORECASTS.images.length);

const handleClick = () => {
  const forecastNode = document.querySelector('.forecast');
  if (!forecastNode) {
    return;
  }

  if (shownIndices.length === FORECASTS.images.length) {
    shownIndices = [];
  }

  let randomIndex = getRandomIndex();

  while (shownIndices.includes(randomIndex)) {
    randomIndex = getRandomIndex();
  }

  const imageUrl = FORECASTS.images[randomIndex];
  shownIndices.push(randomIndex);

  // Очистка предыдущего содержимого
  forecastNode.innerHTML = '';

  // Создаем изображение
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = "Forecast Image";

  // Добавляем стили для видимости
  img.style.maxWidth = '100%';
  img.style.height = 'auto';

  forecastNode.appendChild(img);
}

const button = document.querySelector('.button');

if (button) {
  button.addEventListener('click', handleClick);
}
